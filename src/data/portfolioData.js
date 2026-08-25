export const projectsData = [
  {
    id: 1,
    title: "Zero-Trust Agentic Pricing Engine",
    short_desc: "AI-driven pricing orchestration utilizing zero-trust principles for dynamic enterprise modeling.",
    tech_stack: ["LangGraph", "Llama 3.2", "XGBoost", "Microsoft Agent Governance"],
    github_link: "https://github.com/lawrenceemenike",
    youtube_link: "https://www.youtube.com/embed/PLACEHOLDER_ID",
    case_study: {
      executive_summary: "Deployed a local, multi-agent inference engine that replaces static pricing matrices with dynamic, mathematically constrained pricing orchestration.",
      business_problem: "Commercial teams lacked visibility into pricing anomalies across regions, resulting in margin erosion and slow reaction times to market shifts.",
      why_it_matters: "Pricing is the most direct lever for P&L impact. Automating this with deterministic guardrails protects margins while scaling operational throughput.",
      my_role: [
        { role: "AI Architect", action: "Designed the decoupled cognitive and mathematical execution layers." },
        { role: "Product Owner", action: "Defined the unit-economic constraints and managed the 90-day deployment sprint." }
      ],
      discovery_process: "Conducted stakeholder interviews with commercial directors to map existing manual pricing workflows and identify latency bottlenecks in their decision matrix.",
      solution_architecture: "Decoupled architecture: LangGraph orchestrates the reasoning agents (Llama 3.2), while XGBoost handles the deterministic mathematical execution and pricing output.",
      governance_security: "Engineered under strict Zero-Trust principles. Implemented robust prompt-injection defense layers, strict RBAC for human-in-the-loop approvals, and audit trails for every pricing inference.",
      commercial_intel_layer: "Signals collected include real-time competitor API feeds and internal inventory metrics. The reasoning process forecasts demand elasticity before generating a final, governable pricing output.",
      results: "Simulated outcomes demonstrate a 40% reduction in decision latency and a distinct protection of baseline margins through anomaly avoidance.",
      lessons_learned: "Non-deterministic models cannot be trusted with financial math. Decoupling the LLM's reasoning from the actual mathematical calculation is mandatory for enterprise safety."
    }
  },
  {
    id: 2,
    title: "NovaMart Multi-Agent Support & Policy Engine",
    short_desc: "Enterprise multi-agent customer support system leveraging Bedrock AgentCore, Strands SDK, and parallel RAG retrieval for automated policy resolution and transactional execution.",
    tech_stack: [
      "AWS Bedrock",
      "Strands SDK",
      "Claude 3 Sonnet",
      "DynamoDB",
      "AWS Knowledge Bases"
    ],
    github_link: "https://github.com/lawrenceemenike/Multi-Agent-E-Commerce-RAG",
    case_study: {
      executive_summary: "Engineered and deployed a production-grade multi-agent customer support orchestrator on AWS Bedrock AgentCore using the Strands SDK. By orchestrating five specialized AI agents and parallel RAG retrievers over DynamoDB and Bedrock Knowledge Bases, the system automates end-to-end e-commerce order lookups, policy enforcement, refund processing, and empathetic customer communication with zero human intervention.",
      business_problem: "E-commerce organizations face high support operational costs and high customer churn caused by slow ticket response times, fragmented customer data across legacy databases, and inconsistent policy enforcement during return/refund requests.",
      why_it_matters: "Scaling customer operations without inflating support headcount is a direct lever for operating margin expansion. Automating routine tier-1 queries and refund approvals while enforcing strict policy guardrails protects bottom-line margins and elevates Net Promoter Scores (NPS).",
      my_role: [
        {
          role: "AI Systems Architect",
          action: "Designed the 5-agent micro-orchestration graph using Strands SDK and AWS Bedrock AgentCore, enforcing state machine isolation and optimistic locking."
        },
        {
          role: "AI Engineer",
          action: "Provisioned the AWS infrastructure via CloudFormation, configured multi-domain Knowledge Base retrievers with ThreadPoolExecutor parallelism, and built 100% X-Ray/CloudWatch observability pipelines."
        }
      ],
      discovery_process: "Audited typical e-commerce support tickets and identified that 80%+ of resolution delay stemmed from agents manually searching isolated policy PDFs (Returns, Shipping, Warranty) and cross-referencing customer tier data across disparate database tables.",
      solution_architecture: "A hierarchical multi-agent state machine led by an OrchestratorAgent (Claude 3 Haiku) managing state in DynamoDB. Tasks route dynamically to specialized domain agents: InventoryAgent (order/customer lookups), PolicyAgent (coordinating 3 parallel policy retrievers via ThreadPoolExecutor), RefundAgent (tier-aware refund eligibility and DynamoDB write), and CommunicationAgent (generating empathetic final responses).",
      governance_security: "Implemented AWS Bedrock Guardrails (Version 1) enforcing strict Content Filtering, PII Redaction, Topic Deny-lists, and Profanity Guarding. Secured state management via optimistic locking (version field) on DynamoDB WorkflowState and isolated CloudFormation stack permissions.",
      commercial_intel_layer: "Real-time ticket telemetry and resolution states are tracked in DynamoDB and logged to CloudWatch with 100% X-Ray tracing sampling. This produces granular analytical visibility into refund velocity, policy inquiry frequency, and customer tier fulfillment performance.",
      results: "Achieved a 100% perfect score (120/120 pts) across automated multi-agent orchestration, guardrail compliance, memory management, and tracing suites. Successfully automated tier-differentiated refund execution (30-day standard vs 60-day premium) and sub-second parallel policy retrieval across 3 distinct Knowledge Bases.",
      lessons_learned: "Single monolithic LLM prompts crumble under complex enterprise workflows. Decoupling customer service into discrete, hyper-specialized sub-agents running parallel retrieval threads dramatically increases resolution accuracy, eliminates state corruption, and delivers predictable, audit-ready AI execution."
    }
  },
  {
    id: 3,
    title: "Agentic Security & Governance Runtime Engine",
    short_desc: "Sub-5ms deterministic runtime control plane enforcing zero-trust boundaries, Ed25519 PKI, Atlas Merkle-DAG ledgers, and EU AI Act compliance for multi-agent LLM loops.",
    tech_stack: [
      "Python",
      "LangGraph",
      "Ed25519 PKI",
      "Merkle-DAG",
      "OpenTelemetry",
      "PostgreSQL"
    ],
    github_link: "https://github.com/lawrenceemenike/Agentic-Security-and-Governance-Runtime-Engine",
    case_study: {
      executive_summary: "Architected and built agentic-gov, a sub-5ms deterministic runtime control plane and zero-trust cryptographic boundary for multi-agent LLM execution loops. The system wraps agent trajectories with real-time boundary enforcement, causal Merkle-DAG ledgers (Atlas engine), state-bound human checkpoints (Themis engine), and automated EU AI Act Annex IV regulatory documentation generation.",
      business_problem: "Enterprise multi-agent deployments face severe regulatory liability (EU AI Act, GDPR, SEC disclosures) and security risks (prompt injection, unauthorized tool execution, PII leakage). Static compliance policies remain completely disconnected from real-time agent tool calls, memory mutations, and inter-agent message passing.",
      why_it_matters: "Bridges the Governance-Execution Gap by decoupling agent decision velocity from corporate liability. Establishing cryptographically signed, legally defensible execution traces shifts liability from unmonitored probabilistic LLMs to provable, policy-bounded software controls while preventing statutory non-compliance penalties.",
      my_role: [
        {
          role: "AI Security Architect",
          action: "Designed the 5-layer runtime governance stack, Ed25519 zero-trust identity layer, and Themis state-bound human checkpoint engine."
        },
        {
          role: "AI Systems Engineer",
          action: "Implemented sub-5ms interception pipeline, Atlas Merkle-DAG causal ledger with RFC 8785 JCS canonicalization, and automated Annex IV audit exporters."
        }
      ],
      discovery_process: "Identified that first-generation AI guardrails relying on secondary cloud LLM API calls fail due to probabilistic vulnerability, excessive latency (200-1500ms), and data exfiltration risks. Proved that runtime AI governance must be local, deterministic, and zero-cloud.",
      solution_architecture: "A 5-Layer Governance Control Plane: Layer 1 Data Governance (GDPR Art 6/9/17 gates, crypto-shredding), Layer 2 Model Governance (3-tier ingress firewall, model hash commitments), Layer 3 System Integration (Ed25519 PKI, tool gates, circuit breakers), Layer 4 Continuous Monitoring (Stateful Trust Engine, PSI drift interceptor, egress DLP), Layer 5 Audit Evidence (Atlas Merkle-DAG, Themis human checkpoints, RFC 3161 timestamping).",
      governance_security: "Enforced Ed25519 cryptographic signatures on all inter-agent envelopes, anti-replay sliding nonces (<1ms verification), pre-compiled regex & semantic prompt injection filters (<2ms p95), regex/SpaCy PII redaction, and anti-rubber-stamping dwell time triggers (<3000ms).",
      commercial_intel_layer: "Provides continuous observability via OpenTelemetry GenAI semantic conventions and async PostgreSQL sinks. Generates machine-readable JSON audit packages and regulatory Markdown dossiers for statutory compliance (EU AI Act Annex IV, ISO 42001, NIST AI RMF).",
      results: "Delivered a high-assurance governance engine operating with sub-5ms total hot-path overhead (<2.0ms regex, <1.0ms Ed25519, <0.5ms async queue). Guaranteed 100% non-repudiable causal lineage and offline EU AI Act compliance packaging in under 5.0s.",
      lessons_learned: "Probabilistic LLM guardrails are fundamentally insufficient for enterprise runtime safety. Governance must be executed deterministically at the system level via cryptographic proofs, local state machines, and immutable Merkle-DAG ledgers."
    }
  },
  {
    id: 4,
    title: "Enterprise AI Support Agent (Bedrock AgentCore & MCP)",
    short_desc: "Production customer support agent utilizing Bedrock AgentCore, Model Context Protocol (MCP), sandboxed Code Interpreter, and dual-strategy long-term memory.",
    tech_stack: [
      "AWS Bedrock",
      "AgentCore SDK",
      "Model Context Protocol (MCP)",
      "AWS Lambda",
      "API Gateway",
      "Code Interpreter"
    ],
    github_link: "https://github.com/lawrenceemenike/AI-Support-Agent-AgentCore-",
    case_study: {
      executive_summary: "Engineered and deployed a containerized enterprise AI support agent on Amazon Bedrock AgentCore using the Strands SDK. By integrating Model Context Protocol (MCP) via AgentCore Gateway, sandboxed Code Interpreter execution, RAG knowledge bases, and dual-strategy long-term memory (Semantic Fact Extraction & Preferences), the agent automates complex multi-tier order tracking, returns, loyalty calculations, and browser navigation.",
      business_problem: "Enterprise customer service channels suffer from high operational latency and financial inaccuracy caused by monolithic prompt bloat, LLM arithmetic hallucinations on multi-tier loyalty discounts, and fragmented cross-session user context across support calls.",
      why_it_matters: "Decoupling API integrations via MCP and executing financial calculations inside a sandboxed Python runtime guarantees 100% mathematical precision while enabling cross-session personalization. This reduces average handle time (AHT) and eliminates costly billing/discount errors.",
      my_role: [
        {
          role: "AI Platform Architect",
          action: "Designed the AgentCore Gateway MCP integration, ARM64 CodeBuild container deployment pipeline, and IAM security policies."
        },
        {
          role: "AI Systems Engineer",
          action: "Implemented dual-strategy long-term memory (LTM), OpenAPI target schemas for API Gateway/Lambda targets, and sandboxed Code Interpreter tool execution."
        }
      ],
      discovery_process: "Audited traditional RAG and agent setups, discovering that LLMs hallucinate complex multi-tier financial calculations (e.g., 10% Gold tier + 4,000 points redemption). Proved that arithmetic logic must be executed inside a sandboxed code interpreter while API integrations require strongly-typed MCP schemas.",
      solution_architecture: "A containerized Python runtime on ARM64 deployed to Bedrock AgentCore. Features an MCP AgentCore Gateway interfacing with REST API Gateway (order-tracker) and AWS Lambda (refund-processor), an S3-backed Bedrock Knowledge Base, a sandboxed Code Interpreter for deterministic discount math, a headless browser tool, and AgentCore Memory (customer_facts and customer_preferences).",
      governance_security: "Configured fine-grained IAM execution roles with restricted data-plane access, sandboxed Python Code Interpreter execution boundaries, structured OpenAPI target overrides, and SSE streaming transport security via AgentCore Gateway.",
      commercial_intel_layer: "Extracts and persists customer preferences and facts into AgentCore Long-Term Memory across disparate session IDs. Produces structured execution logs and order state tracking to provide support leads with actionable customer behavior telemetry.",
      results: "Successfully deployed and verified across 6 live cloud runtime test scenarios, demonstrating sub-second MCP order lookups, instant refund approvals (REF-L8OIRM1O), 100% accurate loyalty discount calculations ($150 order to $95 final total), and 35-second async LTM fact extraction across cross-session interactions.",
      lessons_learned: "Never trust LLM probabilistic generation for financial calculations or direct API payload creation. Decoupling backend integration via MCP standards and delegating arithmetic to sandboxed execution environments is critical for enterprise reliability."
    }
  },
  {
    id: 5,
    title: "Multi-Agent Consensus & Cost-Optimized Research System",
    short_desc: "Production multi-agent research framework combining an autonomous consensus loop with native OWASP security governance and an economic model router.",
    tech_stack: [
      "Python",
      "CrewAI",
      "FastAPI",
      "Ollama",
      "PostgreSQL",
      "SearxNG"
    ],
    github_link: "https://github.com/lawrenceemenike/Multi-Agent-Research-System",
    case_study: {
      executive_summary: "Engineered a production-grade multi-agent research intelligence system integrating an autonomous consensus loop with a specialized Enterprise Middleware Suite. Featuring a native Agentic Governance Engine (3-tier OWASP ASI prompt injection firewall) and a Cost Optimization Router, the platform balances sub-5ms security interception, 100% local cost savings for routine processing, and rigorous LLM-as-a-Judge fact verification.",
      business_problem: "Enterprise research workflows suffer from high frontier API costs (GPT-4o), prompt injection vulnerability during web scraping (ASI-03/ASI-05), and hallucinations in automated report generation when using single-pass LLMs.",
      why_it_matters: "Decoupling security interception and dynamic cost routing protects corporate IP, eliminates unnecessary API spend, and delivers verified, hallucination-free intelligence reports suitable for executive decision-making.",
      my_role: [
        {
          role: "AI Middleware Architect",
          action: "Designed the Enterprise Middleware Suite containing the 3-tier Defense-in-Depth Governance Engine and the Cost Optimization Router."
        },
        {
          role: "AI Systems Engineer",
          action: "Implemented the multi-agent consensus loop (Researcher, Air-Gapped Writer, Fact-Checker), SearxNG scraping integration, and async PostgreSQL audit persistence."
        }
      ],
      discovery_process: "Discovered that 80%+ of research queries do not require expensive frontier models and can be handled locally via Ollama/Mistral, while web scraping exposes agents to indirect prompt injections in untrusted HTML tags.",
      solution_architecture: "A FastAPI research pipeline protected by AgenticGovernanceEngine (Layer 1 Regex <5ms, Layer 2 Cosine Similarity ~20ms, Layer 3 Gemma 2B Judge) and CostOptimizationRouter (routing tokens <8,000 to local Ollama and >8,000 or high-reasoning tasks to GPT-4o). Governs a CrewAI consensus loop where Researcher scrapes SearxNG, Air-Gapped Writer drafts in <untrusted_context>, and Fact-Checker verifies claims.",
      governance_security: "Mapped OWASP ASI-01 through ASI-07: pre-compiled regex blocklist (<5ms), vector cosine similarity thresholding (>=0.85 via MiniLM), local Gemma 2B circuit breaker (2.0s timeout), PII/API key output sanitization, and <untrusted_context> XML context isolation.",
      commercial_intel_layer: "Generates structured GovernanceDecisionReceipt and RoutingDecisionReceipt Pydantic audit logs persisted via async SQLAlchemy to PostgreSQL, providing complete traceability for compliance and cost auditing.",
      results: "Delivered 100% cost savings on standard research tasks by routing to local inference engines, sub-5ms security threat interception, and verified zero-hallucination report outputs across automated test suites (16/16 passed in 0.31s).",
      lessons_learned: "Single-pass LLMs cannot be trusted for deep research. Multi-agent consensus loops paired with deterministic security interceptors and cost routers are mandatory for cost-effective enterprise AI operations."
    }
  },
  {
    id: 6,
    title: "Enterprise Cost-Optimized Model Router & Economic Engine",
    short_desc: "High-throughput model routing engine optimizing LLM inference costs by dynamically balancing local edge SLMs and frontier API endpoints.",
    tech_stack: [
      "Python",
      "FastAPI",
      "Ollama",
      "vLLM",
      "OpenAI API",
      "Pydantic"
    ],
    github_link: "https://github.com/lawrenceemenike/Cost-Optimized-Model-Router",
    case_study: {
      executive_summary: "Engineered an intelligent economic model router that dynamically evaluates LLM prompt complexity, context window size, and reasoning depth to route inference requests between local open-weight SLMs (Ollama/vLLM) and frontier cloud models (GPT-4o/Claude 3.5 Sonnet). The engine achieves up to 85% cost reduction across high-volume enterprise workloads with zero latency degradation for simple tasks.",
      business_problem: "Uncontrolled frontier API token costs and inefficient model selection erode unit economics in enterprise AI applications. Routing basic classification, extraction, or low-complexity prompts to expensive $30+/M-token models wastes capital without improving response accuracy.",
      why_it_matters: "Optimizing model routing at the infrastructure layer establishes predictable LLM unit economics and protects operational gross margins. Automating tier selection enables organizations to scale request volume 10x within static API budget constraints.",
      my_role: [
        {
          role: "AI Infrastructure Architect",
          action: "Designed the dynamic routing heuristics, token estimation algorithms, and fallback circuit breaker policies."
        },
        {
          role: "Systems Engineer",
          action: "Implemented the zero-dependency token estimator, Pydantic audit receipt generation, and async vLLM/Ollama integration."
        }
      ],
      discovery_process: "Audited production LLM logs and discovered that over 70% of user queries were low-complexity tasks (formatting, simple classification, short summaries) that could be solved with identical accuracy by local 7B/8B models at zero incremental token cost.",
      solution_architecture: "A high-performance FastAPI routing gateway evaluating incoming payloads through a 3-stage pipeline: zero-latency token estimation (word count x 1.3 heuristic), task intent classification (simple vs. high-reasoning/consensus), and context length evaluation (<8k tokens -> Local SLM, >=8k or complex reasoning -> Frontier API).",
      governance_security: "Includes fail-closed circuit breakers for local model daemons, request rate-limiting, and structured Pydantic audit receipts (RoutingDecisionReceipt) recording model selection rationale, token counts, and cost savings for full financial auditing.",
      commercial_intel_layer: "Tracks real-time inference cost savings, model usage distributions, and latency metrics. Emits telemetry data to facilitate monthly cloud financial management (FinOps) and API allocation audits.",
      results: "Delivered up to 85% overall reduction in LLM inference spend across benchmark workloads, routing 75%+ of incoming traffic to local zero-cost SLMs while maintaining 100% SLA compliance for high-complexity queries.",
      lessons_learned: "One-size-fits-all model deployment is economically unsustainable. Granular, automated economic routing at the gateway level is essential for scaling enterprise LLM infrastructure."
    }
  },
  // Automatically generate the 8 placeholders for the 4x4 grid
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 7,
    title: "Next Terminal Compiling...",
    short_desc: "Architectural blueprint in progress. System deployment scheduled.",
    tech_stack: ["Awaiting Stack"],
    isPlaceholder: true
  })),
  {
    id: 15,
    title: "AccessBridge: Zero-Trust Community Resource Navigator",
    short_desc: "A deterministic, multi-agent decision support engine connecting underserved communities to localized grants and skills training without AI hallucination.",
    tech_stack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "React (Vite)",
      "Model Context Protocol (MCP)",
      "Local LLMs (Ollama)"
    ],
    github_link: "https://github.com/lawrenceemenike/AccessBridge",
    youtube_link: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    screenshots_link: "https://github.com/lawrenceemenike/AccessBridge/tree/main/diagrams",
    case_study: {
      executive_summary: "Engineered a state-machine driven multi-agent system designed to safely intake highly unstructured, localized user profiles and output deterministic, verified community Action Plans. The system eliminates hallucination by strictly querying local Model Context Protocol (MCP) registries.",
      business_problem: "Vulnerable communities fail to access public services due to bureaucratic fragmentation and language barriers (such as Nigerian Pidgin). Existing off-the-shelf chatbots hallucinate eligibility criteria and recklessly ingest sensitive Personal Identifiable Information (PII) into the cloud.",
      why_it_matters: "By ensuring 100% data provenance and strict PII protection, this architecture is highly deployable for NGOs, state governments, and social enterprises looking to democratize capital access without assuming regulatory or PR risk.",
      my_role: [
        {
          role: "AI Systems Architect",
          action: "Designed the decoupled multi-agent LangGraph topology and the rigorous Zero-Trust security layers."
        },
        {
          role: "Full-Stack Engineer",
          action: "Built the interactive React Canvas UI featuring dynamic observability tracing and Last-Mile PDF/WhatsApp export tooling."
        }
      ],
      discovery_process: "Discovered through community research that target users often abandon public service applications due to confusing interfaces, overly formal language requirements, and a lack of clear, step-by-step guidance.",
      solution_architecture: "A cyclical LangGraph orchestrator governing five decoupled agents (Intake, Clarification, Discovery, Eligibility, Action Plan). The system uses implicit localization to translate dialects to strict JSON schemas, cross-referencing a localized mock registry.",
      governance_security: "Zero-Trust architecture implemented via a 'PolicyInterceptorGate' that actively parses incoming payloads to mask or block PII (NINs, Phone Numbers, Medical Records) with a hard exception before it ever touches the LLM context window.",
      commercial_intel_layer: "Aggregated user intake data and generated action plans provide caseworkers and NGO directors with measurable insights into regional resource demands, allowing them to track which grants and training programs are most heavily requested.",
      results: "Successfully deployed a local, offline-capable prototype that translates regional dialects into structured schemas while maintaining 100% data deterministic safety via MCP.",
      lessons_learned: "Standard conversational LLMs cannot be trusted with high-stakes public sector routing. Deterministic state machines (LangGraph) coupled with Zero-Trust API interceptors are non-negotiable requirements for safely deploying AI in the real world."
    }
  },
  {
    id: 16,
    title: "Customer Lifetime Value Predictor",
    short_desc: "Agentic MLOps forecasting engine combining structured telemetry with local LLM evaluation to eliminate corporate financial planning blind spots.",
    tech_stack: [
      "Python",
      "LangGraph",
      "Ollama",
      "Gemma 12B",
      "XGBoost",
      "MLflow",
      "ChromaDB"
    ],
    github_link: "https://github.com/lawrenceemenike/Agentic-CLV-Engine",
    screenshots_link: "https://github.com/lawrenceemenike/Agentic-CLV-Engine/tree/main/screenshots",
    case_study: {
      executive_summary: "Architected and deployed a stateful multi-agent LangGraph engine that dynamically calculates forward-looking Customer Lifetime Value (CLV). By integrating a local Gemma 12B LLM via Ollama for unstructured qualitative reasoning alongside a deterministic XGBoost quantitative baseline, the system successfully bounds non-deterministic LLM output within strict financial mathematical constraints.",
      business_problem: "Enterprise B2B organizations suffer from 'Silent Churn', where Financial Planning & Analysis (FP&A) teams rely on lagging historical metrics. By the time utilization drops register on the general ledger, the account is already unrecoverable, causing severe cash-flow forecasting variance and bloated Customer Acquisition Costs (CAC).",
      why_it_matters: "Accurate, real-time CLV forecasting directly dictates capital allocation efficiency. By shifting from reactive to predictive churn modeling, the organization can dynamically enforce CAC ceilings and deploy targeted Customer Success interventions, defending product margins and protecting the recurring revenue multiples critical to corporate valuation.",
      my_role: [
        {
          role: "AI Product Manager",
          action: "Authored the core product requirements encompassing four main Epics: Epic 1 (Multimodal Data Ingestion & Feature Engineering), Epic 2 (Agentic Cognitive Graph Orchestrator), Epic 3 (Security & Governance Pipeline), and Epic 4 (Observability & Continuous Evaluation). Defined the user stories for quantitative telemetry limits, unstructured RAG staging, and dynamic CAC constraints."
        },
        {
          role: "AI Architect",
          action: "Designed a decoupled multi-agent topology combining a statistical Quant Node (XGBoost) and a cognitive Context Node (Ollama/Gemma 12B). Architected the strict Security & Governance layer integrating NER/Regex PII masking, a deterministic mathematical clipping gate, a Human-In-The-Loop (HITL) pause queue for >30% Tier-1 financial shifts, and a cryptographic SHA-256 audit ledger."
        },
        {
          role: "AI Engineer",
          action: "Implemented the local Ollama/Gemma integration, configured the HuggingFace/ChromaDB RAG vector space, built the custom regex/NER text pre-processing pipelines, and wired the MLflow evaluation tracing."
        }
      ],
      discovery_process: "A deep-dive audit of historical subscription records and raw CRM text logs uncovered a hidden but highly predictive pattern: an early correlation between feature utility decay, isolated support ticket spikes, and eventual revenue contraction. The data proved that qualitative account executive notes often signaled churn months before quantitative telemetry did.",
      solution_architecture: "A highly decoupled LangGraph state machine workflow: the 'Quant Node' initially processes structured telemetry (tenure, fee, user ratio) through an XGBoost regression model to establish a Baseline CLV. The state then routes to the 'Context Node', which utilizes ChromaDB RAG retrieval and a local Gemma 12B instance to generate a qualitative risk score (0.0 - 1.0). The final 'Orchestrator Node' mathematically synthesizes these variables, adjusting the baseline valuation downwards if severe churn sentiment is detected.",
      governance_security: "To achieve production readiness, a rigorous 'security_governance.py' module intercepts the final LangGraph state. Raw CRM ingestion is sanitized by a Regex/SpaCy NER pipeline that strips emails, phone numbers, and redacts [PERSON]/[ORG] entities to prevent PII leakage. Post-inference, a deterministic mathematical clipping layer applies hard floors, and a Human-In-The-Loop (HITL) gate automatically pauses execution and queues the payload if a Tier-1 account experiences a valuation shift >30%. Finally, all payloads generate a SHA-256 cryptographic audit trail aligned with the NIST AI RMF.",
      commercial_intel_layer: "Real-time product telemetry signals (like feature utilization rates) and unstructured CRM logs are continuously synthesized by the graph orchestrator. This produces a unified, human-readable Account Vulnerability Score and computes a live 'Dynamic CAC Limit', instantly telling the commercial team exactly how much capital is safe to deploy to save the account.",
      results: "The engine demonstrated immediate clarity over traditional FP&A forecasts. For 'Vanguard Logistics', the quantitative baseline predicted a $76,650 CLV. However, the Context Node flagged a severe risk score of 0.75 due to a resigned technical champion and integration stalls. The cognitive graph overrode the baseline, compressing the forward CLV to $49,822 and violently restricting the Dynamic CAC Cap to $7,473 to prevent cash burn. Conversely, for 'Apex Financial Corp', the orchestrator validated a healthy risk score of 0.1, boosting the CLV to $215,942 with a $32,391 CAC Cap. This proves the system's ability to stabilize ledger forecasting variance using real-time qualitative context.",
      lessons_learned: "Non-deterministic LLM models cannot be blindly trusted to execute raw financial calculations. By forcefully decoupling the math from the language generation—and embedding a cryptographic SHA-256 audit trail alongside SHAP explainability matrices directly into the pipeline's MLflow artifacts—we transformed an unpredictable AI experiment into a hardened, boardroom-ready financial engine."
    }
  }
];

