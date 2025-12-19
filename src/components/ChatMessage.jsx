import React from 'react'
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({chat}) => {
    const isBot = chat.sender === 'bot';

  return (
    <div className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
        {isBot && <ChatbotIcon />}
        <p className={`max-w-[75%] rounded-[10px] p-4 text-sm
            ${isBot ? 'bg-[#e5effa] text-black' : 'bg-[#4a90e2] text-white'}`}>
            {chat.message}
        </p>
    </div>
  )
}

export default ChatMessage