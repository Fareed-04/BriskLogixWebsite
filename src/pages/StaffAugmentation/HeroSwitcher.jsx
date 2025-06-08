import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import AlternativeHero from "./AlternativeHero";

const HeroSwitcher = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const heroes = [
    { component: Hero, name: "Original Hero" },
    { component: AlternativeHero, name: "Alternative Hero" }
  ];

  const nextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroes.length);
  };

  const prevHero = () => {
    setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  const CurrentHeroComponent = heroes[currentHero].component;

  return (
    <div className="relative">
      {/* Hero Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHero}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CurrentHeroComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevHero}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-colors duration-300"
          aria-label="Previous Hero"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextHero}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-colors duration-300"
          aria-label="Next Hero"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Hero Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-6 py-3">
          <div className="flex space-x-2">
            {heroes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentHero ? "bg-color-1" : "bg-white/30"
                }`}
                aria-label={`Switch to ${heroes[index].name}`}
              />
            ))}
          </div>
          <span className="text-sm text-white font-medium">
            {heroes[currentHero].name}
          </span>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="absolute top-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 px-3 py-2">
          <p className="text-xs text-n-3">Use arrows to switch heroes</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSwitcher; 