export const lxwrvnxData = [
  {
    id: 1,
    title: "Street Photography",
    slug: "street-photography",
    desc: "High-contrast urban structural captures. Framing shadow, geometry, and the unfiltered truth of real-world environment layers.",
    mediaType: "Photo Matrix",
  },
  {
    id: 2,
    title: "Visual Philosophy / Art",
    slug: "visual-art",
    desc: "Custom Diffusion architectures and fine-tuned latent spaces engineered to visualize complex, minimalist metaphysical concepts.",
    mediaType: "Generative Canvas",
  },
  {
    id: 3,
    title: "Generative Music",
    slug: "audio-synthesis",
    desc: "Multi-stem electronic composition and rhythmic mathematical synthesis exploring dark ambient soundscapes.",
    mediaType: "Audio Workspace",
  }
];

export const journeyData = [
  { year: "2025 - PRESENT", role: "AI Strategist & Architect", company: "Nelc Digital" },
  { year: "2024 - 2025", role: "AI Engineer", company: "Omdena" },
  { year: "2022 - 2024", role: "Cognitive Experience Analyst", company: "Ricoh Europe Plc" },
  { year: "2018 - 2022", role: "Commercial Analyst", company: "Ricoh Europe Plc" },
  { year: "2020 - 2021", role: "Co-Founder", company: "Botbank.io" },
  { year: "2018", role: "Business Improvement & Monitoring Officer", company: "London Borough of Tower Hamlets" },
  { year: "2018", role: "Data Analyst", company: "S2M Ltd" },
  { year: "2017", role: "Principal Consultant", company: "Nextzon Business Services" },
  { year: "2016", role: "SA to CEO (Strategic Planning & Cost Control)", company: "Enikkom Construction Limited" },
  { year: "2009 - 2013", role: "Commercial Banking Officer", company: "Access Bank Plc" }
];

