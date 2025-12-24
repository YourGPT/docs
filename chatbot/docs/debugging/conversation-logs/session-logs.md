# Session Logger in YourGPT Chatbot Studio

> The Session Logger allows you to track and analyze conversations within the chatbot. Learn how to use the Session Logger in the Studio to gain insights into user interactions.

To quickly access and review the details of any chat session, follow these simple steps to gather all the relevant information.

## Part 1: Checking Log for Specific Chat

To access the logs for a specific chat session, follow the steps outlined below.

### How to Access

![View Session Log for Specific Conversation](/assets/chatbot/Debug/chat-logs/view-chat-logs.png)

1. Open the chat conversation you want to check.  
2. From the right-side dashboard panel, click **View Logs**.  
3. The logger page opens with your chat session's logs.

### Understanding the Log Display

![Viewing Logs with specific Conversation ID](/assets/chatbot/Debug/chat-logs/chat-log.png)

Each log entry shows:

**Time Information**

- Timestamp shows when each action occurred.  
- Format: `Month Day, HH:MM AM/PM`.

**Session Details**

- Conversation ID: Unique number for each chat.  
- Example: `17375270365871196`.

**Action Information**

- **Task**: What action occurred, such as:  
  - `flow-ended`: Conversation flow completion  
  - `node-ending`: Node completion  
  - `node-trigger`: Start of node execution  
  - `message-received`: New message arrival

**Status Types**

- `debug`  
- `error`

**Progress Updates**

- **Message**: Plain text describing the current step.  
- Examples:  
  - `Node executing`  
  - `No node remaining`  
  - `Message received`

**Output Details**

- **Data**: Contains responses and technical information.  
- Use **Show More** to view full details.  
- Shows data in JSON format.

---

## Part 2: Checking All Session Logs

![Session Log](/assets/chatbot/Debug/chat-logs/session-Logs.png)

1. Open the **Debug Lab**, then tap on the **Logger** option.  
2. View all chat session logs in one place.  
3. Click any session to see its detailed logs.

This gives you a complete view of all chat interactions across different sessions.

---

## How to Read Your Logs

1. Start from the most recent entry (bottom).  
2. Look at the **Timestamp** to track when things happened.  
3. Follow the **Message** column to understand the sequence.  
4. Check the **Data** column for specific responses.  
5. Use **Show More** buttons to view complete information.