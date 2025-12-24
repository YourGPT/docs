# Whatsapp

> Connect YourGPT Chatbot to WhatsApp via the official integration with auto setup.

<Callout title="Connecting Your AI Chatbot with WhatsApp" type="tip" />

## Auto Setup
Whatsapp Integrations with auto setup:

1. Log in to YourGPT's dashboard and go to Integrations section.
<div className="flex justify-center items-center rounded-md p-2 md:px-2">
  <Image 
    src="/assets/chatbot/whatsapp/auto/whatsapp-one.png" 
    alt="whatsapp Integration in YourGPT dashboard" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain" 
  />
</div>

2. Choose the Auto option and Click Connect under the WhatsApp.

<div className="flex justify-center items-center rounded-md p-2 md:px-2">
  <Image 
    src="/assets/chatbot/whatsapp/auto/whatsapp-two.png" 
    alt="Whatsapp Auto Integration" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain" 
  />
</div>

4: Log in with your Facebook account and select Continue as Your Business Name.

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <Image 
    src="/assets/chatbot/whatsapp/auto/whatsapp-three.png" 
    alt="Facebook Business login To Continue" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain" 
  />
</div>

5: Choose an existing WhatsApp Business account or create a new profile. Fill in your business details (Name, Website, Country) and accept the terms.

<div className="flex justify-center items-center rounded-md p-10 md:px-44">
  <Image 
    src="/assets/chatbot/whatsapp/auto/whatsapp-four.png" 
    alt="Whatsapp Bussiness Profile Integration" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain" 
  />
</div>

6: Fill in your business information.

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <Image 
    src="/assets/chatbot/whatsapp/auto/whatsapp-five.png" 
    alt="Fill in your business information" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain" 
  />
</div>

7: Click Next and follow the steps to add your business phone number. You'll need to verify this number through a code sent via SMS or phone call.

8: Confirm the integration and start managing customer interactions through WhatsApp.

---

## Custom Setup
Ensure your WhatsApp Business and Facebook accounts are set up for custom integration.

### Prerequisites

- <div><p> A <a href="https://developers.facebook.com/apps" target="_blank" className="no-underline"><strong>facebook developer app</strong></a> </p> </div>

- A WhatsApp Business Account

### Setting up the WhatsApp Integration

- Go to the YourGPT Chatbot Integrations Section.
- Find the **WhatsApp integration** then click on the **`Connect`** button.

The WhatsApp integration will have the following settings:

<ol className="space-y-8 my-8 list-decimal list-inside">

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Verify Token</span>

<div className="ml-6 space-y-2">

To Create a Verify Token, follow the steps below. 
- Start by creating a unique string that can be a mix of alphabets and just numbers, e.g (12345 or abc12). This will act as your Verification Token.
- After creating the Verify Token, make sure to copy it.
- Go to YourGPT Chatbot, in the **`Verify Token`** field. Paste your Verify Token.
- You'll also need to add the same Verify Token in the **`Webhook Callback`** section of your Facebook App.
- Lastly, copy the webhook URL from YourGPT Chatbot. Go to your Facebook App and find the **`Webhook Callback`** section, paste the copied webhook URL.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Phone Number ID</span>

<div className="ml-6 space-y-2">

To set up your Phone Number ID:
- In your facebook App's left sidebar, expand the WhatsApp menu and select Getting Started.
- Beside the label Phone Number ID, **`click Copy`**.
- Paste the copied value in the **`Phone Number ID`** field in YourGPT Chatbot.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Access Token</span>

<div className="ml-6 space-y-2">

There are two types of Access Tokens:
- **Temporary Access Token**
  - The Phone Number ID and Access Token are used to send and receive messages to/from the WhatsApp API.
  - To set up a Temporary Access Token:
    1. In your facebook App's left sidebar, expand the WhatsApp menu and select Getting Started.
    2. In the Temporary access token section, **`click Copy`**.
    3. Paste the copied value in the **`Access Token`** field in YourGPT Chatbot.
- The Temporary Access Token **expires after 24 hours**. You will need to generate a new token every day.

<Callout title="Note" type="tip">
  The Temporary Access Token **expires after 24 hours**. You will need to generate a new token every day.
</Callout>

- **Permanent Access Token (Optional)**
  - To set up a Permanent Access Token:
    1. <div>
          <p>
            Go to <a href="https://business.facebook.com/settings/system-users" target="_blank" className="no-underline"><strong>Business Settings</strong></a>.
          </p>
        </div>

    2. Select the business account your app is associated with.
    3. <div>
          <p>
            Below <strong>Users</strong>, click on <a href="https://business.facebook.com/settings/whatsapp-business-accounts/" target="_blank" className="no-underline"><strong>System Users</strong></a>.
          </p>
        </div>

    4. Click **`Add`**.
    5. Name the system user, choose **`Admin`** as the user role, and click **`Create System User`**.
    6. Select the **`whatsapp_business_messaging`** permission.
    7. Click **`Generate New Token`**.
    8. Copy and save your Permanent Access Token.
        <div className="flex justify-center items-center rounded-md p-4 md:px-12">
          <Image 
            src="/assets/chatbot/whatsapp.png" 
            alt="WhatsApp Integration Settings" 
            width={1200}
            height={800}
            style={{ width: "100%" }}
            className="rounded-md object-contain" 
          />
        </div>

      Paste the Verify Token, Phone Number ID, and Access Token in the respective fields in YourGPT Chatbot.

</div>
</li>

</ol>

## Troubleshooting

To resolve the error ```This number is registered to an existing WhatsApp account```, disconnect the number from here: [**WhatsApp Manager**](https://business.facebook.com/latest/whatsapp_manager/phone_numbers/).

<div className="flex justify-center items-center rounded-md p-4 md:px-12">
  <Image 
    src="/assets/chatbot/whatsapp/troubleshoot.png" 
    alt="Troubleshooting" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md object-contain" 
  />
</div>

## Integration Supported Types
The Integration ID for WhatsApp is 13 and the supported types for the integration are as follows:

<Callout title="Supported Types" type="tip">
  <ul>
    <li>Text</li>
    <li>Image: jpeg, png</li>
    <li>Video: 3gp, mp4 (H.264 video codec & AAC audio codec only)</li>
    <li>Audio: aac, amr, mp3, m4a, ogg (OPUS codecs only)</li>
    <li>File: txt, xls, xlsx, doc, docx, ppt, pptx, pdf</li>
    <li>Button</li>
    <li>Carousel</li>
    <li>Card</li>
  </ul>
  <p>Note: If there are more than 3 buttons, card or carousel, they will be displayed as a list, and only action paths are supported.</p>
</Callout>

<Callout title="Not Supported" type="warning">
  Forms are not supported on Whatsapp
</Callout>

---

<div>
  <p>
    By following these steps, you can integrate your chatbot with WhatsApp. For more information, refer to 
    <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#set-up-developer-assets" target="_blank" className="no-underline"><strong>this article</strong></a>. 
    If you have any questions, contact our team via Website Chat support or <a href="mailto:support@yourgpt.ai" className="no-underline"><strong>Mail Us</strong></a>.
  </p>
</div>