export const portfolioData = {
  header: {
    name: "Lawrence Emenike",
    headline: "Chief AI Officer | AI Architect & Engineer | Builder",
    subtext: "Building for commercial intelligence and deploying deterministic AI systems across enterprise sectors."
  },
  socials: {
    email: "clen.emenike@gmail.com",
    linkedin: "https://linkedin.com/in/emeniken",
    github: "https://github.com/lawrenceemenike"
  },

  focus: {
    title: "Commercial Intelligence",
    description: "My thesis centers on bridging the gap between traditional corporate strategy and modern AI orchestration. I build deterministic, high-trust AI systems that prioritize measurable business outcomes, moving beyond prototyping into enterprise-grade deployment."
  },

  blog: [
    {
      title: "The Architecture of Commercial Intelligence",
      date: "Oct 2023",
      link: "#"
    },
    {
      title: "Deploying Deterministic AI in Enterprise",
      date: "Sep 2023",
      link: "#"
    },
    {
      title: "Generative Art: A Data Engineer's Perspective",
      date: "Aug 2023",
      link: "#"
    },
    {
      title: "Why Zero-Trust Agentic Systems Win",
      date: "Jul 2023",
      link: "#"
    },
    {
      title: "From Corporate Banking to AI Architect",
      date: "Jun 2023",
      link: "#"
    }
  ]
};

