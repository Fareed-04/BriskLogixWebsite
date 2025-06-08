import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[168, 106, 255]], // Purple color
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <div className="h-full w-full">
        <TechPattern
          colors={colors ?? [[168, 106, 255]]} // Purple
          opacities={opacities ?? [0.2, 0.3, 0.4, 0.5, 0.6]}
          animationSpeed={animationSpeed}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      )}
    </div>
  );
};

const TechPattern = ({
  colors = [[168, 106, 255]], // Purple
  opacities = [0.2, 0.3, 0.4, 0.5, 0.6],
  animationSpeed = 0.4,
}) => {
  // Generate tech patterns - circuits, chips, dots
  const gridSize = 15;
  const elements = [];
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const elementType = Math.random();
      
      elements.push({
        id: `tech-${i}-${j}`,
        x: (i / (gridSize - 1)) * 100,
        y: (j / (gridSize - 1)) * 100,
        delay: Math.random() * 4,
        opacity: opacities[Math.floor(Math.random() * opacities.length)],
        color: colors[0], // Single purple color
        type: elementType < 0.4 ? 'dot' : elementType < 0.7 ? 'square' : 'line',
        duration: 2 + Math.random() * 3,
      });
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((element) => {
        if (element.type === 'dot') {
          return (
            <motion.div
              key={element.id}
              className="absolute rounded-full"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: 2,
                height: 2,
                backgroundColor: `rgba(${element.color.join(',')}, ${element.opacity})`,
                boxShadow: `0 0 4px rgba(${element.color.join(',')}, 0.3)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, element.opacity, element.opacity * 0.5, 0],
                scale: [0, 1, 1.2, 0],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
            />
          );
        }
        
        if (element.type === 'square') {
          return (
            <motion.div
              key={element.id}
              className="absolute"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: 3,
                height: 3,
                backgroundColor: `rgba(${element.color.join(',')}, ${element.opacity})`,
                border: `1px solid rgba(${element.color.join(',')}, 0.2)`,
              }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{
                opacity: [0, element.opacity, 0],
                rotate: [0, 45, 90],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "linear",
              }}
            />
          );
        }
        
        if (element.type === 'line') {
          return (
            <motion.div
              key={element.id}
              className="absolute"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: 8,
                height: 1,
                backgroundColor: `rgba(${element.color.join(',')}, ${element.opacity})`,
                transformOrigin: 'center',
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: [0, element.opacity, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
            />
          );
        }
        
        return null;
      })}
      
      {/* Add some circuit connection lines */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            width: `${20 + Math.random() * 30}px`,
            height: 1,
            backgroundColor: `rgba(${colors[0].join(',')}, 0.3)`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}; 