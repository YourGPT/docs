# Flutter Chatbot SDK

The Flutter SDK allows you to seamlessly integrate YourGPT Chatbot into your flutter applications. This SDK provides a native experience with full access to all YourGPT features including AI conversations, custom styling, and advanced functionality.

---

## Installation

Follow these steps to install and configure the flutter Chatbot SDK in your project:

<Callout type="note" title="SDK Repository">
View the full SDK source code and examples on GitHub: [yourgpt-widget-sdk-flutter](https://github.com/YourGPT/yourgpt-widget-sdk-flutter)
</Callout>

1. Add this to your package's `pubspec.yaml` file:

```bash
dependencies:
  yourgpt_flutter_sdk: ^1.0.0
  webview_flutter: ^4.4.2
```

2. Then run:

```bash
flutter pub get
```

---

## Permissions

### iOS
No permissions needed.

### Android

Add internet permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

---

## Implementation

To use a Chatbot widget in your flutter application, follow the below steps:

### Step 1: Update your `Main.dart` file

```dart

// Show chatbot in a bottom sheet (recommended)
YourGPTChatScreen.showAsBottomSheet(
  context: context,
  widgetUid: 'your-widget-uid',
);
```

Wrap this inside a function and call it on any event.

### Alternative: Full Screen Usage

```dart

Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => Scaffold(
      body: SafeArea(
        child: YourGPTChatScreen(
          widgetUid: 'your-widget-uid',
        ),
      ),
    ),
  ),
);
```

---

## Requirements

- Flutter: 3.13+
- Dart: 3.0+
- Android: minSdk 21+, compileSdk 33+
- iOS: 12.0+

---

## Resources

- **GitHub Repository**:  
  https://github.com/YourGPT/yourgpt-widget-sdk-flutter