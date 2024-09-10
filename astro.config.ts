import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from 'starlight-image-zoom'

export default defineConfig({
  integrations: [
    starlight({
      title: "",
      description: "YourGPT Chatbot Documentation",
      logo: {
        src: "./src/assets/yourgpt.svg",
      },
      favicon: "/favicon2.ico",
      social: {
        github: "https://github.com/yourgpt/",
        twitter: "https://twitter.com/yourgpt",
        slack: "https://yourgpt.ai",
      },
      sidebar: [
        {
          label: "Chatbot",
          items: [
            { label: "Introduction", link: "/chatbot/introduction" },
            {
              label: "About YourGPT Chatbot",
              link: "/chatbot/what-is-yourgpt-chatbot-how-it-works",
            },
            { label: "Setup", link: "/chatbot/setup" },
            {
              label: "Shareable Chatbot",
              link: "/chatbot/link-shareable-chatbot",
            },
            // {
            //   label: 'Training',
            //   items: [
            //     { label: 'Training Guide', link: '/chatbot/training' },
            //     { label: 'Best Practices', link: '/chatbot/training/best-practices' },
            //     { label: 'Structured Data', link: '/chatbot/training/structured-data' },
            //     { label: 'FAQs', link: '/chatbot/training/faqs' },
            //   ],
            // },
            {
              label: "Training Guide",
              link: "/chatbot/training",
            },
            // {
            //   label:"Prompt",
            //   items:[
            //     {label:"Example",link:"chatbot/prompts/example"},
            //   ]
            // },
            {
              label: "Integrations",
              items: [
                {
                  label: "Chatbot Integrations",
                  items: [
                    {
                      label: "Crisp",
                      link: "chatbot/integrations/chatbots/crisp",
                    },
                    {
                      label: "Intercom",
                      link: "chatbot/integrations/chatbots/intercom",
                    },
                  ],
                },
                {
                  label: "Website Builders",
                  items: [
                    {
                      label: "WordPress",
                      link: "chatbot/integrations/website/wordpress",
                    },
                    {
                      label: "carrd",
                      link: "chatbot/integrations/website/carrd",
                    },
                    {
                      label: "Shopify",
                      link: "chatbot/integrations/website/shopify",
                    },
                    { label: "Wix", link: "chatbot/integrations/website/wix" },
                    {
                      label: "Squarespace",
                      link: "chatbot/integrations/website/squarespace",
                    },
                    {
                      label: "Webflow",
                      link: "chatbot/integrations/website/webflow",
                    },
                    {
                      label: "BigCommerce",
                      link: "chatbot/integrations/website/bigcommerce",
                    },
                    {
                      label: "bubble",
                      link: "chatbot/integrations/website/bubble",
                    },
                    {
                      label: "HTML Website",
                      link: "chatbot/integrations/website/how-to-setup-chatbot-on-my-website",
                    },
                    {
                      label: "GPT Chatbot for Squarespace | Installation Guide",
                      link: "chatbot/integrations/website/squarespace",
                    },
                  ],
                },
                {
                  label: "Social Platforms",
                  items: [
                    {
                      label: "Slack",
                      link: "chatbot/integrations/social/slack",
                    },
                    {
                      label: "Discord",
                      link: "chatbot/integrations/social/discord",
                    },
                    {
                      label: "WhatsApp",
                      link: "chatbot/integrations/social/whatsapp",
                    },
                    {
                      label: "Instagram",
                      link: "chatbot/integrations/social/instagram",
                    },
                    {
                      label: "Messenger",
                      link: "chatbot/integrations/social/messenger",
                    },
                    {
                      label: "Telegram",
                      link: "chatbot/integrations/social/telegram",
                    },
                    { label: "Line", link: "chatbot/integrations/social/line" },
                    {
                      label: "Twilio SMS",
                      link: "chatbot/integrations/social/twilio-sms",
                    },
                    {
                      label: "Twilio Voice",
                      link: "chatbot/integrations/social/twilio-voice",
                    },
                  ],
                },
                {
                  label: "API Integration",
                  link: "chatbot/integrations/api-integration",
                },
              ],
            },
            {
              label: "Functions",
              link: "chatbot/functions",
            },
            {
              label: "Customization",
              items: [
                {
                  label: "Appearance",
                  link: "chatbot/how-to-change-the-apperance-of-your-chatbot",
                },
                {
                  label: "Behavior",
                  link: "/chatbot/how-to-customize-chatbot-behavior",
                },
                {
                  label: "Custom Domain",
                  link: "/chatbot/how-to-add-custom-domain",
                },
                {
                  label: "Prompts",
                  items: [
                    { label: "Example", link: "chatbot/prompts/example" },
                  ],
                },
                {
                  label: "Chatbot SDK",
                  items: [
                    {
                      label: "Styling",
                      link: "chatbot/customization/sdk/styling",
                    },
                    { label: "Web/SDK", link: "chatbot/customization/sdk/web" },
                  ],
                },
              ],
            },
            {
              label: "Studio",
              items: [
                { label: "Intents", link: "chatbot/studio/elements/intents" },
                { label: "Events", link: "chatbot/studio/elements/events" },
                { label: "Entities", link: "chatbot/studio/elements/entities" },
                { label: "Messages", link: "chatbot/studio/elements/messages" },
                {
                  label: "Variables",
                  link: "chatbot/studio/elements/variables",
                },
                {
                  label: "Listeners",
                  link: "chatbot/studio/elements/listeners",
                },
                {
                  label: "Advanced Options",
                  items: [
                    {
                      label: "API Calls",
                      link: "chatbot/studio/elements/advanced/api-calling",
                    },
                    {
                      label: "Sets",
                      link: "chatbot/studio/elements/advanced/sets",
                    },
                    {
                      label: "JavaScript Code Execution",
                      link: "chatbot/studio/elements/advanced/code-execution",
                    },
                    {
                      label: "Actions",
                      link: "chatbot/studio/elements/advanced/actions",
                    },
                  ],
                },
              ],
            },
            {
              label: "Other",
              items: [
                {
                  label: "Automated Responses",
                  link: "chatbot/other/automated-responses",
                },
                {
                  label: "Connected Chatbots",
                  link: "chatbot/other/connected-chatbots",
                },
                {
                  label: "Role & AI Models",
                  link: "chatbot/other/other-information",
                },
                { label: "Queue Replies", link: "chatbot/queue-replies" },
                { label: "Security", link: "chatbot/other/security" },
                {
                  label: "Debugging",
                  items: [
                    {
                      label: "AI Refuse to answer",
                      link: "chatbot/other/debugging/ai-refuse-to-answer",
                    },
                    {
                      label: "Incorrect Answer",
                      link: "chatbot/other/debugging/incorrect-ai-response",
                    },
                    {
                      label: "Incomplete Answer",
                      link: "chatbot/other/debugging/incomplete-ai-response",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "LLM Spark",
          items: [
            { label: "Introduction", link: "/llm-spark/introduction" },
            { label: "Prompt Testing", link: "/llm-spark/prompt-testing" },
            {
              label: "API Documentation",
              link: "/llm-spark/api-documentation",
            },
            { label: "Templates", link: "/llm-spark/templates" },
          ],
        },
      ],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
      plugins:[starlightImageZoom()],
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
    }),
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
