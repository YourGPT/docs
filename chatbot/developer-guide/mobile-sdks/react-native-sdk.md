# React Native Chatbot SDK

> Integrate YourGPT Chatbot seamlessly into your react-native application.

The React Native Chatbot SDK allows you to seamlessly integrate YourGPT Chatbot into your React Native applications. This SDK provides a native experience with full access to all YourGPT features including AI conversations, custom styling, and advanced functionality.

---

## Installation

Follow these steps to install and configure the React Native Chatbot SDK in your project:

**1. Add SDK Package**: Install the `@yourgpt/chatbot-reactnative` package to your dependencies
```bash
$ npm i @yourgpt/chatbot-reactnative
```

**2. Install WebView Dependency**: Add `react-native-webview` to your project dependencies

Refer to the [react-native-webview documentation](https://github.com/react-native-webview/react-native-webview) for detailed installation instructions.

**3. Link Native Dependencies**: Configure platform-specific dependencies

**iOS & macOS:**
If using CocoaPods, navigate to the `ios/` or `macos/` directory and run:
```bash
$ pod install
```

**Android:**
No additional configuration required for Android platforms.

---

## Configuration

### Get Your Widget ID

Before implementing the SDK, you'll need to obtain your unique `widget_id`:

- Visit [YourGPT Dashboard](https://chatbot.yourgpt.ai)
- Create or select your chatbot
- Copy the widget ID from Integrations section

This widget ID is essential for connecting your React Native app to your specific YourGPT chatbot instance.

---

## Implementation

### Step 1: Wrap Your App with Provider

The first step is to wrap your main application component with the `YourGPTProvider`. This provides the chatbot context throughout your app:
```tsx
// In app.tsx

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <YourGPTProvider widgetId="Your_Widget_Id">
        // YOUR CODE HERE
      </YourGPTProvider>
    </SafeAreaView>
  );
}

App;
```

### Step 2: Create Chatbot Trigger Component

Create a component that will trigger the chatbot to open. This can be a button, icon, or any interactive element:
```tsx
// In components/OpenBot.tsx

function OpenBot() {
  const {open} = useYourGPT();
  return <Button onPress={open} title="Open Bot" />;
}
```

---

## Advanced Usage

### Custom Styling

You can customize the appearance of your chatbot trigger button to match your app's design:
```tsx
// Custom styled chatbot button

function CustomChatButton() {
  const {open} = useYourGPT();
  
  return (
    <TouchableOpacity style={styles.chatButton} onPress={open}>
      <Text style={styles.buttonText}>💬 Chat with AI</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### Integration with Navigation

Integrate the chatbot with your app's navigation system for seamless user experience:
```tsx
// Integration with React Navigation

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <YourGPTProvider widgetId="Your_Widget_Id">
      <NavigationContainer>
        <Stack.Navigator>
          {/* Your app screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </YourGPTProvider>
  );
}
```

---

## Best Practices

### Performance Optimization

- **Lazy Loading**: Consider lazy loading the chatbot component to improve initial app load time
- **Memory Management**: Ensure proper cleanup when the chatbot is unmounted
- **Network Handling**: Implement proper error handling for network connectivity issues

### User Experience

- **Accessibility**: Ensure your chatbot trigger is accessible to users with disabilities
- **Loading States**: Provide visual feedback while the chatbot is initializing
- **Offline Handling**: Gracefully handle scenarios when the chatbot is unavailable

### Security Considerations

- **Widget ID Protection**: Never expose your widget ID in client-side code that could be reverse-engineered
- **Data Privacy**: Ensure compliance with data protection regulations in your target markets
- **User Consent**: Implement proper user consent mechanisms for data collection

---

## Troubleshooting

### Common Issues

**Chatbot Not Opening:**
- Verify your widget ID is correct
- Check network connectivity
- Ensure the provider is properly wrapped around your app

**WebView Errors:**
- Update to the latest version of `react-native-webview`
- Clear app cache and restart
- Check for platform-specific WebView configurations

**Performance Issues:**
- Monitor memory usage during chatbot sessions
- Consider implementing session management
- Optimize your app's overall performance

---

## Platform Support

The React Native Chatbot SDK supports the following platforms:

- **iOS**: iOS 11.0 and later
- **Android**: Android API level 21 and later
- **React Native**: Version 0.60 and later
- **Expo**: Compatible with Expo managed workflow

For the latest compatibility information and updates, refer to the official SDK documentation and release notes.