import React from "react";
import { Heart } from "lucide-react";

/**
 * PhotosSection Component
 * 
 * Displays a scrapbook-style photo collage with sticky notes.
 * Uses publicly available stock images from Unsplash.
 * Photos can be clicked to reveal romantic messages.
 * 
 * Props:
 * @param {boolean} photosAnimateOut - Triggers exit animation
 * @param {number|null} clickedImage - Index of currently clicked image
 * @param {function} onImageClick - Handler for image clicks
 * @param {function} onContinue - Handler for continue button
 */
const PhotosSection = ({ photosAnimateOut, clickedImage, onImageClick, onContinue }) => {
  // Stock photos from Unsplash (royalty-free)
  const photos = [
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop", // Couple holding hands
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop", // Romantic couple
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop", // Couple laughing
    "https://images.unsplash.com/photo-1522673607910-e5653291e34e?w=800&h=600&fit=crop", // Couple walking
    "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=800&h=600&fit=crop", // Happy couple
  ];

  // Text overlays for each photo
  // TODO: Replace with your own personalized messages or keep as romantic quotes
  const imageTexts = [
    "Every moment with you feels like magic ✨",
    "You make my heart skip a beat 💕",
    "Forever grateful for you, my love 🌸",
    "You're my happy place 🦋",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 py-20">
      <h2 className="special text-5xl md:text-6xl font-bold mb-20 animate-slideInBottom text-pink-500">
        Our Beautiful Moments 💕
      </h2>

      {/* Desktop Collage - Scrapbook Style */}
      <div
        className={`hidden md:block relative w-full max-w-7xl mb-12 transition-all duration-800 ${
          photosAnimateOut ? "opacity-0 transform scale-95" : ""
        }`}
        style={{ minHeight: "700px" }}
      >
        {/* Photo 1 - Top Left */}
        <div
          onClick={() => onImageClick(0)}
          className="scrap-photo absolute bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-slideInBottom z-20"
          style={{
            top: "40px",
            left: "12%",
            width: "420px",
            height: "280px",
            transform: "rotate(-2deg)",
            animationDelay: "0s",
          }}
        >
          <img
            src={photos[0]}
            alt="Memory 1"
            className="w-full h-full object-cover"
          />
          <div
            className="tape"
            style={{
              top: "-10px",
              left: "40%",
              transform: "rotate(-6deg)",
            }}
          />
          {clickedImage === 0 && (
            <div className="absolute inset-0 bg-pink-700/50 bg-opacity-70 flex items-center justify-center animate-fadeIn">
              <p className="text-white text-xl text-center px-4">
                {imageTexts[0]}
              </p>
            </div>
          )}
        </div>

        {/* Sticky Note 1 - Top Center Right */}
        <div
          className="absolute text-[#8B6B4F] transition-all animate-slideInBottom"
          style={{
            top: "45px",
            left: "47%",
            width: "350px",
            transform: "rotate(2deg)",
            animationDelay: "0.1s",
          }}
        >
          <p className="vertical-text text-base leading-relaxed">
            Some moments don't ask to be explained. They just sit quietly,
            holding meaning in the simplest way possible.
          </p>
        </div>

        {/* Photo 2 - Center (Large) */}
        <div
          onClick={() => onImageClick(1)}
          className="scrap-photo absolute bg-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-slideInBottom z-10"
          style={{
            top: "200px",
            left: "35%",
            width: "360px",
            height: "420px",
            transform: "translateX(-50%) rotate(1deg)",
            animationDelay: "0.2s",
          }}
        >
          <img
            src={photos[1]}
            alt="Memory 2"
            className="w-full h-full object-cover"
          />
          <div
            className="tape"
            style={{
              top: "-12px",
              left: "40%",
              transform: "rotate(-4deg)",
            }}
          />
          <div
            className="tape"
            style={{
              bottom: "-12px",
              right: "40%",
              transform: "rotate(6deg)",
            }}
          />
          {clickedImage === 1 && (
            <div className="absolute inset-0 bg-pink-700/50 bg-opacity-70 flex items-center justify-center animate-fadeIn">
              <p className="text-white text-2xl text-center px-6">
                {imageTexts[1]}
              </p>
            </div>
          )}
        </div>

        {/* Sticky Note 2 - Bottom Left */}
        <div
          className="absolute text-[#5A3E2B] transition-all animate-slideInBottom"
          style={{
            left: "20%",
            bottom: "280px",
            width: "280px",
            padding: "24px",
            transform: "rotate(2deg)",
            animationDelay: "0.1s",
          }}
        >
          <p className="vertical-text text-base leading-relaxed">
            It's never about the big things. It's always been about the
            little moments that stay.
          </p>
        </div>

        {/* Vertical Text - Left Side */}
        <div
          className="absolute animate-slideInBottom -rotate-90"
          style={{
            left: "14%",
            bottom: "30px",
            transformOrigin: "left top",
            animationDelay: "0.3s",
            letterSpacing: "2px",
          }}
        >
          <p className="vertical-text text-3xl text-[#7B5EA7] whitespace-nowrap">
            still choosing you
          </p>
        </div>

        {/* Photo 3 - Top Right */}
        <div
          onClick={() => onImageClick(2)}
          className="scrap-photo absolute bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-slideInBottom z-20"
          style={{
            top: "120px",
            right: "22%",
            width: "240px",
            height: "200px",
            transform: "rotate(2deg)",
            animationDelay: "0.4s",
          }}
        >
          <img
            src={photos[2]}
            alt="Memory 3"
            className="w-full h-full object-cover"
          />
          <div
            className="tape"
            style={{
              top: "-12px",
              left: "35%",
              transform: "rotate(4deg)",
            }}
          />
          {clickedImage === 2 && (
            <div className="absolute inset-0 bg-pink-700/50 bg-opacity-70 flex items-center justify-center animate-fadeIn">
              <p className="text-white text-xl text-center px-4">
                {imageTexts[2]}
              </p>
            </div>
          )}
        </div>

        {/* Photo 4 - Bottom Left */}
        <div
          onClick={() => onImageClick(3)}
          className="scrap-photo absolute bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group animate-slideInBottom z-20"
          style={{
            bottom: "40px",
            left: "20%",
            width: "260px",
            height: "220px",
            transform: "rotate(-3deg)",
            animationDelay: "0.5s",
          }}
        >
          <img
            src={photos[3]}
            alt="Memory 4"
            className="w-full h-full object-cover"
          />
          <div
            className="tape"
            style={{
              top: "-10px",
              left: "30%",
              transform: "rotate(-8deg)",
            }}
          />
          {clickedImage === 3 && (
            <div className="absolute inset-0 bg-pink-700/50 bg-opacity-70 flex items-center justify-center animate-fadeIn">
              <p className="text-white text-lg text-center px-3">
                {imageTexts[3]}
              </p>
            </div>
          )}
        </div>

        {/* Sticky Note 3 - Bottom Right */}
        <div
          className="p-8 text-center absolute bg-[#a67647] shadow-md hover:shadow-lg transition-all animate-slideInBottom z-20"
          style={{
            bottom: "60px",
            right: "23%",
            width: "200px",
            padding: "20px",
            transform: "rotate(-3deg)",
            animationDelay: "0.6s",
            boxShadow: "0 12px 25px rgba(0,0,0,.25)",
            fontFamily: "cursive",
          }}
        >
          <h4 className="text-white underline text-xl">A small note</h4>
          <p className="text-white text-base leading-relaxed">
            If I had to explain this feeling, I'd say it's calm, honest,
            and quietly certain.
          </p>
          <p className="text-white text-xs mt-2 opacity-80 text-right">
            — always, me
          </p>
          <div
            className="tape"
            style={{
              top: "-12px",
              left: "35%",
              transform: "rotate(4deg)",
            }}
          />
        </div>

        {/* Sticky Note 4 - "Home Sweet Home" */}
        <div
          className="absolute bg-pink-200 shadow-md hover:shadow-lg transition-all animate-slideInBottom"
          style={{
            top: "200px",
            right: "10%",
            width: "180px",
            padding: "16px",
            transform: "rotate(3deg)",
            animationDelay: "0.7s",
          }}
        >
          <p className="vertical-text text-center font-bold text-gray-700 text-sm mb-1">
            HOME
            <br />
            SWEET
            <br />
            HOME
          </p>
          <div className="flex justify-center mt-2">
            <Heart
              className="w-6 h-6 text-pink-950 opacity-20 hover:opacity-50 transition-opacity"
              strokeWidth={1.5}
            />
          </div>
          <div
            className="tape"
            style={{
              bottom: "0",
              right: "-10px",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      </div>

      {/* Mobile Layout - Simplified Stack */}
      <div className="md:hidden w-full max-w-md space-y-6 px-4">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => onImageClick(idx)}
            className="bg-white shadow-lg animate-slideInBottom cursor-pointer relative"
            style={{
              transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * 1.5}deg)`,
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            <img
              src={photo}
              alt={`Memory ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
            {clickedImage === idx && (
              <div className="absolute inset-0 bg-pink-700/50 bg-opacity-70 flex items-center justify-center animate-fadeIn">
                <p className="text-white text-lg text-center px-4">
                  {imageTexts[idx]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="mt-16 px-8 py-3 bg-pink-500 text-white rounded-full text-xl font-semibold shadow-md hover:shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all z-20"
      >
        Continue our story 💕
      </button>
    </div>
  );
};

export default PhotosSection;