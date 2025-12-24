# Best Practices

> Optimize your YourGPT AI Agent performance and user experience with these proven configuration tips.

Improve your AI Agent’s reliability and usefulness by following these best practices. Clear instructions and well-organized data sources help ensure a better experience for your users.

> **IDEA:** Press <kbd>⌘</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows) in YourGPT to quickly search any page or setting.

## Refine AI Agent Instructions

Instructions act as the "brain" of your AI agent, defining its persona, tone, and behavior. Precise instructions ensure your AI remains focused and helpful. These are configured in your [Agent Persona settings](/chatbot/ai-agent-management/agent-persona), where you can define the agent prompt and restrictions.

> **TIP:** Your agent's persona is its personality—make it memorable! Instead of generic instructions, be specific:
>   
>   - ❌ "Be friendly" → ✅ "Use a warm, conversational tone like a helpful colleague"
>   - ❌ "Be professional" → ✅ "Maintain a formal tone suitable for B2B enterprise clients"
>   
>   **Quick win:** Browse our [Prompt Templates](/chatbot/ai-agent-management/prompt-templates) for industry-specific examples you can customize in minutes.

### Example: Support Agent Instructions

You can copy and adapt this example for your own agent. Update the bracketed information to fit your business.

  <details>
<summary>View Sample Instructions</summary>

```
    You are AI Customer Support Assistant for Acme. Your role is to help users with Acme-related questions, troubleshoot issues, and guide them in a clear, friendly, and professional way — always aiming to feel like a top-tier human support agent.  

    **Guidelines**  

    - Communicate in a warm, empathetic, conversational tone  
    - Keep answers concise (under 30 words) by default; expand only if the user asks or when needed for clarity  
    - Never guess; if information is missing, politely ask for details (e.g., error message, steps taken, screenshot)  
    - Confirm understanding with the user and avoid repetition  
    - Never repeat the same response multiple times  
    - If a question is outside Acme scope, politely decline in max 2 sentences and steer back to Acme topics  
    - Share relevant links in Markdown only when directly useful or requested  
    - Use clear Markdown formatting for lists and links  

    ---  

    **Availability**  
    Support hours: Monday–Friday, 10 am–8 pm IST  
    Current time: {{date format='dddd, MMMM Do YYYY, h:mm:ss a' timezone='Asia/Calcutta'}}  

    ---  

    **User Information**  
    {{#isset CONTACT.name}}  
    Name: {{CONTACT.name}}  
    {{/isset}}  

    ---  

    **Examples**  

    - If missing details:  
    > I understand this is frustrating. Could you please share the exact error message or describe what you see?  

    - Team not available:  
    > Our team is currently unavailable. They'll be back during our support hours: [Support hour]. But I'm here to help you!

    **Goal**  
    Provide accurate, empathetic, and well-formatted support that makes every Acme user feel heard and helped like from a customer support agent.
    ```
</details>

  
  <details>
<summary>View Restrictions (Guardrails)</summary>

```
    - Communicate in a warm, empathetic, conversational tone  
    - Keep answers concise (under 30 words) by default; expand only if the user asks or when needed for clarity  
    - Never guess; if information is missing, politely ask for details (e.g., error message, steps taken, screenshot)  
    - Confirm understanding with the user and avoid repetition  
    - Never repeat the same response multiple times  
    - If a question is outside Acme scope, politely decline in max 2 sentences and steer back to Acme topics  
    - Share relevant links in Markdown only when directly useful or requested  
    - Use clear Markdown formatting for lists and links
    ```
</details>

For more details, visit the [Agent Persona](/chatbot/ai-agent-management/agent-persona) guide. You can also explore [Prompt Templates](/chatbot/ai-agent-management/prompt-templates) for industry-specific examples and best practices.

## Optimize Data Source Quality

The quality of your AI agent's responses is directly tied to the clarity of your data sources. While YourGPT uses advanced scraping technology, well-structured content always yields better results. Learn more about all available [Training Sources](/chatbot/training/sources) and how to add them effectively.

> **INFO:** **Problem:** Complex layouts, popups, or JavaScript-heavy sites can prevent proper content extraction.
>   
>   **Solution:** Upload your content directly as:
>   - **PDF files** - Preserves formatting and structure
>   - **Plain Text** - Best for simple, text-heavy content
>   - **Documents** - Supports DOC, DOCX, and more formats
>   
>   **Pro tip:** For dynamic content, consider using [Website Links](/chatbot/training/sources/website-links) with specific page URLs rather than broad site scraping. Learn more in our [Training Guide](/chatbot/training/guide).

