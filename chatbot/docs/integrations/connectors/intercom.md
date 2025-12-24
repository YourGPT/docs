# Intercom

> Link YourGPT Chatbot with Intercom to sync conversations and contacts.

> **TIP:** Intercom integration allows seamless communication between YourGPT AI Bot and Intercom, enabling efficient customer interactions.
> 
> ## Prerequisites
> 
> <div className="text-base text-gray-700 dark:text-white/80">
>   <p>
>     <strong>1.</strong> Create an account on Intercom at 
>     <a href="https://app.intercom.com/" className="font-bold " target="_blank"> ***`app.intercom`***</a>
>   </p>
>   <p>
>     <strong>2.</strong> Enable Intercom from YourGPT dashboard at 
>     <a href="https://chatbot.yourgpt.ai/" className="font-bold" target="_blank"> ***`chatbot.yourgpt`***</a>
>   </p>
>   <p>
>     <strong>3.</strong> Create an Intercom developer account at 
>     <a href="https://developers.intercom.com/" className="font-bold" target="_blank"> ***`developers.intercom`***</a>
>   </p>
> </div>
> 
> ## Integration Steps
> 
> <ol className="space-y-8 my-8 list-decimal list-inside">
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-xl">Create an Intercom App</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Log in to your Intercom developer account.
> - Create the app that you want to integrate with.
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <Image 
>     src="/assets/chatbot/Intercom/make-app.gif" 
>     alt="Create Intercom Apps"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />
> </div>
> 
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-xl">Obtain App ID and Access Token</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Copy the **`App ID`** and **`Access Token`** from your Intercom app settings.
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <Image 
>     src="/assets/chatbot/Intercom/intercom4-5.png" 
>     alt="Copy App ID and Access Token"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />
> </div>
> 
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-xl">Paste Credentials in YourGPT Dashboard</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Paste the copied **`App ID`** and **`Access Token`** into the YourGPT dashboard.
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <Image 
>     src="/assets/chatbot/Intercom/intercom1.png" 
>     alt="YourGPT Dashboard"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />
> </div>
> 
> <div className="flex justify-center items-center rounded-md p-4 md:p-12">
>   <Image 
>     src="/assets/chatbot/Intercom/intercom5.png" 
>     alt="Paste Credentials in YourGPT Dashboard"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-xl">Configure Webhook</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Add a webhook URL and generate it in the Intercom app webhook settings.
> 
> <div className="flex justify-center items-center rounded-md p-10">
>   <Image 
>     src="/assets/chatbot/Intercom/intercom6.png" 
>     alt="Configure Webhook"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-xl">Verify Webhook</span>
> 
> <div className="ml-6 space-y-2">
> 
> - Confirm the successful addition of the webhook. You will receive a confirmation message.
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <Image 
>     src="/assets/chatbot/Intercom/intercom7.png" 
>     alt="Chat Integration"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />
> </div>
> 
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="font-bold dark:text-gray-300 text-xl">Chat Integration (Optional)</span>
> 
> <div className="ml-6 space-y-2">
> 
> - For more customization and control, implement Canvas kit.
> - Initialize flow webhook URL:
> ```
> https://api.yourgpt.ai/chatbot/v1/intercom/canvas/{your app_id}
> ```
> 
> - Submit flow webhook URL:
> ``` 
> https://api.yourgpt.ai/chatbot/v1/intercom/canvas/webhook/{your app_id}
> ```
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <Image 
>     src="/assets/chatbot/Intercom/intercom8.png" 
>     alt="Chat Integration"
>     width={1200}
>     height={800}
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />  
> </div>
> 
> </div>
> </li>
> 
> </ol>
> 
> ## Troubleshooting
> 
> <ol className="space-y-8 my-8 list-decimal list-inside">
> 
> <li className="space-y-3">
> <span className="text-base text-gray-700 dark:text-white/80 font-semibold">Ensure you have added the interaction key in the custom data to avoid errors.</span>
> 
> <div className="ml-6">
>   <div className="flex justify-center items-center rounded-md px-4 md:px-40 py-4">
>     <Image
>       src="/assets/chatbot/Intercom/intercom9.png"
>       alt="Interaction Key"
>       width={1200}
>       height={800}
>       style={{ width: "100%" }}
>       className="rounded-md object-contain"
>     />
>   </div>
> </div>
> </li>
> 
> <li className="space-y-3">
> <span className="text-base text-gray-700 dark:text-white/80 font-semibold">Add interaction key to avoid this below error:</span>
> 
> <div className="ml-6">
>   <div className="flex justify-center items-center rounded-md px-4 md:px-48 py-5">
>     <Image
>       src="/assets/chatbot/Intercom/intercom10.png"
>       alt="Interaction Key"
>       width={1200}
>       height={800}
>       style={{ width: "100%" }}
>       className="rounded-md object-contain"
>     />
>   </div>
> </div>
> </li>
> 
> </ol>
> 
> ## Integration Supported Types
> 
> The Integration ID for the Intercom is **`18`** and the supported types are as follows:
> 
> <Callout title="Supported Types">
>   <ul>
>     <li>Text</li>
>     <li>Image</li>
>   </ul>

> **WARNING:** <ul>
>     <li>Form</li>
>     <li>Video</li>
>     <li>Audio</li>
>     <li>File</li>
>     <li>Button</li>
>     <li>Carousel</li>
>     <li>Card</li>
>   </ul>

By following these steps mentioned above help you integrate YourGPT AI Bot with Intercom.

---

> **CHECK:** <div className="text-base text-gray-700 dark:text-white/80"><p>📌 If you require any assistance or have any questions, please feel free to contact us at <a href="mailto:support@yourgpt.ai" className="font-bold no-underline" target="_blank"> YourGPT Support </a>.</p></div>