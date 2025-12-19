import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { useState } from "react";

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (latestUserMessage) => {
  setChatHistory(prev => [
    ...prev,
    { sender: "user", message: latestUserMessage }
  ]);

  setChatHistory(prev => [
    ...prev,
    { sender: "bot", message: "Thinking..." }
  ]);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [
        { parts: [{ text: latestUserMessage }] }
      ]
    })
  };

  try {
    const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
    const data = await response.json();

    console.log("Full API response:", data);

    const botMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                       "Sorry, I couldn't generate a response.";

    setChatHistory(prev => prev.map(msg => {
      if (msg.message === "Thinking...") {
        return { sender: "bot", message: botMessage };
      }
      return msg;
    }));

  } catch (error) {
    console.error("API error:", error);
    
    setChatHistory(prev => prev.map(msg => {
      if (msg.message === "Thinking...") {
        return { sender: "bot", message: "Error: Could not get a response." };
      }
      return msg;
    }));
  }
};

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[420px] overflow-hidden rounded-[15px] bg-white
        shadow-[0_0_128px_rgba(0,0,0,0.1),0_32px_64px_-48px_rgba(0,0,0,0.05)]">

        {/* Header */}
        <div className="flex items-center justify-between bg-[#4a90e2] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ChatbotIcon />
            <h2 className="text-white text-xl font-semibold">
              Chatbot Assistant
            </h2>
          </div>
          <button className="material-symbols-rounded w-10 h-10 rounded-full
            text-white text-[22px] transition hover:bg-[#2266b3]">
            keyboard_arrow_down
          </button>
        </div>

        {/* Chat body */}
        <div className="flex h-[70vh] flex-col gap-4 overflow-y-auto px-5 py-4">

          {/* Bot message */}
          <div className="flex items-start gap-3">
            <ChatbotIcon />
            <p className="max-w-[75%] rounded-[10px] bg-[#e5effa] px-4 py-3 text-sm">
              Hello! I'm your Chatbot Assistant. How can I help you today?
            </p>
          </div>

          {/* User message */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat}/>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3">
        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory } generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  );
}

export default App;