export const audioData = {
  title: "Generative Music",
  subtitle: "AUDIO SYNTHESIS // NEURAL SOUNDSCAPES",
  philosophy: "Music is applied mathematics. In this workspace, I explore the intersection of deterministic sequencing and non-deterministic audio generation. By orchestrating algorithmic synthesis and neural models, I produce dark ambient soundscapes and rhythmic structures—bypassing traditional instrumentation to sculpt sound directly from logic.",
  tracks: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Latent Frequency 0${i + 1}`,
    duration: "03:45", // Placeholder
    tech: "Diffusion + Logic Pro",
    coverSrc: "", // For future public/lxwrvnx/music/cover-xx.jpg
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/PLACEHOLDER&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false" // Standard SoundCloud minimal iframe format
  }))
};

export const articlesData = [
  {
    id: 1,
    date: "OCT 12, 2026",
    category: "AI STRATEGY",
    title: "The Economics of Generative AI in Enterprise Environments",
    link: "https://medium.com/@lawrenceemenike"
  },
  // Automatically generate 5 more placeholders
  ...Array.from({ length: 5 }, (_, i) => ({
    id: i + 2,
    date: "TBD",
    category: "SYSTEM ARCHITECTURE",
    title: "Compiling Executive Memo...",
    link: "https://medium.com/@lawrenceemenike"
  }))
];
