# n8n

> Use n8n to trigger and connect YourGPT Chatbot with other services in your workflows.

<Callout title="n8n is a powerful workflow automation tool that allows you to connect YourGPT with hundreds of other applications and services." type="tip" />

## Before You Begin

Before starting the integration process, make sure you have:

- A YourGPT account: [Sign up here](https://app.yourgpt.ai/login)
- An **API Key** generated from the **YourGPT Dashboard > API Integration**
- A **Widget UID** from your YourGPT bot
- Access to an n8n instance (local or cloud)

## Integration Process

<ol className="space-y-8 my-8 list-decimal list-inside">

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Install the Community Node</span>

<div className="ml-6 space-y-2">

- Open your local or cloud **n8n instance**
- Go to the **Community Nodes** panel from the sidebar
- Search for **n8n-nodes-yourgpt**
- Click **Install**

<div className="flex justify-center items-center rounded-md p-4 mt-4">
  <Image 
    src="../../../../assets/chatbot/n8n/install.png" 
    alt="Installing YourGPT community node" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

<Callout title="This will add the YourGPT node to your available workflow nodes." type="tip"/>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Set Up API Authentication</span>

<div className="ml-6 space-y-2">

- Head over to [YourGPT Dashboard](https://app.yourgpt.ai/login)
- Navigate to **Integrations ⇒ API Integration ⇒ Generate API key**
- Copy your API key for use in n8n

<Callout title="Note" type="tip">
  For detailed instructions on generating API keys, visit the [API Integration Guide](/chatbot/integrations/api-integration#generating-keys)
</Callout>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Create a New Workflow</span>

<div className="ml-6 space-y-2">

- Go to **Workflows** > **New Workflow**
- Click on the **+ (plus)** icon to add a new node
- Search for **YourGPT**, then click **"Add to Workflow"**

<div className="flex justify-center items-center  rounded-md p-4 mt-4">
  <Image 
    src="../../../../assets/chatbot/n8n/ygc-chatbot.png" 
    alt="YourGPT node in n8n" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

<div className="flex justify-center items-center  rounded-md p-4 mt-4">
  <Image 
    src="../../../../assets/chatbot/n8n/create-new.png" 
    alt="Creating a new workflow" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Set Up Authentication</span>

<div className="ml-6 space-y-2">

- On the **YourGPT node**, click the **credentials dropdown**
- Select **"Create new credential"**
- Add your **YourGPT API Key** and save the credentials

<div className="flex justify-center items-center rounded-md p-4 mt-4">
  <Image 
    src="../../../../assets/chatbot/n8n/Create-credential.png" 
    alt="Creating new credentials" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Create a Session</span>

<div className="ml-6 space-y-2">

- Choose **`"Create Session"`** as the action
- Provide the **`widget_uid`** in the action setup
- The `widget_uid` can be found in your **YourGPT Chatbot Integrations**
- Click **Execute Node**

<div className="flex justify-center items-center  rounded-md p-4 mt-4">
  <Image 
    src="../../../../assets/chatbot/n8n/session-create.png" 
    alt="Creating a session" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

<Callout title="Note" type="tip">
  You'll receive a response with a `session_uid` that you'll need for the next step.
</Callout>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Send a Message</span>

<div className="ml-6 space-y-2">

- Add another **YourGPT** node to your workflow
- Select **"Send Message"** as the action
- Configure the following parameters:
  - `widget_uid`: The same ID used in the Create Session action
  - `message`: The text content you want to send
  - `session_uid`: Map this from the output of the Create Session action
- Click **Execute Node**

<div className="flex justify-center items-center  rounded-md p-4 mt-4">
  <Image 
    src="../../../../assets/chatbot/n8n/send-message.png" 
    alt="Sending a message" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain shadow-lg" 
  />
</div>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Test and Deploy</span>

<div className="ml-6 space-y-2">

- Test your workflow thoroughly to ensure all actions work correctly
- Once tested, you can activate the workflow for production use
- Consider adding error handling for robustness

</div>
</li>

</ol>

## Advanced Usage

<Callout title="YourGPT can be integrated into complex n8n workflows to create powerful AI-driven automations." type="tip"/>

### Workflow Ideas

Here are some ways to use YourGPT in your n8n workflows:

- **Content Generation**: Use to generate content for social media or blogs on a schedule
- **Customer Support Automation**: Trigger YourGPT responses based on incoming support tickets
- **Workflow Automation**: Use to automate specific workflows.

<Callout title="For optimal performance, consider implementing error handling and retry logic in your workflows." type="tip"/>