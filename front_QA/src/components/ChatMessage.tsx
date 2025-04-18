import React from 'react';
import { Message } from '../types';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
      data-testid={`message-${message.id}`}
    >
      <div className={`flex ${isBot ? 'flex-row' : 'flex-row-reverse'} max-w-[80%] group items-end`}>
        <div 
          className={`flex-shrink-0 h-8 w-8 rounded-full ${
            isBot ? 'bg-orange-500' : 'bg-neutral-700'
          } flex items-center justify-center mx-2`}
        >
          {isBot ? (
            <Bot className="h-5 w-5 text-white" />
          ) : (
            <User className="h-5 w-5 text-white" />
          )}
        </div>
        
        <div
          className={`px-4 py-3 rounded-2xl ${
            isBot 
              ? 'bg-neutral-800 text-white' 
              : 'bg-orange-500 text-white'
          }`}
        >
          <p className="whitespace-pre-wrap">{message.text}</p>
          <div className={`text-xs mt-1 ${isBot ? 'text-neutral-400' : 'text-orange-200'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;