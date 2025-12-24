# $yourgpt Method

> Integrate the Chatbot Web SDK into your website

This documentation provides details on how to use the Chatbot Web SDK. The Chatbot Web SDK allows you to integrate a chatbot into your website.

To integrate the Chatbot Web SDK into your website, you need to inject the following script:
```js
<script 
   src="https://widget.yourgpt.ai/script.js" 
   id="yourgpt-chatbot" 
   data-widget="<YOUR_WIDGET_ID>">
</script>
```

<div className="text-base text-gray-700 dark:text-white/80">
  <p>
    Replace <code className="font-bold">YOUR_WIDGET_ID</code> with your actual widget ID. You can find your widget ID in the 
    <a href="https://chatbot.yourgpt.ai/dashboard" className="font-bold no-underline" target='_blank'>Chatbot Dashboard</a>.
  </p>
</div>

> **NOTE:** Make sure to load this script before accessing the `$yourgptChatbot` variable for calling functions. The `$yourgptChatbot` variable is only available after the script is loaded.

## `$yourgptChatbot`

After the Chatbot Web SDK script is loaded, the `$yourgptChatbot` variable becomes available. This variable  provides methods to interact with the chatbot.

## Execution Commands

These are the commands that can be executed using the `$yourgptChatbot.execute()` function.

<table className="min-w-full table-auto border-collapse ">
  <thead>
    <tr className="dark:bg-gray-800 bg-gray-100 text-left">
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Command</th>
      <th className="px-8 py-2 !pe-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">`widget:open`</td>
      <td className="!pe-6 font-semibold border dark:border-gray-700 text-sm">Opens the chatbot.</td>
    </tr>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">`widget:close`</td>
      <td className="!pe-6 font-semibold border dark:border-gray-700 text-sm">Closes the chatbot.</td>
    </tr>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">`message:send`</td>
      <td className="!pe-6 font-semibold border dark:border-gray-700 text-sm">Sends a message to the chatbot.</td>
    </tr>
  </tbody>
</table>

### `message:send` payload

<table className="min-w-full table-auto border-collapse border dark:border-gray-700 border-gray-300">
  <thead>
    <tr className="dark:bg-gray-800 bg-gray-100 text-left">
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Property</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Description</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Type</th>
      <th className="px-8 py-2 !pe-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">text</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">The message text.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">`string`</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm"></td>
    </tr>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">send</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Indicates whether the message should be sent to the chatbot or not.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">`boolean`</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">`false`</td>
    </tr>
  </tbody>
</table>

### Opening the chatbot
```js
$yourgptChatbot.execute("widget:open");
```

### Sending a message to the chatbot
```js
$yourgptChatbot.execute("message:send", { text: "Hello", send: true });
```

Here the `text` is the message that you want to send to the chatbot. The `send` parameter is a boolean value that indicates whether the message should be sent to the chatbot or not. If the send parameter is set to false, the message will be displayed in the chatbot but will not be sent to the chatbot.

<div style={{ height: '20px' }}></div>

> **NOTE:** This command will open the chatbot if it is not already open.

### Closing the chatbot
```js
$yourgptChatbot.execute("widget:close");
```

## Event Listeners

The Chatbot Web SDK provides event listeners that you can use to listen to events that occur in the chatbot. To add an event listener, you need to call the `$yourgptChatbot.on(event,callback)` function.

<table className="min-w-full table-auto border-collapse border dark:border-gray-700 border-gray-300">
  <thead>
    <tr className="dark:bg-gray-800 bg-gray-100 text-left">
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold ">Event Name</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold ">Description</th>
      <th className="px-8 py-2 !pe-6 border dark:border-gray-700 font-semibold ">Arguments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">init</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Triggered when the chatbot is initialized.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm"></td>
    </tr>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">widget:popup</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">
        Triggered when the chatbot popup opens or closes. It provides a boolean in the callback indicating the state (true for open, false for closed).
      </td>
      <td className="!pe-6 font-semibold border dark:border-gray-700 text-sm">`state:boolean`</td>
    </tr>
  </tbody>
</table>

### Example: Listen to the init event
```js
$yourgptChatbot.on("init", function() {
    console.log("Chatbot initialized");
});
```

### Removing an event listener

