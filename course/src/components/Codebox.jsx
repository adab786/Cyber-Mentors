import React from "react";
import { motion } from "framer-motion";

const Codebox = () => {
  // Define animation values for initial load
  const iframeAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center p-4 bg-zinc-850">
      <motion.div
        initial={iframeAnimation.initial}
        animate={iframeAnimation.animate}
        transition={iframeAnimation.transition}
        className="w-full max-w-screen-lg h-full mb-4"
      >
        <iframe
          src="https://replit.com/@codecaine/practice?lite=true" // Ensure URL is correctly formatted
          title="CodeSandbox"
          className="w-full h-full border-0 shadow-lg rounded-lg"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </div>
  );
};

export default Codebox;
