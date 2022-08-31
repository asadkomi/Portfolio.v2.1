import React, { useState, useEffect } from "react";

import { urlFor, client } from "../../api";
import Tabs from "../../components/Portfolio/Tabs.jsx";
import Project from "../../components/Portfolio/Project.jsx";
import PageTitle from "../../components/Utils/PageTitle.jsx";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "portfolio"]';

    client.fetch(query).then((data) => {
      setPortfolios(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(portfolios);
      } else {
        setFilterWork(
          portfolios.filter((portfolio) => portfolio.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <div
      name="portfolio"
      className="w-full md:h-full lg:h-full flex justify-center items-center  bg-slate-400 bg-[url('./assets/exp.png')] bg-cover bg-center relative"
    >
      <div className="w-full h-full py-40  mx-4 md:h-1/2 lg:h-full lg:pt-10 xl:pt-20  flex justify-center items-center flex-col">
        <PageTitle
          title={"I Know that Good Design"}
          desc={"means Good Business"}
        />
        <div className="flex w-full justify-center flex-wrap  ">
          <Tabs
            activeFilter={activeFilter}
            handleWorkFilter={handleWorkFilter}
          />
        </div>
        <div className="flex justify-center items-center">
          <Project
            animateCard={animateCard}
            filterWork={filterWork}
            urlFor={urlFor}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
