import React from "react";
import { Sparkles } from "lucide-react";

/**
 * GameSection Component
 * 
 * Interactive question game where users reveal hidden answers.
 * Each question has 3 options - clicking reveals the "real" answer
 * behind the "fake" label.
 * 
 * Props:
 * @param {object} revealed - Object tracking which options have been revealed {questionId: optionIndex}
 * @param {function} onRevealChoice - Handler for revealing an option (questionId, optionIndex)
 */
const GameSection = ({ revealed, onRevealChoice }) => {
  // Questions data
  // TODO: Customize these questions and answers for your relationship
  const questions = [
    {
      id: "date",
      english: "If we looked back one day, what would we smile about first?",
      options: [
        {
          fake: "The big plans we made",
          real: "The random moments that weren't planned at all ✨",
        },
        {
          fake: "The places we went",
          real: "How easy everything felt when it was just us 🤍",
        },
        {
          fake: "The milestones",
          real: "The laughter that caught us off guard 💫",
        },
      ],
    },
    {
      id: "wear",
      english: "What would love quietly look like between us?",
      options: [
        {
          fake: "Grand gestures",
          real: "Checking in without being asked 🫶",
        },
        {
          fake: "Perfect days",
          real: "Comfort, even on ordinary ones 🌸",
        },
        {
          fake: "Big moments",
          real: "Feeling understood without explaining 💖",
        },
      ],
    },
    {
      id: "food",
      english: "When things don't go as planned, what would matter most?",
      options: [
        {
          fake: "Finding quick answers",
          real: "Knowing we're on the same side 💪",
        },
        {
          fake: "Fixing everything immediately",
          real: "Listening before reacting 🤍",
        },
        {
          fake: "Taking space",
          real: "Choosing patience over pride 🌱",
        },
      ],
    },
    {
      id: "photos",
      english: "What kind of memories would stay with us the longest?",
      options: [
        {
          fake: "The photos we took",
          real: "Moments that didn't need a camera ✨",
        },
        {
          fake: "Special occasions",
          real: "Conversations that lasted a little too late 🌙",
        },
        {
          fake: "Perfect days",
          real: "Being ourselves without trying 🤍",
        },
      ],
    },
    {
      id: "music",
      english: "If what we have had a feeling, what would it be?",
      options: [
        {
          fake: "Exciting",
          real: "Calm, steady, and reassuring 🎶",
        },
        {
          fake: "Intense",
          real: "Familiar in the best way 💫",
        },
        {
          fake: "Unpredictable",
          real: "Something that feels like home 🏡",
        },
      ],
    },
    {
      id: "time",
      english: "Without overthinking it — what would we choose?",
      options: [
        {
          fake: "The easy path",
          real: "Showing up, even when it's hard 🤍",
        },
        {
          fake: "What feels safe",
          real: "Growing together, intentionally 🌸",
        },
        {
          fake: "What makes sense",
          real: "Each other, again and again 💍",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 py-16">
      <div className="max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="special text-4xl md:text-5xl font-bold text-pink-600 animate-slideInBottom">
            Just for fun — but maybe not
          </h2>
          <p
            className="text-lg text-gray-500 animate-slideInBottom"
            style={{ animationDelay: "0.1s" }}
          >
            They say curiosity reveals more than answers
          </p>
          <p
            className="text-base text-gray-400 animate-slideInBottom"
            style={{ animationDelay: "0.2s" }}
          >
            So let's see what the moment has to say
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-12">
          {questions.map((question, qIdx) => (
            <div
              key={question.id}
              className="animate-slideInBottom"
              style={{ animationDelay: `${qIdx * 0.1}s` }}
            >
              {/* Question Header */}
              <div className="text-center mb-6 space-y-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-pink-500">
                  {question.english}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {question.options.map((option, idx) => (
                  <div key={idx}>
                    {/* Unrevealed State */}
                    {revealed[question.id] === null ? (
                      <button
                        onClick={() => onRevealChoice(question.id, idx)}
                        className="w-full h-32 bg-white border-2 border-pink-200 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-center transform hover:scale-105 transition-all group"
                      >
                        <Sparkles
                          className="w-8 h-8 text-pink-300 mb-2 group-hover:text-pink-400 transition-colors"
                          strokeWidth={1.5}
                        />
                        <span className="text-gray-600 font-medium text-lg">
                          {option.fake}
                        </span>
                      </button>
                    ) : revealed[question.id] === idx ? (
                      /* Revealed State - Selected Option */
                      <div className="w-full h-32 p-4 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 rounded-xl shadow-md animate-flip flex items-center justify-center">
                        <p className="text-center font-medium text-pink-700 text-sm md:text-base leading-snug">
                          {option.real}
                        </p>
                      </div>
                    ) : (
                      /* Revealed State - Other Options */
                      <div className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl opacity-40 flex items-center justify-center">
                        <p className="text-center text-[#5A3E2B] text-sm md:text-base">
                          {option.real}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSection;