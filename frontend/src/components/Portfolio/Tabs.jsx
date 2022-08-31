import React from "react";

const Tabs = ({ activeFilter, handleWorkFilter }) => {
  return (
    <>
      {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
        (item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`flex justify-center items-center py-2 px-4 backdrop-blur-lg bg-primary text-white font-md cursor-pointer m-2 rounded-lg ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        )
      )}
    </>
  );
};

export default Tabs;
