import React, { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

/**
 * QuestionSection Component
 * 
 * The "Will You Be My Valentine?" proposal section with Yes/No buttons.
 * Features:
 * - Animated background videos
 * - "No" button that moves away when clicked
 * - Growing "Yes" button
 * - Encouraging messages
 * 
 * Props:
 * @param {number} noClickCount - Number of times "No" has been clicked
 * @param {object} noButtonPos - Position {x, y} of the "No" button
 * @param {function} onYesClick - Handler for "Yes" button click
 * @param {function} onNoClick - Handler for "No" button click
 */
const QuestionSection = ({ noClickCount, noButtonPos, onYesClick, onNoClick }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoPositions, setVideoPositions] = useState([]);
  const [shuffledVideos, setShuffledVideos] = useState([]);

  // Stock videos from Pexels (royalty-free)
  // TODO: Replace with your own video files or other stock videos

  const videoPlaceholders = [
  // Reliable test video 1 (Nature/Generic)
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  // Reliable test video 2 (Cinema/Action)
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  // Reliable test video 3 (Joyrides)
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  // Reliable test video 4 (Scenery)
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
];
  // Messages shown when "No" is clicked
  const noMessages = [
    "Are you sure? 🥺",
    "Please try again... 💕",
    "I know you don't mean that 😊",
    "One more time? ❤️",
    "Come on, say yes! 💖",
  ];

  // Set up video positions and shuffle videos
  useEffect(() => {
    // Define 8 fixed safe positions around the edges
    const safePositions = [
      { left: 10, top: 15 },
      { left: 75, top: 12 },
      { left: 8, top: 45 },
      { left: 78, top: 50 },
      { left: 12, top: 75 },
      { left: 72, top: 78 },
      { left: 40, top: 8 },
      { left: 45, top: 85 },
    ];

    // Shuffle positions
    const shuffledPositions = [...safePositions].sort(() => Math.random() - 0.5);
    const selectedPositions = shuffledPositions.slice(0, videoPlaceholders.length);
    setVideoPositions(selectedPositions);

    // Shuffle videos
    const shuffled = [...videoPlaceholders].sort(() => Math.random() - 0.5);
    setShuffledVideos(shuffled);

    // Cycle through videos
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoPlaceholders.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Soft gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-rose-50/20 to-purple-50/30 pointer-events-none" />

      {/* Animated Videos Background */}
      <div className="z-50 absolute inset-0 pointer-events-none overflow-hidden">
        {videoPositions.map((position, idx) => (
          <div
            key={idx}
            className={`absolute rounded-lg overflow-hidden shadow-xl transition-all duration-700 ${
              idx === currentVideoIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{
              width: "200px",
              height: "150px",
              left: `${position?.left || 0}%`,
              top: `${position?.top || 0}%`,
              transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (3 + idx)}deg)`,
              zIndex: 1,
              border: "3px solid rgba(255, 255, 255, 0.8)",
            }}
          >
            <video
              src={shuffledVideos[idx]}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-20 bg-white/98 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl border border-pink-100">
        {/* Decorative Corner Hearts */}
        <div className="absolute -top-3 -left-3 text-pink-400 opacity-60">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute -top-3 -right-3 text-rose-400 opacity-60">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute -bottom-3 -left-3 text-purple-400 opacity-60">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute -bottom-3 -right-3 text-pink-400 opacity-60">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>

        {/* Title */}
        <div className="mb-12 space-y-3">
          <h2 className="special text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 animate-slideInBottom leading-tight">
            Will You Be My Valentine?
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Sparkles
                key={i}
                className="w-4 h-4 text-pink-300 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div
          className="flex gap-4 md:gap-6 items-center justify-center animate-slideInBottom flex-wrap"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Yes Button - Grows with each "No" click */}
          <button
            onClick={onYesClick}
            className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl hover:from-green-500 hover:to-emerald-600 transform hover:scale-110 transition-all relative overflow-hidden group"
            style={{
              transform: `scale(${1 + noClickCount * 0.15})`,
            }}
          >
            <span className="relative z-10">Yes 💕</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>

          {/* No Button - Moves away and shrinks */}
          {noClickCount < 5 && (
            <button
              onClick={onNoClick}
              className="px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-white rounded-full text-lg md:text-xl font-bold shadow-md hover:shadow-lg transform transition-all hover:from-gray-400 hover:to-gray-500"
              style={{
                position: noClickCount > 0 ? "fixed" : "relative",
                left: noClickCount > 0 ? `${noButtonPos.x}px` : "auto",
                top: noClickCount > 0 ? `${noButtonPos.y}px` : "auto",
                transform: `scale(${Math.max(0.5, 1 - noClickCount * 0.12)})`,
                opacity: noClickCount === 4 ? 0.4 : 1,
              }}
            >
              No
            </button>
          )}
        </div>

        {/* Feedback Message */}
        {noClickCount > 0 && noClickCount < 5 && (
          <div className="mt-10 animate-fadeIn">
            <p className="special text-xl md:text-2xl text-pink-500 font-semibold text-center mb-3">
              {noMessages[noClickCount - 1]}
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(5 - noClickCount)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-5 h-5 text-pink-400 animate-pulse"
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;
