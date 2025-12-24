# Line

> Learn how to connect YourGPT AI to your Line app with this integration guide.

> **TIP:** To integrate with Line, follow these steps:
> 
> ---
> 
> ### Steps
> 
> 1. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Sign Up on Line Console </div>  
>    - <div>
>        <p>
>          Go to <a href="https://developers.line.biz/en/" target="_blank" className="no-underline"><strong>Line Developers</strong></a> and sign up if you have not done already.
>        </p>
>      </div>
> 
> 2. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Create a Provider </div>  
>    - Create a provider  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>         src="/assets/chatbot/Line/Line-1.png"
>         alt="Create Provider"
>         className="rounded-md object-contain"
>         style={{ width: "100%" }}
>       />
>    </div>
> 
> 3. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Create a Message API Channel </div>  
>    - Create a Message API Channel  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>         src="/assets/chatbot/Line/Line-2.png"
>         alt="Create Message API Channel"
>         className="rounded-md object-contain"
>         style={{ width: "100%" }}
>       />
>    </div>
> 
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/Line-messaging-api.png" 
>        alt="Messaging API"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/Create-line-account.png" 
>        alt="Messaging API"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/line-settings.png" 
>        alt="Line Settings"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
>    - Enable the message API  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/enable-messaging-api.png" 
>        alt="Enable Messaging API"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
>    - Choose or create a provider.  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/select-provider.png"
>        alt="Choose or Create a Provider"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 4. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Copy Channel ID </div>  
>    - Copy Channel ID for later use.  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/Line-3.png"
>        alt="Copy Channel ID"
>        className="rounded-md"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 5. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Issue the Token </div>  
>    - Issue the Token required for integration.  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/Line-4.png"
>        alt="Issue Token"
>        className="rounded-md"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 6. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Add Channel ID and Access Token </div>  
>    - Add the following information:  
>      - **Channel ID**  
>      - **Generated Access Token**  
>    <div className="flex justify-center items-center  rounded-md p-4 md:px-12">
>      <img 
>        src="/assets/chatbot/Line/Line-5.png"
>        alt="Add Channel ID and Access Token"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 7. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Add the Copied Webhook </div>  
>    - Add the Copied Webhook for callback functionality.  
>    <div className="flex justify-center items-center  rounded-md p-4 md:px-12">
>      <img 
>        src="/assets/chatbot/Line/Line-6.png"
>        alt="Add Webhook"
>        className="rounded-md object-contain"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 8. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Activate the Integration </div>  
>    - Turn it ON to activate the integration.  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/Line-7.png"
>        alt="Turn ON Integration"
>        className="rounded-md"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 9. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Verify the Webhook </div>  
>    - Verify the Webhook functionality.  
>    <div className="flex justify-center items-center  rounded-md p-4">
>      <img 
>        src="/assets/chatbot/Line/Line-8.png"
>        alt="Verify Webhook"
>        className="rounded-md"
>        style={{ width: "100%" }}
>      />
>    </div>
> 
> 10. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Test the Integration </div>  
>     - Test the integration:  
>       - Download and Install the Line App on your mobile device.  
>       - Use it to scan the provided QR code.  
>     <div className="flex justify-center items-center  rounded-md p-4">
>       <img 
>         src="/assets/chatbot/Line/Line-9.png"
>         alt="Download and Install the Line App"
>         className="rounded-md object-contain"
>         style={{ width: "100%" }}
>       />
>     </div>
> 
> You have now successfully enabled Line integration.
> 
> ---
> 
> ## Integration Supported Types  
> The Integration ID for Line is 14 and the supported types for the integration are as follows:
> 
> <Callout title="Supported Types" type="tip">
>   <ul>
>     <li>Text</li>
>     <li>Image: JPEG or PNG</li>
>     <em className='text-black dark:text-white'>Note: This feature is specifically designed for integration with our platform and may not work as intended when connected with other platforms like Crisp and Intercom.</em>  
>     <li>Video: mp4</li>
>     <em className='text-black dark:text-white'>Note: only supported when integrated with our platform.</em>  
>     <li>Audio: mp3 or m4a</li>
>     <em className='text-black dark:text-white'>Note: only supported when integrated with our platform.</em>  
>     <li>Button</li>
>     <li>Carousel</li>
>     <li>Card</li>
>   </ul>

> **WARNING:** <ul>
>     <li>Form</li>
>     <li>File</li>
>   </ul>