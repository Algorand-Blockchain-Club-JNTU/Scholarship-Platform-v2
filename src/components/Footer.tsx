
import React from 'react';
import Logo from './Logo';
import { Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="mt-2 text-sm max-w-md">
              Making Education affordable for everyone using Blockchain
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-textgray hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-textgray hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="#" 
              className="text-textgray hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-textgray/70">
          <p>© 2024 SarasVathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
