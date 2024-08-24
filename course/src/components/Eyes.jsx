import { useState } from "react";
import { motion } from "framer-motion";

function Eyes() {
  const [rot, setRot] = useState(0);

  useState(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      let w = window.innerWidth;
      let h = window.innerHeight;
      let x1 = ((x - w / 2) / (w / 2)) * 100;
      let y1 = ((y - h / 2) / (h / 2)) * 100;
      let angle = Math.atan2(y1, x1) * (180 / Math.PI);
      setRot(1 - angle);
      // console.log(angle);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative flex  justify-center gap-5 items-center  "
    >
      <div className="w-44 h-44 bg-yellow-300 flex items-center justify-center rounded-full">
        <span className=" relative w-32 h-32 rounded-full bg-black flex justify-center items-center ">
          <span>
            <span
              style={{ transform: `translate(-50%,-50%) rotate(${rot}deg)` }}
              className={`w-full absolute left-${rot}px h-10 rounded-sm`}
            >
              <span className="absolute w-10 h-10 rounded-full bg-white "></span>
            </span>
          </span>
        </span>
      </div>
      <div className="w-44 h-44 bg-yellow-300 flex items-center justify-center rounded-full">
        <span className=" relative w-32 h-32 rounded-full bg-black flex justify-center items-center ">
          <span>
            <span
              style={{ transform: `translate(-50%,-50%) rotate(${rot}deg)` }}
              className={`w-full absolute left-${rot}px h-10 rounded-sm`}
            >
              <span className="absolute w-10 h-10 rounded-full bg-white "></span>
            </span>
          </span>
        </span>
      </div>
    </motion.div>
  );
}

export default Eyes;
