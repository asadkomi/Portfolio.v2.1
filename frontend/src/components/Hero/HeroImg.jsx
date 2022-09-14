import React from "react";
import { motion } from "framer-motion";

import HeroImage from "../../assets/hero.png";

const imgAnimation = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const HeroImg = () => {
  return (
    <motion.div
      variants={imgAnimation}
      whileInView={imgAnimation.whileInView}
      className="flex  flex-col justify-center items-end "
    >
      <img
        src={HeroImage}
        alt="profile_image"
        className=" backdrop-blur-sm	 text-grayColor bg-gray-rgba rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

export default HeroImg;