To remove an event listener, you need to call the `$yourgptChatbot.off(event,callback)` function.

## Set Command

The Chatbot Web SDK provides a set command that you can use to set visitor, session and widget data. To set data, you need to call the `$yourgptChatbot.set(type,data)` function.

<table className="min-w-full table-auto border-collapse  border-gray-300">
  <thead>
    <tr className="dark:bg-gray-800 bg-gray-100 text-left">
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Type</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Description</th>
      <th className=" !pe-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Payload</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">visitor:data</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Sets the visitor data.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">object</td>
    </tr>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">session:data</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Sets the session data.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">object</td>
    </tr>
  </tbody>
</table>

### Example: Set visitor data
```js
$yourgptChatbot.set("visitor:data", {
    customKey: "value",
});
```

### Example: Set session data
```js
$yourgptChatbot.set("session:data", {
    customKey: "value",
});
```

## Set Contact Data

<table className=" min-w-full table-auto border-collapse  border-gray-300">
  <thead>
    <tr className="dark:bg-gray-800 bg-gray-100 text-left">
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Type</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Description</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Payload</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">contact:data</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Sets the contact data.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm text-center">
        <span className="block">object</span>
        <span className="text-xs italic">Check supported fields 👇</span>
      </td>
    </tr>
  </tbody>
</table>

### Supported Contact payload fields for update

<table className="min-w-full table-auto border-collapse border dark:border-gray-700 border-gray-300">
  <thead>
    <tr className="dark:bg-gray-800 bg-gray-100 text-left">
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Field</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Description</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Type</th>
      <th className="px-8 py-2 !ps-6 border dark:border-gray-700 font-semibold whitespace-nowrap">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">email</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">A valid email address.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">string</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Either email or phone is required</td>
    </tr>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">phone</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">A valid phone number <i>e.g. +1234567890</i>.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">string</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Either phone or email is required</td>
    </tr>
    <tr>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">name</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">Name of the contact.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">string</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">No</td>
    </tr>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">ext_user_id</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">A unique identifier for the contact.</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">string</td>
      <td className="!ps-6 font-semibold border dark:border-gray-700 text-sm">No</td>
    </tr>
  </tbody>
</table>

<div style={{ height: '20px' }}></div>

> **NOTE:** For contact update, either `email` or `phone` must be provided.

### Example: Set contact data
```js
$yourgptChatbot.set("contact:data", {
   email: "andrew099@hi.com", 
   phone: "+1234567890",
   name: "Andrew",
   ext_user_id: "123456",
});
```

## Configuring Data for Iframe Embeds

If you are using the Chatbot Web SDK with an iframe embed, you can set the visitor, session, and contact data by passing the data in the query parameters of the iframe URL.

### Visitor Data

To set visitor data, append the `VISITOR_DATA.keyName=value` query parameter to your iframe URL.
```js
<iframe src="<widgetUrl>?VISITOR_DATA.customKey=value"></iframe>
```

### Session Data

To set session data, append the `SESSION_DATA.keyName=value` query parameter to your iframe URL.
```js
<iframe src="<widgetUrl>?SESSION_DATA.customKey=value"></iframe>
```

### Contact Data

To set contact data, append the `CONTACT.keyName=value` query parameter to your iframe URL.
```js
<iframe src="<widgetUrl>?CONTACT.email=andrew998@hi.com"></iframe>
```

<div style={{ height: '20px' }}></div>

> **NOTE:** Here {`<widgetUrl>`} is the URL of your chatbot widget.

<div style={{ height: '20px' }}></div>

> **NOTE:** You can pass multiple query parameters by separating them with an `&` .

<div style={{ height: '20px' }}></div>
```js
<iframe src="<widgetUrl>?VISITOR_DATA.customKey=value&SESSION_DATA.customKey=value&CONTACT.email=johnydreq@hi.com"></iframe>
```

<div style={{ height: '20px' }}></div>
```js
curl --location 'https://api.yourgpt.ai/chatbot/v1/createSession' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'api-key: pks-3e0a221e3d0d78cf0ecd73be363a728e1dfa2a0ee01cc4ff8b8c99c21a45cff9' \\
--data-urlencode 'widget_uid=8449240d-8454-4173-af6e-569477ac9013'
```