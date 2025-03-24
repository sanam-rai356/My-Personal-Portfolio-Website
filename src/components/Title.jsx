import React from "react";

const Title = ({ title1, title2 }) => {
  return (
    <>
      <div className="w-full text-center">
        <h5 className="text-xl">{title1}</h5>
        <h3 className="text-[44px] mt-[-8px] md:mt-0 md:text-5xl">{title2}</h3>
      </div>
    </>
  );
};

export default Title;
