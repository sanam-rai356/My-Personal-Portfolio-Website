import React from "react";
import Title from "./Title";
import foodWebsite from "../assets/foodwebiste.png";
import instituteWebsite from "../assets/institute.png";
import jewelleryWebsite from "../assets/jwellery.png";
import realState from "../assets/realstate.png";

const Work = () => {
  const workDetails = [
    {
      id: 1,
      img: foodWebsite,
      intro: "Food Website",
      link: "https://food-website-three-kappa.vercel.app/",
    },

    {
      id: 2,
      img: instituteWebsite,
      intro: "Institute Website",
      link: "https://github.com/sanam-rai356/Institute-Website-Using-Mern-Stack",
    },

    {
      id: 3,
      img: jewelleryWebsite,
      intro: "Jewellery Website",
      link: "https://jewellery-website-using-react.vercel.app/",
    },

    {
      id: 4,
      img: realState,
      intro: "Real Website",
      link: "https://real-estate-website-using-react-js-tailwind-css.vercel.app/",
    },
  ];
  return (
    <>
      <section id="work" className="main_padding py-24">
        <Title title1={"My Portfolio"} title2={"My Latest Work"} />
        <p className="mt-3 text-center w-full sm:max-w-[900px] text-[17px] leading-[1.7rem] mx-auto">
          Welcome to my front-end development portfolio. Explore a collection of
          projects showcasing my expertise in front-end development
        </p>

        <div className="mt-12 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
          {workDetails.map((list) => (
            <a href={list.link} target="_blank" key={list.id} className="">
              <div>
                <img
                  src={list.img}
                  alt="image"
                  className="w-full h-[220px] object-cover rounded-md shadow-[#34b2f1] shadow-md"
                />
                <h4 className="mt-3 outfit-font text-xl text-center font-semibold">
                  {list.intro}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
