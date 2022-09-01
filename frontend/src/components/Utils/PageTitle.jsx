import React from "react";

const PageTitle = ({ title, desc, page }) => {
  return (
    <div className="flex flex-col w-full h-full lg:pt-20 md:justify-center md:items-center py-8 ">
      <p className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-300">
        {title}
        {desc}
        <br /> <br /> <br />
      </p>
    </div>
  );
};

export default PageTitle;
