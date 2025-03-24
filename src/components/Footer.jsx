import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="main_padding pt-12 pb-6">
        <hr className="border-none h-[1px] bg-gray-400 mb-2" />
        <div className="flex justify-between gap-2">
          <p className="outfit-font">rais68578@gmail.com</p>

          <div className="flex gap-2 flex-wrap md:gap-3">
            <a
              href="https://www.facebook.com/sanam.rai.79"
              target="_blank"
              className="outfit-font hover:text-gray-500"
            >
              Facebook
            </a>
            <a
              href="https://github.com/sanam-rai356"
              target="_blank"
              className="outfit-font hover:text-gray-500"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/sanam-rai-512818329/"
              target="_blank"
              className="outfit-font hover:text-gray-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
