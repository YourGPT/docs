# Phone AI Integration 

> Learn how to integrate a no-code AI chatbot with your phone, step-by-step guide

<div className="mb-8">
  <iframe
    width="100%"
    height="auto"
    style={{ aspectRatio: '16/9' }}
    src="https://www.youtube.com/embed/Twgjr271GSk?si=IwX_vMmH9_tv9gyR"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

## What is the Phone AI Agent?

YourGPT's Phone AI Agent lets you answer phone calls using an AI-powered voice assistant. It can speak naturally, handle common queries, and even transfer the call to a human.

The agent is powered by a language model and connects through Twilio to receive and manage calls.

---

## Step 1: Connect Your Twilio Account

To start receiving calls, connect your Twilio account.

- Go to the **Settings** tab in the Phone AI Agent section.
- Fill in these details:
  - **Account SID** (from your Twilio dashboard)
  - **Auth Token**
  - **Phone Number** (including country code)
  - **Phone SID**
- Click **Enable** once all fields are filled.

<Callout title="Once connected, you'll see the phone number in green at the top of the Functions tab." type="success"/>

<Callout title="Need Help Finding These?" type="tip">
  You can find these values in your Twilio Console under the `Phone Numbers` and `Account Info` sections.

  <a href="/chatbot/integrations/social/twilio-voice" className="underline">Follow this guide to get Twilio Credentials</a>
</Callout>

---

## Step 2: Configure Your Voice Agent

Head over to the **Configuration** tab to set up how your agent behaves.

### Welcome Message
This is the first thing the agent will say when answering a call.

Example: 
```txt
Hi, this is YourGPT's virtual assistant. How can I help you today?
```

### Base Prompt
This is a crucial component that defines the tone, personality, and behavior of the Phone AI agent. It sets the foundation for how the AI agent will interact with callers. The base prompt should include:

1. The agent's role and purpose
2. Key information about your business or services
3. Guidelines for handling different types of inquiries
4. Instructions on when to transfer calls to a human operator

By creating a detailed and specific base prompt, you can ensure that your AI agent provides consistent, accurate, and helpful responses to callers.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="../../../../assets/chatbot/phone-ai/base-prompt.png" 
    alt="Phone AI Agent" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

### AI Model
Select from the available models.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="../../../../assets/chatbot/phone-ai/phone-ai-models.png" 
    alt="Phone AI Agent" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

### Advanced Settings
- **Speech Settings** – Choose Speech Model, Voice, Speech Instructions.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="../../../../assets/chatbot/phone-ai/tts-model.png" 
    alt="tts model settings" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

- **Transcription Settings** – Choose Transcription Model and transcription Instructions.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="../../../../assets/chatbot/phone-ai/transcription-settings.png" 
    alt="transcription model settings" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

---

## Step 3: Add Call Functions

Go to the **Functions** tab to define what the voice agent can do.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="../../../../assets/chatbot/phone-ai/phone-ai-functions.png" 
    alt="Phone AI Agent" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

## Try it out

<Callout type="warning" title="The phone AI agent is currently in beta.">
Join the [Beta Website](https://beta.yourgpt.ai) to try it out yourself and join our [Discord Community](https://discord.com/invite/z8PBs5ckcd) for feedback and support.
</Callout>