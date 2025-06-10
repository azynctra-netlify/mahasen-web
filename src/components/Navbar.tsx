import { useState, useEffect } from "react";
import { Moon, CircleDollarSign, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent",
          className
        )}
      >
        <div className="container mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <div className="px-2 sm:px-3 py-1">
              <img
                src="/mahasen.png"
                alt="Mahasen Logo"
                className="h-8 sm:h-9 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className="text-gray-200 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Action buttons */}
            <div className="flex items-center gap-3 lg:gap-4">
              <Link to="/early-access">
                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 text-sm lg:text-base px-3 lg:px-4 py-2"
                >
                  Get Early Access
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 sm:top-20 right-4 w-64 bg-black/90 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
            <div className="py-6 px-6">
              <nav className="space-y-4">
                <Link
                  to="/pricing"
                  className="block text-gray-200 hover:text-white transition-colors text-lg font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
                
                <div className="pt-4 border-t border-gray-700">
                  <Link to="/early-access" onClick={closeMobileMenu}>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-white hover:bg-gray-800 justify-center"
                    >
                      Get Early Access
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
