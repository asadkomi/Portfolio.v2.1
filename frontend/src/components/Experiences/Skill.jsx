import React from "react";
import { motion } from "framer-motion";

const Skill = ({ skills, urlFor }) => {
  return (
    <>
      <motion.div className="flex-wrap flex ">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex  flex-col text-center p-2"
            key={skill.name}
          >
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full backdrop-blur-sm	 text-grayColor bg-gray-rgba">
              <img src={urlFor(skill.icon)} alt={skill.name} className="" />
            </div>
            <p className="text-grayColor mt-4">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skill;
