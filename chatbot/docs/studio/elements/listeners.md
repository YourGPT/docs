# Listeners 

> Learn about Listeners in YourGPT Chatbot Studio.

# Listeners in YourGPT Chatbot Studio

Listeners play a crucial role in capturing user responses and enabling interactive elements like buttons within flow. These components facilitate user engagement and data capture for seamless interactions.

## 1. Capture Listener

![Capture Listeners in YourGPT Studio](/assets/flow/listener/capture.png)

The Capture Listener is an essential component of the flow, capturing user replies and storing them in specified locations. It acts as an interface between user input and the chatbot's response mechanism.

### Types of Capture Listener

Capture have three types:

#### **1. Query Capture Listener**  
Captures user responses and stores them in a variable.  
- **Entire Response**: Captures the full user input.  
- **Name**: Captures the user's name.  
- **Email**: Captures the user's email address.  
- **Phone**: Captures the user's phone number.  
- **Date**: Captures the date input.  
- **Time**: Captures the time input.  

#### **2. Entity Capture Listener**  
Extracts structured information from previous user messages.  
- **Entity - Extract from history messages**: Captures data from past interactions.  

#### **3. Attachment Capture Listener**  
Handles media or file uploads from users.  
- **Image**: Captures image attachments.  
- **Video**: Captures video files.  
- **Audio**: Captures audio files.  
- **File**: Captures document or other file types.

---

### Usage of Capture Listener

The Capture Listener allows you to:

- **Capture User Responses:** Collect and store user inputs during conversations.
- **Personalize Interactions:** Gather user-specific information like name, email, or phone number for personalized responses.
- **Time-sensitive interactions:** Schedule appointments, set reminders, or provide time-specific information.
- **Store Responses:** Save captured responses in designated path for future reference or processing.

> **NOTE:** Learn more in detailed about [Capture on our Help center article](https://help.yourgpt.ai/article/how-to-capture-and-store-a-users-response-32).

---

## 2. Button Listener

![Button Listeners in YourGPT Studio](/assets/flow/listener/button.png)

The Button Listener allows the chatbot to provide interactive features in the form of buttons, allowing users to choose from predefined options or actions during the conversation.

### Usage of Button Listener

- **Interactive Buttons:** Enables the inclusion of buttons within the chatbot interface, providing users with selectable options.
- **Actionable Choices:** Allows users to trigger specific actions or responses by clicking on the provided buttons.
- **Customization:** Offers flexibility in designing button layouts and defining corresponding actions or responses.

> **NOTE:** Learn more in detailed about [Buttons on Help center article  ](https://help.yourgpt.ai/article/how-to-create-configure-buttons-in-studio-828).

---

## 3. Form Listener

![Form Listeners in YourGPT Studio](/assets/flow/listener/form.png)

The Form Listener is a versatile component that captures user inputs through form fields, enabling structured data collection and processing within the agents flow.

### Field Types of Form Listener

- **Text (single)** : Standard input field for collecting single-line text responses
- **Number** : Numeric input field with optional validation for numerical values
- **Email** : Specialized input for collecting and validating email addresses
- **Phone** : Input field optimized for phone number collection with format validation
- **Text Area** : Multi-line text input for longer responses or descriptions
- **Checkbox** : Toggle selection for yes/no or multiple choice options
- **Radio** : Single selection from multiple predefined options
- **Range** : Slider input for selecting values within a specified range
- **Select** : Dropdown menu for choosing from predefined options
- **Date** : Calendar input for date selection
- **File** : File upload capability for documents, images, or other media

### Usage of Form Listener

- **Data Collection:** Capture user inputs in a structured format for processing and analysis.
- **Customized Forms:** Design custom forms with specific field types to collect relevant information.

> **NOTE:** To learn more about Form Listeners, refer to the [Form Listeners Documentation](https://chatbot-help.aidesk.center/article/how-to-create-and-use-forms-in-ai-studio-1177).

## 4. Feedback

![Feedback Listeners in YourGPT Studio](/assets/flow/listener/feedback.png)

The Feedback Listener is designed to capture user satisfaction scores, typically used for Customer Satisfaction (CSAT) surveys. It allows you to gather valuable feedback on user experience and service quality.

### Features of Feedback Listener

- **Rating Scale:** Rating scale (e.g., 1-5 stars) for quantitative feedback.
- **Comments Section:** Optional text area for users to provide detailed feedback.
- **Trigger Points:** Can be set to appear after specific interactions or at the end of conversations.
- **Data Analysis:** Collected feedback can be used for performance metrics and improvement strategies.

> **NOTE:** For more information on implementing CSAT surveys, visit our [Feedback Listener Guide](https://help.yourgpt.ai/article/how-to-implement-csat-surveys-using-feedback-listeners-1568).