# Training Guide

> Learn how to train your chatbot using your business data to deliver accurate and reliable responses.

Training allows your agent to answer questions based on your own data instead of generic responses. You can train it using websites, documents, FAQs, and other structured sources available in the platform.

## How Training Works

YourGPT training converts your data into searchable knowledge nodes, which the AI uses to find accurate answers and generate responses. Updating your training data ensures that your chatbot always has the latest information from your sources, improving the quality and reliability of its responses.

<Steps>
  <Step>
    Sign in to the <Link href="https://chatbot.yourgpt.ai/" target="_blank">YourGPT Dashboard</Link>.
  </Step>

  <Step>
    Open the **Training** section from the dashboard menu.
    <br />
    <img src="/assets/chatbot/training/image-1.png" alt="Training section in dashboard" />
  </Step>

  <Step>
    Select the type of data you want to use for training.
    <br />
    <img src="/assets/chatbot/training/image-2.png" alt="Training source options" />

    You can train your chatbot using multiple data sources depending on your needs.

    <Cards>
      <Card title="Website & Links" href="/chatbot/training/sources/website-links" />
      <Card title="Documents" href="/chatbot/training/sources/documents" />
      <Card title="FAQs & Text" href="/chatbot/training/sources/faqs-text" />
      <Card title="AI Helpdesk" href="/chatbot/training/sources/ai-helpdesk" />
      <Card title="Other Sources" href="/chatbot/training/sources/others" />
    </Cards>

    <Callout type="info">
      Your chatbot is trained only on the data you provide. This keeps responses aligned with your business content.
    </Callout>
  </Step>
</Steps>

---

## Debugging Training Data

When responses feel incorrect or incomplete, reviewing training sources helps identify the issue.

<Callout type="info" title="Training View Source">
Use the <Link href="/chatbot/debugging/conversation-logs/training-audit#view-training-source">Training View Source</Link> to inspect which knowledge nodes were used to generate a response and how closely they matched the user query.
</Callout>

This view helps you understand whether the issue comes from missing data, low match scores, or outdated training content.