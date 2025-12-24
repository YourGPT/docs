# Events

> Learn about Events in YourGPT Chatbot Studio.

## What are Events?

Events are the Trigger points for the flow. They are the starting node of the flow. Events are used to trigger the flow when a specific event occurs. For example, new session starts, request human agent, unable to answer, etc.

### Role of Events

- Events are used to trigger the flow when a specific event occurs.

- They help in defining the starting point of the flow based on specific conditions or actions.

For example, you can create an event that triggers the flow when a new session starts. This event can be used to greet the user, provide initial instructions, or ask for user input to guide the conversation flow.

### How to use them in Chatbot Studio?

1. Go to the **```Flow```** section in the Chatbot Studio.

2. From the **`Start`** section, drag and drop the **`Event`** component onto the canvas.

3. Choose from the available events:

   - **`Request human`**: This event is triggered when the chatbot needs to hand over the conversation to a human agent.

   - **`New session`**: This event is triggered when a new user session starts. It can be used to greet the user or provide initial instructions.

   - **`Unable to answer`**: This event is triggered when the chatbot is unable to provide an answer to the user's query.

   - **`Contact created`**: This event is triggered when a new contact is created in the system.
   
   - **`AI response follow up`**: Triggers every time after the AI replies from the knowledge base.

   - **`Session resolved`**: Triggers every time a user session is marked as resolved.

4. Add the actions or responses in the **`Flow`** section that will be activated when a particular event takes place.

<Callout title="Note" type="info">
  Learn more about Events in our helpdesk article: [How to use Events in Chatbot Studio](https://help.yourgpt.ai/article/how-to-use-events-in-ai-studio-1140)
</Callout>