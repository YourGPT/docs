# Intents 

> Learn about Intents in YourGPT Chatbot Studio.

<div style={{ aspectRatio: 16 / 9, width: "100%" }}>
  <iframe
    width="100%"
    style={{ height: "100%" }}
    src="https://www.youtube.com/embed/CgGCkGQBQgo"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

## What are Intents?

Intents represent the intentions or purposes behind a users input or query. They help the chatbot understand what the user wants or what action they intend to perform. Each intent typically corresponds to a specific task, action, or response that the chatbot can handle. 

### Role of Intents
Fundamental step in chatbot development: Creating intents.

- Link user inquiries to appropriate responses/actions.

- Understand and respond to user requests accurately and contextually.

- Association of intentions with appropriate responses/actions is crucial.

For example, if a user asks, "What's the weather like today?", the chatbot should recognize the intent as '**asking about the weather**' and respond with the current weather information. This response could be a pre-defined text message, or it could involve an action like fetching real-time weather data from an external API.

### How to use them in Chatbot Studio?

<div style={{ aspectRatio: "16 / 9", width: "100%", position: "relative" }}>
  <iframe
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: 0,
    }}
    src="https://guide.yourgpt.ai/e/clyzkhbxa0030jt0c45al7zzu/tour"
    title="Embedded Content"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

- Go to the **`Flow`** section in the Chatbot Studio.

- From the **`Start`** section, drag and drop the **`Intent`** component onto the canvas.

- Define the intent by providing **a name** and adding a **short description** about the intent in the **`Model`** section.

- Now you can add custom responses or actions to the intent in the **`Flow`** section.

> For more details check out our Help Center article on [How to use Intents in Studio](https://help.yourgpt.ai/article/how-to-use-intents-in-chatbot-studio-31).

### Do's and Don'ts

> **TIP:** - **```Do```** write clear and concise descriptions.
>   - **```Do```** properly describe the scope of the intent.

> **WARNING:** - **```Don't```** Write long and complex descriptions.
>   - **```Don't```** create intents that overlap or conflict with each other.

---

> **INFO:** In the restrictions setting `only answer from knowledge base` will prevent function calls, which may result in the intent not being detected. Make sure to change the restrictions to `"... answer from knowledge base & function calling..."`.