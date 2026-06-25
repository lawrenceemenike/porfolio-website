import json
import urllib.request

payload = {
    "amount": 150.0,
    "submitter": "alice@company.com",
    "category": "software",
    "description": "IDE License",
    "date": "2026-06-06"
}

# The agent expects event.get("data")
event_data = {"data": payload}

req_body = {
    "appName": "ambient_expense_agent",
    "userId": "admin",
    "sessionId": "expense-test-1",
    "newMessage": {
        "role": "user",
        "parts": [
            {"text": json.dumps(event_data)}
        ]
    }
}

try:
    # 1. Create session
    create_req = urllib.request.Request(
        "http://127.0.0.1:8080/apps/ambient_expense_agent/users/admin/sessions",
        data=json.dumps({"sessionId": "expense-test-1"}).encode('utf-8'),
        headers={"Content-Type": "application/json"}
    )
    urllib.request.urlopen(create_req)
except Exception as e:
    pass # Ignore if it already exists

req = urllib.request.Request(
    "http://127.0.0.1:8080/run",
    data=json.dumps(req_body).encode('utf-8'),
    headers={"Content-Type": "application/json"}
)

try:
    response = urllib.request.urlopen(req)
    result = json.loads(response.read().decode('utf-8'))
    print(json.dumps(result, indent=2))
except Exception as e:
    print("Error:", e)
    if hasattr(e, 'read'):
        print(e.read().decode('utf-8'))
