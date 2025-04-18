import React from 'react';
import ChatContainer from './components/ChatContainer';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(217deg, rgba(255,107,0,.1), rgba(255,107,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,0,0,.1), rgba(0,0,0,0) 70.71%),
            linear-gradient(336deg, rgba(255,107,0,.1), rgba(255,107,0,0) 70.71%)
          `
        }}
      />
      
      {/* Mesh pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #ff6b00 0, #ff6b00 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, #ff6b00 0, #ff6b00 1px, transparent 0, transparent 50%)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      <main className="w-full max-w-3xl h-[80vh] relative">
        <div className="bg-neutral-900 shadow-2xl rounded-2xl overflow-hidden h-full border border-orange-500/20">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4">
            <h1 className="text-xl font-bold text-white">European Sports Trial Assistant</h1>
            <p className="text-sm text-orange-100/80">Find your opportunity in European sports</p>
          </div>
          
          <ChatProvider>
            <ChatContainer />
          </ChatProvider>
        </div>
      </main>
    </div>
  );
}

export default App;