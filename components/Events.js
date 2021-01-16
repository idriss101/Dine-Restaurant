import React from "react";

export default function Events() {
  let isTablet;
  let isDesktop;
  if (typeof window !== "undefined") {
    isTablet = window.matchMedia("(min-width:700px)").matches;
    isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  }
  const showpatternTablet = () => {
    if (isTablet === true) {
      return (
        <img
          src="/starter-code/images/patterns/pattern-curve-top-left.svg"
          alt="pattern svg"
          className="object-contain w-full absolute -left-96 top-0 z-0 rounded-full xl:w-6/12"
        />
      );
    } else {
      return null;
    }
  };
  const getDeviceSize = () => {
    if (isDesktop === true) {
      return "desktop";
    } else if (isTablet === true) {
      return "tablet";
    } else {
      return "mobile";
    }
  };
  return (
    <div className="w-full flex flex-col items-center relative">
      {showpatternTablet()}
      <div className="lg:flex lg:justify-around lg:w-full lg:py-20 xl:justify-center xl:w-1/2 ">
        <div className="relative lg:h-full lg:ml-20">
          {isTablet && (
            <img
              src="/starter-code/images/patterns/pattern-lines.svg"
              alt="line patterns"
              className="absolute top-7 -left-16"
            />
          )}
          <img
            src={`/starter-code/images/homepage/family-gathering-${getDeviceSize()}.jpg`}
            alt="family gathering"
            className="shadow-2xl mt-16 mb-10 "
          />
        </div>
        <div className="lg:flex lg:flex-col-reverse lg:w-4/6 lg:ml-28 lg:h-full xl:w-2/6 xl:ml-56">
          <ul className="text-center md:flex md:w-11/12 md:justify-around lg:flex-col lg:items-start lg:mb-10 ">
            <li className="font-semibold uppercase tracking-widest border-solid mb-3">
              Family Gathering
            </li>
            <li className="font-medium uppercase tracking-widest text-gray-400 mb-3">
              Special Events
            </li>
            <li className="font-medium uppercase tracking-widest text-gray-400">
              Social Events
            </li>
          </ul>
          <div className="text-center mt-10 w-11/12 mb-14 md:w-6/12 md:mb-10 lg:w-5/6 lg:mt-20 xl:w-5/6">
            <h2 className="text-3xl font-bold mb-5 md:text-4xl lg:text-left">
              Family Gathering
            </h2>
            <p className="font-normal lg:text-left lg:mb-10">
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
            <div className="bg-black py-5 px-16 mb-10 lg:px-10 lg:mb-0">
              <p className="text-white uppercase font-medium tracking-wide">
                Book a table
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ready-mobile w-full flex flex-col items-center bg-cover md:bg-ready-tablet lg:flex-row lg:items-center lg:justify-around lg:py-10 lg:bg-ready-desktop">
        <h4 className="text-white font-bold text-4xl text-center pt-20 pb-6 lg:text-3xl lg:pt-10">
          Ready to make a reservation?
        </h4>
        <div className=" py-5 px-16 border border-solid border-white mb-20 lg:mb-0">
          <p className="text-white uppercase font-medium tracking-wide">
            Book a table
          </p>
        </div>
      </div>
    </div>
  );
}
