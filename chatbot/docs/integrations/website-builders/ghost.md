# Ghost

> Step-by-step guide to installing the AI Agent on your Ghost website

> **TIP:** Enhance your Ghost website with smart AI Agent! This guide covers every aspect of adding a powerful AI chatbot to your Ghost CMS that can answer visitor questions, provide 24/7 assistance, and dramatically improve user engagement across your entire website.
> 
> ## Adding an AI Agent to Ghost CMS
> 
> Ghost's "Code Injection" feature makes it easy to add your YourGPT AI Agent to your website. This seamless integration works similarly to adding Google Analytics or other JavaScript code to your site.
> 
> You can deploy the AI Agent globally across your entire Ghost site or selectively on specific posts and pages. For maximum impact and visitor assistance, we recommend the global installation method outlined below.
> 
> <ol>
>   <li>
>     <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
>       Sign in to Ghost Admin
>     </div>
>     <ul>
>       <li>Open your web browser and navigate to your Ghost admin URL (typically yourdomain.com/ghost)</li>
>       <li>Enter your email address and password to access your Ghost admin dashboard</li>
>       <li>Once logged in, you'll see your Ghost admin interface with the sidebar navigation</li>
>     </ul>
> 
>     <div className="flex justify-center items-center rounded-md p-4 mt-4">
>       <img
>         src="/assets/chatbot/ghost/sign-in-1.png"
>         alt="Sign in to Ghost Admin Dashboard"
>         style={{ width: "100%" }}
>         className="rounded-md object-contain shadow-lg"
>       />
>     </div>
>   </li>
> 
>   <li>
>     <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
>       Access Settings &amp; Code Injection
>     </div>
>     <ul>
>       <li>In the Ghost admin sidebar, click on <strong>"Settings"</strong></li>
>       <li>Scroll down through the settings menu and locate <strong>"Code Injection"</strong></li>
>       <li>Click on "Code Injection" to open the global code injection interface</li>
>       <li>This section allows you to add custom code that will run on your entire Ghost site</li>
>     </ul>
> 
>     <div className="flex justify-center items-center  rounded-md p-4 mt-4">
>       <img
>         src="/assets/chatbot/ghost/ghost-setting-2.png"
>         alt="Navigate to Ghost Settings"
>         style={{ width: "100%" }}
>         className="rounded-md object-contain shadow-lg"
>       />
>     </div>
>   </li>
> 
>   <li>
>     <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
>       Locate Code Injection Area
>     </div>
>     <ul>
>       <li>In the Code Injection page, you'll see two main sections:</li>
>       <li>• <strong>Site Header</strong>: Code added here is injected into the `<head>` section of every page</li>
>       <li>• <strong>Site Footer</strong>: Code added here is injected before the closing `</body>` tag</li>
>       <li>For optimal performance, we'll use the Site footer section</li>
>     </ul>
> 
>     <div className="flex justify-center items-center  rounded-md p-4 mt-4">
>       <img
>         src="/assets/chatbot/ghost/ghost-code-3.png"
>         alt="Ghost Code Injection Area"
>         style={{ width: "100%" }}
>         className="rounded-md object-contain shadow-lg"
>       />
>     </div>
>   </li>
> 
>   <li>
>     <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
>       Get Your YourGPT AI Agent Script
>     </div>
>     <ul>
>       <li>
>         Log in to your{" "}
>         <a
>           href="https://chatbot.yourgpt.ai/dashboard/"
>           className="font-bold no-underline hover:text-blue-600"
>           target="_blank"
>         >
>           YourGPT Dashboard
>         </a>
>       </li>
>       <li>Navigate to the <strong>"Integration"</strong> section in your dashboard</li>
>       <li>Find your AI Agent's widget script (it will look similar to the example below)</li>
>       <li>Click the <strong>"Copy"</strong> button to copy the entire script to your clipboard</li>
>     </ul>
> 
>     <div className="flex justify-center items-center  rounded-md p-4 mt-4">
>       <img
>         src="/assets/chatbot/ghost/ygc-script-4.png"
>         alt="YourGPT AI Agent Script"
>         style={{ width: "100%" }}
>         className="rounded-md object-contain shadow-lg"
>       />
>     </div>
>   </li>
> 
>   <li>
>     <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
>       Add Script to Ghost
>     </div>
>     <ul>
>       <li>Return to your Ghost admin Code Injection page</li>
>       <li>Paste the copied YourGPT AI Agent script into the <strong>"Site Footer"</strong> field</li>
>       <li>Make sure the entire script is properly pasted without any modifications</li>
>       <li>The script will automatically configure your AI Agent with your custom settings</li>
>     </ul>
> 
>     <div className="flex justify-center items-center rounded-md p-4 mt-4">
>       <img
>         src="/assets/chatbot/ghost/code-inject-5.png"
>         alt="Paste AI Agent Code in Ghost"
>         style={{ width: "100%" }}
>         className="rounded-md object-contain shadow-lg"
>       />
>     </div>
>   </li>
> 
>   <li>
>     <div className="font-bold dark:text-gray-300 text-lg md:text-xl">
>       Save Changes &amp; Verify
>     </div>
>     <ul>
>       <li>Click the <strong>"Save"</strong> button at the bottom of the Code Injection page</li>
>       <li>Visit your Ghost website in a new browser tab to verify the installation</li>
>       <li>You should see the YourGPT AI Agent chat widget appear on your site (typically in the bottom-right corner)</li>
>       <li>Click on the widget to test that it opens correctly and responds to queries</li>
>     </ul>
>   </li>
> </ol>
> 
> <Callout title="Pro Tip" type="tip">
> Test your AI Agent on multiple devices (desktop, tablet, mobile) to ensure responsive behavior across all screen sizes.

## Troubleshooting

The AI Agent not appearing or performance issues? Try these troubleshooting steps:

#### AI Agent Not Appearing

* Clear your browser cache and reload the page
* Verify the script was saved in Code Injection
* Check for JavaScript errors in your browser console
* Ensure no ad-blockers are preventing the widget from loading

#### Script Conflicts

* Try moving the script to the Site Header instead
* Check if your Ghost theme has JavaScript that might conflict
* Disable other chat widgets or popups that might interfere

#### Performance Issues

* Optimize your AI Agent's knowledge base size
* Consider using the footer installation method
* Check your Ghost site's overall performance and hosting

> **SUCCESS:** Your YourGPT AI Agent is now successfully integrated with your Ghost website, providing intelligent assistance to your visitors 24/7 and enhancing their overall experience.