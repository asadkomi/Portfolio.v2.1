import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-start items-start "
    >
      <div className="w-full flex justify-start items-start lg:pl-20  flex-col ">
        <div className="flex mb-8 md:w-80 p-4 flex-row w-full shadow-lg backdrop-blur-sm	 text-grayColor bg-gray-rgba rounded-lg">
          <span className="text-6xl">👋🏾</span>
          <div style={{ marginLeft: 20 }}>
            <p className="text-3xl">Hello, I am</p>
            <h1 className="text-6xl">Asad</h1>
          </div>
        </div>
        <div className="flex w-full md:w-[80%] py-6 px-4 backdrop-blur-sm	rounded-lg text-grayColor bg-gray-rgba shadow-lg">
          <p className="text-grayColor text-2xl">
            I build things that make people's lives easier.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
