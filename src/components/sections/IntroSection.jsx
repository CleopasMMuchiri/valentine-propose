import React from "react";
import { Heart } from "lucide-react";

/**
 * IntroSection Component
 * 
 * The opening section that displays a simple "I Love You" message
 * with animated hearts. Auto-navigates to the next section after 3 seconds.
 */
const IntroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center animate-scaleIn">
        <h1 className="special text-7xl md:text-9xl font-bold mb-4 text-pink-500">
          I Love You
        </h1>
        
        {/* Animated hearts row */}
        <div className="flex justify-center gap-2 mt-8">
          <Heart
            className="w-8 h-8 text-red-400 animate-pulse"
            fill="currentColor"
          />
          <Heart
            className="w-8 h-8 text-pink-400 animate-pulse"
            fill="currentColor"
            style={{ animationDelay: "0.2s" }}
          />
          <Heart
            className="w-8 h-8 text-purple-400 animate-pulse"
            fill="currentColor"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;