import React from "react";
import { Heart, Scissors } from "lucide-react";

/**
 * EasterEggs Component
 * 
 * Renders hidden clickable elements that reveal a secret message
 * when clicked multiple times.
 * 
 * Props:
 * @param {function} onHeartClick - Handler for heart icon clicks
 * @param {function} onScissorClick - Handler for scissor icon clicks
 * @param {boolean} showMessage - Whether to display the easter egg message
 */
const EasterEggs = ({ onHeartClick, onScissorClick, showMessage }) => {
  return (
    <>
      {/* Heart Easter Egg - Top Right */}
      <div
        onClick={onHeartClick}
        className="fixed top-4 right-4 cursor-pointer z-40"
      >
        <Heart
          className="w-6 h-6 text-pink-300 opacity-20 hover:opacity-50 transition-opacity"
          strokeWidth={1.5}
        />
      </div>

      {/* Scissor Easter Egg - Bottom Center */}
      <div
        onClick={onScissorClick}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-40"
      >
        <Scissors className="w-6 h-6 text-purple-300 opacity-20 hover:opacity-40 transition-opacity" />
      </div>

      {/* Easter Egg Message */}
      {showMessage && (
        <div className="special fixed top-16 right-4 bg-pink-100 text-pink-800 px-5 py-2 rounded-lg shadow-lg z-50 animate-slideInRight">
          You found a secret! 💕✨
        </div>
      )}
    </>
  );
};

export default EasterEggs;