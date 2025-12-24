# Discord

> Add YourGPT Chatbot to your Discord server using the guided authentication flow.

GPT Chatbot for Discord | Installation Guide

> **TIP:** ## Auto Installation 
> 
> To install Your Bot using the automatic method:
> 
> - Select Auto from the integration options, then tap on "Click to Authenticate".
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/auto-discord.png"
>     alt="Create Application"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> - Now, Click on Authorize and complete the authentication process.
> 
> <div className="flex justify-center items-center  rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/adminstration-roler-server.png"
>     alt="Create Application"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> - Grant administrator permissions to YGC Bot.
> 
> <div className="flex justify-center items-center  rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/choose-server.png"
>     alt="Create Application"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> Now you can see that ygc AI Chatbot is added to your server.
> 
> - Go to the integration page and add the channel ID by simply copying and pasting the channel ID by right-clicking on the channel settings icon.
> 
> <div className="flex justify-center items-center  rounded-md p-4 md:px-28">
>   <img 
>     src="/assets/chatbot/Discord/discord-11.png"
>     alt="Add Channel ID"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> - To get the response, you all need to add the channel ID by simply copying and pasting the channel ID by right-clicking on the channel settings icon.
> 
> <div className="flex justify-center items-center  rounded-md p-4 md:px-44">
>   <img 
>     src="/assets/chatbot/Discord/discord-9.png"
>     alt="Discord Channel ID"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> 
> 
> 
> - From Discord Settings -> Click on Advanced -> Enable the Developer mode.
> 
> <div className="flex justify-center items-center  rounded-md p-4 md:px-28">
>   <img 
>     src="/assets/chatbot/Discord/discord-10.png"
>     alt="Auto Authentication"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> Now you Chat with the YGC AI Chatbot  in your server.
> 
> ---
> 
> # Custom Installation 
> 
> To install YGC Bot using the custom method:
> 
> <div
>   style={{
>     aspectRatio: 16 / 9,
>     width: "100%"
>   }}
> >
>   <iframe
>     width="100%"
>     style={{ height: "100%" }}
>     src="https://www.youtube.com/embed/qc1bS2dCI9I?si=DfOT4y6c9BiIPxXk"
>     title="YouTube video player"
>     frameBorder="0"
>     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
>     allowFullScreen
>   ></iframe>
> </div>
> 
> ## Prerequisites 
> 
> <div>
>   <p>
>     - Ensure you have a developer portal account for Discord. If not, sign up at 
>     <a href="https://discord.com/developers" target="_blank" className="no-underline"><strong>Discord Developer Portal</strong></a>.
>   </p>
>   <p>
>     - Visit the URL <a href="https://discord.com/developers/applications" target="_blank" className="no-underline"><strong>Discord Developer Applications</strong></a> and create a new application.
>   </p>
> </div>
> 
> <div className="flex justify-center items-center  rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/discord-1.png"
>     alt="Create Application"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> ## Setting up the Discord Integration 
> 
> To integrate Discord with your application, follow these steps:
> 
> ### Obtain Application Credentials
> 
> - Copy the **```Application ID```**.
> - Copy the **```Public Key```**.
> 
> <div className="flex justify-center items-center  rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/discord-2.png"
>     alt="Application Credentials"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> ### Create a Bot and Generate Token
> 
> - Create a **```Bot```** within your application.
> - Generate a **```Token```** for the bot and copy it.
> 
> <div className="flex justify-center items-center  rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/discord-3.png"
>     alt="Create Bot and Token"
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />
> </div>
> 
> ### Enable the Bot
> 
> - Enable the bot using the copied credentials within the Discord Developer Portal.
> 
> <div className="flex justify-center items-center rounded-md p-4 md:px-16">
>   <img 
>     src="/assets/chatbot/Discord/discord-4.png"
>     alt="Enable Bot"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> ### Obtain Webhook
> 
> - Copy the **```Webhook```** URL for your bot.
> 
> <div className="flex justify-center items-center  rounded-md p-4 md:px-16">
>   <img 
>     src="/assets/chatbot/Discord/discord-5.png"
>     alt="Obtain Webhook"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> ### Integration Process
> 
> - Paste the copied **```Webhook```** URL into your application.
> - Successful integration means the webhook is added; otherwise, update the integration credentials with the correct data.
> 
> <div className="flex justify-center items-center  rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/discord-6.png"
>     alt="Integration Process"
>     style={{ width: "100%" }}
>     className="rounded-md object-contain"
>   />
> </div>
> 
> ### Add Permissions
> 
> - Go to OAuth 2 and go to Bot permissions.
> - Grant the Bot necessary text permissions.
> - Copy the generate URL and paste it to your browser and Add the bot to your server.
> 
> ### Test the Integration
> 
> To initiate a conversation, you must use chat slash commands. For instance, you can type **```/ask```**.
> 
> <div className="flex justify-center items-center rounded-md p-4">
>   <img 
>     src="/assets/chatbot/Discord/discord-7.png"
>     alt="Test the Integration"
>     style={{ width: "100%" }}
>     className="rounded-md"
>   />
> </div>
> 
> ---
> 
> <div style={{ height: "20px " }}></div>
> 
> The Integration ID for Discord is 15 and Only text message is only supported in the Discord integration.
> 
> <Callout title="Note" type="info">
>   You can chat by using specific commands that start with a `@` or by using Direct Message if Direct Message is enabled in the integration settings. 
> 
>   If Direct Message is not enabled, you can only interact by using commands that start with a `@`symbol.