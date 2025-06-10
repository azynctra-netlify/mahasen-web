
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  delay?: number;
}

const ParallaxSection = ({ 
  children, 
  className, 
  speed = 0.2, 
  direction = 'up',
  delay = 0
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const scrollValue = window.scrollY;
      const rect = section.getBoundingClientRect();
      
      // Only apply parallax effect when section is in viewport
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const multiplier = direction === 'up' ? -1 : 1;
        const offset = scrollValue * speed * multiplier;
        section.style.transform = `translateY(${offset}px)`;
      }
    };
    
    // Add slight delay before attaching scroll listener for better performance
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      // Initial calculation
      handleScroll();
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, delay]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn('relative transition-opacity duration-700 opacity-0 animate-fade-in', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
