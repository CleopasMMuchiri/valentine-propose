import React from "react";
import { Play, Pause } from "lucide-react";

/**
 * MusicPlayer Component
 * 
 * Provides background music control with a play/pause button.
 * Includes a pulsing animation indicator when music is playing.
 * 
 * Props:
 * @param {object} audioRef - React ref for the audio element
 * @param {boolean} isPlaying - Whether music is currently playing
 * @param {function} onToggle - Handler for play/pause toggle
 * @param {string} audioSrc - Source path for the audio file
 */
const MusicPlayer = ({ audioRef, isPlaying, onToggle, audioSrc }) => {
  return (
    <>
      {/* Pulsing indicator ring */}
      <div className="fixed top-6 right-6 z-40 animate-ping">
        <div className="w-12 h-12 rounded-full bg-pink-300 opacity-30"></div>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} loop />

      {/* Play/Pause Button */}
      <button
        onClick={onToggle}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full 
          bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-xl 
          flex items-center justify-center transition-all hover:scale-110 
          ${isPlaying ? "animate-pulse" : ""}`}
        style={{ fontFamily: "Caveat, cursive" }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6 ml-0.5" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;