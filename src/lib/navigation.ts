export interface NavLink {
  href: string;
  label: string;
}

export const sidebarNavigation = [
  // Getting Started
  { href: "/chatbot/introduction", label: "Introduction" },
  { href: "/chatbot/what-is-yourgpt-chatbot-how-it-works", label: "About YourGPT" },
  { href: "/chatbot/setup", label: "Setup" },
  { href: "/chatbot/link-shareable-chatbot", label: "Shareable Chatbot" },
  
  // Training
  { href: "/chatbot/training", label: "Training Guide" },
  { href: "/chatbot/knowledge-source-integration", label: "Training Integration" },
  
  // Customization
  { href: "/chatbot/how-to-change-the-apperance-of-your-chatbot", label: "Appearance" },
  { href: "/chatbot/how-to-change-the-widget-style", label: "Custom Chat Widget Theme" },
  { href: "/chatbot/how-to-customize-chatbot-behavior", label: "Behavior" },
  { href: "/chatbot/prompts/example", label: "Bot Persona Example" },
  { href: "/chatbot/how-to-add-custom-domain", label: "Custom Domain" },
  
  // Customization SDK
  { href: "/chatbot/customization/sdk/styling", label: "Styling" },
  { href: "/chatbot/customization/sdk/web", label: "Web/SDK" },
  { href: "/chatbot/customization/sdk/copilot", label: "Copilot" },
  { href: "/chatbot/customization/sdk/identity-verification", label: "Identity Verification" },
  { href: "/chatbot/customization/sdk/gamification", label: "Support Gamification" },
  { href: "/chatbot/customization/sdk/sales-gamification", label: "Sales Gamification" },
  
  // Integrations - Chatbots
  { href: "/chatbot/integrations/chatbots/crisp", label: "Crisp" },
  { href: "/chatbot/integrations/chatbots/intercom", label: "Intercom" },
  
  // Integrations - Website Builders
  { href: "/chatbot/integrations/website/wordpress", label: "WordPress" },
  { href: "/chatbot/integrations/website/carrd", label: "Carrd" },
  { href: "/chatbot/integrations/website/shopify", label: "Shopify" },
  { href: "/chatbot/integrations/website/wix", label: "Wix" },
  { href: "/chatbot/integrations/website/squarespace", label: "Squarespace" },
  { href: "/chatbot/integrations/website/webflow", label: "Webflow" },
  { href: "/chatbot/integrations/website/bigcommerce", label: "BigCommerce" },
  { href: "/chatbot/integrations/website/bubble", label: "Bubble" },
  { href: "/chatbot/integrations/website/framer", label: "Framer" },
  { href: "/chatbot/integrations/website/ghost", label: "Ghost" },
  { href: "/chatbot/integrations/website/prestashop", label: "PrestaShop" },
  { href: "/chatbot/integrations/website/how-to-setup-chatbot-on-my-website", label: "HTML Website" },
  
  // Integrations - Social Platforms
  { href: "/chatbot/integrations/social/slack", label: "Slack" },
  { href: "/chatbot/integrations/social/discord", label: "Discord" },
  { href: "/chatbot/integrations/social/whatsapp", label: "WhatsApp" },
  { href: "/chatbot/integrations/social/instagram", label: "Instagram" },
  { href: "/chatbot/integrations/social/messenger", label: "Messenger" },
  { href: "/chatbot/integrations/social/telegram", label: "Telegram" },
  { href: "/chatbot/integrations/social/line", label: "Line" },
  { href: "/chatbot/integrations/social/twilio-sms", label: "Twilio SMS" },
  { href: "/chatbot/integrations/social/twilio-voice", label: "Twilio Voice" },
  
  // Integrations - Connectors
  { href: "/chatbot/integrations/connectors/zapier", label: "Zapier" },
  { href: "/chatbot/integrations/connectors/pabbly", label: "Pabbly" },
  { href: "/chatbot/integrations/connectors/make", label: "Make.com" },
  { href: "/chatbot/integrations/connectors/n8n", label: "n8n" },
  
  // Integrations - Voice AI
  { href: "/chatbot/integrations/voice/phone", label: "Phone" },
  
  // Other Integrations
  { href: "/chatbot/integrations/api-integration", label: "API Integration" },
  { href: "/chatbot/integrations/mcp", label: "MCP" },
  { href: "/chatbot/integrations/webhooks", label: "Webhooks" },
  
  // Core Features
  { href: "/chatbot/functions", label: "Functions" },
  { href: "/chatbot/custom-sso", label: "Custom SSO" },
  { href: "/chatbot/triggers", label: "Triggers" },
  
  // AI Studio Elements
  { href: "/chatbot/studio/elements/intents", label: "Intents" },
  { href: "/chatbot/studio/elements/events", label: "Events" },
  { href: "/chatbot/studio/elements/entities", label: "Entities" },
  { href: "/chatbot/studio/elements/webhook", label: "Webhook" },
  { href: "/chatbot/studio/elements/ai-response", label: "AI Response" },
  { href: "/chatbot/studio/elements/ai-retrieval", label: "AI Retrieval" },
  { href: "/chatbot/studio/elements/ai-task", label: "AI Task" },
  { href: "/chatbot/studio/elements/messages", label: "Messages" },
  { href: "/chatbot/studio/elements/variables", label: "Variables" },
  { href: "/chatbot/studio/elements/listeners", label: "Listeners" },
  { href: "/chatbot/studio/elements/conditions", label: "Conditions" },
  { href: "/chatbot/studio/elements/validate", label: "Validate" },
  { href: "/chatbot/studio/elements/advanced", label: "Advanced Options" },
  
  // AI Studio Advanced Options
  { href: "/chatbot/studio/elements/advanced/api-calling", label: "API Calls" },
  { href: "/chatbot/studio/elements/advanced/wait", label: "Wait" },
  { href: "/chatbot/studio/elements/advanced/sets", label: "Sets" },
  { href: "/chatbot/studio/elements/advanced/code-execution", label: "Code Execution" },
  { href: "/chatbot/studio/elements/advanced/component", label: "Component" },
  { href: "/chatbot/studio/elements/advanced/actions", label: "Actions" },
  
  // Other
  { href: "/chatbot/other/automated-responses", label: "Automated Responses" },
  { href: "/chatbot/other/connected-chatbots", label: "Connected Chatbots" },
  { href: "/chatbot/other/role-management", label: "Role Management" },
  { href: "/chatbot/other/ai-models", label: "AI Models" },
  { href: "/chatbot/queue-replies", label: "Queue Replies" },
  { href: "/chatbot/other/security", label: "Security" },
  { href: "/chatbot/other/smart-learning", label: "Smart Learning" },
  
  // Debugging
  { href: "/chatbot/other/debugging/ai-refuse-to-answer", label: "AI Refuse to answer" },
  { href: "/chatbot/other/debugging/incorrect-ai-response", label: "Incorrect Answer" },
  { href: "/chatbot/other/debugging/incomplete-ai-response", label: "Incomplete Answer" },
  { href: "/chatbot/other/debugging/training-view-source", label: "Training View Source" },
  { href: "/chatbot/other/debugging/session-logger", label: "View Chat Session Logs" },
];

/**
 * Get all navigation links from the sidebar structure
 * @returns Array of navigation links
 */
export function getAllNavigationLinks(): NavLink[] {
  return sidebarNavigation;
}

/**
 * Find the current page index in the navigation
 * @param currentUrl - The current page URL
 * @returns The index of the current page, or -1 if not found
 */
export function findCurrentPageIndex(currentUrl: string): number {
  return sidebarNavigation.findIndex(page => page.href === currentUrl);
}

/**
 * Get previous and next pages for pagination
 * @param currentUrl - The current page URL
 * @returns Object with prev and next page information
 */
export function getPaginationPages(currentUrl: string): {
  prev: NavLink | null;
  next: NavLink | null;
  currentIndex: number;
} {
  const currentIndex = findCurrentPageIndex(currentUrl);
  
  if (currentIndex === -1) {
    return { prev: null, next: null, currentIndex: -1 };
  }
  
  const prev = currentIndex > 0 ? sidebarNavigation[currentIndex - 1] : null;
  const next = currentIndex < sidebarNavigation.length - 1 ? sidebarNavigation[currentIndex + 1] : null;
  
  return { prev, next, currentIndex };
} 