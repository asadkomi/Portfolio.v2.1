import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

const Experience = ({ experiences }) => {
  return (
    <>
      {experiences.map((experience) => (
        <motion.div
          className="flex pl-20 md:justify-start md:items-start flex-row w-full"
          key={experience.year}
        >
          <>
            <div className="mr-4">
              <p className="font-bold text-primary">{experience.year}</p>
            </div>
            <motion.div className="flex flex-col pb-6">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="font-w-500 font-medium">{work.name}</h4>
                    <p className="text-grayColor">{work.company}</p>{" "}
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect="solid"
                    // arrowColor="#fff"

                    className="w-[300px] text-center opacity-10"
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
            </motion.div>
          </>
        </motion.div>
      ))}
    </>
  );
};

export default Experience;
