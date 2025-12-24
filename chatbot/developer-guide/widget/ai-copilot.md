# AI Copilot

> Transform your chatbot into an intelligent AI agent capable of performing complex tasks, executing code, integrating with APIs, and gathering real-time information.

## Overview

**AI Copilot** transforms your chatbot from a simple Q&A assistant into an intelligent AI agent that can perform complex tasks, make decisions, and take real-time actions in your application.

With AI Copilot, your chatbot can:
- **Automate complex workflows** — perform multi-step tasks that require decision-making
- **Execute code safely** — run scripts, calculations, and data analysis
- **Integrate with external services** — connect to APIs, payment processors, CRMs, and more
- **Gather real-time information** — search the web, fetch live data, and verify sources

<Callout type="warning" title="Agent Mode Required">
AI Copilot features are only available when **Agent Mode** is enabled in your YourGPT Dashboard. Make sure to enable Agent Mode before using these capabilities.
</Callout>

AI Copilot is powered by the [@yourgpt/widget-web-sdk](https://www.npmjs.com/package/@yourgpt/widget-web-sdk) package, which provides programmatic control over your chatbot's advanced capabilities.

## What You Can Build

AI Copilot gives you four powerful tools to build intelligent, action-taking chatbots:

### AI Actions

Build custom functions that your chatbot can trigger based on user requests. AI Actions let your chatbot perform real operations in your application.

**What you can build:**
- **User account creation** — automatically create accounts with user confirmation
- **File operations** — upload, download, delete, or organize files
- **Data processing** — transform, analyze, or export user data
- **Form submissions** — submit forms, create tickets, or register events
- **Content management** — create, update, or publish content
- **Workflow automation** — trigger multi-step business processes

**Example capabilities:**
```typescript
// Your chatbot can trigger actions like:
- Create user account with email verification
- Process payment with confirmation dialog
- Schedule appointment and send calendar invite
- Generate report and email it to user
- Update CRM record with conversation context
```

### Code Execution

Build applications where your chatbot can safely execute code to perform calculations, analyze data, or generate dynamic content.

**What you can build:**
- **Data analysis tools** — run statistical analysis, generate charts, process datasets
- **Calculation engines** — perform complex calculations, financial modeling, unit conversions
- **Dynamic content generation** — create personalized content, generate reports, build visualizations
- **Testing environments** — validate code snippets, test algorithms, debug scripts
- **Data transformation** — convert formats, clean data, merge datasets

**Example capabilities:**
```typescript
// Your chatbot can execute code to:
- Analyze sales data and generate insights
- Calculate loan payments with different interest rates
- Generate personalized email templates
- Process CSV files and create summaries
- Run data validation scripts
```

### API Integration

Build integrations that connect your chatbot to external services, enabling it to interact with the broader ecosystem of tools and platforms.

**What you can build:**
- **Payment processing** — integrate with Stripe, PayPal, or other payment gateways
- **CRM updates** — sync conversations to Salesforce, HubSpot, or custom CRMs
- **Email services** — send emails via SendGrid, Mailchimp, or SMTP
- **Third-party APIs** — connect to weather services, stock APIs, translation services
- **Webhook triggers** — trigger external workflows, notify systems, update databases
- **Authentication** — verify users, check permissions, manage sessions

**Example capabilities:**
```typescript
// Your chatbot can integrate with:
- Payment gateways for checkout flows
- CRM systems to update customer records
- Email services to send notifications
- Calendar APIs to schedule meetings
- Inventory systems to check stock levels
```

### Web Search

Build features that enable your chatbot to gather real-time information from the internet, keeping responses current and accurate.

**What you can build:**
- **Live data fetching** — get current prices, weather, news, or stock information
- **Content summarization** — fetch and summarize articles, research papers, or documentation
- **Source verification** — verify facts, check citations, validate claims
- **Research assistance** — gather information from multiple sources and synthesize insights
- **Trend analysis** — track current trends, monitor social media, analyze market data

**Example capabilities:**
```typescript
// Your chatbot can search the web to:
- Get current weather for any location
- Find latest product reviews and prices
- Research topics and provide citations
- Verify news articles and fact-check claims
- Gather competitive intelligence
```

## Examples & Use Cases

See how developers are using AI Copilot to build intelligent, action-taking experiences:

### 1. Ecommerce Copilot

<div className="relative aspect-video my-6">
<iframe  src="https://www.youtube.com/embed/mqcBSMpeFD0?si=c0P7k-JFmUEBZT4z"
  title="Ecommerce Copilot Demo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowFullScreen
  className="absolute inset-0 w-full h-full rounded-lg"
  />
</div>

<div className="my-6 grid gap-6 md:grid-cols-2">
  <Card title="Instant Product Discovery">
    Help customers find exactly what they're looking for through natural conversation. The AI understands product queries and guides users to the right items instantly.
  </Card>

  <Card title="Streamlined Checkout">
    Reduce cart abandonment by enabling customers to complete purchases in one conversational flow—no more multi-step checkout forms.
  </Card>
</div>

<Callout type="info" title="View Example">
  See the complete implementation in our [Shopify Copilot Example](https://github.com/YourGPT/web-sdk/tree/main/examples/shopify-copilot).
</Callout>

### 2. Travel & Booking Copilot

<div className="relative aspect-video my-6">
  <iframe  src="https://www.youtube.com/embed/EgbcKw0s9-s" 
  title="Travel AI Copilot Powered by YourGPT" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowFullScreen
  className="absolute inset-0 w-full h-full rounded-lg"
  />
</div>

<div className="my-6 grid gap-6 md:grid-cols-2">
  <Card title="Conversational Search">
    Let users search for accommodations using natural language like "find a budget hotel in Bali" and get personalized recommendations instantly.
  </Card>

  <Card title="One-Step Booking">
    Complete the entire booking process through conversation—from search to confirmation—without navigating complex booking forms.
  </Card>
</div>

<Callout type="info" title="View Example">
  See the complete implementation in our [Travel Copilot Example](https://github.com/YourGPT/web-sdk/tree/main/examples/travel-copilot).
</Callout>

### 3. Productivity Copilot

<div className="relative aspect-video my-6">
  <iframe src="https://www.youtube.com/embed/jTm_YVj1_IA" 
  title="Productivity AI Copilot Powered by YourGPT – Automate Tasks and Personalise Workflows Instantly"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
  allowFullScreen
  className="absolute inset-0 w-full h-full rounded-lg"
  />
</div>

<div className="my-6 grid gap-6 md:grid-cols-2">
  <Card title="AI-Powered Task Management">
    Enable users to manage tasks through simple commands like "Add a task" or "Mark task as complete" with instant UI updates.
  </Card>

  <Card title="Dynamic UI Customization">
    Let users customize their experience through AI commands—change themes, adjust settings, or toggle features without clicking through menus.
  </Card>
</div>

<Callout type="info" title="View Example">
  See the complete implementation in our [Todo List Copilot Example](https://github.com/YourGPT/web-sdk/tree/main/examples/copilot-todo-list-next-js).
</Callout>

### 4. Website Navigation Copilot

<div className="relative aspect-video my-6">
<iframe src="https://www.youtube.com/embed/7-ENSNjESPQ"
  title="YourGPT Web Copilot – Navigate, Capture, and Support Users Effortlessly"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
  allowFullScreen
  className="absolute inset-0 w-full h-full rounded-lg"
  />
</div>

<div className="my-6 grid gap-6 md:grid-cols-2">
  <Card title="Instant Answers">
    Provide immediate answers to common questions like "What are your pricing plans?" or "How does this feature work?" without users having to search.
  </Card>

  <Card title="Smart Redirection">
    Intelligently guide users to relevant sections—when they ask "Show me the documentation," the AI takes them directly to the right page.
  </Card>
</div>

<Callout type="info" title="View Example">
  Explore [more examples](https://github.com/YourGPT/web-sdk/tree/main/examples) in our GitHub repository.
</Callout>

## Resources

To start building with AI Copilot, explore these resources:

- **[@yourgpt/widget-web-sdk](https://www.npmjs.com/package/@yourgpt/widget-web-sdk)** — The npm package that powers AI Copilot capabilities
- **[GitHub Repository](https://github.com/YourGPT/web-sdk)** — Source code, examples, and detailed documentation
- **[Web SDK Documentation](/chatbot/developer-guide/web-sdks/npm-package)** — Complete guide to using the Web SDK
- **[Discord Community](https://discord.com/invite/57C9uTkD6g)** — Get help, share examples, and connect with other developers

<Callout type="note" title="Ready to Get Started?">
For installation and setup instructions, see the [Web SDK Installation Guide](/chatbot/developer-guide/web-sdks/npm-package). This guide focuses on what you can build—check the installation docs when you're ready to implement.
</Callout>