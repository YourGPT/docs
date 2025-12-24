# Instagram

> Learn how to connect YourGPT AI to Instagram for automating messaging and engagement.

> **TIP:** ## Auto Setup
> Instagram Integrations with auto setup:
> 
> 1. Log in to YourGPT’s dashboard and go to Integrations section.
> <div className="flex justify-center items-center  rounded-md p-2 md:px-2">
>   <img
>     src="/assets/chatbot/Instagram/instagram.png"
>     alt="Instagram Integration in YourGPT dashboard"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> 2. Choose the Auto option and Click Connect under the Instagram.
> 
> <div className="flex justify-center items-center rounded-md p-2 md:px-2">
>   <img
>     src="/assets/chatbot/Instagram/instagram-1.png"
>     alt="Instagram Auto Integration in YourGPT dashboard"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> 3. Login to Your Instagram
> 
> <div className="flex justify-center items-center  rounded-md p-2 md:px-2">
>   <img
>     src="/assets/chatbot/Instagram/instagram-2.png"
>     alt="Login Instagram"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> 4. Follow the further steps on screen to complete the integration.
> 
> ---
> 
> ## Custom Setup
> Instagram Integrations with custom setup:
> 
> ### Prerequisites 
> 
> Before integrating Instagram with YourGPT Chatbot, ensure you have the following prerequisites in place:
> 
> - <div>
>     <p>
>         <a href="https://developers.facebook.com/apps" target="_blank" className="no-underline"><strong>Meta Developer App</strong></a> to manage connections between Instagram and YourGPT Chatbot, including webhooks and access tokens.
>     </p>
>   </div>
> 
> - <div>
>     <p>
>         Administrator or Developer roles for a <a href="https://www.facebook.com/" target="_blank" className="no-underline"><strong>Facebook Page</strong></a> since Instagram accounts need to be linked to a Facebook page for using the Facebook Graph API.
>     </p>
>   </div>
> 
> - <div>
>     <p>
>         An <a href="https://www.instagram.com/" target="_blank" className="no-underline"><strong>Instagram Professional Account</strong></a> is required to access features specific to professional accounts.
>     </p>
>   </div>
> 
> ### Setting up Instagram Integration
> 
> 1. <div>
>     <p>
>         Go to the <a href="https://chatbot.yourgpt.ai/" target="_blank" className="no-underline"><strong>Integration Section</strong></a> in YourGPT Chatbot and connect the Instagram integration if not already installed.
>     </p>
>    </div>
> 
> 2. Click **```Connect Instagram```**. Proceed to your chatbot settings.  
> 3. Add the following details in the Instagram section:
> 
> - **App ID:** Your YourGPT app's identification, created at Meta Developer platform.  
> - **App Secret:** The secret key of your YourGPT app.  
> - **Page ID:** The ID of your Facebook page.  
> - **Access Token:** The access token.  
> 
> ### Setting  up Instagram
> 
> 1. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Create a Facebook Page </div>
> 
>    - <div>
>        <p>
>          If you don't have a Facebook page, <a href="https://www.facebook.com/pages/create" target="_blank" className="no-underline"><strong>create one</strong></a>. Ensure you have an administrator or developer role to link your chatbot.
>        </p>
>      </div>
> 
> 2. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Create a YourGPT Chatbot App </div>
> 
>    1. <div>
>         <p>
>           Log in to <a href="https://developers.facebook.com/" target="_blank" className="no-underline"><strong>Facebook for Developers</strong></a>.
>         </p>
>       </div>
> 
>    2. Select My Apps and **```create a new app```**.  
>    3. Choose Business as the App Type.  
>    4. Assign a name to your app.  
> 
> 3. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> App ID and Secret </div>
> 
>    1. In Settings, under Basic, find the **```App ID```** and **```App Secret```**.  
>    2. Click Show in the App Secret text box. Copy both for channel configuration.  
> 
> 4. <div className="font-bold dark:text-gray-300 text-lg md:text-xl"> Page ID and Access Token </div>
> 
>    1. In Messenger settings, under Instagram Settings, click **```Add or Remove Pages```**.  
>    2. Add your Facebook page and copy the number under your page name for **```Page ID```**.  
>    3. Click **```Generate Token```** and copy for **```Access Token```**.  
> 
> ### Submit your App for Meta Review
> 
> During Development Mode, your bot is accessible to admins, developers, and testers only. After approval and public release, it becomes available to the general public.
> 
> <div>
>   <p>
>     Learn more about the <a href="https://developers.facebook.com/docs/apps/review" target="_blank" className="no-underline"><strong>App Review process</strong></a>. 
>     For troubleshooting, follow <a href="https://developers.facebook.com/docs/app-review/support/rejection-guides/instagram" target="_blank" className="no-underline"><strong>this documentation</strong></a> if your app got rejected.
>   </p>
> </div>
> 
> ## Integration Supported Types
> The Integration ID for Instagram is 12 and the supported types for the integration are as follows:
> 
> <Callout title="Supported Types" type="tip">
>   <ul>
>     <li>Text</li>
>     <li>Image: png, jpeg, gif</li>
>     <li>Video: mp4, ogg, avi, mov, webm</li>  
>     <li>Audio: aac, m4a, wav, mp4</li>  
>     <li>File</li>  
>     <li>Button</li>  
>     <li>Carousel</li> 
>     <em className='text-black dark:text-white'>Note: they will be handled as a generic template.</em>  
>     <li>Card</li>  
>     <em className='text-black dark:text-white'>Note: More than 3 buttons with action type 'path' will be handled as quick replies; otherwise, they will be handled as a generic template.</em>  
>   </ul>

> **WARNING:** <ul>
>     <li>Form</li>
>   </ul>