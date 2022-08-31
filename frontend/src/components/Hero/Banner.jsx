import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-start items-start "
    >
      <div className="w-full flex justify-start items-start flex-col ">
        <div className="flex md:w-80 p-4 flex-row w-full shadow-lg backdrop-blur-sm	 text-grayColor bg-gray-rgba rounded-tl-lg rounded-tr-lg rounded-br-lg">
          <span className="text-6xl">👋🏾</span>
          <div style={{ marginLeft: 20 }}>
            <p className="text-3xl">Hello, I am</p>
            <h1 className="text-6xl">Asad</h1>
          </div>
        </div>
        <div className="flex mt-1 py-2 px-2 backdrop-blur-sm	rounded-bl-lg text-grayColor bg-gray-rgba shadow-lg">
          <p className="text-primary">a Full Stack Developer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
