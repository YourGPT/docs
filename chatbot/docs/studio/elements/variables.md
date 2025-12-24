# Variables 

> variable are the building blocks of a chatbot conversation.

## What are Variables?

<div style={{ aspectRatio: 16/9, width: '100%' }}>
  <iframe 
    width="100%" 
    style={{ height: '100%' }}
    src="https://www.youtube.com/embed/FFzj9_24C-4"
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
</div>

Variables are used to store and manage data within the flow. They can be used to capture user inputs, store information, or pass data between different components of the flow. Variables help in maintaining context and continuity in the conversation flow.

### Role of Variables

- Variables help in capturing and storing user inputs during the conversation.

- They enable the chatbot to remember information provided by the user and use it to personalize responses or actions.

- Variables can be used to pass data between different components of the flow and maintain context throughout the conversation.

For example, you can create a variable to store the user's name when they introduce themselves. This variable can then be used to personalize responses or address the user by name in subsequent interactions.

### How to use them in Chatbot Studio?

1. Go to the **```Model```** section in the Chatbot Studio.

2. From the left panel, click on **```Variables```**.

3. Click on **```Add Variable```** to create a new variable.

4. Define the variable by selecting its type (FLOW,SESSION,VISITOR) and providing a name.

5. Use the variable in the flow by referencing it with double curly braces (e.g., **`{{FLOW.variable_name}}`**).

6. Variables can be used to capture user inputs, store information, or pass data between different components of the flow.

<div className="space-y-6 my-6">
### Flow

<ul>
    <li><code>FLOW.last_response</code> - The last response in the flow</li>
    <li><code>FLOW.last_utterance</code> - The last message sent by the user</li>
    <li><code>FLOW.{`{variable_of_your_choice}`}</code> - Custom variable that you created for the flow</li>
  </ul>

### Session

<ul>
    <li><code>SESSION.status</code> - Current session status (open/closed)</li>
    <li><code>SESSION.chat_mode</code> - Chat mode: 1 for bot mode, 2 for awaiting, 3 for operator mode</li>
    <li><code>SESSION.state</code> - Session state: resolved, pending, or unresolved</li>
  </ul>

### Visitor

<ul>
    <li><code>VISITOR.name</code> - Name of the visitor</li>
    <li><code>VISITOR.region</code> - Region/location of the visitor</li>
    <li><code>VISITOR.language</code> - Visitor's preferred language</li>
    <li><code>VISITOR.browser</code> - Visitor's web browser</li>
    <li><code>VISITOR.os</code> - Visitor's operating system</li>
    <li><code>VISITOR.status</code> - Visitor's status (away/online/offline)</li>
  </ul>

### Contact

<ul>
    <li><code>CONTACT.name</code> - Name of the contact</li>
    <li><code>CONTACT.email</code> - Email address of the contact</li>
    <li><code>CONTACT.phone</code> - Phone number of the contact</li>
    <li><code>CONTACT.company</code> - Company name of the contact</li>
    <li><code>CONTACT.country</code> - Country of the contact</li>
    <li><code>CONTACT.city</code> - City of the contact</li>
    <li><code>CONTACT.region</code> - Region inside a city</li>
    <li><code>CONTACT.tags</code> - Can be Custom String tags</li>
  </ul>

</div>