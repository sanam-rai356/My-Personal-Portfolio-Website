import myProfile from "../assets/me.jpg";
import { GoArrowRight } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import Resume from "../assets/Sanam-Rai-cv.pdf"

const Hero = () => {
  return (
    <>
      <section id="home" className="w-full h-[75vh] main_padding py-4 flex flex-col justify-center items-center">
        <div className=" w-full text-center flex flex-col gap-5 items-center justify-center">
          <div className="flex justify-center gap-[6px] items-center flex-col">
            <img
              src={myProfile}
              alt="my image"
              className="size-[170px] rounded-full border-[4px] shadow-[#34b2f1] border-[#34b2f1] shadow-md"
            />
            <p className="text-[22px]">Hi! I'm Sanam Rai 👋</p>
          </div>

          <h4 className="font-[300] text-4xl md:text-5xl lg:text-6xl">
            frontend web developer
          </h4>
          <p className="leading-[1.7rem] text-[17px] max-w-[650px]">
            I am a dedicated frontend developer with a strong work ethic and a
            passion for continuous learning and personal growth. I am highly
            motivated to enhance my skills and stay at the forefront of industry
            advancements.
          </p>

          <div className="flex gap-3">
            <a
              href="#contact"
              className="border-[1.5px] transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-lg flex items-center gap-2 py-3 px-6 rounded-full border-black"
            >
              contact me <GoArrowRight className="text-lg" />
            </a>

            <a
              href={Resume}
              download="resume"
              className="border-[1.5px] transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-lg flex items-center gap-2 py-3 px-6 rounded-full border-black"
            >
              my resume <FiDownload className="text-lg" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
