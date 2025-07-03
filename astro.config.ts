import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from "starlight-image-zoom";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://docs.yourgpt.ai',
  integrations: [starlight({
    title: "YourGPT", // Set a proper title to avoid empty title causing duplicate pipes
    description: "YourGPT Chatbot Documentation",
    logo: {
      src: "./src/assets/yourgpt.svg",
    },
    favicon: "/docs-yourgpt.ico",
    social: {
      youtube: "https://www.youtube.com/@YourGPTAI",
      twitter: "https://x.com/YourGPTAI",
    },
    components: {
      Hero: "./src/components/Landing/Hero.astro",
      Sidebar: "./src/components/Sidebar.astro",
      SiteTitle: "./src/components/starlight/SiteTitle.astro",
      // Search: './src/components/starlight/Search.astro',
      Pagination: './src/components/CustomPagination.astro',
      Header: './src/components/starlight/Header.astro',
      ThemeSelect: './src/components/starlight/ThemeSelect.astro',
      Head: './src/components/starlight/Head.astro',
      Footer: './src/components/starlight/Footer.astro',
    },
    plugins: [starlightImageZoom()],
    customCss: [
      // Path to your Tailwind base styles:
      "./src/tailwind.css",
      // Path to your custom CSS file:
      "./src/styles/custom.css",
    ],
    head: [
      // Twitter card
      {
        tag: 'meta',
        attrs: {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      },
      // Base canonical URL - individual pages can override this
      {
        tag: 'link',
        attrs: {
          rel: 'canonical',
          href: 'https://docs.yourgpt.ai',
        },
      },
    ],
  }), react(), tailwind({
    applyBaseStyles: true,
  }), sitemap()],
  redirects: {
    "/chatbot": "/chatbot/introduction",
    "/chatbot/studio/elements/intent-and-events": "/chatbot/studio/elements/intents",
    "/chatbot/studio/elements/intent-and-entities": "/chatbot/studio/elements/intents",
    "/chatbot/studio/elements/message": "/chatbot/studio/elements/messages",
    "/chatbot/other-information": "/chatbot/other/other-information",
    "/chatbot/other/debug-lab": "/chatbot/other/debugging/ai-refuse-to-answer",
    "/chatbot/changelog": "/changelogs",
    "/chatbot/changelogs": "/changelogs",
    "chatbot/other/other-information": "/chatbot/other/role-management",
    // add redirect for the subprocessor to trust center
    "/chatbot/integrations/whatsapp": "/chatbot/integrations/social/whatsapp",

    // LLM Spark redirects
    // "llm-spark": "/",
    // "llm-spark/introduction": "/",
    // "llm-spark/prompt-testing": "/",
    // "llm-spark/api-documentation": "/",
    // "llm-spark/templates": "/",
  },

});