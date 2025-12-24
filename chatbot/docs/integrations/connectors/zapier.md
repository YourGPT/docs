# Zapier

> Automate YourGPT Chatbot events with Zapier and thousands of apps.

<Callout title="Zapier connects YourGPT with 5,000+ apps, allowing you to automate workflows without writing code." type="tip" />

## Before You Begin

Before starting the integration process, make sure you have:

- A YourGPT account: [Sign up here](https://app.yourgpt.ai/login)
- A Zapier account (free or paid)

## Integration Process

<ol className="space-y-8 my-8 list-decimal list-inside">

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Connect to Zapier</span>

<div className="ml-6 space-y-2">

- Log in to your [Zapier account](https://zapier.com/)
- Search for "**YourGPT Chatbot**" in the Zapier app directory
- Select and connect your "YourGPT Chatbot" to Zapier

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Set Up API Authentication</span>

<div className="ml-6 space-y-2">

- Head over to [YourGPT Dashboard](https://app.yourgpt.ai/login)
- Navigate to **Integrations ⇒ API Integration ⇒ Generate API key**
- Copy your API key for use in Zapier

<Callout title="Tip" type="tip">
  For detailed instructions on generating API keys, visit the [API Integration Guide](/chatbot/integrations/api-integration#generating-keys)
</Callout>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Create a Session</span>

<div className="ml-6 space-y-2">

- In your Zap, add a new action and select "YourGPT Chatbot"
- Choose **`"Create Session"`** as the action
- Provide the **`widget_uid`** in the action setup
- The `widget_uid` can be found in your **YourGPT Chatbot Integrations**

<div className="flex justify-center items-center  rounded-md p-4 mt-4">
  <Image 
    src="/assets/chatbot/zapier/widgetid-zapier-integration.png" 
    alt="Widget UID location in YourGPT" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

<Callout title="Tip" type="tip">
  The Create Session action initializes a conversation with your YourGPT chatbot and returns a `session_uid` that you'll need for sending messages.
</Callout>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Send a Message</span>

<div className="ml-6 space-y-2">

- Add another **"YourGPT Chatbot"** action to your Zap
- Select **"Send Message"** as the action
- Configure the following parameters:
  - `widget_uid`: The same ID used in the Create Session action
  - `message`: The text content you want to send
  - `session_uid`: Map this from the output of the Create Session action

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Test and Deploy</span>

<div className="ml-6 space-y-2">

- Test your Zap thoroughly to ensure all actions work correctly
- Once tested, you can turn on your Zap for production use
- Consider adding error handling for robustness

</div>
</li>

</ol>