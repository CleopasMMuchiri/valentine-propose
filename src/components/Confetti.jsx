import React from "react";

/**
 * Confetti Component
 * 
 * Renders an animated confetti celebration effect.
 * Creates 80 colored particles that fall from the top of the screen.
 */
const Confetti = () => {
  const colors = ["#ff69b4", "#ffc0cb", "#c084fc", "#a78bfa"];

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-10px",
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;