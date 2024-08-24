import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ mode }) => {
  // Determine the background color based on the mode
  const backgroundColor = mode === "dark" ? "bg-gray-900" : "bg-gray-100";

  const container = {
    hidden: { opacity: 0, scale: 0.8 }, // Adjusting opacity and scale for better visibility
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`container flex flex-wrap justify-center ${backgroundColor} h-screen`} // Added h-screen for full height
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap justify-center items-center w-full h-full">
        {" "}
        {/* Adjusted for full width and height */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          variants={item}
          className="w-64 h-64 shadow-2xl shadow-red-600 bg-red-500 m-4 flex justify-center items-center relative text-2xl font-Gameplay"
        >
          <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
            <Link to="/Stores">Upload your files here</Link>
          </h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          variants={item}
          className="w-64 h-64 shadow-2xl shadow-blue-600 bg-blue-500 m-4 flex justify-center items-center relative text-2xl font-Gameplay"
        >
          <a
            href="/Codebox"
            className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white border-red-600   "
          >
            Codebox
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          variants={item}
          className="w-64 h-64 shadow-2xl shadow-green-600 bg-green-500 m-4 flex justify-center items-center relative text-2xl font-Gameplay"
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
            <Link to="/Course">Learn Ethical Hacking</Link>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
