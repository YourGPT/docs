# Twilio Voice

> Learn how to integrate your AI Chatbot with Twilio Voice

<Callout title="Connecting Your AI Chatbot with Twilio Voice" type="tip" />

To set up Twilio Voice integration, follow these steps:

### Step 1: Obtain Twilio Credentials

- Log into your Twilio account.
- Go to the **Develop** tab to find your Account SID and Auth Token.

<div className="flex justify-center items-center rounded-md p-4">
  <img
    src="/assets/chatbot/Twilio-voice/Twilio-1.png"
    alt="Twilio Credentials"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

### Step 2: Get Phone Number SID

- Go to **View All Numbers**.
- Select your number, go to **Properties**, and copy your Phone Number SID.

### Step 3: Configure Integration

Add the following fields to configure the integration:

- **Account SID**: Your Twilio account SID.
- **AuthToken**: Your Twilio Auth Token.
- **Phone Number**: Your Twilio phone number.
- **Phone SID**: The SID of your Twilio voice number.
- **Assign Phone Agent**: Assign a phone agent to handle the calls.

<div className="flex justify-center items-center rounded-md p-4">
  <img
    src="/assets/chatbot/Twilio-voice/Twilio-2.png"
    alt="Integration Configuration"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

### Step 4: Set Webhook Endpoint

- Obtain your webhook endpoint.
- Add this webhook to your phone number in the Voice configuration:
  - Go to **Develop** → **View All Numbers** → Select your number → **Configure**.

<div className="flex justify-center items-center rounded-md p-4">
  <img
    src="/assets/chatbot/Twilio-voice/Twilio-3.png"
    alt="Webhook Configuration"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

<Callout title="You have now successfully enabled Twilio Voice integration." type="success" />