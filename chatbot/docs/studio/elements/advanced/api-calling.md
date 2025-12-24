# API Calling 

> Learn how to use API Calls in your chatbot to interact with external services, fetch real-time data, or trigger actions during conversations.

<div style={{ aspectRatio: 16/9, width: '100%' }}>
  <iframe 
    width="100%" 
    style={{ height: '100%' }} 
    src="https://www.youtube.com/embed/62qoGyESI8c?si=DfOT4y6c9BiIPxXk" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
</div>

API Calls enable your chatbot to interact with external services, fetch real-time data, or trigger actions during conversations. By using APIs, chatbot can access to a various information and functionalities beyond its core capabilities.

## API calling use-cases

- **Live Data Fetching:** Retrieve real-time data like weather forecasts, stock prices, news updates or many more.
- **External Actions:** Trigger actions such as making reservations, sending notifications, or updating external system information.
- **Data Enrichment:** Enhance the conversation by providing additional information or context from external sources.
- **User Authentication:** Verify user credentials or access user-specific data from external services.
- **Third-party Integrations:** Connect with third-party services to perform specific tasks.

## How to use API Calls in YourGPT Flow

### Steps to Follow

<ol className="space-y-8 my-8 list-decimal list-inside">

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Set Up API Component:</span>

<div className="ml-6 space-y-2">

- Go to the **`Flow`** section in the Chatbot Studio, hover on **Advance**, and then drag the **API Call** component onto the canvas.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Configure API Endpoint:</span>

<div className="ml-6 space-y-2">

- Enter the API endpoint URL in the **`URL`** field. You can also add query parameters, headers, and other configurations as needed.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Add Headers and Parameters:</span>

<div className="ml-6 space-y-2">

- Customize the API request by adding headers, query parameters, and other configurations. This step ensures that the API call is properly authenticated and formatted.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Test Request:</span>

<div className="ml-6 space-y-2">

- Click on the **`Test Request`** button to check if the API is working fine and see the output. This step helps in verifying the API response and ensuring that the data is fetched correctly.

</div>
</li>

<li className="space-y-3">
<span className="font-bold dark:text-gray-300 text-lg md:text-xl">Capture API Response:</span>

<div className="ml-6 space-y-2">

- Use the **`Capture to`** option to store the API response in a variable. This variable can be used in subsequent steps of the flow.

</div>
</li>

</ol>

### Video Part

🌤️ API Used in the Video - To Search Weather:

API Endpoint is : **`https://api.weatherapi.com/v1/current.json`**

- Add a header set the key to key and value to your API key.

- To run this API, you need to pass the following parameters:
    - **q** : The city name to search for. Here we are using **`{{FLOW.City}}`** to get the city name from the user. **``City``** is a Entity which is used to get the city name from the user.
    - **key** : Your API key. Add this as a header.

> **INFO:** ```json
> https://api.weatherapi.com/v1/current.json?q={{FLOW.City}}
> ```