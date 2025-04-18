import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { addMessage, isTyping } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addMessage(input.trim(), 'user');
    setInput('');
  };

  return (
    <div className="border-t border-neutral-800 bg-neutral-900 p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about trial opportunities in Europe..."
          className="flex-1 bg-neutral-800 text-white border-none rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-neutral-500"
          disabled={isTyping}
        />
        <button
          type="submit"
          className={`bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors ${
            isTyping ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isTyping || input.trim() === ''}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
      
      {isTyping && (
        <div className="text-sm text-neutral-400 mt-2 animate-pulse">
          Assistant is typing...
        </div>
      )}
    </div>
  );
};

export default ChatInput;