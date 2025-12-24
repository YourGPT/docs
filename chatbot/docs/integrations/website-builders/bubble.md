# Bubble

> Add the GPT Chatbot to your Bubble app using an HTML element or a global header script.

Integrate YourGPT Chatbot into Bubble in just a few steps.

<Callout title="Fastest Setup" type="tip">
  Use the Bubble header option to load the chatbot on every page without repeating steps.
</Callout>

---

## Installation

<Steps>
  <Step title="Copy your embed code">
    In the <a href="https://chatbot.yourgpt.ai/dashboard/" target="_blank" className="no-underline font-bold">YourGPT Dashboard</a>, go to <b>Integrations → Website Builders → Custom Website</b> and copy the JavaScript snippet.
  </Step>

  <Step title="Add an HTML element in Bubble">
    In the Bubble editor, drag an <b>HTML</b> element onto the page where you want the chatbot.
  </Step>

  <Step title="Paste the embed code">
    Open the HTML element settings and paste the YourGPT snippet. Save the page.
  </Step>

  <Step title="Preview the page">
    Click <b>Preview</b> to confirm the chatbot appears in your Bubble app.
  </Step>

  <Step title="Deploy to live">
    Deploy your Bubble app so the chatbot loads on every page.
  </Step>
</Steps>

<Callout type="success" title="All set!">
  Your chatbot should now appear in your Bubble app. If it’s not visible, review the troubleshooting tips below.
</Callout>

---

## Troubleshooting

<AccordionGroup>
  <Accordion title="Why isn’t my chatbot showing up in Bubble?">
    Make sure you have pasted the code snippet in the correct place (HTML element or global header), saved changes, and deployed your app to live. Also, try refreshing your site and disabling any ad or script blockers.
  </Accordion>
  <Accordion title="I see two chatbots on my Bubble page—why?">
    The script should only be added once—either via a single page’s HTML element or in the global header, not both. Remove any duplicate installs and redeploy.
  </Accordion>
  <Accordion title="Chatbot is hidden or not clickable">
    This can happen due to z-index or CSS conflicts. Adjust your widget’s z-index and appearance directly in <b>Widget Settings</b> from your YourGPT Dashboard, then redeploy your app.
  </Accordion>
  <Accordion title="Domain restriction or security issues">
    Double-check that your Bubble domain is whitelisted in your chatbot’s security settings on the YourGPT Dashboard so the widget will appear on your live site.
  </Accordion>
</AccordionGroup>

---

## Next Steps

<Cards>
  <Card title="Train the chatbot" href="/chatbot/training/guide">
    Add your knowledge base so answers match your business.
  </Card>
  <Card title="Customize the widget" href="/chatbot/chatbot-widget/appearance/customization">
    Match colors, positioning, and behavior to your Bubble app.
  </Card>
</Cards>

Need help? <a href='mailto:support@yourgpt.ai' className='font-bold no-underline' target='_blank'>Mail YourGPT Support</a> or <a href='https://yourgpt.ai/' className='font-bold no-underline' target='_blank'>Chatbot Live Support</a>.