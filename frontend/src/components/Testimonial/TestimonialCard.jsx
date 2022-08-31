import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const TestimonialCard = ({
  testimonials,
  urlFor,
  currentIndex,
  handleClick,
}) => {
  return (
    <div className="flex w-full py-10 justify-center items-center flex-col ">
      {testimonials.length && (
        <>
          <div className="w-full md:w-[90%] lg:w-[70%] md:min-h-[320px] backdrop-blur-lg bg-gray-rgba flex-col md:flex-row py-8 md:p-8 rounded-lg shadow-lg flex justify-center items-center">
            <img
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt={testimonials[currentIndex].name}
              className="w-[200px] h-[200px] rounded-full object-cover mb-8 md:mr-8 "
            />
            <div className="text-md flex-col flex justify-around items-start h-full px-4 md:text-left">
              <p className="leading-6 pb-8 md:pb-8 ">
                {testimonials[currentIndex].feedback}
              </p>
              <div>
                <h4 className="font-bold text-primary ">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="text-sm text-grayColor">
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="flex-row  flex justify-center items-center">
            <div
              className="w-[100px] h-[100px] rounded-full  m-1 flex justify-center items-center"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft size={30} className=" text-primary " />
            </div>

            <div
              className="w-[100px] h-[100px] rounded-full  m-1 flex justify-center items-center"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight size={30} className=" text-primary " />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
