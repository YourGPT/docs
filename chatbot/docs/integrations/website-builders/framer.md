# Framer

> Guide to integrating the YourGPT AI Agent with your Framer website

<Callout title="Transform Your Framer Website with AI Agent" type="tip" />

Enhance your Framer website with smart AI Agent! This guide helps you add a GPT AI Agent to your Framer site that can answer visitor questions, provide 24/7 assistance, and dramatically improve user engagement across your entire website.

##  Adding an AI Agent to Framer 

Framer's custom code feature makes it easy to add your YourGPT AI Agent to your website. This seamless integration works with just a few simple steps and doesn't require any coding knowledge.

You can deploy the AI Agent globally across your entire Framer site or selectively on specific pages. For maximum impact and visitor assistance, we recommend the global installation method outlined below.

<ol>

<li>
  <div className="font-bold dark:text-gray-300 text-lg md:text-xl">Sign in to Framer</div>
  <ul>
    <li>Open your web browser and navigate to <a href="https://framer.com" target="_blank" className="font-bold no-underline">Framer</a></li>
    <li>Enter your email address and password to access your Framer dashboard</li>
    <li>Once logged in, you'll see your Framer projects and workspace</li>
  </ul>

  <div className="flex justify-center items-center rounded-md p-4 mt-4">
    <img
      src="/assets/chatbot/framer/framer-login.png"
      alt="Sign in to Framer Dashboard"
      className="rounded-md object-contain shadow-lg w-full"
    />
  </div>
</li>

<br />

<li>
  <div className="font-bold dark:text-gray-300 text-lg md:text-xl">Access Your Framer Project</div>
  <ul>
    <li>From your Framer dashboard, locate and select the project you want to add the AI Agent to</li>
    <li>Navigate to your project's workspace where you can edit your site</li>
    <li>Make sure you have editor or admin permissions for the project</li>
  </ul>

  <div className="flex justify-center items-center rounded-md p-4 mt-4">
    <img
      src="/assets/chatbot/framer/workspace-framer.png"
      alt="Navigate to Framer Project Workspace"
      className="rounded-md object-contain shadow-lg w-full"
    />
  </div>
</li>

<br />

<li>
  <div className="font-bold dark:text-gray-300 text-lg md:text-xl">Get Your YourGPT AI Agent Script</div>
  <ul>
    <li>
      Log in to your <a href="https://chatbot.yourgpt.ai/dashboard/" className="font-bold no-underline hover:text-blue-600" target="_blank">YourGPT Dashboard</a>
    </li>
    <li>Navigate to the <strong>"Integration"</strong> section in your dashboard</li>
    <li>Find your AI Agent's widget script (it will look similar to the example below)</li>
    <li>Click the <strong>"Copy"</strong> button to copy the entire script to your clipboard</li>
  </ul>

  <div className="flex justify-center items-center  rounded-md p-4 mt-4">
    <img
      src="/assets/chatbot/framer/ygc-script.png"
      alt="YourGPT AI Agent Script"
      className="rounded-md object-contain shadow-lg w-full"
    />
  </div>
</li>

<br />

<li>
  <div className="font-bold dark:text-gray-300 text-lg md:text-xl">Add Script to Framer</div>
  <ul>
    <li>In your Framer project, click on the <strong>"Settings"</strong> icon (usually a gear icon) in the top right</li>
    <li>Select <strong>"General"</strong> from the settings menu</li>
    <li>Scroll down to find the <strong>"Custom Code"</strong> section</li>
    <li>Paste the copied YourGPT AI Agent script into the <strong>"Head"</strong> field</li>
    <li>Make sure the entire script is properly pasted without any modifications</li>
    <li>Click <strong>"Save"</strong> to apply your changes</li>
  </ul>

  <div className="flex justify-center items-center rounded-md p-4 mt-4">
    <img
      src="/assets/chatbot/framer/framer-paste-code.png"
      alt="Paste AI Agent Code in Framer"
      className="rounded-md object-contain shadow-lg w-full"
    />
  </div>
</li>

<br />

<li>
  <div className="font-bold dark:text-gray-300 text-lg md:text-xl">Verify Installation</div>
  <ul>
    <li>Click on the <strong>"Preview"</strong> button in Framer to view your site</li>
    <li>You should see the YourGPT AI Agent chat widget appear on your site (typically in the bottom-right corner)</li>
    <li>Click on the widget to test that it opens correctly and responds to queries</li>
    <li>If you're satisfied with the placement and functionality, publish your site with the updated changes</li>
  </ul>
</li>

</ol>

<Callout title="Pro Tip" type="tip">
  Test your AI Agent on multiple devices (desktop, tablet, mobile) to ensure responsive behavior across all screen sizes.
</Callout>

## Troubleshooting 

The AI Agent not appearing or performance issues? Try these troubleshooting steps:

#### AI Agent Not Appearing

- Clear your browser cache and reload the page  
- Verify the script was saved in the Custom Code section  
- Check for JavaScript errors in your browser console (right-click > Inspect > Console)  
- Ensure no ad-blockers are preventing the widget from loading  
- Confirm your Framer site has been published with the latest changes  

#### Script Conflicts

- Check if your Framer site has other scripts that might conflict  
- Try moving the script to the Body section instead of Head  
- Disable other chat widgets or popups that might interfere  
- Ensure you're using the latest version of the YourGPT script  

#### Performance Issues

- Optimize your AI Agent's knowledge base size  
- Check your Framer site's overall performance  
- Consider enabling lazy loading in your YourGPT dashboard settings  

<Callout title="Need Help?" type="warning">
  For technical support with your Framer integration:
  <ul className="mt-2 space-y-1">
    <li>Email us at <a href="mailto:support@yourgpt.ai">support@yourgpt.ai</a></li>
    <li>Chat with us on <a href="https://discord.gg/z8PBs5ckcd">Discord Community</a></li>
    <li>Visit our <a href="https://yourgpt.ai/support">our website</a></li>
  </ul>
</Callout>

<Callout title="Congratulations!" type="success">
  Your AI Agent is now successfully integrated with your Framer website, providing intelligent assistance to your visitors 24/7 and enhancing their overall experience.
</Callout>