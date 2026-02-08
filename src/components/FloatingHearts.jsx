import React from "react";
import { Heart } from "lucide-react";

/**
 * FloatingHearts Component
 * 
 * Renders subtle floating heart animations in the background.
 * Hearts are positioned randomly and animate with different delays
 * for a more natural floating effect.
 */
const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {[...Array(6)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-200 animate-float"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            fontSize: `${12 + Math.random() * 16}px`,
          }}
          strokeWidth={1}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;