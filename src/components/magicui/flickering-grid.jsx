"use client";
import React, { useEffect, useRef } from "react";

export const FlickeringGrid = ({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  width = 800,
  height = 800
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const squares = [];
    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));

    // Initialize squares
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        squares.push({
          x: i * (squareSize + gridGap),
          y: j * (squareSize + gridGap),
          opacity: 0,
          targetOpacity: 0,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      squares.forEach((square) => {
        // Random flicker
        if (Math.random() < flickerChance) {
          square.targetOpacity = Math.random() * maxOpacity;
        } else if (Math.random() < 0.01) {
          square.targetOpacity = 0;
        }

        // Smooth transition
        square.opacity += (square.targetOpacity - square.opacity) * 0.1;

        if (square.opacity > 0.01) {
          ctx.globalAlpha = square.opacity;
          ctx.fillStyle = color;
          ctx.fillRect(square.x, square.y, squareSize, squareSize);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export function FlickeringGridDemo() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
    </div>
  );
} 