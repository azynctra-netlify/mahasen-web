import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PricingCard, PricingTier } from "@/components/ui/pricing-card";



const Pricing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const paymentFrequency = "monthly";

  useEffect(() => {
    // Consistent loading timing across all pages
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: {
        monthly: 0,
        yearly: 0,
      },
      description: "For all those who are starting. Free Forever!",
      features: [
        "Voice typing upto 4000 words",
        "User provided Gemini API",
        "Basic Gmail integration",
        "AI Personalization",
        "Simple draft suggestions",
        "Windows desktop app",
      ],
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      price: {
        monthly: 5,
        yearly: 60,
      },
      description: "Advanced features for power users",
      features: [
        "Everything in Starter",
        "Unlimited voice typing",
        "Personalized writing style",
        "Personal Dictionary",
        "Advanced voice commands",
        "Advanced Gmail integration",
        "Priority customer support",
        "Early Access to new features",
        "Email Writing with subject and body",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <StarfieldBackground />

      {/* Navigation */}
      <Navbar />

      {/* Pricing Header - Fully responsive */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-bdo text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-gradient animate-glow">Choose Your Plan</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-m max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto leading-relaxed px-2">
            Start with our free plan and upgrade as your needs grow. 
            All plans include our core AI features with different usage limits and capabilities.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Enhanced responsive layout */}
      <section className="pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="flex-1 max-w-sm transform transition-transform duration-300 hover:scale-105">
                <PricingCard
                  tier={tier}
                  paymentFrequency={paymentFrequency}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Improved mobile layout */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 text-center font-display tracking-wider">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                question: "How does the voice typing work?",
                answer: "Simply press SHIFT + SPACE anywhere on your Windows computer and start speaking. Mahasen AI will transcribe your speech and adapt the writing style based on the application you're using.",
                delay: 900
              },
              {
                question: "Is my voice data secure?",
                answer: "Absolutely. Your voice never leaves your device. We only process the transcribed text in the cloud, ensuring complete privacy and security of your voice data.",
                delay: 1100
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period.",
                delay: 1300
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`border border-gray-700 rounded-lg p-4 sm:p-6 transition-all duration-1000 ease-out delay-${faq.delay} ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-white text-base sm:text-lg font-medium mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Pricing; 