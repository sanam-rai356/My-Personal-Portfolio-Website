import React from "react";
import { toast } from "react-toastify";
import Title from "./Title";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "542bc221-26e6-473c-9c19-c8e10894c339");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message Sent Successfully");
    }
  };

  return (
    <>
      <section id="contact" className="main_padding py-24">
        <Title title1={"Connect With Me"} title2={"Get In Touch"} />
        <p className="mt-3 text-center w-full sm:max-w-[900px] text-[17px] leading-[1.7rem] mx-auto">
          I'd love to hear from you. If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form
          onSubmit={onSubmit}
          className="w-full sm:max-w-[900px] mx-auto mt-12"
        >
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3">
            <input
              type="text"
              className="focus:outline-none  outfit-font border-[1.5px] border-gray-400 p-3 rounded-lg text-[17px]"
              name="name"
              required
              placeholder="Enter Name"
            />

            <input
              type="email"
              name="email"
              className="focus:outline-none outfit-font border-[1.5px] border-gray-400 p-3 rounded-lg text-[17px]"
              required
              placeholder="Enter Email"
            />
          </div>

          <textarea
            rows={8}
            name="message"
            className="focus:outline-none outfit-font w-full my-8 resize-none border-[1.5px] border-gray-400 p-3 rounded-lg text-[17px]"
            required
            placeholder="Enter Message"
          ></textarea>

          <div className="text-center">
            <button
              className="outfit-font duration-200 border-black border-[1.5px] hover:bg-white hover:text-black bg-black py-3 px-10 rounded-full text-[17px] text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
