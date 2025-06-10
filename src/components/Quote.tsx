import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface QuoteProps {
  content: string;
  author?: string;
  className?: string;
  delay?: number;
  withGlow?: boolean;
  textSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
}

const Quote = ({ 
  content, 
  author, 
  className, 
  delay = 0,
  withGlow = false,
  textSize = 'lg'
}: QuoteProps) => {
  const quoteRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }
    
    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  // Responsive text size mapping
  const responsiveTextSizes = {
    sm: 'text-xs sm:text-sm',
    base: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg md:text-xl',
    xl: 'text-lg sm:text-xl md:text-2xl',
    '2xl': 'text-xl sm:text-2xl md:text-3xl',
    '3xl': 'text-2xl sm:text-3xl md:text-4xl'
  };
  
  return (
    <div 
      ref={quoteRef}
      className={cn(
        'opacity-0 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-10',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <blockquote className={cn(
        'font-quote italic mb-3 sm:mb-4 text-center leading-relaxed',
        withGlow ? 'text-glow text-neon-uranianBlue' : 'text-white',
        responsiveTextSizes[textSize]
      )}>
        {content}
      </blockquote>
      {author && (
        <cite className={cn(
          'block text-center sm:text-right font-sans not-italic text-xs sm:text-sm text-gray-400 pr-0 sm:pr-6',
          withGlow && 'text-neon-lapisLazuli text-glow-blue'
        )}>
          — {author}
        </cite>
      )}
    </div>
  );
};

export default Quote;