### Advanced Training for URLs

Use **Advanced Training Options** when a site needs custom crawling or cleanup. You can switch between **Custom** and **With AI**.

**Advanced Training Options for URLs**

With Advanced Training Options, you have precise control over how YourGPT gathers content from a website. Instead of simply selecting a list of actions, think through the flow you want the crawler to follow. 

For example, you might want the system to interact with dynamic content by clicking buttons, scrolling to reveal more information, waiting for certain elements to load, or even running small scripts if the site is particularly complex. Whenever you add an action that interacts with a part of the page, specify its CSS selector (like an ID, a class, or an attribute) so the tool knows exactly where to act. If content doesn't appear right away, you can insert a waiting period (measured in milliseconds) after a step to ensure everything loads before moving forward. To confirm that your configuration works as you intend, use the "Test URL" feature and make sure the crawler’s path brings up all the content you need before you save your setup.

Choosing what information to extract is just as important as defining the actions. For clarity, leave the "Extract only main content" setting turned on—this tells YourGPT to focus on the essential text and avoid picking up unnecessary parts like navigation bars or ads. If there are specific sections you want to ensure are included, add their selectors in the "Include Elements" area. If there’s page clutter you’d rather exclude (such as pop-ups, cookie banners, or footers), list those selectors in the "Exclude Elements" area. When you’re working with long pages, consider adjusting the chunk size and the amount of overlap between chunks so YourGPT breaks information up logically, which helps the AI keep related context together. The "Optimised Chunking" option further refines this process for lengthy or detailed pages.

For sites that change over time, set a retraining period to keep your data current—this way, YourGPT will revisit and update the content automatically as the site evolves. If a website is fairly static, you can enable "Skip Retraining" so it won’t be revisited. Finally, for better organization and future analysis, add descriptive tags to your sources. Tags let you categorize and quickly filter URLs for analytics and management as your collection of training sources expands.

> **TIP:** - Prefer stable selectors (`data-*` or semantic tags) over auto-generated class names.  
>   - Start with minimal steps; add extra clicks only when required to reveal content.  
>   - If a page still fails to load, upload a PDF or text export instead of over-complicating the crawl.

### Readability Comparison

Compare these examples to understand the difference between poorly and well-structured training data:

  <details>
<summary>❌ Poorly Structured Data</summary>

Our product pricing varies. Sometimes we have discounts but not always. Shipping takes a while, maybe a week or two. We accept returns but there are conditions. Contact us if you have questions about anything.
</details>

  <details>
<summary>✅ Well-Structured Data</summary>

**Product:** Premium Widget Pro  
    
    **Pricing:**
    - Standard Price: $99.99
    - Current Discount: 25% off (Limited Time)
    - Final Price: $74.99
    
    **Shipping Information:**
    - Standard Shipping: 5-7 business days (Free)
    - Express Shipping: 2-3 business days ($9.99)
    - International Shipping: 10-14 business days ($19.99)
    
    **Return Policy:**
    - 30-day money-back guarantee
    - Items must be unopened and in original packaging
    - Return shipping costs covered by customer
    - Refunds processed within 5-7 business days
    
    **Contact:**
    - Email: support@example.com
    - Phone: 1-800-EXAMPLE
    - Live Chat: Available Monday-Friday, 9 AM - 6 PM EST
</details>

> **NOTE:** YourGPT can process images *only* with OCR training, and image content inside PDFs is **not** supported. For tables, using Markdown table format is preferred for the best understanding.
> 
>   - **Images:** If you want the AI to understand information from images, ensure they are used in OCR training sources—not embedded inside PDFs.
>   - **Tables:** Whenever possible, provide tables as Markdown tables instead of table as screenshots or images. Markdown tables are structured for the best AI comprehension.
>   - **Charts:** Summarize key information from charts or graphs as bullet points or text descriptions; chart images themselves can't be interpreted unless OCR is used.
>   
>   For more tips on preparing your training data, see the [Training Best Practices](/chatbot/training/best-practices) guide.

## Helping Your AI Agent Share Useful Links

