import React from "react";
import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  if (!chat.message) return null;

  const isBot = chat.sender === "bot";
  const sections = chat.message.split("\n\n");

  return (
    <div className={`flex items-start gap-3 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && <ChatbotIcon />}
      <div
        className={`max-w-[75%] rounded-lg p-4 text-base outfit
          ${isBot ? "bg-[#dcd0ca] text-black" : "bg-[#967969] text-white"}`}
      >
        {sections.map((section, index) => (
          <div key={index} className="mb-2 last:mb-0">
            {section.split("\n").map((line, i) => {
              const parts = line.split(/(\*\*.*?\*\*)/g);

              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <span key={j} className="font-bold">
                        {part.slice(2, -2)}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessage;