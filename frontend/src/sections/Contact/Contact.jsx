import React, { useState } from "react";

import { client } from "../../api";
import PageTitle from "../../components/Utils/PageTitle.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      name="contact"
      className="w-full md:h-full lg:h-full flex justify-center items-center  bg-slate-400 bg-[url('./assets/bg-about.jpg')] bg-cover bg-center relative"
    >
      <div className="w-full h-full py-40  mx-4 md:h-1/2 lg:h-full lg:pt-10 xl:pt-20  flex justify-center items-center flex-col">
        <PageTitle
          title={""}
          desc={"Let's drink coffee and talk about your project"}
        />
        <div className="flex w-full justify-center items-center pb-40">
          {!isFormSubmitted ? (
            <div className="w-full md:w-[70%] lg:w-[50%] flex-col  flex justify-center items-center">
              <div className="flex justify-center items-center w-full my-4 cursor-pointer rounded-lg ">
                <input
                  className="w-full p-4  rounded-md outline-none"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex justify-center items-center w-full my-4 cursor-pointer rounded-lg">
                <input
                  className="w-full p-4  rounded-md outline-none "
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex justify-center items-center w-full my-4 pb-8 cursor-pointer rounded-lg">
                <textarea
                  className="w-full p-4  rounded-md outline-none h-[170px"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-fit px-8 py-4 ml-4 justify-center flex items-center rounded-md bg-gradient-to-r from-btn to-[#f6862b]"
              >
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
