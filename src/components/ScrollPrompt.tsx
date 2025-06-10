import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

const ScrollPrompt = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      'fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 flex flex-col items-center',
      isVisible ? 'opacity-80' : 'opacity-0 pointer-events-none'
    )}>
      <span className="text-neon-uranianBlue text-glow-cyan text-xs uppercase tracking-widest mb-2">Explore</span>
      <ArrowDown className="text-neon-uranianBlue animate-float h-5 w-5" />
      <div className="w-px h-8 bg-gradient-to-b from-neon-uranianBlue to-transparent animate-float-slow mt-2" />
    </div>
  );
};

export default ScrollPrompt;
