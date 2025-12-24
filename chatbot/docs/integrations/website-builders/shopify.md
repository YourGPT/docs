# Shopify 

> Learn how to integrate a GPT Chatbot with your Shopify store with our detailed, step-by-step guide

<Callout title="Connecting Your AI Chatbot with Shopify" type="tip" />

<div style={{ aspectRatio: 16/9, width: '100%' }}>
  <iframe 
    width="100%" 
    style={{ height: '100%' }}
    src="https://www.youtube.com/embed/CRa2FVg1m_E?si=N3ugDF93bcnLq4WZ" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
</div>

## GPT AI Chatbot Installation

Integrating GPT Chatbot with your Shopify store is a seamless process that enhances customer interaction. Follow these steps:

1. Go to the **YourGPT Integration** section and copy the provided widget script.

2. **Open Shopify Admin Panel**  
   - Go to **Online Store** from the Shopify Admin dashboard.  
   - Select **Themes** under "Sales channels."

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="/assets/chatbot/shopify/shopify-1.png" 
    alt="Shopify Admin API Configuration" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain" 
  />
</div>

3. **Edit Code**  
   - Click the ellipsis (**...**) and Choose **Edit code** from the dropdown menu.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="/assets/chatbot/shopify/Shopify-2.png" 
    alt="Shopify Admin API Configuration" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain" 
  />
</div>

4. **Locate theme.liquid File**  
   - In the code editor, navigate to **Layout -> theme.liquid**.  
   - Open the file to modify the theme's main structure.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="/assets/chatbot/shopify/shopify-3.png" 
    alt="Shopify Admin API Configuration" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain" 
  />
</div>

5. **Insert Custom Script**  
   - Add the following JavaScript code inside that you have copied from yourgpt chatbot. 
   - Save the file by clicking **Save** at the top.

<div className="flex justify-center items-center rounded-md p-4">
  <Image 
    src="/assets/chatbot/shopify/shopify-4.png" 
    alt="Shopify Admin API Configuration" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain" 
  />
</div>

## Generating Token for Shopify (Chatbot Studio)

To generate a Shopify Auth Token, you need to follow these steps:

<ol className="space-y-8 my-8 list-decimal list-inside">

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Create a new app in your Shopify admin panel.</span>

<div className="ml-6 space-y-2">

- You can do this by going to **Apps -> apps and sales channel -> Develop apps -> create an app**.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Fill in the app details.</span>

<div className="ml-6 space-y-2">

- You can use any name and email you like.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">After creating the app, go to Configure Admin API scopes.</span>

<div className="ml-6 space-y-2">

<div className="flex justify-center items-center rounded-md p-4 md:pl-16">
  <Image 
    src="/assets/chatbot/shopify/Shopify-flow-1.png" 
    alt="Shopify Admin API Configuration" 
    width={1200}
    height={800}
    style={{ width: "100%" }} 
    className="rounded-md object-contain" 
  />
</div>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Select the scopes mentioned above and click the save button.</span>

<div className="ml-6 space-y-2">

<div className="flex justify-center items-center rounded-md p-4 md:px-14">
  <Image 
    src="/assets/chatbot/shopify/Shopify-flow-2.png" 
    alt="Shopify API Scopes Selection" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md" 
  />
</div>

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">After that, install the app and click on **Reveal token once** you will get your token.</span>

<div className="ml-6 space-y-2">

<div className="flex justify-center items-center rounded-md p-4 md:px-14">
  <Image 
    src="/assets/chatbot/shopify/Shopify-flow-3.png" 
    alt="Shopify Auth Token Reveal" 
    width={1200}
    height={800}
    style={{ width: "100%" }}
    className="rounded-md" 
  />
</div>

</div>
</li>

</ol>

It is crucial to securely store your Auth Token as it provides access to your Shopify administration.

## Troubleshooting

<Callout type="warning" title="Need Help?">
  For further inquiries or technical support regarding GPT Chatbot integration with Shopify, feel free to contact us at <a href='mailto:support@yourgpt.ai' className='font-bold no-underline' target='_blank'>Mail YourGPT Support</a> or <a href='https://yourgpt.ai/' className='font-bold no-underline' target='_blank'>Chatbot Live Support</a>.
</Callout>

We trust this integration will enhance customer engagement and satisfaction on your Shopify store!