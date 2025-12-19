import React from 'react'
import { useRef } from 'react';

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        
        generateBotResponse(userMessage);
    }

  return (
    <form className="flex items-center gap-2" onSubmit={handleFormSubmit}>
        <input ref={inputRef}
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-400 px-4 py-2 text-sm"
        />
        <button className="material-symbols-rounded flex h-10 w-10
            items-center justify-center rounded-full bg-[#4a90e2]
            text-white transition hover:bg-[#2266b3]">
            arrow_upward
        </button>
    </form>
  )
}

export default ChatForm