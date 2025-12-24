# AI Retrieval 

AI Retrieval is a feature that enhances your AI agent's capabilities by dynamically retrieving the most relevant information from your Knowledge Base in real-time. It allows precise filtering and response formatting for optimal retrieval. This intelligent retrieval system significantly improves response quality by ensuring your AI has access to exactly the right information when needed.

<div className="flex justify-center items-center rounded-md p-4 md:px-60">
  ![AI Retrieval](/assets/flow/ai-task/ai-retrevial.png)
</div>

### 1. Search Query:

Enter a query to retrieve the relevant content from the knowledge base.

### 2. Tags:

Tags are created in the training section, allowing you to assign specific tags to specific training data. Tags help filter the retrieval process by segmenting the knowledge base.

It will retrieve all your training data that matches the query. You can use one of the following options to refine search results:

- **Include:** Retrieves content that contains at least one of the selected tags.
- **Exclude:** Filters out documents containing the specified tags.

> **INFO:** You can only select either Include or Exclude, not both simultaneously.

### 3. Nodes Limit:

Sets the number of knowledge nodes retrieved per query. A higher limit returns more results, whereas a lower limit narrows the response. (default: 10)

### 4. Response Type:

Select the type of response format you want to retrieve:

- **Raw:** Fetches the plain text result.
- **JSON:** Converts the raw data into JSON based on the provided JSON schema.

### 5. Store Into:

Allows saving retrieved responses into a variable for further processing or automation.

> **INFO:** For more details check out our Help Center article on [How to use Retrieval in Studio](https://help.yourgpt.ai/article/how-to-set-up-and-use-ai-retrieval-1141).