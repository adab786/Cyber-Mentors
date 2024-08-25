import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Page3({ mode }) {
  const backgroundColor = mode === "dark" ? "bg-gray-900" : "bg-gray-100";

  // Using useScroll to get scrollYProgress
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [circleColor, setCircleColor] = useState("#1f1d1dff"); // Initial color

  const animationValue = isMobile
    ? percent > 60
      ? "0%"
      : "-10%"
    : percent > 60
    ? "0%"
    : "50%";

  useEffect(() => {
    // Listen for changes in scrollYProgress and update percent state
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newPercent = latest * 100; // Convert scroll progress to percentage
      setPercent(newPercent);

      // Update circle color based on scroll progress
      if (newPercent > 60) {
        setCircleColor("#ff6347"); // Change color when scroll is greater than 60%
      } else {
        setCircleColor("#1f1d1dff"); // Default color
      }
    });

    // Clean up the event listener
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div
        className={`flex  justify-center relative items-center w-full h-screen  ${backgroundColor}`}
      >
        <div className="absolute text-white z-30 flex-col font-serif justify-between items-center">
          <h1 className="text-4xl">Any feedback?</h1>
          <h1 className="text-2xl">Drop us a line!</h1>
          <Link
            to="https://www.linkedin.com/in/siddiqui-adaab-husain-816870229/"
            target="_blank"
          >
            <img
              className="object-cover w-16 mt-4 h-16 hover:w-[100%] hover:h-[70%] transition-all duration-500 ease-in-out"
              src="/icons.png"
              alt="arrow"
            />
          </Link>
        </div>
        <motion.div
          initial={{ x: isMobile ? "-10%" : "-4%" }} // Initial position based on screen size
          animate={{ x: animationValue }} // Animate to position based on percent and screen size
          transition={{ duration: 0.5 }} // Animation duration
          className="w-[40vh] md:w-[80vh] z-20 h-[80vh] md:h-[80vh] rounded-full"
          style={{ backgroundColor: circleColor }} // Apply the color to the circle
        />
        <div className="hidden md:block shadow-blue-500 shadow-2xl w-[80vh] z-10 h-[81vh] absolute translate-x-[50%] border-sky-400 border-2 rounded-full"></div>
        <div className="hidden md:block shadow-blue-500 shadow-2xl w-[40vh] h-[40vh] absolute translate-x-[200%] opacity-35 border-black border-2 rounded-full"></div>
      </div>
    </>
  );
}

export default Page3;
