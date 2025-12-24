# iOS Chatbot SDK

The iOS SDK allows you to seamlessly integrate YourGPT Chatbot into your iOS applications. This SDK provides a native experience with full access to all YourGPT features including AI conversations, custom styling, and advanced functionality.

---

## Installation

Follow these steps to install and configure the iOS Chatbot SDK in your project:

> **NOTE:** View the full SDK source code and examples on GitHub: [yourgpt-widget-sdk-ios](https://github.com/YourGPT/yourgpt-widget-sdk-ios)

1. Add this to your `Podfile`:

```bash
$ pod 'YourGPTSDK', '~> 1.0'
```

2. Then run:

```bash
$ pod install
```

### Swift Package Manager

Add the package dependency in Xcode:

1. File → Add Package Dependencies  
2. Enter: `https://github.com/YourGPT/yourgpt-widget-sdk-ios.git`  
3. Select version `1.0.0`  

Or add to `Package.swift`:

```bash
dependencies: [
    .package(url: "https://github.com/YourGPT/yourgpt-widget-sdk-ios.git", from: "1.0.0")
]
```

---

## Implementation

To use a Chatbot widget in your iOS application, follow the steps below or copy and paste the code into your application's respective files.

### Step 1: Create a Wrapper Class (Recommended)

For better organization and reusability, create a wrapper class to manage the SDK:

```swift

@available(iOS 13.0, *)
class YourGPTWrapper: NSObject {
    
    static let shared = YourGPTWrapper()
    
    private var cancellables = Set<AnyCancellable>()
    private var chatbotViewController: YourGPTChatbotViewController?

    // State observer
    var onStateChange: ((YourGPTSDKState) -> Void)?
    
    private override init() {
        super.init()
        setupSDKObserver()
    }
    
    private func setupSDKObserver() {
        YourGPTSDK.core.$state
            .receive(on: DispatchQueue.main)
            .sink { [weak self] state in
                self?.onStateChange?(state)
            }
            .store(in: &cancellables)
    }
    
    func initializeSDK(widgetUid: String) async throws {
        let config = YourGPTConfig(widgetUid: widgetUid)
        try await YourGPTSDK.initialize(config: config)
    }
    
    func openChatbot(from presentingViewController: UIViewController, delegate: YourGPTChatbotDelegate?) {
        guard YourGPTSDK.isReady else {
            showAlert(on: presentingViewController, title: "SDK Not Ready", message: "Please wait for the SDK to initialize.")
            return
        }
        
        chatbotViewController = YourGPTSDK.createChatbotViewController()

        chatbotViewController?.delegate = delegate

        // Add close button
        let closeButton = UIBarButtonItem(
            barButtonSystemItem: .close,
            target: self,
            action: #selector(closeChatbot)
        )
        chatbotViewController?.navigationItem.rightBarButtonItem = closeButton

        let navigationController = UINavigationController(rootViewController: chatbotViewController!)
        navigationController.modalPresentationStyle = .overCurrentContext
        navigationController.modalTransitionStyle = .coverVertical

        presentingViewController.present(navigationController, animated: true)
    }
    
    @objc private func closeChatbot() {
        chatbotViewController?.dismiss(animated: true) { [weak self] in
            self?.chatbotViewController = nil
        }
    }

    func dismissChatbot() {
        chatbotViewController?.dismiss(animated: true) { [weak self] in
            self?.chatbotViewController = nil
        }
    }

    var isReady: Bool {
        return YourGPTSDK.isReady
    }

    var currentState: YourGPTSDKState {
        return YourGPTSDK.core.state
    }
    
    private func showAlert(on viewController: UIViewController, title: String, message: String) {
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default))
        viewController.present(alert, animated: true)
    }
}
```

### Step 2: Initialize the SDK in Your View Controller

```swift

@available(iOS 13.0, *)
class ViewController: UIViewController {
    
    @IBOutlet weak var statusLabel: UILabel?
    @IBOutlet weak var openChatButton: UIButton?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        setupSDKObserver()
        initializeSDK()
    }
    
    private func setupUI() {
        title = "YourGPT iOS SDK Demo"
        view.backgroundColor = .systemBackground
        
        // Configure button
        openChatButton?.layer.cornerRadius = 8
        openChatButton?.isEnabled = false
        updateStatus("Initializing...")
    }
    
    private func setupSDKObserver() {
        YourGPTWrapper.shared.onStateChange = { [weak self] state in
            self?.updateUIForSDKState(state)
        }
    }
    
    private func initializeSDK() {
        Task {
            do {
                try await YourGPTWrapper.shared.initializeSDK(widgetUid: "your-widget-uid")
            } catch {
                await MainActor.run {
                    self.showAlert(title: "SDK Error", message: error.localizedDescription)
                }
            }
        }
    }
    
    private func updateUIForSDKState(_ state: YourGPTSDKState) {
        switch state.connectionState {
        case .connected:
            statusLabel?.textColor = .systemGreen
            openChatButton?.isEnabled = true
            updateStatus("Ready - SDK Connected!", color: .systemGreen)
        case .connecting:
            statusLabel?.textColor = .systemOrange
            openChatButton?.isEnabled = false
            updateStatus("Connecting...", color: .systemOrange)
        case .error:
            statusLabel?.textColor = .systemRed
            openChatButton?.isEnabled = false
            if let error = state.error {
                updateStatus("Error: \(error)", color: .systemRed)
            }
        case .disconnected:
            statusLabel?.textColor = .systemGray
            openChatButton?.isEnabled = false
            updateStatus("Disconnected", color: .systemGray)
        }
    }
    
    private func updateStatus(_ text: String, color: UIColor = .systemOrange) {
        statusLabel?.text = "SDK Status: \(text)"
        statusLabel?.textColor = color
    }
    
    @IBAction func openChatTapped(_ sender: UIButton? = nil) {
        YourGPTWrapper.shared.openChatbot(from: self, delegate: self)
    }
    
    private func showAlert(title: String, message: String) {
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default))
        present(alert, animated: true)
    }
}
```

---

## Requirements

The iOS Chatbot SDK requires the following versions:

- iOS 13.0+  
- Xcode 12.0+  
- Swift 5.0+  

For the latest compatibility information and updates, refer to the official SDK documentation and release notes.

---

## Resources

- **GitHub Repository**: [yourgpt-widget-sdk-ios](https://github.com/YourGPT/yourgpt-widget-sdk-ios)