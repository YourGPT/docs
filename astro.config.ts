import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import starlightImageZoom from 'starlight-image-zoom';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://docs.yourgpt.ai',
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
    "/chatbot/integrations/whatsapp": "/chatbot/integrations/social/whatsapp",
  },
  integrations: [
    starlight({
      title: 'YourGPT',
      description: 'YourGPT Chatbot Documentation',
      logo: {
        light: './src/assets/yourgpt-dark.svg',
        dark: './src/assets/yourgpt-white.svg',
      },
      favicon: '/ygc-docs.ico',
      social: [
        {
          label: 'YouTube',
          icon: 'youtube',
          href: 'https://www.youtube.com/@YourGPTAI',
        },
        {
          label: 'Twitter',
          icon: 'x.com',
          href: 'https://x.com/YourGPTAI',
        },
      ],
      components: {
        Hero: './src/components/Landing/Hero.astro',
        Sidebar: './src/components/Sidebar/index.astro',
        SiteTitle: './src/components/starlight/SiteTitle.astro',
        Pagination: './src/components/CustomPagination.astro',
        Header: './src/components/starlight/Header.astro',
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        Head: './src/components/starlight/Head.astro',
        Footer: './src/components/starlight/Footer.astro',
        // Search: './src/components/search/Search.astro',
      },
      plugins: [starlightImageZoom()],
      customCss: [
        "./src/tailwind.css",
        "./src/styles/custom.css",
        "./src/styles/sidebar.css",
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:site',
            content: '@YourGPTAI',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'YourGPT Documentation',
          },
        },
        {
          tag: 'style',
          content: `
            aside a, nav a, .accordion-trigger, [data-accordion-trigger], .sidebar a, 
            .custom-sidebar a, .mobile-sidebar a {
              text-decoration: none !important;
              border-bottom: none !important;
            }
            .accordion-item, [data-accordion-item], .border-b {
              border: none !important;
              border-bottom: none !important;
            }
            
            /* Smooth page transitions */
            html {
              scroll-behavior: smooth;
            }
            
            /* Prevent content flash during navigation */
            .sl-content {
              opacity: 1 !important;
              transition: opacity 0.1s ease-in-out;
            }
            
            /* Ensure smooth transitions for all content */
            .sl-content * {
              transition: none !important;
            }
            
            /* Optimize for instant page loads */
            .sl-content {
              will-change: auto;
            }
            
            /* Prevent any loading indicators */
            .loading-indicator,
            .page-loading,
            .transition-loading {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
            }
          `
        },
      ],
    }),
    react(),
    tailwind({ applyBaseStyles: true }),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/react-accordion', '@radix-ui/react-collapsible', '@radix-ui/react-dialog'],
    },
    optimizeDeps: {
      include: ['@radix-ui/react-accordion', '@radix-ui/react-collapsible', '@radix-ui/react-dialog'],
    },
  },
});