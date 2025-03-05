
import React, { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={`flex items-center gap-4 ${className} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-steelgray/20 shadow-lg transition-all duration-300 
          ${isHovered ? 'scale-110 shadow-steelgray/30' : ''}`}
      >
        <div className={`w-full h-full p-0.5 rounded-full overflow-hidden transition-transform duration-500 ${isHovered ? 'rotate-12' : ''}`}>
          <img 
            src="/lovable-uploads/887deb8b-5963-4349-9e20-b1c2ebb5ea3d.png" 
            alt="Saraswati" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div 
        className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
      >
        <span className={`relative text-textgray transition-colors duration-300 ${isHovered ? 'text-white' : ''}`}>
          Saras
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-steelgray transition-all duration-500 ${isHovered ? 'w-full' : ''}`}></span>
        </span>
        <span className={`text-steelgray transition-all duration-500 ${isHovered ? 'text-opacity-100 brightness-125' : 'text-opacity-90'}`}>
          Vathi
        </span>
      </div>
    </div>
  );
};

export default Logo;
