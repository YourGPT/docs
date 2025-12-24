# AI refuse to answer

When an AI refuses to answer a question, especially when instructed to “Refuse to answer beyond the given knowledge base,” it’s often because there is no relevant information available or the question is out of context. However, this refusal should only occur under specific circumstances. Below is a guide to help you troubleshoot and resolve this issue.

## 1. Verify Data Sources

### Check the Response Source

![Base Prompt Configuration](/assets/chatbot/Debug/how-to-debug/ai-refusal/repeat-refusal.png)

Start by examining the sources of the AI-generated response. If you find data related to your query within your data sources and the information has a decent confidence score, but the AI still refuses to answer, the issue might lie in the prompts you’ve set.

![Refusal response source details](/assets/chatbot/Debug/how-to-debug/ai-refusal/refusal-source.png)

![Example of wrong base prompt causing refusal](/assets/chatbot/Debug/how-to-debug/ai-refusal/refusal-wrong-base-prompt.png)

### Adjusting Prompts

If the data is present but not being used correctly, inspect your **Base Prompt** or **Restriction Prompt**. These prompts might need tweaking to ensure the AI responds appropriately based on the available data.

![Improved base prompt configuration](/assets/chatbot/Debug/how-to-debug/ai-refusal/refusal-base-prompt-improved.png)

## 2. Missing Information in Data Sources

### No Relevant Data Found

If you don’t find any trace of the query’s information in the data sources, it indicates that the AI couldn’t locate the necessary data. This could be due to incomplete training.

![No relevant information found in sources](/assets/chatbot/Debug/how-to-debug/ai-refusal/refusal-no-info-sources.png)

### Verify Training Data

Check whether you’ve trained the bot on the relevant information. If the data was included in the training but is still not being accessed, the training data might not be properly formatted or well-structured. It’s important to ensure the training data is correctly structured to optimize the AI’s performance.

## 3. Using the Debug Lab Feature

### Search and Investigate

For further investigation, use the **Debug Lab** feature. This tool allows you to search through all your training material and lists all related data sources for any given query.

![Debug Lab interface](/assets/chatbot/Debug/how-to-debug/debug-lab.png)

### Filtering Data Points

You can filter data points to specific documents using the **Source** button in your trained data listing. This helps you retrieve all data sources linked to a particular document or link, enabling you to query and view data points specific to that document.

![Filtering data by document source](/assets/chatbot/Debug/how-to-debug/doc-source.png)

## 4. Editing and Adjusting Data Sources

### Modifying Data Sources

You can edit these data sources, make adjustments, or remove certain data points as needed. However, keep in mind that any edits made directly to the data sources may be overridden when the related document is re-trained.

![Editing a data source](/assets/chatbot/Debug/how-to-debug/edit-data-source.png)

### Adjusting Training Material

To avoid losing your changes, it’s better to adjust the **training material** itself rather than only editing the extracted data points. This ensures your AI bot consistently has access to the correct information after every re-training.

> **TIP:** Check out our [Training Guide](/chatbot/training) for more tips and best practices.