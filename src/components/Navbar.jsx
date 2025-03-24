import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const Main_Links = [
    {
      id: 1,
      topLink: "Home",
      mainId: "home",
    },

    {
      id: 2,
      topLink: "About Me",
      mainId: "about",
    },

    {
      id: 3,
      topLink: "My Work",
      mainId: "work",
    },

    {
      id: 4,
      topLink: "Contact Me",
      mainId: "contact",
    },
  ];
  return (
    <>
      <nav className="main_padding z-10 sticky top-0 left-0 bg-white shadow-sm py-2 flex items-center justify-between">
        <a href="#home">
          <img src={Logo} alt="logo" className="md:w-[150px] w-[130px]" />
        </a>

        <ul className="hidden md:flex gap-5">
          {Main_Links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.mainId}`}
                className="text-lg hover:text-gray-600"
              >
                {link.topLink}
              </a>
            </li>
          ))}
        </ul>

        <FaBars
          onClick={() => setToggleNav(true)}
          className="md:hidden block text-[28px] cursor-pointer"
        />

        {toggleNav ? (
          <ul className="fixed shadow-md pl-7 pt-14 bg-[#FFF3F1] w-[280px] right-0 top-0 h-[100vh]">
            {Main_Links.map((link) => (
              <li key={link.id} className="mb-6">
                <a className="text-lg hover:text-gray-600" href="#">
                  {link.topLink}
                </a>
              </li>
            ))}
            <RxCross2
              onClick={() => setToggleNav(false)}
              className="text-[36px] absolute right-6 top-3 cursor-pointer"
            />
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
