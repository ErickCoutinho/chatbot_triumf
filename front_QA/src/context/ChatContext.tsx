import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Message, ChatContextType } from '../types';
import { generateId, getWelcomeMessage } from '../utils/chatUtils';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Mensagem de boas-vindas ao carregar o chat
  useEffect(() => {
    setMessages([getWelcomeMessage()]);
  }, []);

  const addMessage = async (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: generateId(),
      text,
      sender,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (sender === 'user') {
      setIsTyping(true);

      try {
        const res = await fetch("http://localhost:8000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text }),
        });

        const data = await res.json();

        const botMessage: Message = {
          id: generateId(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Erro ao buscar resposta do bot:", error);
      } finally {
        setIsTyping(false);
      }
    }
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, isTyping }}>
      {children}
    </ChatContext.Provider>
  );
};
