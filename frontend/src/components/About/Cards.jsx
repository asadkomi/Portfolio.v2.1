import React from "react";
import { motion } from "framer-motion";

const Cards = ({ abouts, urlFor }) => {
  return (
    <>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="w-80 m-4 flex justify-start items-start flex-col p-4 backdrop-blur-lg bg-gray-rgba rounded-tl-lg"
          key={about.title + index}
        >
          <img
            src={urlFor(about.image)}
            alt={about.title}
            className="rounded-md"
          />
          <h2 className="font-bold text-gray-700" style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p className="text-grayColor" style={{ marginTop: 10 }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export default Cards;
