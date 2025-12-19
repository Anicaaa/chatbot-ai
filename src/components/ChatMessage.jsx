import React from 'react'
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  const isBot = chat.sender === "bot";

  if (isBot) {
    const sections = chat.message.split("\n\n");

    return (
      <div className={`flex items-start gap-3 justify-start`}>
        <ChatbotIcon />
        <div className="max-w-[75%]">
          {sections.map((section, index) => (
            <div
              key={index}
              className="mb-2 rounded-lg bg-[#e5effa] p-4 text-sm text-black prose prose-sm whitespace-pre-line"
            >
              {section.split("\n").map((line, i) => {
                // Bold lines wrapped in **
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={i} className="font-bold">
                      {line.slice(2, -2)}
                    </p>
                  );
                }
                return <p key={i}>{line}</p>;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 justify-end">
      <p className="max-w-[75%] rounded-[10px] p-4 text-sm bg-[#4a90e2] text-white">
        {chat.message}
      </p>
    </div>
  );
};

export default ChatMessage