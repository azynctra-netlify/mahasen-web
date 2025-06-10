import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface JoinWaitlistProps {
  className?: string;
}

const JoinWaitlist = ({ className }: JoinWaitlistProps) => {
  return (
    <div className={cn("text-center mb-6 sm:mb-8", className)}>
      <p className="text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
        Your digital clone. Smartly filtering the digital noise to give you only what matters.
        Born to truly help you, instead of making life more complex.
      </p>

      <Link
        to="/early-access"
        className="inline-flex items-center gap-2 bg-neon-uranianBlue hover:bg-neon-lapisLazuli text-neon-indigoDye hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span>Get Early Access</span>
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
    </div>
  );
};

export default JoinWaitlist;
