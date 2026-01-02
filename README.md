# chatbot-ai
A chatbot for **aRoma Coffee**, built to answer questions about the coffee shop using a **Gemini API key** and local company data.  

https://github.com/user-attachments/assets/b03418c0-c692-47df-b089-99ad7a9e9921

## About

This project is a chatbot assistant that helps users get information about aRoma Coffee, including:

- Introduction to the coffee shop  
- Location and opening hours  
- Menu items and prices  
- Contact information and social media links  

The chatbot uses a local `companyData` file to provide answers and enhance responses with the Gemini API.  

## Challenges

One of the main challenges was keeping the **API key secure**. Making the project live without a backend server would risk exposing the key. A proper deployment requires setting up a backend to handle API requests safely.

Another challenge was working with the chatbot code itself, specifically the `generateBotResponse` function. Difficulties included:

- Using `async` / `await` correctly to handle asynchronous API calls.  
- Handling POST request errors.  
- Understanding and applying the **spread operator (`...`)**.  
- Managing chat history updates in a way that keeps previous messages while showing a "Thinking..." placeholder for the bot response.
- Making my project available on production was not possible to keep sensitive information such as API key secure. It would have been secure if the project was done with the backend. However, my project is only frontend, hence risk to expose personal information. 

## Technologies Used

- React
- Tailwind CSS
- Gemini API
