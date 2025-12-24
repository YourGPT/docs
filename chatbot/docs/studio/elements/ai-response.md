# AI Response

The AI response is a powerful feature that allows you to define custom responses based on the context of the user's input.

## Types of Response Sources:

In Studio, Response Source include two options one from **`AI`** and second from **`Knowledgebase`**.

### 1. AI:
AI uses the pretrained (their built-in) knowledge or any additional context you provide to generate responses.

<div className="flex justify-center items-center rounded-md p-4 md:px-60">
  ![AI response](/assets/flow/ai-task/AI-response.png)
</div>

- Previous Chat Context: Specify how many previous messages the AI should consider for context.
- Prompt: Add instructions for the AI to define how it should respond.

You can now generate responses in different formats. Available response types in AI include:

- Text: Standard response format for displaying information in plain text.
- JSON: Structured response format for easy integration with applications or APIs.

<Callout title="Note" type="info">
  Learn how to setup AI Response from our Help Center article   [How to Set Up AI Responses in Studio](https://help.yourgpt.ai/article/how-to-set-up-ai-responses-in-studio-832)
</Callout>

---

### 2. Knowledgebase:
The Knowledgebase AI uses your training data to answer to the users question.

<div className="flex justify-center items-center rounded-md p-4 md:px-60">
  ![KnowledgeBase AI](/assets/flow/ai-task/KB-response.png)
</div>

- **Previous Chat Context**: Specify how many previous messages the AI should consider for context.
- **Question**: Enter the user's query to retrieve specific information.
- **Prompt**: Add extra context or instructions for how the AI should handle the query.
- **Restrictions**: Define rules or limits on how the AI generates responses.
- **Tags**: Assign tags to your training data for efficient retrieval. 
  - Use `include` to match documents with any one tag 
  - Use `exclude` to filter out documents matching a tag.

<Callout title="Note" type="info">
  For most tasks, up to 5 previous chat messages is sufficient. Adding too many messages may affect response quality.
</Callout>

---

## Common Settings for AI and Knowledgebase

These settings are common for both AI and Knowledgebase data sources within YourGPT Chatbot Studio:

1. **Send to Chat:** The generated response is delivered to the chat interface for user interaction and engagement.

2. **Store Into:** The Basic information is stored across various visitor, session, Contact and Flow parameters, including visitor details, session information, and bot-related data.

### Model Configuration Settings

The configuration settings for both AI and Knowledgebase data sources are standardized, offering flexibility and customization:

<Cards>

<Card title="Provider">
    - OpenAI
    - Anthropic
    - Mistral
    - Gemini
</Card>

<Card title="Model">
  - GPT-3.5-turbo
  - GPT-3.5-turbo-1106
  - GPT-4
  - GPT-4o
  - Claude-3.5-Sonnet
  - Claude-3-Opus
  - Gemini-1.5-Flash
  - Mistral-2-Large
</Card>

<Card title="Temperature">
  - `0-1` (adjustable)
</Card>

<Card title="Max Tokens">
  - `1-2048` (adjustable)
</Card>

</Cards>

Learn more about [Tokens, Max Tokens, Context Limits, Knowledge Nodes, and Temperature](https://help.yourgpt.ai/article/what-are-tokens-max-tokens-context-limits-knowledge-nodes-and-temperature-in-ai-543).