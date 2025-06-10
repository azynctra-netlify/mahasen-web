import { useState, useEffect } from "react";
import { ExternalLink, MessageCircle, Users, Shield } from "lucide-react";
import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const EarlyAccess = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Consistent loading timing across all pages
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  const accessMethods = [
    {
      title: "Discord",
      description: "Limitless Community",
      icon: MessageCircle,
      link: "https://discord.gg/wEp3Uwqf",
      backgroundImage: "/img/discord.jpeg",
      iconColor: "text-[#5865F2]"
    },
    {
      title: "WhatsApp",
      description: "Direct Access to the Team",
      icon: Users,
      link: "https://chat.whatsapp.com/Cg7OrlO6Vjk482Sc1yDClQ",
      backgroundImage: "/img/whatsapp.jpeg",
      iconColor: "text-[#25D366]"
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <StarfieldBackground />

      {/* Navigation */}
      <Navbar />

      {/* Header Section - Fully responsive */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-bdo text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-3 sm:mb-3 leading-tight">
              <span className="text-gradient animate-glow">Get Early Access</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2">
              Choose your path to join the future of digital renaissance.
            </p>
          </div>

          {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {accessMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.title}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 hover:scale-[1.04] cursor-pointer",
                    "h-72 sm:h-80 md:h-80 md:w-80 w-full max-w-[600px] mx-auto",
                    `transition-all duration-600 ease-out ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`
                  )}
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${method.backgroundImage}')`
                    }}
                  />
                  
                  {/* Overlay with blur and translucency */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-300 ease-in-out group-hover:bg-black/0 group-hover:backdrop-blur-none" />
                  
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/10 p-[1px]">
                    <div className="h-full w-full rounded-2xl sm:rounded-3xl bg-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-center">
                    {/* Title and Description at the top */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base opacity-80 group-hover:text-gray-800 transition-colors duration-300">
                        {method.description}
                      </p>
                    </div>

                    {/* Join Now Button at the bottom */}
                    <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base font-medium transition-all duration-300 mx-auto">
                      <span>Join Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>

          {/* Security Badge */}
          <div 
            className={`mt-8 sm:mt-12 text-center transition-all duration-1000 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
              <Shield className="h-4 w-4 text-neon-uranianBlue" />
              <span className="text-xs sm:text-sm text-gray-300">
                Let's build the future together ! 
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default EarlyAccess; 