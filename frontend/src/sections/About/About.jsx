import React, { useState, useEffect } from "react";

import { urlFor, client } from "../../api.js";
import Cards from "../../components/About/Cards.jsx";
import PageTitle from "../../components/Utils/PageTitle.jsx";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div
      name="about"
      className="w-full md:h-full lg:h-full flex justify-center items-center  bg-slate-400 bg-[url('./assets/bg-about.jpg')] bg-cover bg-center relative"
    >
      <div className="w-full h-full py-40  mx-4 md:h-1/2 lg:h-full lg:pt-10 xl:pt-20  flex justify-center items-center flex-col">
        <PageTitle
          page={""}
          title={""}
          desc={"Hire me, you'll love my work!"}
        />
        <div className="flex w-full justify-center flex-wrap  ">
          <Cards abouts={abouts} urlFor={urlFor} />
        </div>
      </div>
    </div>
  );
};

export default About;
