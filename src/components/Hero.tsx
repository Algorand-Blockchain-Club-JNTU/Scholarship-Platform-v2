
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (chipRef.current) observer.observe(chipRef.current);
    if (buttonContainerRef.current) observer.observe(buttonContainerRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (chipRef.current) observer.unobserve(chipRef.current);
      if (buttonContainerRef.current) observer.unobserve(buttonContainerRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div 
        ref={chipRef} 
        className="opacity-0 mb-6 inline-flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm shadow-sm hover:bg-white/15 transition-all duration-300"
        style={{ animationDelay: '0.2s' }}
      >
        <span className="text-steelgray font-medium">Blockchain</span>
        <span className="mx-1 text-white/70">•</span>
        <span className="text-white/90">Scholarship Platform</span>
      </div>
      
      <h1 
        ref={headingRef} 
        className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mx-auto"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="text-white inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-steelgray/30 after:bottom-0 after:left-0">Empowering Education</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-steelgray relative">
             <br></br>through <span className="text-steelgray animate-pulse-subtle">Blockchain.</span>
        </span>
      </h1>
      
      <p 
        ref={paragraphRef} 
        className="opacity-0 text-lg md:text-xl mb-10 mx-auto max-w-2xl text-textgray/90 leading-relaxed"
        style={{ animationDelay: '0.6s' }}
      >
        Sign in to open the gateway of <span className="text-white font-medium">Scholarships</span>. Access transparent, verifiable education funding.
      </p>
      
      <div 
        ref={buttonContainerRef} 
        className="opacity-0 flex flex-wrap justify-center gap-4"
        style={{ animationDelay: '0.8s' }}
      >
        <button className="btn-primary animate-glow-pulse">
          Find Scholarship
        </button>
        <button className="btn-secondary">
          Give Scholarship
        </button>
      </div>
    </section>
  );
};

export default Hero;
