# Make

> Connect YourGPT to Make (Integromat) to build visual automations with thousands of apps.

> **TIP:** ## Before You Begin
> 
> Before starting the integration process, make sure you have:
> 
> - A YourGPT account: [Sign up here](https://app.yourgpt.ai/login)
> - A Make.com account (free or paid)
> 
> ## Integration Process
> 
> <ol className="space-y-8 my-8 list-decimal list-inside">
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-lg md:text-xl">Connect to Make.com</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Log in to your [Make.com account](https://www.make.com/)
> - Search for "**YourGPT Chatbot**" in the Make app directory
> - Select and connect your "YourGPT Chatbot" to Make.com
> 
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-lg md:text-xl">Set Up API Authentication</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Head over to [YourGPT Dashboard](https://app.yourgpt.ai/login)
> - Navigate to **Integrations ⇒ API Integration ⇒ Generate API key**
> - Copy your API key for use in Make.com
> 
> <Callout title="Tip" type="tip">
>   For detailed instructions on generating API keys, visit the [API Integration Guide](/chatbot/integrations/api-integration#generating-keys)

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Create a Session</span>

<div className="ml-6 space-y-2">

- In your Scenario, add a new action and select "YourGPT Chatbot"
- Choose **`"Create Session"`** as the action
- Provide the **`widget_uid`** in the action setup
- The `widget_uid` can be found in your **YourGPT Integrations**

<div className="flex justify-center items-center  rounded-md p-4 mt-4">
  ![Widget UID location in YourGPT](/assets/chatbot/make/widgetid-make-integration.png)
</div>

> **TIP:** The Create Session action initializes a conversation with your YourGPT chatbot and returns a `session_uid` that you'll need for sending messages.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Send a Message</span>

<div className="ml-6 space-y-2">

- Add another **"YourGPT Chatbot"** action in your Scenario
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

- Test your Scenario thoroughly to ensure all actions work correctly
- Once tested, you can activate your Scenario for production use
- Consider adding error handling for robustness

</div>
</li>

</ol>