# NPM Package 

The YourGPT Web SDK provides a comprehensive solution for integrating AI chatbots into your web applications. This guide covers everything from installation to advanced usage patterns.

## Installation

Install the YourGPT Web SDK using npm:

```bash
npm install @yourgpt/widget-web-sdk
```

<Callout type="note" title="What is the YourGPT Web SDK?">
  It's a JavaScript library that provides programmatic control over your YourGPT chatbot widget. Instead of just embedding the widget with a script tag, the SDK gives you full control over when it opens, closes, sends messages, and handles AI actions.
</Callout>

## Quick Start

### Vanilla JavaScript/TypeScript

```javascript

// Initialize the SDK with your widget ID
await YourGPT.init({
  widgetId: "your-widget-id", // Get this from your YourGPT dashboard
});

// Get the SDK instance to control the widget
const sdk = YourGPT.getInstance();

// Control the widget programmatically
sdk.open(); // Opens the chat widget
sdk.sendMessage("Hello!"); // Sends a message to the chatbot

// Listen for incoming messages from the chatbot
sdk.onMessageReceived((data) => {
  console.log("Message received:", data);
});
```

**What each part does:**

1. **Import the SDK** - Brings the YourGPT class into your code  
2. **Initialize** - Sets up the SDK with your specific widget ID (found in your YourGPT dashboard)  
3. **Get Instance** - Creates a reference to control your specific widget  
4. **Control Widget** - Opens the widget and sends messages programmatically  
5. **Handle Events** - Listens for messages the chatbot sends back to you  

