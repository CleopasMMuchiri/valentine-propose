import React from "react";
import { ArrowLeft } from "lucide-react";

/**
 * NavigationButtons Component
 * 
 * Provides back and forward navigation buttons for manual section control.
 * Buttons are conditionally rendered based on the current section.
 * 
 * Props:
 * @param {string} section - Current section ID
 * @param {function} onBack - Handler for back button click
 * @param {function} onForward - Handler for forward button click
 */
const NavigationButtons = ({ section, onBack, onForward }) => {
  return (
    <>
      {/* Back Button - Hidden on intro section */}
      {section !== "intro" && (
        <button
          onClick={onBack}
          className="fixed top-6 left-6 z-40 bg-white p-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          aria-label="Go back to previous section"
        >
          <ArrowLeft className="w-5 h-5 text-pink-500" strokeWidth={2} />
        </button>
      )}

      {/* Forward Button - Hidden on intro and final sections */}
      {section !== "intro" && section !== "final" && (
        <button
          onClick={onForward}
          className="fixed top-6 left-20 z-40 bg-white p-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          aria-label="Go forward to next section"
        >
          <ArrowLeft
            className="w-5 h-5 text-pink-500 rotate-180"
            strokeWidth={2}
          />
        </button>
      )}
    </>
  );
};

export default NavigationButtons;