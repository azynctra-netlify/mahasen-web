import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Consistent loading timing across all pages
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, [location.pathname]);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <StarfieldBackground />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div 
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-bdo text-6xl sm:text-8xl md:text-9xl text-white mb-6 leading-tight">
            <span className="text-gradient animate-glow">404</span>
          </h1>
          <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl sm:text-3xl lg:text-4xl mb-6 font-display tracking-wider">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          <Link to="/">
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 text-lg px-6 py-3"
            >
              Return to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default NotFound;