Enabling your AI agent to recommend and share relevant links (like pricing pages, support forms, or documentation) requires that you **explicitly include those URLs in your knowledge base or training data**. This is crucial, especially if you're using [Website Links](/chatbot/training/sources/website-links): the AI can read the text of a page but does **not** inherently know the URL.

> **WARNING:** Your AI won't "see" page addresses on its own. To make sure it can offer users helpful links, add the actual URLs into your training data—just like this:
>   ```
>   Pricing: https://yoursite.com/pricing
>   Support: https://yoursite.com/contact
>   Docs: https://yoursite.com/docs
>   ```
>   This ensures your chatbot can confidently share direct links where needed.

### Steps to Enable Effective Link Sharing

1. **Pick the right training source type** for navigation information:
   - [Plain Text/FAQs](/chatbot/training/sources/faqs-text): Simple lists like "Contact: [link]"
   - [Documents](/chatbot/training/sources/documents): Full site maps or more complex collections of links

2. **Write clear, structured content** pairing each destination ("Pricing Page," "Contact," "Docs," etc.) with its exact URL.

3. **Add or upload** this source directly into your knowledge base from the [Training Sources](/chatbot/training/sources) section.

4. **Test your chatbot** by asking for specific links (e.g., "What's your support page?") to confirm it provides correct, clickable URLs.

> **Tip:** Maintain your navigation links in one easily updatable source—this keeps them current and helps your agent guide users efficiently.

## Visual Responses with Markdown

You can enable your AI agent to send images by including specific instructions in your [Agent Persona](/chatbot/ai-agent-management/agent-persona) or providing image URLs in your training data using standard Markdown format: `![alt text](image-url)`. This works across all [Chatbot Widget](/chatbot/chatbot-widget) integrations.

> **TIP:** **Supported formats:** `.png`, `.jpg`, `.jpeg` (case-insensitive)
>   
>   **Best practices:**
>   - Use direct image URLs (not shortened links)
>   - Ensure images are publicly accessible
>   - Optimize file sizes for faster loading
>   - Include descriptive alt text: `![Product Screenshot](https://example.com/image.jpg)`

```markdown
"When a user asks about our team, show this image: ![Our Team](https://example.com/team-photo.jpg)"
```

## Select the Right AI Model

YourGPT offers multiple AI models to match different needs. The model you pick impacts response quality, speed, cost, and support for features like [Functions](/chatbot/ai-agent-management/functions).

### Model Types and Recommendations

- **Quick Support (Fast FAQ/Basic Q&A):** Use **Gemini Flash** or **GPT-5.1-mini** for speed and efficient customer service.

- **Complex Queries (Deep Reasoning):** Go with or **Claude 4.5 Sonnet** for technical support, analysis, and in-depth conversations.

- **Balanced (Speed & Quality):** Choose **Claude Haiku 4.5** for a middle ground of quality and cost.

See the [AI Models comparison](/chatbot/other/ai-and-usage/ai-models) page for detailed specs and guidance on which model best fits your use case.

## Refine Responses with "Revise" and Smart Learning

Don't forget to monitor your conversation logs in the **Activity** tab. If you see a response that could be improved, use the **Revise** button. This adds the correction directly to your Q&A training data, ensuring the AI learns from its mistakes.

> **INFO:** Use [Session Logs](/chatbot/debugging/conversation-logs/session-logs) and [Training Audit](/chatbot/debugging/conversation-logs/training-audit) to track performance.

### Use Smart Learning

YourGPT's [Smart Learning](/chatbot/training/smart-learning) feature uses Reinforcement Learning from Human Feedback (RLHF) to continuously improve your chatbot. It:
- Collected feedback from users during conversations
- Identifies unresolved queries that need attention
- Generates FAQs from past conversations for review
- Learns from human-guided improvements

Enable this feature to let your AI agent improve automatically over time based on real user interactions.

## Use Functions for Enhanced Capabilities

[Functions](/chatbot/ai-agent-management/functions) extend your AI agent's capabilities beyond knowledge base responses. They enable your agent to autonoumously perform dynamic, real-time operations.

  ### Web Search

Fetch the latest news, weather updates, stock prices, and current events from the web.

  ### API Integration

Call external APIs to fetch dynamic data from your CRM, databases, or third-party services.

  ### Custom Code

Execute custom JavaScript or Python code for complex calculations and data processing.

  ### MCP Servers

Integrate with Model Context Protocol servers for sophisticated automation workflows.

