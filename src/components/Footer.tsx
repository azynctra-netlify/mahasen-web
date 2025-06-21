import { cn } from '@/lib/utils';
import { Linkedin, Youtube, Github, MessageCircle, TwitterIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('py-12 sm:py-16 border-t border-gray-800', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mx-auto sm:mx-0">
              <span className="text-white text-lg sm:text-xl font-display">Mahasen AI</span>
            </div>
            <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm mx-auto sm:mx-0">
              <a href="https://azynctra.com" target="_blank" rel="noopener noreferrer">
                {new Date().getFullYear()} AZYNCTRA.<br />
              </a>
              ALL RIGHTS RESERVED.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-gray-300 uppercase text-sm tracking-wider mb-3 sm:mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/early-access" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 text-sm">Early Access</Link></li>
            </ul>
          </div>
          
          {/* Legal & Social */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-gray-300 uppercase text-sm tracking-wider mb-3 sm:mb-4">Legal & Social</h3>
            <div className="space-y-2 mb-4 sm:mb-6">
              <div><Link to="/privacy-policy" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 text-sm">Privacy Policy</Link></div>
              <div><Link to="/terms-conditions" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 text-sm">Terms & Conditions</Link></div>
              <div><Link to="/refund-policy" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 text-sm">Refund Policy</Link></div>
            </div>
            
            <div className="flex gap-3 sm:gap-4 mt-4 justify-center sm:justify-start">
             
              <a href="https://www.linkedin.com/company/mahasen-ai" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://x.com/azynctra" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg">
                <TwitterIcon size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.youtube.com/@Azynctra" className="text-gray-400 hover:text-neon-uranianBlue transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg">
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
