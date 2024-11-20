import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Reveal() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(true);
  const [isComponentBVisible, setIsComponentBVisible] = useState(false);

  useEffect(() => {
    // Monitor scroll progress
    const handleScroll = () => {
      // Check if scroll progress is near 100% to determine if scrolling has ended
      if (scrollYProgress.get() > 0.9) {
        setIsScrolling(false);
        setIsComponentBVisible(true);
      } else {
        setIsScrolling(true);
        setIsComponentBVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress]);

  return (
    <div className="relative w-full h-screen">
      {/* Component A: Revealed on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from below and invisible
        animate={{ opacity: isScrolling ? 1 : 0, y: isScrolling ? 0 : 100 }} // Animate based on scrolling
        transition={{ duration: 0.5 }}
        className="absolute  top-0 left-0 w-full h-full bg-zinc-500"
      >
        <h1 className="z-40 w-[40%] leading-loose  absolute top-[30%] left-[30%] text-6xl text-white  font-Gameplay capitalize ">
          For no<span className="text-green-800">tes</span> like{" "}
          <span className="text-red-600 font-bold">This... </span>
        </h1>
        <img
          src="https://blog.gitguardian.com/content/images/size/w2000/2022/12/blog-SecurityZines-iac-security.png"
          alt="img"
          className="w-[90%] h-[80]  m-auto mt-2 blur-sm "
        />
      </motion.div>

      {/* Component B: Revealed at Scroll End */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Start from invisible and scaled down
        animate={{
          opacity: isComponentBVisible ? 1 : 0,
          scale: isComponentBVisible ? 1 : 0.8,
        }} // Animate based on visibility
        transition={{ duration: 0.5 }}
        className="absolute flex justify-center items-center  bottom-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        {/* <h1 className="text-white text-3xl">Component B</h1>
         */}

        <btn className="btn leading-loose  btn-circle w-56 h-56 text-3xl font-Gameplay    hover:scale-110 hover:bg-green-600 text-white ">
          <Link to="/Flashcard">Visit Here</Link>
        </btn>
      </motion.div>
    </div>
  );
}

export default Reveal;
