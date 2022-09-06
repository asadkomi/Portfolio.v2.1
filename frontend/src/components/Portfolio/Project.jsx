import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Project = ({ animateCard, filterWork, urlFor }) => {
  return (
    <>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex justify-center items-center flex-wrap"
      >
        {filterWork.map((work, index) => (
          <div
            className="md:w-[270px] flex-col m-8 p-4 shadow-lg rounded-lg backdrop-blur-sm	 text-grayColor bg-gray-rgba cursor-pointer flex justify-center items-center"
            key={index}
          >
            <div className="w-full md:h-[230px] relative flex justify-center items-center">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-lg object-cover"
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="absolute rounded-lg text-white bg-black-rgba top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center m-4"
                  >
                    <AiFillEye size={40} />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center m-4"
                  >
                    <AiFillGithub size={40} />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="p-2 w-full relative flex-col flex justify-center items-center">
              <h4 className="font-bold mt-4 leading-6">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10, fontSize:'12px' }}>
                {work.description}
              </p>

              <div className="absolute py-1 px-2 rounded-md  bg-secondary top-[-20px] flex justify-center items-center">
                <p className="text-sm text-primary">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Project;
