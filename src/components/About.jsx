import Title from "./Title";
import myPhoto from "../assets/photo.jpg";
import { GrLanguage } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tcss from "../assets/tcss.png";

const About = () => {
  const logos = [
    {
      id: 1,
      img: html,
    },

    {
      id: 2,
      img: css,
    },

    {
      id: 3,
      img: js,
    },

    {
      id: 4,
      img: react,
    },

    {
      id: 5,
      img: tcss,
    },
  ];
  return (
    <>
      <section className="main_padding py-24" id="about">
        <Title title1={"Introduction"} title2={"About Me"} />

        <div className="mt-12 flex lg:flex-row flex-col gap-5 items-center">
          <img
            src={myPhoto}
            className="lg:max-w-[400px] max-w-[350px] shadow-[#34b2f1] shadow-lg rounded-xl"
            alt="my photo"
          />

          <div className="px-5 flex-1">
            <p className="leading-[1.7rem] text-[17px] text-gray-700">
              I am a dedicated frontend developer with a strong work ethic and a
              passion for continuous learning and personal growth. Highly
              motivated to refine my skills and stay at the forefront of
              industry advancements, I excel in collaborative environments. My
              ability to listen empathetically enables me to communicate
              effectively within teams, leveraging my talents and expertise to
              achieve shared goals.
            </p>

            <div className="my-6 grid lg:grid-cols-2  xl:grid-cols-3 grid-cols-1 gap-3 lg:gap-5 ">
              <div className="border-[2px] rounded-xl border-gray-300  shadow-sm p-5">
                <GrLanguage className="text-4xl text-gray-600" />
                <h5 className="text-lg font-semibold text-gray-600 outfit-font mt-2 mb-4">
                  Languages
                </h5>
                <p className="outfit-font text-gray-700">
                  HTML, CSS, JavaScript, React JS, Tailwind CSS
                </p>
              </div>

              <div className="border-[2px] rounded-xl border-gray-300 shadow-sm p-5">
                <FaGraduationCap className="text-4xl text-gray-600" />
                <h5 className="text-lg text-gray-600 font-semibold outfit-font mt-2 mb-4">
                  Education
                </h5>
                <p className="outfit-font text-gray-700">
                  Successfully completed higher secondary education (+2) in
                  Computer Science at Grand Academy, located in Kumaripati,
                  Lalitpur.
                </p>
              </div>

              <div className="border-[2px] rounded-xl border-gray-300 shadow-sm p-5">
                <RiShoppingBagLine className="text-4xl text-gray-600" />
                <h5 className="text-lg text-gray-600 font-semibold outfit-font mt-2 mb-4">
                  Projects
                </h5>
                <p className="outfit-font text-gray-700">
                  Built more than 5 projects.
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-700">Tools I use</p>

              <div className="flex gap-3">
                {logos.map((list) => (
                  <div className="border-[1.5px] mt-3 shadow-sm hover:-translate-y-1 transition-all duration-300  border-gray-300 p-2 rounded-lg">
                    <img src={list.img} key={list.id} alt="logo image" className="size-[50px] object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
