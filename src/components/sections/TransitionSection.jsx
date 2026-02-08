import React from "react";
import { Heart } from "lucide-react";

/**
 * TransitionSection Component
 * 
 * A contemplative transition section between the game and final message.
 * Features staggered text animations that create a narrative pause.
 * Auto-navigates to the final section after 8 seconds.
 */
const TransitionSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center space-y-8">
        {/* First Line - appears immediately */}
        <p
          className="text-2xl md:text-3xl text-gray-400 animate-slideInBottom opacity-0"
          style={{
            animationDelay: "0s",
            animationFillMode: "forwards",
          }}
        >
          This moment doesn't need an audience.
        </p>

        {/* Second Section - appears after 1.5s */}
        <div className="space-y-4">
          <p
            className="special text-3xl md:text-5xl font-semibold text-pink-500 animate-slideInBottom opacity-0"
            style={{
              animationDelay: "1.5s",
              animationFillMode: "forwards",
            }}
          >
            Funny how that works…
          </p>
          
          {/* Third Line - appears after 2.5s */}
          <p
            className="text-2xl md:text-4xl text-gray-600 animate-slideInBottom opacity-0"
            style={{
              animationDelay: "2.5s",
              animationFillMode: "forwards",
            }}
          >
            Sometimes it's not about knowing what comes next —
          </p>
          
          {/* Fourth Line - appears after 3.5s */}
          <p
            className="text-2xl md:text-4xl text-gray-600 animate-slideInBottom opacity-0"
            style={{
              animationDelay: "3.5s",
              animationFillMode: "forwards",
            }}
          >
            it's about understanding what's already here.
          </p>
        </div>

        {/* Hearts - appear after 4.5s */}
        <div
          className="flex justify-center gap-2 mt-12 animate-fadeIn opacity-0"
          style={{
            animationDelay: "4.5s",
            animationFillMode: "forwards",
          }}
        >
          <Heart
            className="w-6 h-6 text-pink-400 animate-pulse"
            fill="currentColor"
          />
          <Heart
            className="w-6 h-6 text-rose-400 animate-pulse"
            fill="currentColor"
            style={{ animationDelay: "0.2s" }}
          />
          <Heart
            className="w-6 h-6 text-purple-400 animate-pulse"
            fill="currentColor"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TransitionSection;