import React from "react";
import { Heart } from "lucide-react";

/**
 * FinalSection Component
 * 
 * The final heartfelt message section with an embedded Spotify playlist.
 * Features a clean, minimal design with the main Valentine's Day message.
 * 
 * TODO: Replace the Spotify playlist URL with your own or remove if not needed
 */
const FinalSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl w-full space-y-16 relative z-10">
        {/* Simple heart icon */}
        <div className="flex justify-center animate-fadeIn">
          <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
        </div>

        {/* Main message */}
        <div
          className="space-y-12 animate-slideInBottom"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Opening message */}
          <p
            className="text-2xl md:text-3xl text-gray-600 text-center leading-relaxed"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            I don't believe in perfect moments, but I do believe in
            choosing someone — intentionally.
          </p>

          {/* Main Valentine's message */}
          <div className="py-8">
            <p className="special text-4xl md:text-5xl font-bold text-pink-500 text-center leading-relaxed">
              I'd really love to spend Valentine's Day with you.
            </p>
          </div>

          {/* Closing message */}
          <p className="text-lg md:text-xl text-gray-400 text-center italic">
            Thank you for coming this far. That already means everything 🤍
          </p>
        </div>

        {/* Spotify Playlist Embed */}
        <div
          className="max-w-md mx-auto animate-slideInBottom"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-3 border border-pink-50">
            {/* TODO: Replace this Spotify playlist URL with your own */}
            {/* Or remove this entire section if you don't want a playlist */}
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/0aMh8FuqchbIpC4ip2ZHrI?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Valentine's Day Playlist"
            />
          </div>

          <p
            className="text-sm text-[#7B5EA7] text-center mt-4"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            every song reminds me of you
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;