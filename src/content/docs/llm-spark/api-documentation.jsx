// ---
// title: API Documentation | LLM Spark
// description:  The comprehensive API documentation guide for LLM Spark. Your go-to guide for seamless Integration.
// keywords: llm spark api documentation, API documentation, API documentation guide,  LLM Spark, llmspark, llm-spark 
// ---


// import { Tabs } from 'nextra/components'

// # API Documentation
// Dive into the detailed exploration of LLM Spark API documentation.

// ## Setup API Keys
// Visit https://llmspark.yourgpt.ai and generate your API keys
// <Tabs items={['Curl', 'Nodejs']}>
//   <Tabs.Tab>
//     - After generating your API key, Add your API key as `api-key:` headers
  
//   </Tabs.Tab>
//   <Tabs.Tab>
//     - Installing the [LLM Spark Nodejs Package](https://www.npmjs.com/package/@yourgpt/llmspark-nodejs)

//     ```bash copy
//  npm i @yourgpt/llmspark-nodejs
//     ```
//     - Using the package
//     ```js copy
//     const { LLMSpark } = require("@yourgpt/llmspark-nodejs");

//     const api = new LLMSpark({
//     apiKey: 'My Api Key'
//     });
//     ```
//   </Tabs.Tab>
// </Tabs>

// ## Search API
// Search API Documentation
// <Tabs items={['Curl', 'Nodejs']}>
//   <Tabs.Tab>
//         ```js copy 
//         curl --location 'https://api-llmspark.yourgpt.ai/v1/search' \
//         --header 'api-key: sk-62a56e6f0c376ff2406ee26e3f86cc1f2849dcdcf4d6be591adb7ab' \
//         --header 'Content-Type: application/json' \
//         --data '{
//         "limit":2,
//         "query":"This is working"
//         }'
//         ```
//   </Tabs.Tab>
//   <Tabs.Tab>
//     ```js copy
//     let data = await api.search({limit: 3, query: "what information you have?"});
//     ```
//   </Tabs.Tab>
// </Tabs>


// ## Generate API with Stream
// Generate API Documentation
// <Tabs items={['Curl', 'Nodejs']}>
//   <Tabs.Tab>
//         ```js copy 
//         curl --location 'https://api-llmspark.yourgpt.ai/v1/generate' \
// --header 'api-key: sk-62a56e6f0c376ff2406ee26e3f86cc1f2849dcdcf4d6be591adb7ab' \
// --header 'Content-Type: application/json' \
// --data '{
//     "deployment_uid":"d5b67a9c-2768-4b06-b0b1-5eca4ab25a0e",
//     "variables":{
//         "query_str":"how are you doing buddy, you are great",
//         "previous_chat":"hey there!!"
//     },
//     "stream":true
// }'
//         ```
//   </Tabs.Tab>
//   <Tabs.Tab>
//     ```js copy
//     let data = await api.generate({
//       deployment_uid: "d5b67a9c-2768-4b06-b0b1-5eca4a15a0e",
//       variables: { "query_str":"how are you doing?"},
//       tags: ["user-123"],
//       stream: true
//     }});

//     for await(const stream of result.getOutput()){
//       console.log(stream)
//     }
//    console.log(data.getMetrics());  // for getting metrics
//    console.log(data.getNodes());  // for getting nodes
//     ```
//   </Tabs.Tab>
// </Tabs>


// ## Generate API without Stream
// Generate API Documentation without Stream
// <Tabs items={['Curl', 'Nodejs']}>
//   <Tabs.Tab>
//         ```js copy 
//         curl --location 'https://api-llmspark.yourgpt.ai/v1/generate' \
// --header 'api-key: sk-62a56e6f0c376ff2406ee26e3f86cc1f2849dcdcf4d6be591adb7ab' \
// --header 'Content-Type: application/json' \
// --data '{
//     "deployment_uid":"d5b67a9c-2768-4b06-b0b1-5eca4ab25a0e",
//     "variables":{
//         "query_str":"how are you doing buddy, you are great",
//         "previous_chat":"hey there!!"
//     }
// }'
//         ```
//   </Tabs.Tab>
//   <Tabs.Tab>
//     ```js copy
//     let data = await api.generate({
//         deployment_uid: "d5b67a9c-2768-4b06-b0b1-5eca4a15a0e",
//         variables: { "query_str":"how are you doing?" },
//         tags: ["user-123"]
//     }});

//     console.log(data.getOutput());  // for getting output
//     console.log(data.getMetrics());  // for getting metrics
//     console.log(data.getNodes());  // for getting nodes
//     ```
//   </Tabs.Tab>
// </Tabs>

