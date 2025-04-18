export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatContextType {
  messages: Message[];
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  isTyping: boolean;
}