# WordPress

> Add your AI chatbot to WordPress in minutes using our official plugin

Integrate YourGPT Chatbot into your WordPress website to provide instant, AI-powered support. Our official plugin makes the setup effortless and requires no coding.

<Callout title="WordPress Plugin Benefits">
  The official plugin automatically handles script injection and works seamlessly with all WordPress themes and page builders like **Elementor**, **Divi**, and **Beaver Builder**.
</Callout>

---

## Quick Installation

The fastest way to get started is by using the official plugin from the WordPress marketplace.

## WordPress Plugin Installation

To install the plugin, follow these steps:

### Prerequisites
- A **YourGPT account** with an active chatbot.
- **Admin access** to your WordPress site.
- Your unique **Widget ID** from the YourGPT dashboard.

<Steps>
  <Step title="Search and Install">
    Log in to your WordPress dashboard, navigate to **Plugins → Add New**, and search for **"YourGPT Chatbot"**.

  
      ![Add New Plugin](/assets/chatbot/wordpress/wordpress-one.png)
  
  </Step>

  <Step title="Activate Plugin">
    Click **Install Now**, then **Activate** the plugin to enable it on your site.

      ![Install YourGPT Chatbot](/assets/chatbot/wordpress/wordpress-ygc-install.png)

  </Step>

  <Step title="Configure Widget ID">
    Go to **Settings → YourGPT Chatbot**, paste your **Widget ID**, and click **Save Changes**.

    ![Plugin Settings](/assets/chatbot/wordpress/6.png)

  </Step>

  <Step title="Verify Live Chatbot">
    Visit your website. Your AI chatbot should now be active in the bottom-right corner.

    ![Live Chatbot](/assets/chatbot/wordpress/7.png)

  </Step>
</Steps>

---

## WooCommerce Integration

Connecting your chatbot to WooCommerce enables advanced features like **product search**, **order status tracking**, and **customer cart assistance**.

### Setup API Credentials

Follow these steps to generate the required API credentials for your chatbot:

<Steps>
  <Step title="Access REST API Settings">
    In WordPress, go to **WooCommerce → Settings → Advanced → REST API** and click **Add Key**.

      ![WooCommerce Settings](/assets/chatbot/wordpress/wordpress1.png)
  </Step>

  <Step title="Generate API Key">
    Provide a description (e.g., "YourGPT AI") and set Permissions to **Read/Write**.

    ![Add API Key](/assets/chatbot/wordpress/wordpress2.png)
    ![Set Permissions](/assets/chatbot/wordpress/wordpress3.png)
  </Step>

  <Step title="Save Securely">
    Click **Generate API Key**. Copy both the **Consumer Key** and **Consumer Secret**.
    
    <Callout type="warning" title="Important">
      Save these keys securely. The Consumer Secret will not be shown again after you leave this page.
    </Callout>
  </Step>

  <Step title="Finalize Connection">
    Paste the keys into the WooCommerce integration section of your [YourGPT Dashboard](https://chatbot.yourgpt.ai/dashboard/).
  </Step>
</Steps>

---

## Advanced & Troubleshooting

<AccordionGroup>
  <Accordion title="Manual GitHub Installation">
    If you prefer manual installation:
    1. Download the `source.zip` from our [GitHub Releases](https://github.com/YourGPT/yourgpt-chatbot-wordpress-plugin/releases).
    2. Go to **Plugins → Add New → Upload Plugin**.
    3. Choose the zip file and click **Install Now**.
    4. **Activate** and follow the configuration steps above.
  </Accordion>

  <Accordion title="Common Issues">
    - **Widget not appearing?** Double-check your Widget ID and ensure the plugin is active.
    - **Cache conflicts?** Clear your site cache (WP Rocket, Autoptimize, etc.) after updating settings.
    - **Security plugins?** Ensure `chatbot.yourgpt.ai` is whitelisted in your firewall settings.
  </Accordion>

  <Accordion title="Custom Styling">
    Customize colors, positioning, and behavior directly from the **Widget Settings** in your YourGPT Dashboard. Updates reflect instantly without clearing WordPress cache.
  </Accordion>
</AccordionGroup>

---

## Next Steps

Maximize your chatbot's performance with these advanced features:

<Cards>
  <Card title="Train Your Knowledge Base" href="/chatbot/training/guide">
    Upload documents and URLs to make your AI truly expert in your business.
  </Card>
  <Card title="Design Your Widget"  href="/chatbot/chatbot-widget/appearance/customization">
    Perfect the look and feel to match your brand identity.
  </Card>
  <Card title="Create Custom Workflows" href="/chatbot/studio/elements">
    Create multi-step flows for lead gen and support using AI Studio.
  </Card>
  <Card title="Connecting with Other Integrations" href="/chatbot/integrations/social-platforms">
    Connect your chatbot to other integrations like whatsapp, Instagram, Telegram, and more.
  </Card>
</Cards>

If you need help, our support team is available 24/7 to help with any technical issues.

* [Mail YourGPT Support](mailto:support@yourgpt.ai)
* [Chatbot Live Support](https://yourgpt.ai/)

Enjoy an enhanced user experience with GPT Chatbot seamlessly integrated into your WordPress site!