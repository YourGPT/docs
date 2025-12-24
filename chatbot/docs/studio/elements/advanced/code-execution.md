# Code Execution 

> Learn how to use JavaScript or Python functionality to extend the capabilities of your chatbot allowing to add custom scripting and dynamic execution of code within the chatbot environment.

<div style={{ aspectRatio: 16/9, width: '100%' }}>
  <iframe 
    width="100%" 
    style={{ height: '100%' }}
    src="https://www.youtube.com/embed/nPNpoXKWJ3k?si=d1u11JwNLutfzozS" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
</div>

Code Execution extends the capabilities of chatbot, allowing chatbot execute Javascript code in Runtime to perform complex task. You have two option with code execution:

1. JavaScript Code Execution
2. Python Code Execution

## 1. Code Execution with JavaScript

Our chatbot enables the execution of JavaScript code to accomplish complex tasks. It supports external dependencies such as `axios`, `node-fetch`, and `moment-timezone`!

### How To Execute JavaScript Code

1. **Set Up JavaScript Component:** Go to the **`Flow`** section in the Chatbot Studio, hover on **Advance**, and then drag the Code Execution component onto the canvas.

2. **Write and Execute Code:** Input your JavaScript code into the editor and click on the **`execute`** button to run it. The output will be displayed in the **`output Console`** section.

3. **Debugging and Data Manipulation:** Use the **`console.log()`** function for debugging purposes. The JavaScript code can also be used for various tasks like fetching data from external APIs, performing calculations, and manipulating data.

4. **Save and Test:** Save your flow and test the chatbot to see the code execution in action.

```js
const WEATHER_API_ENDPOINT = 'https://api.weatherapi.com/v1/current.json';
const WEATHER_API_KEY = 'ADD_YOUR_API_KEY_HERE';

// You can also use the config variables to securely store the API key, and use it in the code like this below:
// const WEATHER_API_KEY = CONFIG.WEATHER_API_KEY;

async function fetchWeather(city) {
  const apiUrl = `${WEATHER_API_ENDPOINT}?q=${city}`;
  const headers = {
    'Key': WEATHER_API_KEY
  };

  try {
    const response = await fetch(apiUrl, { headers: headers });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error(error.message);
  }
}

async function getWeatherAndUpdateFlow(city) {
  try {
    const weatherData = await fetchWeather(city);
    console.log('Weather data:', weatherData);
    FLOW.last_response = weatherData;
  } catch (error) {
    console.error('Error updating weather data in FLOW:', error);
    throw new Error(error.message);
  }
}

const city = FLOW.City;
if (!city) {
  throw new Error('City is required.');
}

try {
  await getWeatherAndUpdateFlow(city);
} catch (error) {
  console.error('Error fetching and updating weather data:', error);
}
```

---

## 2. Code Execution with Python

Our chatbot enables the execution of Python code to accomplish complex tasks. It supports external dependencies such as **requests**!

### How To Execute Python Code

<div className="flex justify-center items-center rounded-md p-4">
  ![Python Code Execution](../../../../../assets/flow/python-code-execution.png)
</div>

1. **Set Up Python Component:** Go to the **`Flow`** section in the Chatbot Studio, hover on **Advance**, and then drag the Code component onto the canvas.

2. Choose the Python as the language for the component.

3. **Write and Execute Code:** Input your Python code into the editor and click on the **`execute`** button to run it. The output will be displayed in the **`output Console`** section.

4. **Debugging and Data Manipulation:** Use the **`print()`** function for debugging purposes. The Python code can also be used for various tasks like fetching data from external APIs, performing calculations, and manipulating data.

5. **Save and Test:** Save your flow and test the chatbot to see the code execution in action.

---