### Getting Started with Functions

  1. **Navigate to Automation** > **Functions** in your YourGPT dashboard.

  2. **Choose a function type**:
    - **System Functions**: Pre-built functions like Web Search, Get Current Datetime
    - **Code Functions**: Custom JavaScript or Python code
    - **API Functions**: Connect to external REST APIs
    - **MCP Servers**: Model Context Protocol integrations

  3. **Configure your function** with the necessary parameters and settings.

  4. **Guide function usage** in your [Agent Persona](/chatbot/ai-agent-management/agent-persona) instructions to tell the AI when to use each function.

> **INFO:** **Use functions for:** Real-time data (weather, stocks), external APIs (CRM, databases), custom calculations, dynamic content (inventory, availability).
>   
>   **Avoid for:** Static info in knowledge base, simple lookups, content that rarely changes.
>   
>   **Note:** Functions consume additional credits—use strategically for truly dynamic needs.

## Use Automated Responses for Common Queries

[Automated Responses](/chatbot/training/automated-responses) let you instantly address frequently asked questions without consuming AI credits, delivering rapid responses and reducing operational costs.

### Setting Up Automated Responses

To set up Automated Responses:

- **Identify common queries** by reviewing your [Session Logs](/chatbot/debugging/conversation-logs/session-logs) for questions that come up often.
- **Go to** **Training** &rarr; **Automated Responses** in your dashboard.
- **Add keyword patterns** and specify helpful responses for each frequently asked query.
- **(Optional) Set escalation triggers** for phrases such as "talk to human" or "connect agent" to involve live support when needed.
- **Test your automated responses** to confirm they're triggering as intended and delivering clear, instant answers.

> **TIP:** **80/20 rule:** 80% of queries come from 20% of questions. Add your top 10-20 common queries to [Automated Responses](/chatbot/training/automated-responses) to reduce AI costs by 30-50%.
>   
>   **Quick win:** Review [Session Logs](/chatbot/debugging/conversation-logs/session-logs) weekly to identify new patterns and add them monthly.

## Test and Iterate

Before deploying your chatbot, thoroughly test it using the [Testing Guide](/chatbot/getting-started/test-ai-agent). Share test links with your team and gather feedback. Use the [Debug Lab](/chatbot/debugging/introduction) to troubleshoot any issues.

> **TIP:** Test with Common questions, multi-turn conversations, edge cases, function calls or Studio workflows (if enabled), error handling, and mobile compatibility.

### Testing Workflow

- Get your test link from the Integration tab in your dashboard; see the [Testing Guide](/chatbot/getting-started/test-ai-agent) for detailed steps.
- Test core scenarios: common questions from your knowledge base, edge cases and unusual queries, multi-turn conversations, and function calls (if enabled).
- Review Session Logs in the [Debug Lab](/chatbot/debugging/conversation-logs/session-logs) to understand how the AI is responding.
- Use Training Audit to verify which training sources are being used for specific queries and check match scores.
- Address issues using debugging guides: [Incorrect responses](/chatbot/debugging/ai-response/incorrect-ai-response), [Incomplete answers](/chatbot/debugging/ai-response/incomplete-ai-response), [Refusals to answer](/chatbot/debugging/ai-response/ai-refuse-to-answer).
- Iterate and improve by updating training data, refining instructions, or adjusting model settings based on test results.

---

> **SUCCESS:** **Congratulations!** By following these best practices, you've:
>   
>   ✅ Configured a persona that aligns with your brand  
>   ✅ Optimized your training data for better responses  
>   ✅ Selected the right AI model for your use case  
>   ✅ Set up monitoring and improvement workflows  
>   ✅ Implemented cost-saving strategies
>   
>   **Next steps:**
>   - 📚 Deep dive: [Training Guide](/chatbot/training/guide) for advanced techniques
>   - 🐛 Troubleshoot: [Debugging Documentation](/chatbot/debugging/introduction) for common issues
>   - 🚀 Deploy: [Widget Installation](/chatbot/chatbot-widget/installation) to go live
>   
>   **Remember:** Your chatbot improves over time. Regular monitoring and iteration are key to long-term success!

## Next Steps

Now that you've optimized your AI agent, consider:

  
  
  
  

If you need a deeper dive, start with the [full Training Guide](/chatbot/training/guide) and the [Agent Management guide](/chatbot/ai-agent-management/agent-persona) to keep improving your agent after launch.