import { useState, useCallback } from "react";

const width = 760;
const height = 350;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };

// // Basic user interaction: circle follows mouse
export const CircleFollowsMouse = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);
  const handleMouseMove = useCallback(
    event => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );
  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    </svg>
  );
};
