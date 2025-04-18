import React from 'react';
import { Trophy } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Trophy className="h-6 w-6 text-blue-600" />
          </div>
          
          {/* This div is a placeholder for the logo */}
          <div className="h-10 w-40 flex items-center">
            <span className="text-white font-bold text-xl">Euro Trials</span>
          </div>
        </div>
        
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>
              <a href="#" className="text-white hover:text-blue-200 transition">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-200 transition">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-200 transition">Success Stories</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-200 transition">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;