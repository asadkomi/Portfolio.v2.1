import React from "react";

const Snippet = () => {
  return (
    <div
      name=""
      className="w-full h-screen flex justify-center items-center  bg-slate-400 bg-[url('./assets/skills.png')] bg-cover bg-center relative"
    >
      <div className="w-full mx-4 md:h-1/2 lg:pt-10 xl:pt-20  flex justify-center items-center flex-col md:flex-row">
        <div className="flex w-full h-full bg-gray-200 md:justify-center md:items-center pb-8 "></div>
        <div className="flex w-full h-full bg-gray-300 lg:p-20"></div>
      </div>
    </div>
  );
};

export default Snippet;