<Callout type="note" title="Widget ID">
  This is a unique identifier for your chatbot. You can find it in your YourGPT dashboard in the Integrations section. It looks something like <code>abc123def456</code>. [YourGPT Dashboard](https://app.yourgpt.ai).
</Callout>

### React Set Up

```javascript

// Initialize in your main app file (main.tsx or App.tsx)
YourGPT.init({
  widgetId: "your-widget-id",
});

// Use in your React components
function ChatButton() {
  const chatbot = useYourGPTChatbot(); // Hook to control the widget
  const aiActions = useAIActions(); // Hook to manage AI actions

  // Register custom AI actions that your chatbot can trigger
  useEffect(() => {
    aiActions.registerAction("get_location", async (data, helpers) => {
      // Ask user for permission to access location
      const confirmed = await helpers.confirm({
        title: "Location Access",
        description: "Allow location access?",
      });
      
      if (confirmed) {
        // Get user's location and respond to the chatbot
        helpers.respond("Location: 40.7128, -74.0060");
      }
    });
  }, [aiActions]);

  return (
    <div>
      <button onClick={chatbot.open}>Open Chat</button>
      <p>Status: {chatbot.isConnected ? "Connected" : "Disconnected"}</p>
    </div>
  );
}
```

**React Setup Steps:**

1. **Install the package** - `npm install @yourgpt/widget-web-sdk`  
2. **Import the hooks** - Bring in `YourGPT`, `useYourGPTChatbot`, and `useAIActions`  
3. **Initialize the SDK** - Call `YourGPT.init()` in your main app file with your widget ID  
4. **Use the hooks** - `useYourGPTChatbot()` controls the widget, `useAIActions()` adds custom AI actions  

<Callout type="note" title="AI Actions">
  These are custom functions that your chatbot can trigger. For example, when a user asks "What's my location?", the chatbot can call your custom <code>get_location</code> action to get the user's actual location and respond with it.
</Callout>

## Complete Documentation

### AI Actions System

AI Actions allow your chatbot to perform custom tasks in your application. Think of them as functions that your chatbot can call when users ask for specific actions.

```javascript
const sdk = YourGPT.getInstance();

// Register an AI action that deletes files with user confirmation
sdk.registerAIAction("delete_file", async (data, helpers) => {
  const filename = data.action[0].function.arguments;
  
  // Show a confirmation dialog to the user
  const confirmed = await helpers.confirm({
    title: "Delete File",
    description: `Are you sure you want to delete "${filename}"?`,
    acceptLabel: "Delete",
    rejectLabel: "Cancel"
  });
  
  if (confirmed) {
    try {
      await deleteFile(filename); // Your custom file deletion function
      helpers.respond(`File "${filename}" deleted successfully`);
    } catch (error) {
      helpers.respond(`Error deleting file: ${error.message}`);
    }
  } else {
    helpers.respond("File deletion cancelled");
  }
});

// Register an action to get system information
sdk.registerAIAction("get_system_info", async (data, helpers) => {
  const systemInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    url: window.location.href,
    timestamp: new Date().toISOString()
  };
  
  helpers.respond(`System Info:\n${JSON.stringify(systemInfo, null, 2)}`);
});

// Remove an AI action when you no longer need it
sdk.unregisterAIAction("delete_file");
```

**How AI Actions Work:**

1. **User asks chatbot** - "Delete my file called 'report.pdf'"  
2. **Chatbot calls your action** - Triggers your `delete_file` function  
3. **Your code runs** - Shows confirmation dialog, deletes file if confirmed  
4. **You respond** - Tell the chatbot the result ("File deleted successfully")  

<Callout type="note" title="helpers.confirm()">
  This shows a user-friendly confirmation dialog. The user can click "Accept" or "Reject", and your code waits for their decision before continuing.
</Callout>

## Hooks

React hooks provide an easy way to use the SDK in React components.

### useYourGPTChatbot() - Main Widget Control

This hook gives you control over the chatbot widget and access to its current state.

```javascript

function ChatComponent() {
  const chatbot = useYourGPTChatbot();

  return (
    <div>
      {/* Widget State - Shows current status */}
      <div>Status: {chatbot.isConnected ? "Connected" : "Disconnected"}</div>
      <div>Messages: {chatbot.messageCount}</div>
      
      {/* Widget Controls - Buttons to control the widget */}
      <button onClick={chatbot.open}>Open Chat</button>
      <button onClick={chatbot.close}>Close Chat</button>
      <button onClick={chatbot.toggle}>Toggle Chat</button>
      
      {/* Messaging - Send messages to the chatbot */}
      <button onClick={() => chatbot.sendMessage("Hello!")}>Send Message</button>
      
      {/* Advanced Features - Open external content or start games */}
      <button onClick={() => chatbot.openBottomSheet("https://docs.example.com")}>
        Open Bottom Sheet
      </button>
      <button onClick={() => chatbot.startGame("quizMania", { showExitConfirmation: true })}>
        Start Game
      </button>
    </div>
  );
}
```

**Available Properties and Methods:**

- **State**: `isConnected`, `messageCount`, `isOpen`  
- **Controls**: `open()`, `close()`, `toggle()`, `sendMessage()`  
- **Advanced**: `openBottomSheet()`, `startGame()`  

### useAIActions() - AI Actions Management

This hook helps you register and manage custom AI actions in React components.

```javascript

function AIActionsComponent() {
  const aiActions = useAIActions();

  useEffect(() => {
    // Register multiple AI actions at once
    aiActions.registerActions({
      get_time: async (data, helpers) => {
        helpers.respond(`Current time: ${new Date().toLocaleString()}`);
      },
      
      get_page_url: async (data, helpers) => {
        helpers.respond(`Current URL: ${window.location.href}`);
      },
      
      take_screenshot: async (data, helpers) => {
        const confirmed = await helpers.confirm({
          title: "Screenshot",
          description: "Take a screenshot of the current page?"
        });
        
        if (confirmed) {
          // Screenshot logic using html2canvas or similar
          helpers.respond("Screenshot taken successfully");
        }
      }
    });

    // Clean up actions when component unmounts
    return () => {
      aiActions.unregisterAction("get_time");
      aiActions.unregisterAction("get_page_url");
      aiActions.unregisterAction("take_screenshot");
    };
  }, [aiActions]);

  return (
    <div>
      <h3>Registered AI Actions</h3>
      <p>Count: {aiActions.registeredActions.length}</p>
      <ul>
        {aiActions.registeredActions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Key Features:**

1. **Automatic Cleanup** - Actions are removed when your component unmounts  
2. **Reactive Updates** - Hook state updates when widget state changes  
3. **Type Safety** - Full TypeScript support for all methods  
4. **Batch Registration** - Register multiple actions at once with `registerActions()`  

## Components

### YourGPTProvider - Wrapper

This React component provides the SDK context to your entire app and handles initialization.

```javascript

function App() {
  return (
    <YourGPTProvider
      config={{
        widgetId: "your-widget-id",
      }}
      onInitialized={({ sdk }) => {
        console.log("SDK initialized:", sdk);
        // Set initial data, register global AI actions, etc.
      }}
      onError={(error) => {
        console.error("SDK error:", error);
        // Handle initialization errors
      }}
    >
      <MyApp />
    </YourGPTProvider>
  );
}
```

**What YourGPTProvider does:**

- **Initializes the SDK** - Sets up the widget with your configuration  
- **Provides Context** - Makes SDK available to all child components  
- **Handles Errors** - Catches and reports initialization problems  
- **Global Setup** - Perfect place to register app-wide AI actions  

### Custom Confirmation Dialogs

Create user-friendly confirmation dialogs for sensitive operations.

```javascript
// Advanced AI action with custom confirmation
aiActions.registerAction("delete_user_data", async (data, helpers) => {
  const { userId, dataType } = JSON.parse(data.action[0].function.arguments);

  const confirmed = await helpers.confirm({
    title: "⚠️ Delete User Data",
    description: `This will permanently delete all ${dataType} data for user ${userId}. This action cannot be undone.`,
    acceptLabel: "Delete Permanently",
    rejectLabel: "Keep Data",
  });

  if (confirmed) {
    try {
      await deleteUserData(userId, dataType);
      helpers.respond(`✅ ${dataType} data deleted for user ${userId}`);
    } catch (error) {
      helpers.respond(`❌ Failed to delete data: ${error.message}`);
    }
  } else {
    helpers.respond("Data deletion cancelled - no changes made");
  }
});
```

**Confirmation Dialog Features:**

- **Custom Title** - Clear warning about the action  
- **Detailed Description** - Explain what will happen  
- **Custom Labels** - Change button text to match the action  
- **Error Handling** - Catch and report any problems  

## Project Structure

```
@yourgpt/widget-web-sdk/
├── src/
│   ├── core/
│   │   └── YourGPT.ts              # Core SDK (vanilla JS/TS)
│   ├── react/
│   │   ├── hooks/                  # React hooks
│   │   │   ├── useYourGPT.ts
│   │   │   ├── useYourGPTChatbot.ts
│   │   │   └── useAIActions.ts
│   │   ├── components/             # React components
│   │   │   ├── YourGPTProvider.tsx
│   │   │   └── YourGPTWidget.tsx
│   │   └── index.ts               # React exports
│   ├── types/                     # TypeScript definitions
│   ├── utils/                     # Utility functions
│   ├── index.ts                   # Main exports
│   ├── tests/                     # Test suite
│   └── docs/                      # Documentation
└── README.md                      # This file
```

## Testing

Run the test suite:

```bash
npm test               # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
```

The SDK includes comprehensive tests for:

- Core SDK functionality  
- React hook integration  
- AI Actions system  
- Error handling  
- TypeScript type checking  

## Development

### Setup

```bash
git clone https://github.com/YourGPT/web-sdk
cd web-sdk
npm install
npm run build
```

### Available Scripts

```bash
npm run build              # Build both core and React packages
npm run build:core         # Build core SDK only
npm run build:react        # Build React package only
npm run dev                # Development mode with watch
npm run dev:examples       # Build and serve examples
npm run serve              # Serve examples on port 3000
npm run type-check         # TypeScript type checking
npm run lint               # Strict code linting
npm run lint:fix           # Fix strict issues
npm run test               # Run test suite
npm run clean              # Clear build artifacts
```

## Build Output

```
dist/
├── index.js               # CommonJS build
├── index.mjs              # ES modules build
├── index.d.ts             # TypeScript definitions
└── react/
    ├── index.js           # React CommonJS build
    ├── index.mjs          # React ES modules build
    └── index.d.ts         # React TypeScript definitions
```

## API Reference

### Core SDK Classes

- `YourGPTSDK` - Main SDK class  
- `YourGPT` - Static methods for easy access  
- `YourGPTError` - Custom error handling  

### React Hooks

- `useYourGPT()` - Low-level SDK access  
- `useYourGPTChatbot()` - Main widget control hook  
- `useAIActions()` - AI action management  
- `useYourGPTContext()` - Access provider context  

### Types

```typescript

```

### Utilities

```typescript

```

## Browser Support

The YourGPT Web SDK supports the following browsers:

- **Chrome**: 80+  
- **Firefox**: 75+  
- **Safari**: 13+  
- **Edge**: 80+  

## Framework Compatibility

The SDK is compatible with various frameworks and build tools:

- **React**: 16.8+ (hooks support required)  
- **Next.js**: 12+ (with SSR support)  
- **Vite**: All versions  
- **Create React App**: All versions  
- **Vanilla JS/TS**: All modern environments  
- **Vue.js**: Via vanilla SDK  
- **Angular**: Via vanilla SDK  
- **Svelte**: Via vanilla SDK  

## Migration Guide

### From Script-based Integration

**Before (Old Script Integration):**

```html
<script src="/script.js" id="yourgpt-chatbot" widget="your-widget-id"></script>
<script>
  window.YourGPTChatbot.execute("widget:open");
  window.YourGPTChatbot.on("message:received", handleMessage);
</script>
```

**After (New SDK Integration):**

```javascript

await YourGPT.init({ widgetId: "your-widget-id" });
const sdk = YourGPT.getInstance();
sdk.open();
sdk.onMessageReceived(handleMessage);
```

### From React Class Components to Hooks

**Before:**

```javascript
class ChatComponent extends React.Component {
  componentDidMount() {
    window.YourGPTChatbot.execute("widget:open");
  }
  
  render() {
    return <div>Chat Widget</div>;
  }
}
```

**After:**

```javascript
function ChatComponent() {
  const chatbot = useYourGPTChatbot();
  
  useEffect(() => {
    chatbot.open();
  }, [chatbot]);
  
  return <div>Chat Widget</div>;
}
```

## FAQ

**Q: Can I use this SDK with Next.js?**  
A: Yes! The SDK fully supports SSR. Use the `isBrowser()` utility to check environment.

**Q: How do I handle widget initialization errors?**  
A: Use `try/catch` with `YourGPTError` for specific error handling.

**Q: Can I customize the confirmation dialogs?**  
A: Yes! Use the `helpers.confirm()` method in AI actions with custom options.

**Q: Is the SDK tree-shakable?**  
A: Yes! Import only what you need: `import { YourGPT } from '@yourgpt/widget-web-sdk'`.

**Q: How do I register multiple AI actions at once?**  
A: Use `aiActions.registerActions()` with an object of action handlers.

## Resources

For more examples and detailed documentation, check out our resources:

- [YourGPT Web SDK Repository](https://github.com/YourGPT/web-sdk) - Official SDK repository with documentation and source code  
- [Pre-built Examples](https://github.com/YourGPT/web-sdk/tree/main/examples) - Collection of ready-to-use example implementations  

<Callout type="note" title="Need Help?">
  Join our [Discord Community](https://discord.com/invite/57C9uTkD6g) for support and discussions with other developers.
</Callout>