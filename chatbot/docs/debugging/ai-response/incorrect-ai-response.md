# Incorrect Answers

When your AI provides incorrect answers or goes off-topic, it's usually due to one of two issues. Here’s how you can troubleshoot and fix these problems.

##  1. Base Prompt Issue 

Your AI model's base prompt might not include clear instructions on when to refuse to answer. Without these guidelines, the AI might attempt to respond even when it lacks the relevant information or when the question is outside your business context.

###  Solution: 

Add an instruction to the base prompt, such as:

<Callout title="Caution" type="caution">
  Refuse to answer any question beyond the given info and inform the user to tap on the
  `Talk to a Human` button if you don't have enough information to answer.
</Callout>

![Base Prompt Configuration](/assets/chatbot/Debug/how-to-debug/refusal-in-base-prompt.png)

This ensures the AI stays within the boundaries of its training data and only provides accurate, relevant responses.

## 2. Using a Restriction Prompt 

A restriction prompt helps limit what the AI can respond to, keeping it focused on the intended context.

###  Solution: 

Use a restriction prompt to define limitations on the AI's responses. This will help maintain relevance and prevent the AI from going off-topic.

![Base Prompt Restriction Configuration](/assets/chatbot/Debug/how-to-debug/refusal-in-restriction-prompt.png)

## Tracing AI Response Sources 

To ensure your AI is providing accurate information, it's crucial to trace the data sources it used to generate its answers.

###  Steps to Check Data Sources: 

1. Go to the <strong>Conversation</strong> page.

![Conversations Dashboard](/assets/chatbot/Debug/how-to-debug/conversations.png)

2. Open the conversation you want to review.

![Conversations Dashboard open](/assets/chatbot/Debug/how-to-debug/conversation-open.png)

3. Click on <strong>View Source</strong> to see the information sources used for each AI-generated response.

![AI Response Options](/assets/chatbot/Debug/how-to-debug/ai-response-options.png)

This feature displays a list of data sources the AI referenced. You can even navigate directly to the source document.

![AI Response Sources](/assets/chatbot/Debug/how-to-debug/ai-response-sources.png)

###  Correcting training data or data sources 

Knowing the source of the information allows you to update your training data if there are any errors.

![Source Document](/assets/chatbot/Debug/how-to-debug/source-document.png)

If you want to make corrections to the data sources:

1. Click the “source” button.

![Document View Source](/assets/chatbot/Debug/how-to-debug/document-view-source.png)

2. This takes you to the debug lab, where all the sources from that document are listed.

![Document View Source in Debug Lab](/assets/chatbot/Debug/how-to-debug/document-view-source.png)

3. Here, you can search, remove, or edit these sources.

![Document Data Sources](/assets/chatbot/Debug/how-to-debug/document-data-sources.png)

![Data Source Edit](/assets/chatbot/Debug/how-to-debug/data-source-edit.png)

Keeping your data sources accurate ensures that your AI continues to provide correct and contextually appropriate answers.