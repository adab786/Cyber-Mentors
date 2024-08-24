import { useState, useEffect } from "react";
import "./CursorCircle.css"; // Import the CSS file for styling

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-circle"
      style={{ left: position.x, top: position.y - 50 }}
    ></div>
  );
};

export default CursorCircle;
