import React from "react";

const PageTitle = ({ title, desc }) => {
  return (
    <div className="flex w-full h-full lg:pt-20 md:justify-center md:items-center py-8 ">
      <p className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-300">
        {title} <br />
        {desc}
      </p>
    </div>
  );
};

export default PageTitle;
