# MCP

> Model Context Protocol (MCP) integration guide

Model Context Protocol (MCP) is an open standard that enables AI systems to communicate with external tools using a unified, secure, and scalable interface. It eliminates the need for custom APIs and allows consistent data exchange between your AI and tools.

---

## What is MCP?

MCP acts as a universal adapter between your AI agent and third-party tools, enabling:

- Secure, standardized data exchange  

- Minimal custom integration  

- Easier scalability across platforms  

YourGPT supports native MCP integration, allowing you to access your AI Agent knowledge inside tools such as Claude Desktop, Cursor, and Windsurf.

---

## Setting up MCP Integration in YourGPT

Follow these steps to configure the MCP server inside YourGPT. After that, you can connect it with the supported tools.

### Step 1: Go to Integrations

<div className="flex justify-center items-center rounded-md p-4">
  ![Integrations MCP](/assets/chatbot/MCP/integrate-mcp.png)
</div>

- From your YourGPT dashboard, click **Integrations** in the left sidebar.
- Scroll down to find **MCP (Model Context Protocol)**.
- Click the **Configure** button.

---

### Step 2: Create MCP Server

<div className="flex justify-center items-center rounded-md p-4">
  ![Create MCP Server](/assets/chatbot/MCP/create-mcp.png)
</div>

- A popup will appear prompting you to create the MCP server.
- Click on the **Create MCP** button.

This will generate a new MCP endpoint for your chatbot.

---

### Step 3: Choose Your Target Tool

<div className="flex justify-center items-center rounded-md p-4">
  ![Choose MCP Tool](/assets/chatbot/MCP/mcp-tool.png)
</div>

After MCP is created, you'll see usage tabs for:

- Claude Desktop  
- Cursor  
- Windsurf

Each tab shows:

- The MCP configuration block and a secure bearer token  
- A copy button and the file path where this config needs to be added (per tool)

This configuration allows tools to communicate with your chatbot securely using YourGPT's MCP server.

---

## Tool-Specific Setup Guides

Once the MCP server is created inside YourGPT, follow the appropriate guide below to connect your chatbot with the tool of your choice.

---

### Claude Desktop Integration  
You can configure Claude Desktop by pasting the generated MCP config into a local file.

➡️ [Read Full Setup Guide for Claude Desktop](https://help.yourgpt.ai/article/mcp-setup-guide-for-claude-desktop-cursor-and-windsurf-1789#21-claude-desktop)

---

### Cursor Integration  
Cursor requires a JSON config file containing the MCP settings from YourGPT.

➡️ [Read Full Setup Guide for Cursor](https://help.yourgpt.ai/article/mcp-setup-guide-for-claude-desktop-cursor-and-windsurf-1789#22-cursor-setup)

---

### Windsurf Integration  
Windsurf supports the MCP protocol and can use the same generated config.

➡️ [Read Full Setup Guide for Windsurf](https://help.yourgpt.ai/article/mcp-setup-guide-for-claude-desktop-cursor-and-windsurf-1789#23-windsurf-setup)

---

> **WARNING:** <ul>
>     <li>Do not share your `Bearer token` publicly. It gives access to your chatbot's knowledgebase.</li>
>     <li>You can remove and regenerate the MCP server anytime using the `Remove MCP` button.</li>
>     <li>Each chatbot can have its own MCP configuration, enabling different agents for different use cases.</li>
>   </ul>