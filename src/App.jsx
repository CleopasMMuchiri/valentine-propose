import React, { useState, useEffect, useRef } from "react";
import FloatingHearts from "./components/FloatingHearts.jsx";
import EasterEggs from "./components/EasterEggs.jsx";
import NavigationButtons from "./components/NavigationButtons.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import Confetti from "./components/Confetti.jsx";
import IntroSection from "./components/sections/IntroSection.jsx";
import PhotosSection from "./components/sections/PhotosSection.jsx";
import QuestionSection from "./components/sections/QuestionSection.jsx";
import GameSection from "./components/sections/GameSection.jsx";
import TransitionSection from "./components/sections/TransitionSection.jsx";
import FinalSection from "./components/sections/FinalSection.jsx";
import lovesong from "./assets/lovesong2.mp3";

/**
 * Main Valentine's Day Website Component
 * 
 * This is a multi-section interactive Valentine's Day website that guides
 * users through a romantic journey with photos, questions, and games.
 * 
 * Features:
 * - Auto-navigation between sections
 * - Manual navigation controls (back/forward buttons)
 * - Background music player
 * - Easter eggs for fun interactions
 * - Confetti animations
 * - Responsive design for mobile and desktop
 */
const App = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  
  // Current section being displayed
  const [section, setSection] = useState("intro");
  
  // Previous section (for tracking navigation history)
  const [previousSection, setPreviousSection] = useState(null);
  
  // Animation direction for section transitions
  const [slideDirection, setSlideDirection] = useState("right");
  
  // Question section: tracks "No" button click count
  const [noClickCount, setNoClickCount] = useState(0);
  
  // Question section: dynamic position for "No" button
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  
  // Confetti animation trigger
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Easter egg tracking
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [scissorClicks, setScissorClicks] = useState(0);
  
  // Photos section: currently clicked image
  const [clickedImage, setClickedImage] = useState(null);
  
  // Photos section: animation state when transitioning out
  const [photosAnimateOut, setPhotosAnimateOut] = useState(false);
  
  // Game section: tracks which question options have been revealed
  const [revealed, setRevealed] = useState({
    date: null,
    wear: null,
    food: null,
    photos: null,
    music: null,
    time: null,
  });
  
  // Music player state
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Auto-navigation control
  const [timeoutsEnabled, setTimeoutsEnabled] = useState(true);
  const timeoutRefs = useRef([]);

  // ============================================================================
  // SECTION NAVIGATION
  // ============================================================================
  
  /**
   * Navigate to a specific section with slide animation
   * @param {string} newSection - The section ID to navigate to
   */
  const navigateToSection = (newSection) => {
    window.scrollTo(0, 0);
    setPreviousSection(section);
    
    // Determine slide direction based on section order
    const sectionOrder = ["intro", "photos", "question", "game", "toFinal", "final"];
    const currentIndex = sectionOrder.indexOf(section);
    const newIndex = sectionOrder.indexOf(newSection);
    setSlideDirection(newIndex > currentIndex ? "right" : "left");
    
    setSection(newSection);
  };

  /**
   * Navigate to the previous section
   */
  const goBack = () => {
    const sectionOrder = ["intro", "photos", "question", "game", "toFinal", "final"];
    const currentIndex = sectionOrder.indexOf(section);
    
    if (currentIndex > 0) {
      // Clear all active timeouts to prevent auto-navigation
      timeoutRefs.current.forEach((timer) => clearTimeout(timer));
      timeoutRefs.current = [];
      
      // Disable auto-navigation when manually navigating
      setTimeoutsEnabled(false);
      
      navigateToSection(sectionOrder[currentIndex - 1]);
    }
  };

  /**
   * Navigate to the next section
   */
  const goForward = () => {
    const sectionOrder = ["intro", "photos", "question", "game", "toFinal", "final"];
    const currentIndex = sectionOrder.indexOf(section);
    
    if (currentIndex < sectionOrder.length - 1) {
      navigateToSection(sectionOrder[currentIndex + 1]);
    }
  };

  // ============================================================================
  // QUESTION SECTION HANDLERS
  // ============================================================================
  
  /**
   * Move the "No" button to a random position near the card
   */
  const moveNoButton = () => {
    const card = document.querySelector(".relative.z-20");
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const padding = 100;
    
    const minX = Math.max(0, cardRect.left - padding);
    const maxX = Math.min(window.innerWidth - 150, cardRect.right + padding - 150);
    const minY = Math.max(0, cardRect.top - padding);
    const maxY = Math.min(window.innerHeight - 60, cardRect.bottom + padding - 60);

    setNoButtonPos({
      x: minX + Math.random() * (maxX - minX),
      y: minY + Math.random() * (maxY - minY),
    });
  };

  /**
   * Handle "No" button click - moves button and increments counter
   */
  const handleNoClick = () => {
    if (noClickCount < 5) {
      moveNoButton();
      setNoClickCount((prev) => prev + 1);
    }
  };

  /**
   * Handle "Yes" button click - shows confetti and navigates to next section
   */
  const handleYesClick = () => {
    setShowConfetti(true);
    
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
      setPhotosAnimateOut(true);
      
      const animTimer = setTimeout(() => {
        navigateToSection("game");
        setPhotosAnimateOut(false);
      }, 800);
      
      timeoutRefs.current.push(animTimer);
    }, 2000);
    
    timeoutRefs.current.push(confettiTimer);
  };

  // ============================================================================
  // GAME SECTION HANDLERS
  // ============================================================================
  
  /**
   * Reveal the selected answer for a question
   * @param {string} questionId - The ID of the question
   * @param {number} optionIndex - The index of the selected option
   */
  const revealChoice = (questionId, optionIndex) => {
    if (revealed[questionId] === null) {
      setRevealed({ ...revealed, [questionId]: optionIndex });
    }
  };

  // Check if all questions have been answered
  const allRevealed = Object.values(revealed).every((v) => v !== null);

  // ============================================================================
  // EASTER EGG HANDLERS
  // ============================================================================
  
  /**
   * Handle heart easter egg clicks
   */
  const handleEasterEgg = () => {
    setEasterEggClicks(easterEggClicks + 1);
    if (easterEggClicks >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setEasterEggClicks(0);
    }
  };

  /**
   * Handle scissor easter egg clicks
   */
  const handleScissorClick = () => {
    setScissorClicks(scissorClicks + 1);
    if (scissorClicks >= 2) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setScissorClicks(0);
    }
  };

  // ============================================================================
  // PHOTOS SECTION HANDLERS
  // ============================================================================
  
  /**
   * Handle image click to show overlay text
   * @param {number} index - Index of the clicked image
   */
  const handleImageClick = (index) => {
    setClickedImage(index);
    setTimeout(() => setClickedImage(null), 3000);
  };

  // ============================================================================
  // MUSIC PLAYER
  // ============================================================================
  
  /**
   * Toggle music play/pause
   */
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // ============================================================================
  // AUTO-NAVIGATION EFFECTS
  // ============================================================================
  
  // Auto-navigate from intro to photos after 3 seconds
  useEffect(() => {
    if (section === "intro" && timeoutsEnabled) {
      const timer = setTimeout(() => navigateToSection("photos"), 3000);
      timeoutRefs.current.push(timer);
      return () => clearTimeout(timer);
    }
  }, [section, timeoutsEnabled]);

  // Auto-navigate from game to transition when all questions are answered
  useEffect(() => {
    if (allRevealed && section === "game" && timeoutsEnabled) {
      const timer = setTimeout(() => navigateToSection("toFinal"), 2000);
      timeoutRefs.current.push(timer);
      return () => clearTimeout(timer);
    }
  }, [revealed, allRevealed, section, timeoutsEnabled]);

  // Auto-navigate from transition to final section
  useEffect(() => {
    if (section === "toFinal" && timeoutsEnabled) {
      const timer = setTimeout(() => navigateToSection("final"), 8000);
      timeoutRefs.current.push(timer);
      return () => clearTimeout(timer);
    }
  }, [section, timeoutsEnabled]);

  // ============================================================================
  // RENDER
  // ============================================================================
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Background floating hearts */}
      <FloatingHearts />
      
      {/* Easter egg clickable elements */}
      <EasterEggs 
        onHeartClick={handleEasterEgg}
        onScissorClick={handleScissorClick}
        showMessage={showEasterEgg}
      />
      
      {/* Navigation buttons (back/forward) */}
      <NavigationButtons 
        section={section}
        onBack={goBack}
        onForward={goForward}
      />
      
      {/* Background music player */}
      <MusicPlayer 
        audioRef={audioRef}
        isPlaying={isPlaying}
        onToggle={toggleMusic}
        audioSrc={lovesong}
      />
      
      {/* Confetti animation */}
      {showConfetti && <Confetti />}

      {/* Main content with slide animation */}
      <div
        className={`transition-all duration-700 ${
          slideDirection === "right" ? "animate-slideInRight" : "animate-slideInLeft"
        }`}
      >
        {/* Section 1: Intro */}
        {section === "intro" && <IntroSection />}

        {/* Section 2: Photos */}
        {section === "photos" && (
          <PhotosSection 
            photosAnimateOut={photosAnimateOut}
            clickedImage={clickedImage}
            onImageClick={handleImageClick}
            onContinue={() => navigateToSection("question")}
          />
        )}

        {/* Section 3: The Question */}
        {section === "question" && (
          <QuestionSection 
            noClickCount={noClickCount}
            noButtonPos={noButtonPos}
            onYesClick={handleYesClick}
            onNoClick={handleNoClick}
          />
        )}

        {/* Section 4: The Game */}
        {section === "game" && (
          <GameSection 
            revealed={revealed}
            onRevealChoice={revealChoice}
          />
        )}

        {/* Section 5: Transition */}
        {section === "toFinal" && <TransitionSection />}

        {/* Section 6: Final */}
        {section === "final" && <FinalSection />}
      </div>
    </div>
  );
};

export default App;