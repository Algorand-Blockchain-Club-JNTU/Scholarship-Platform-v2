
import React, { useEffect, useRef } from 'react';
import { Shield, Globe, Lock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div ref={cardRef} className="card opacity-0">
      <div 
        ref={iconRef} 
        className="text-steelgray p-3 rounded-full bg-steelgray/10 inline-block mb-4 animate-glow-pulse relative overflow-visible"
      >
        <div className="absolute inset-0 rounded-full bg-steelgray/20 blur-md -z-10 animate-pulse-subtle"></div>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-textgray">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  const features = [
    {
      icon: <Shield size={24} />,
      title: "Transparent Funding",
      description: "Every scholarship transaction is recorded on the blockchain, ensuring complete transparency."
    },
    {
      icon: <Globe size={24} />,
      title: "Access to Everyone",
      description: "No Scholarship exam, Get a Scholarship based on your Educational journey and pure Merit!"
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Verification",
      description: "Blockchain technology ensures all credentials and disbursements are securely verified."
    }
  ];

  return (
    <section id="features" className="section">
      <div className="text-center mb-16">
        <h2 
          ref={titleRef} 
          className="opacity-0 text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Why Choose <span className="text-steelgray">SarasVathi</span>
        </h2>
        <p 
          ref={subtitleRef} 
          className="opacity-0 max-w-3xl mx-auto"
        >
          Revolutionizing education funding with transparency, security, and global accessibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
