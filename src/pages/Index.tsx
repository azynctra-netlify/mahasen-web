import { useState, useEffect } from "react";
import StarfieldBackground from "@/components/StarfieldBackground";
import Quote from "@/components/Quote";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollPrompt from "@/components/ScrollPrompt";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JoinWaitlistFooter from "@/components/joinWaitlistFooter";
import VideoPlayer from "@/components/ui/video-player"


const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

const VideoPlayerDemo = () => {
    return <VideoPlayer src="/img/mahasen-demo.mp4" mobileVideoSrc="/img/mahasen-demo-mobile.mp4" />;
};

  useEffect(() => {
    // Consistent loading timing across all pages
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <main className="min-h-[300vh] relative overflow-x-hidden">
      {/* Background */}
      <StarfieldBackground />

      {/* Navigation */}
      <Navbar />

      {/* Header/Introduction - Fully responsive */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-bdo text-2xl xs:text-4xl sm:text4xl md:text-4xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 text-center leading-tight px-2">
            <span className="text-gradient animate-glow block sm:inline mr-0 sm:mr-7">
              Mahasen AI
            </span>
          </h1>
          <div className="w-full max-w-md mx-auto">
            <JoinWaitlist className="mt-6 sm:mt-8 w-full" />
          </div>
        </div>

        <div 
          className={`transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        </div>
      </section>
          <ScrollPrompt />

      {/* Philosophical Quotes Section - Enhanced mobile responsiveness */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-20 space-y-16 sm:space-y-32 px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ease-out delay-500 w-full ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <VideoPlayerDemo />
        </div>
        
        <ParallaxSection speed={0.1}>
          <div 
            className={`transition-all duration-1000 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Quote
              content='"Innovation should free us from complexity, not create it. 
              We are trying to build that world.💫"'
              author="Leadership Message"
              delay={200}
            />
          </div>
        </ParallaxSection>
      </section>

      {/* About Section - Improved mobile layout */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.12}>
          <div 
            className={`max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-neon-uranianBlue text-glow-cyan text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 text-center font-display tracking-wider">
              TODAY
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
                Mahasen AI is already making your digital life easier with some powerful features. It learns about you by reading your Gmail emails, understanding your communication style and preferences. Based on what it knows about you, it can suggest personalized draft replies that sound like you wrote them. 
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
                For Windows users, we've built an advanced voice typing system that works anywhere on your computer - just press SHIFT + SPACE and start talking. It will understand which application you're active in and write naturally depending on that, making typing as easy as having a conversation.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
                The best part is your voice never leave the device. Only a transcribed text is sent to the cloud. The voice typing is 4x faster than traditional typing. Save yourself, start typing with your voice today.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Second About Section - Enhanced responsiveness */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.08} direction="down">
          <div 
            className={`max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto transition-all duration-1000 ease-out delay-1100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-neon-lapisLazuli text-glow-blue text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 text-center font-display tracking-wider">
              BEYOND
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
                We're working on expanding Mahasen AI to work on all your devices - Mac, Android, and iPhone will soon have the same intelligent voice typing features.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
                Soon, Mahasen will be able to send emails automatically on your behalf, handling routine responses so you never have to worry about forgetting to reply.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
                We're also developing smart notification management that will filter out the noise and only show you what truly matters, giving you back control over your attention and time.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </section>
      
      <div 
        className={`transition-all duration-1000 ease-out delay-1300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <JoinWaitlistFooter className="mb-12 sm:mb-20 px-4 sm:px-6 lg:px-8" />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
