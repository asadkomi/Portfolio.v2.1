import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "testimonials",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex  justify-between items-center w-full h-20 px-4 backdrop-blur-sm	 text-grayColor bg-gray-rgba fixed z-20">
      <div>
        <h1 className="font-logo text-2xl md:text-base">
          Portfolio <span className="text-primary">v2.0</span>
        </h1>
      </div>

      <ul className=" hidden md:flex justify-center items-center">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="hover:text-primary px-4 md:px-2 lg:px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link
              onClick={() => setToggle(!toggle)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
        <button className="text-white w-fit px-6 py-2 ml-4 justify-center flex items-center rounded-md bg-gradient-to-r from-btn to-[#f6862b]">
          <a href="/Resume.pdf" download target="_blank" rel="noreferrer">
            Resume'
          </a>
        </button>
      </ul>

      <div
        className="cursor-pointer z-20 text-primary md:hidden"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <HiX size={40} /> : <HiMenuAlt4 size={40} />}
      </div>

      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-5/6 md:w-1/3 h-screen backdrop-blur-sm bg-d-gray-rgba md:hidden">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="hover:text-primary px-4 cursor-pointer capitalize py-6 text-4xl text-grayColor hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setToggle(!toggle)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <button className="text-white w-fit px-6 py-2 ml-4 justify-center flex items-center rounded-md bg-gradient-to-r from-btn to-[#f6862b]">
            <a href="/Resume.pdf" download target="_blank" rel="noreferrer">
              Resume'
            </a>
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
