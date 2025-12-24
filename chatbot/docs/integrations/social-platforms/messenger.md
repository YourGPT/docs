# Messenger

> Learn how to connect YourGPT Chatbot to Facebook Messenger with auto or custom setup.

<Callout title="Connecting Your Chatbot with Messenger" type="tip" />

## Auto Installation

1: Log in to YourGPT’s dashboard and go to the Integrations tab.

<div className="flex justify-center items-center rounded-md p-2 md:px-2">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger.png"
    alt="Messenger Integration in YourGPT dashboard"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

2: Under the Messenger section, Select <strong><code>Auto</code></strong> and click Connect.

4: Log in to your Facebook account and select Continue as Your Business Name.

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger-two.png"
    alt="Login Facebook account"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

5: Select an existing Facebook Page or create a new one:

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger-three.png"
    alt="Select the Facebook Page or Create one"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

<p>
  - To create a new page, enter the Page Name and Category, then click Create.
</p>

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger-four.png"
    alt="Creating a New Facebook Page"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

6: Confirm your selected page by checking the box and clicking Continue.

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger-five.png"
    alt="Confirm your selected page"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

7: Allow all required permissions by clicking Next when prompted.

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger-six.png"
    alt="provide the important required permissions"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

8: Confirm the page for the integration

<div className="flex justify-center items-center rounded-md p-2 md:px-44">
  <img
    src="../../../../assets/chatbot/Messenger/auto/messenger-seven.png"
    alt="confirm the page for the integration"
    style={{ width: "100%" }}
    className="rounded-md object-contain"
  />
</div>

9: Follow the further steps, verify and review the integration settings.

10: Finalize the setup. Your Messenger account will now be linked to YourGPT.

---

## Custom Installation

<div style={{ height: "20px" }}></div>

<div
  style={{
    aspectRatio: 16 / 9,
    width: "100%",
  }}
>
  <iframe
    width="100%"
    style={{ height: "100%" }}
    src="https://www.youtube.com/embed/tSGg-guW8RI?si=DfOT4y6c9BiIPxXk"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

<ol>
  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Create a New App
    </div>
    <div>
      <p>
        Create a <strong>New App</strong> from the{" "}
        <a
          href="https://developers.facebook.com/apps"
          target="_blank"
          className="no-underline"
        >
          <strong>Meta Developer Console</strong>
        </a>
        .
      </p>
    </div>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-01.png"
        alt="Step 1: Create New App"
        style={{ width: "100%" }}
        className="rounded-md object-contain"
      />
    </div>

    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-02.png"
        alt="Step 2: Developer Console"
        style={{ width: "100%" }}
        className="rounded-md object-contain"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Click On
    </div>
    <p>
      - Click on{" "}
      <strong>
        <code>Messenger</code>
      </strong>{" "}
      →{" "}
      <strong>
        <code>Setup</code>
      </strong>
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-03.png"
        alt="Step 3: Messenger Setup"
        style={{ width: "100%" }}
        className="rounded-md"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Add Your Facebook Page
    </div>
    <p>
      - Add your{" "}
      <strong>
        <code>Facebook Page</code>
      </strong>
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-04.png"
        alt="Step 4: Add Meta Page"
        style={{ width: "100%" }}
        className="rounded-md"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Copy Page ID and Access Token
    </div>
    <p>
      - Copy the{" "}
      <strong>
        <code>Page ID</code>
      </strong>{" "}
      and the{" "}
      <strong>
        <code>Generated Access Token</code>
      </strong>{" "}
      for your page
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-05.png"
        alt="Step 5: Page ID and Access Token"
        style={{ width: "100%" }}
        className="rounded-md"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Copy Client ID and Client Secret
    </div>
    <p>
      - Copy the{" "}
      <strong>
        <code>Client ID</code>
      </strong>{" "}
      and the{" "}
      <strong>
        <code>Client Secret</code>
      </strong>{" "}
      for your page
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-10.png"
        alt="Step 5: Client ID and Client Secret"
        style={{ width: "100%" }}
        className="rounded-md"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Add Verify Token, Page ID, and Access Token
    </div>
    <p>
      - Add a random{" "}
      <strong>
        <code>Verify Token</code>
      </strong>{" "}
      (this will be used for later webhook verification), the{" "}
      <strong>
        <code>Page ID</code>
      </strong>
      , and the{" "}
      <strong>
        <code>Generated Access Token</code>
      </strong>
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-06.png"
        alt="Step 6: Verify Token, Page ID, and Access Token"
        style={{ width: "100%" }}
        className="rounded-md object-contain"
      />
    </div>
    <div className="flex justify-center items-center rounded-md p-4 md:px-20">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-07.png"
        alt="Step 7: Paste Webhook Endpoint"
        style={{ width: "100%" }}
        className="rounded-md object-contain"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Paste Webhook Endpoint
    </div>
    <p>
      - Paste your{" "}
      <strong>
        <code>webhook endpoint</code>
      </strong>{" "}
      and add the{" "}
      <strong>
        <code>verify token</code>
      </strong>
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-08.png"
        alt="Step 8: Webhook Endpoint and Verify Token"
        style={{ width: "100%" }}
        className="rounded-md object-contain"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Add Webhook Subscriptions
    </div>
    <p>
      - You can Add webhook Subscriptions (messaging, messaging_postbacks)
    </p>
    <div className="flex justify-center items-center rounded-md p-4">
      <img
        src="../../../../assets/chatbot/Messenger/messenger-09.png"
        alt="Step 9: Webhook Subscriptions"
        style={{ width: "100%" }}
        className="rounded-md object-contain"
      />
    </div>
  </li>

  <li>
    <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
      Send App for Review
    </div>
    <p>
      - The last step is you need to send your app for review to get the
      permissions approved by Meta(formely Facebook).
    </p>
  </li>
</ol>

## Integration Supported Types

The Integration ID for Messenger is 11 and the supported types for the integration are as follows:

<Callout title="Supported Types" type="tip">
  <ul className="list-disc pl-4 space-y-1">
    <li>Text</li>
    <li>Image</li>
    <li>Video</li>
    <li>Audio</li>
    <li>File</li>
    <li>Button</li>
    <li>Carousel</li>
    <li>Card</li>
  </ul>
  <p>
    Note: they will be handled as a generic template.
  </p>
  <p>
    Note: More than 3 buttons with handle action type path will be handled as
    quick replies; otherwise, they will be handled as a generic template.
  </p>
</Callout>

<Callout title="Not Supported" type="warning">
  <ul>
    <li>Form</li>
  </ul>
</Callout>

---

<div>
  <p>
    By following these steps, you can integrate YourGPT AI chatbot with
    Messenger. For any questions, contact our team via Live support or{" "}
    <a href="mailto:support@yourgpt.ai" className="no-underline">
      <strong>Mail Us</strong>
    </a>
    .
  </p>
</div>