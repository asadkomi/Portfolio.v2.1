import React, { useState, useEffect } from "react";

import { urlFor, client } from "../../api";
import TestimonialCard from "../../components/Testimonial/TestimonialCard.jsx";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);
  return (
    <div
      name="testimonials"
      className="w-full md:h-screen lg:h-full flex justify-center items-center  bg-slate-400 bg-[url('./assets/bg-hero.jpg')] bg-cover bg-center relative"
    >
      <div className="w-full md:h-screen   mx-4  lg:h-screen lg:pt-10 xl:pt-20  flex justify-center items-center flex-col">
        <TestimonialCard
          testimonials={testimonials}
          urlFor={urlFor}
          currentIndex={currentIndex}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Testimonials;
