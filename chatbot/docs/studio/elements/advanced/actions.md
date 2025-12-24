# Actions 

## Actions in Studio

Actions can be performed:
Transfer to Bot
Update Segment
Mark as Resolved
Create Contact.

Actions are the operations that you can perform in chatbot studio. You can use actions to perform various operations like transferring the chat to a bot, updating a segment, marking a chat as resolved, and creating a contact.

## How to use Actions

<div className="flex justify-center items-center rounded-md p-4">
  ![Actions](/assets/flow/actions-image.png)
</div>

To use Actions, follow these steps:

1. Go to the `Flow` Section in the Chatbot Studio. Hover over the Advanced Section and drag the `Actions` Component on to the canvas.

2. Select the Action you want to perform from the dropdown. You can choose from a variety of options, including:
 - Escalate to Human
 - Transfer to Bot
 - Update Segment
 - Mark as Resolved
 - Create Contact
 - Send Email

## Success and Error Paths

Now we have Success and Error paths in Create Contact and Send Email nodes.

### Usage

- Add Create Contact or Send Email node wherever you need it in your flow
- After adding you will see Success and error paths in the node you added, connect them to the respective nodes to handle the fail and success of the action.

### Example Use Cases

Gives the flow builder an option in case the action fails or succeeds for:
- Create Contact
- Send Email

<Card title="How To Use Actions" href="https://help.yourgpt.ai/article/how-to-use-actions-in-chatbot-studio-29">
  Learn how to use actions in AI chatbot studio.
</Card>

### 1. Escalate to Human

Transfer to Agent action allows you to transfer the chat to an Human agent (human handoff) using the chatbot studio.

##### use case:
- You can use the Transfer to Agent action to transfer the chat to a human agent when the user requests to talk to a human agent.
- You can add custom conditions to transfer the chat to a human agent based on the user's request.
- You can transfer the chat to a human agent based on the user's sentiment or intent.

### 2. Transfer to Bot

Transfer to Bot action allows you to transfer the chat to a bot in the AI chatbot studio.

##### use case:
- The 'Transfer to Bot' action allows you to shift the conversation to a bot if the user has been waiting for an operator for more than specific period. This action also enables you to revert the chat back to the bot.

### 3. Update Segment

Update Segment action allows you to update the segment of the chat in the chatbot studio. You can update the segment of the chat based on the user's interaction.

##### use case:
- You can assign segments to the chats based on the user's behavior or interaction.
- Route the chat to a specific department or agent based on the user's interaction.

### 4. Mark as Resolved

Mark as Resolved action allows you to mark the chat as resolved in the AI studio. You can mark the chat as resolved when the user's query has been resolved.

##### use case:
- You can use the Mark as Resolved action to mark the chat as resolved when the user's query has been resolved.

### 5. Create Contact

Create Contact action allows you to create a new contact in the AI studio. You can create a new contact by providing the contact details like name, email, phone, company, country, city, region, and tags.

Now we have Success and Error paths in the Create Contact node, allowing you to handle different outcomes of the action.

##### use case:
- You can use the Create Contact action to create a new contact in the AI studio when a user provides their contact details.
- With Success and Error paths, you can direct the flow to different nodes based on whether the contact creation was successful or failed.

### 6. Send Email

Send Email action allows you to send an email using AI studio. You can send an email to the user by providing the email details like subject, body, and recipient.

Now we have Success and Error paths in the Send Email node, allowing you to handle different outcomes of the action.

##### use case:
- You can use the Send Email action to send an email to the user using AI studio.
- With Success and Error paths, you can direct the flow to different nodes based on whether the email was sent successfully or failed.