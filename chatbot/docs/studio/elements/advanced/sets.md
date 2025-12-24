# Sets 

Sets allows you to store and manipulate data during a conversation. They can be used to store information about the visitor, session, contact, or flow. 

When a Set is used in a flow, the selected variable is updated with the provided value. This value can then be used in later steps of the flow.

## How to use Sets

To use Sets, follow these steps:

1. Navigate to the desired step in your flow.

2. Click on **`Set content`**.

3. Select the variable you want to set from the dropdown. You can choose from a variety of options, including:

### Flow

- `FLOW.last_response`
    - `FLOW.last_utterance`
    - `FLOW.variable_of_your_choice`

### Session

- `SESSION.status`
    - `SESSION.chat_mode`
    - `SESSION.state`

### Visitor

- `VISITOR.name`
    - `VISITOR.region`
    - `VISITOR.language`
    - `VISITOR.browser`
    - `VISITOR.os`
    - `VISITOR.status`

### Contact

- `CONTACT.name`
  - `CONTACT.email`
  - `CONTACT.phone`
  - `CONTACT.company`
  - `CONTACT.country`
  - `CONTACT.city`
  - `CONTACT.region`
  - `CONTACT.tags`

4. Enter the value you want to set for the selected variable.