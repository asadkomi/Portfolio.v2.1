import React, { useState, useEffect } from "react";

import { urlFor, client } from "../../api";
import Skill from "../../components/Experiences/Skill.jsx";
import Experience from "../../components/Experiences/Experience.jsx";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div
      name="experience"
      className="w-full md:h-screen lg:h-full flex justify-center items-center  bg-slate-400 bg-[url('./assets/about.png')] bg-cover bg-center relative"
    >
      <div className="w-full h-full py-40  mx-4 md:h-1/2 lg:h-full lg:pt-20 xl:pt-20  flex justify-center items-center flex-col">
        <div className="flex w-full h-full  lg:pt-20 md:justify-center md:items-center py-8 ">
          <p className="text-3xl pb-20 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-300">
            I Know that <span>Good Design</span> <br />
            means <span>Good Business</span>
          </p>
        </div>
        <div className="flex w-full justify-center items-start flex-col  md:flex-row">
          <div className="w-full flex-wrap  flex  items-center justify-center pb-10 pl-5 md:pl-20">
            <Skill skills={skills} urlFor={urlFor} />
          </div>
          <div className="flex justify-start items-start flex-col w-full ">
            <Experience experiences={experiences} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
