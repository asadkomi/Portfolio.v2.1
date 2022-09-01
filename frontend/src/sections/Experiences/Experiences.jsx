import React, { useState, useEffect } from "react";

import { urlFor, client } from "../../api";
import Skill from "../../components/Experiences/Skill.jsx";
import Experience from "../../components/Experiences/Experience.jsx";
import PageTitle from "../../components/Utils/PageTitle.jsx";

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
      className="w-full md:h-screen lg:h-full flex justify-center items-center  bg-slate-400 bg-[url('./assets/bg-sec.jpg')] bg-cover bg-center relative"
    >
      <div className="w-full h-full py-40  mx-4 md:h-1/2 lg:h-full lg:pt-20 xl:pt-20  flex justify-center items-center flex-col">
        <PageTitle desc={"Skills & Experiences"} />
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
