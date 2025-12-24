# Android Chatbot SDK

The Android SDK allows you to integrate YourGPT Chatbot into your Android applications with a native, fully featured experience. It supports AI conversations, custom UI styling, event listeners, and advanced configuration options.

---

## Installation

### SDK Repository

<Callout type="note" title="SDK Repository">
View the full SDK source code and examples on GitHub:  
<a href="https://github.com/YourGPT/yourgpt-widget-sdk-android" target="_blank">yourgpt-widget-sdk-android</a>
</Callout>

1. Add the dependency to your app's `build.gradle` file:

```bash
dependencies {     
  implementation 'com.yourgpt:android-sdk:1.0.0'     
  implementation 'androidx.webkit:webkit:1.8.0' 
}
```

---

## Permissions

Add required permissions and activities to your `AndroidManifest.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <!-- Required permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.AppCompat.Light.DarkActionBar">

        <!-- Main activity -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- YourGPT Chatbot Activity -->
        <activity
            android:name="com.yourgpt.sdk.ChatbotActivity"
            android:exported="false"
            android:theme="@style/Theme.AppCompat.Light.NoActionBar"
            android:hardwareAccelerated="true" />
    </application>

</manifest>
```

---

## Implementation

Follow these steps to start using the chatbot in your Android app.

### Step 1: Create Your Activity

Implement `YourGPTEventListener`, observe SDK state, and initialize the chatbot:

```kotlin
package com.yourapp

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.yourgpt.sdk.*
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity(), YourGPTEventListener {

    private lateinit var openChatButton: Button
    private lateinit var statusText: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setupUI()
        setupSDK()
        initializeSDK()
    }

    private fun setupUI() {
        openChatButton = findViewById(R.id.btn_open_chat)
        statusText = findViewById(R.id.tv_status)

        openChatButton.setOnClickListener {
            openChatbot()
        }

        openChatButton.isEnabled = false
        statusText.text = "SDK Status: Initializing..."
    }

    private fun setupSDK() {
        YourGPTSDK.setEventListener(this)

        lifecycleScope.launch {
            YourGPTSDK.stateFlow.collect { state ->
                updateUIForSDKState(state)
            }
        }
    }

    private fun initializeSDK() {
        val configuration = YourGPTConfig(
            widgetUid = "your-widget-uid-here"
        )

        lifecycleScope.launch {
            try {
                YourGPTSDK.initialize(configuration)
            } catch (error: Exception) {
                runOnUiThread {
                    Toast.makeText(
                        this@MainActivity,
                        "SDK initialization failed: ${error.message}",
                        Toast.LENGTH_LONG
                    ).show()
                }
            }
        }
    }

    private fun updateUIForSDKState(state: YourGPTSDKState) {
        runOnUiThread {
            statusText.text = "SDK Status: ${state.connectionState.name.lowercase().replaceFirstChar { it.uppercase() }}"

            when (state.connectionState) {
                YourGPTConnectionState.CONNECTED -> {
                    statusText.setTextColor(0xFF28A745.toInt())
                    openChatButton.isEnabled = true
                }
                YourGPTConnectionState.CONNECTING -> {
                    statusText.setTextColor(0xFFFFC107.toInt())
                    openChatButton.isEnabled = false
                }
                YourGPTConnectionState.ERROR -> {
                    statusText.setTextColor(0xFFDC3545.toInt())
                    openChatButton.isEnabled = false
                    state.error?.let {
                        statusText.text = "SDK Error: $it"
                    }
                }
                YourGPTConnectionState.DISCONNECTED -> {
                    statusText.setTextColor(0xFF6C757D.toInt())
                    openChatButton.isEnabled = false
                }
            }
        }
    }

    private fun openChatbot() {
        val configuration = YourGPTConfig(
            widgetUid = "your-widget-uid-here"
        )

        YourGPTSDK.openChatbot(this, configuration)
    }

    override fun onMessageReceived(message: Map<String, Any>) {
        Toast.makeText(this, "New message: $message", Toast.LENGTH_SHORT).show()
    }

    override fun onChatOpened() {
        Toast.makeText(this, "Chat opened", Toast.LENGTH_SHORT).show()
    }

    override fun onChatClosed() {
        Toast.makeText(this, "Chat closed", Toast.LENGTH_SHORT).show()
    }

    override fun onError(error: String) {
        Toast.makeText(this, "Error: $error", Toast.LENGTH_LONG).show()
    }

    override fun onLoadingStarted() {
        Toast.makeText(this, "Loading started", Toast.LENGTH_SHORT).show()
    }

    override fun onLoadingFinished() {
        Toast.makeText(this, "Loading finished", Toast.LENGTH_SHORT).show()
    }
}
```

---

### Step 2: Create Layout File

Create a simple layout with a button to open the chatbot:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    android:gravity="center">

    <TextView
        android:id="@+id/tv_status"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="SDK Status: Initializing..."
        android:textSize="16sp"
        android:layout_marginBottom="32dp" />

    <Button
        android:id="@+id/btn_open_chat"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Open YourGPT Chat"
        android:textSize="16sp"
        android:padding="16dp" />

</LinearLayout>
```

---

## Requirements

The Android Chatbot SDK requires:

- Android API level 21 (Android 5.0) or higher  
- Kotlin 1.8.0 or higher  
- AndroidX libraries  

For the latest compatibility information and updates, refer to the official SDK documentation and release notes.

---

## Resources

- **GitHub Repository**: [yourgpt-widget-sdk-android](https://github.com/YourGPT/yourgpt-widget-sdk-android)