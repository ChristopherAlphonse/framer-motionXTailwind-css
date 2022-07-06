import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  // console.log(mousePos);

  const [cursorVar, setCursorVar] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      backgroundColor: "#fde047",
      mixBlendMode: "difference",
    },
    text: {
      height: 150,
      width: 150,
    },
  };
  const textEnter = () => setCursorVar("text");
  const textLeave = () => setCursorVar("default");

  return (
    <div className="flex justify-center items-center h-[100vh] bg-yellow-300">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="font-bold md:text-[5rem] xl:text-[10rem] pointer-events-none"
      >
        Hello Tailwind x Motion
      </h1>
      <motion.div
        variants={variants}
        animate={cursorVar}
        className="bg-[#111] h-[32px] w-[32px] rounded-full fixed top-0 left-0 "
      ></motion.div>
    </div>
  );
};

export default App;
