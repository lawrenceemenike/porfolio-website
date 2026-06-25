import json
import base64
import re
from google.adk.workflow import Workflow, node
from google.adk.events import RequestInput
from google.genai import Client
import config

# Initialize the Gemini client
# Automatically picks up GOOGLE_API_KEY or Vertex AI credentials from .env
client = Client()

@node(rerun_on_resume=True)
async def parse_event(ctx, node_input):
    """Extracts and parses expense JSON from the event."""
    # Handle ADK Message/Content objects, dicts, or strings
    if hasattr(node_input, "text"):
        raw_text = node_input.text
        try:
            event_dict = json.loads(raw_text)
        except Exception:
            event_dict = {"data": raw_text}
    elif isinstance(node_input, dict):
        event_dict = node_input
    elif isinstance(node_input, str):
        try:
            event_dict = json.loads(node_input)
        except Exception:
            event_dict = {"data": node_input}
    else:
        event_dict = {}

    data = event_dict.get("data", "")
    if isinstance(data, str) and data:
        try:
            # Try Base64 (Pub/Sub)
            decoded = base64.b64decode(data).decode('utf-8')
            expense = json.loads(decoded)
        except Exception:
            # Fallback to plain JSON string
            expense = json.loads(data)
    else:
        expense = data
    return expense

@node(rerun_on_resume=True)
async def security_checkpoint(ctx, node_input):
    """
    Scrubs PII and checks for prompt injection.
    """
    expense = node_input
    description = expense.get("description", "")
    redacted_categories = []
    
    # 1. PII Scrubbing
    # Scrub SSNs
    if re.search(r'\b\d{3}-\d{2}-\d{4}\b', description):
        description = re.sub(r'\b\d{3}-\d{2}-\d{4}\b', '[REDACTED SSN]', description)
        redacted_categories.append("SSN")
        
    # Scrub Credit Cards (Basic 13-16 digit matching)
    if re.search(r'\b(?:\d[ -]*?){13,16}\b', description):
        description = re.sub(r'\b(?:\d[ -]*?){13,16}\b', '[REDACTED CC]', description)
        redacted_categories.append("CREDIT_CARD")
        
    expense["description"] = description
    expense["redacted_categories"] = redacted_categories

    # 2. Prompt Injection Defense
    injection_keywords = ["ignore previous", "auto-approve", "bypass", "system prompt", "instruction"]
    is_injection = any(keyword in description.lower() for keyword in injection_keywords)
    
    if not hasattr(ctx, "state"):
        ctx.state = {}
    ctx.state["expense"] = expense
    
    if is_injection:
        ctx.state["security_flag"] = "PROMPT_INJECTION"
        # Yield RequestInput immediately, halting the workflow for human review
        yield RequestInput(
            message=f"SECURITY EVENT: Potential prompt injection detected in expense from {expense.get('submitter')}.\n"
                    f"Amount: ${expense.get('amount')}\n"
                    f"Review and type 'approve' or 'reject':"
        )
        return
    else:
        ctx.state["security_flag"] = "CLEAN"
        yield {"status": "CLEAN", "expense": expense}
        return

@node(rerun_on_resume=True)
async def assess_risk(ctx, node_input):
    """
    Applies the threshold rule:
    - Under threshold: Auto-approve.
    - Threshold+: Review with LLM and request human approval.
    """
    # If a security event triggered a RequestInput in the previous node,
    # node_input will be the human's response (e.g., "reject").
    # We must bypass the LLM and pass the decision to finalize.
    if ctx.state.get("security_flag") == "PROMPT_INJECTION":
        yield {"status": "HUMAN_DECIDED", "decision": node_input}
        return
        
    # Otherwise, node_input is the clean expense dictionary.
    expense = node_input.get("expense")
    amount = float(expense.get("amount", 0))
    
    if amount < config.THRESHOLD_AMOUNT:
        yield {"status": "AUTO_APPROVED", "expense": expense}
        return
        
    # Over threshold: Query LLM for risk factors
    prompt = (
        f"Review this expense report for risk factors: {json.dumps(expense)}. "
        "Keep the analysis brief and point out any anomalies."
    )
    
    response = client.models.generate_content(
        model=config.MODEL_NAME,
        contents=prompt
    )
    
    # Pause execution and ask human for a decision
    yield RequestInput(
        message=f"High Value Expense Alert: ${amount}\n\nRisk Analysis:\n{response.text}\n\nType 'approve' or 'reject':"
    )

@node(rerun_on_resume=True)
async def finalize(ctx, node_input):
    """Records the final outcome (auto-approved or human decided)."""
    # Grab the expense from context state since it was stashed by security_checkpoint
    expense = getattr(ctx, "state", {}).get("expense", {})
    
    if isinstance(node_input, dict):
        if node_input.get("status") == "AUTO_APPROVED":
            final_status = "AUTO_APPROVED"
        elif node_input.get("status") == "HUMAN_DECIDED":
            # From prompt injection bypass
            final_status = str(node_input.get("decision")).strip().upper()
        else:
            final_status = "UNKNOWN"
    else:
        # If it paused at assess_risk, node_input is the string human response
        final_status = str(node_input).strip().upper()
        
    # Record the outcome
    result = {
        "final_status": final_status,
        "amount": expense.get("amount"),
        "submitter": expense.get("submitter"),
        "redacted_categories": expense.get("redacted_categories", [])
    }
    
    if getattr(ctx, "state", {}).get("security_flag") == "PROMPT_INJECTION":
        result["security_event"] = True
        
    print(f"Expense Outcome Recorded: {result}")
    return result

# Wire the nodes together into a graph
root_agent = Workflow(
    name="expense_approval_workflow",
    edges=[
        ('START', parse_event, security_checkpoint, assess_risk, finalize)
    ]
)
