
import React, { useEffect, useRef } from 'react';

const CallToAction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (buttonsRef.current) observer.unobserve(buttonsRef.current);
    };
  }, []);

  return (
    <section id="about" className="section">
      <div 
        ref={containerRef} 
        className="glass-effect rounded-xl px-6 py-16 md:px-10 md:py-20 text-center"
      >
        <h2 
          ref={titleRef} 
          className="opacity-0 text-3xl md:text-4xl font-bold mb-6 text-white"
          style={{ animationDelay: '0.2s' }}
        >
          Ready to Transform Education Funding?
        </h2>
        
        <p 
          ref={paragraphRef}
          className="opacity-0 max-w-2xl mx-auto mb-10 text-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Join the revolution in educational scholarships. Connect your wallet and start your journey today.
        </p>
        
        <div 
          ref={buttonsRef}
          className="opacity-0 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: '0.6s' }}
        >
          <button className="btn-primary">
            Connect Wallet
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
