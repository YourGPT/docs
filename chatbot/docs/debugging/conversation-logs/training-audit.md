# Training Audit

> Search across training sources to find the best-matching content and quickly locate, edit, or delete the source node.

**Training Audit** helps you debug answer quality by searching across your chatbot's training sources and showing the **best matches** for a query.

Each result includes a **Match Score** and a preview of the matched content—so you can quickly identify *which training source is influencing the bot* and then fix it.

## How to open Training Audit

<Steps>
  <Step>
    From the left sidebar, open **Debug Lab**.

    ![Open Debug Lab](/assets/chatbot/debugging-2/image-3.png)
  </Step>
  <Step>
    Click the **Training Audit** tab.

    ![Training Audit tab](/assets/chatbot/debugging-2/image-4.png)
  </Step>
</Steps>

## Search your training data

<Steps>
  <Step>
    Enter a keyword or phrase related to the answer you're trying to debug.
  </Step>
  <Step>
    Click **Find** to search.

    ![Search query](/assets/chatbot/debugging-2/image-5.png)
  </Step>
</Steps>

How to read the results:

- **Best match first**: results are ranked, with the most relevant match at the top.
- **Match Score**: a higher score usually means the content is closer to your query.
- **Preview**: you'll see the matched content snippet so you can verify relevance quickly.

## Inspect a match

Open a result to view the matched content in a larger preview and verify *why* the chatbot is producing a certain answer (it's likely pulling from this training content).

<Steps>
  <Step>
    Click a result to open the preview/modal.

    ![Match preview modal](/assets/chatbot/debugging-2/image-6.png)
  </Step>
</Steps>

## Locate the source node

Once you've identified the right match, you can jump directly to the underlying training source node and modify it.

<Steps>
  <Step>
    Click **Find Document** on the matched result. This opens the related entry in **Training Datasets** and applies a **Node ID** filter—so you can locate the exact source node that contains the matched content.

    ![Locate node in training datasets](/assets/chatbot/debugging-2/image-7.png)
  </Step>
  <Step>
    Use the filtered dataset list to find the source and then:

    - **Edit** the source (for example, correct outdated or misleading text)
    - **Delete** the source to remove it from training
  </Step>
</Steps>

## View training source

To view the source of training data, follow these steps:

1. Go to the **Chatbot**.
2. Click on the **Logger** tab.
3. Select **Training Audit** and type your query.
4. Click on the **Find** button.

<div className="my-4 flex justify-center">
  <video
    src="/assets/chatbot/Debug/training-view.mp4"
    muted
    autoPlay
    controls
    width="800"
    className="rounded-md"
  >
    Training View Source
  </video>
</div>

## Tips & troubleshooting

<Callout title="Tips" type="tip">
  - **Try multiple phrasings**: search for synonyms or a direct quote from the incorrect answer.
  - **Low scores**: broaden the query (fewer words) or search for a distinctive phrase you expect to exist in training data.
  - **After edits/deletes**: re-test after the changes are processed so you can confirm the updated training data is reflected in responses.
</Callout>