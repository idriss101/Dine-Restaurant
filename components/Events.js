import React from "react";

export default function Events() {
  let isTablet;
  if (typeof window !== "undefined") {
    isTablet = window.matchMedia("(min-width:700px)").matches;
  }
  const showpatternTablet = () => {
    if (isTablet === true) {
      return (
        <img
          src="/starter-code/images/patterns/pattern-curve-top-left.svg"
          alt="pattern svg"
          className="object-contain w-full absolute -left-96 top-0 z-0 rounded-full"
        />
      );
    } else {
      return null;
    }
  };
  return (
    <div className="w-full flex flex-col items-center relative">
      {showpatternTablet()}
      <div className="relative">
        {isTablet && (
          <img
            src="/starter-code/images/patterns/pattern-lines.svg"
            alt="line patterns"
            className="absolute top-7 -left-16"
          />
        )}
        <img
          src={`/starter-code/images/homepage/family-gathering-${
            isTablet ? "tablet" : "mobile"
          }.jpg`}
          alt="family gathering"
          className="shadow-2xl mt-16 mb-10 "
        />
      </div>

      <ul className="text-center md:flex md:w-11/12 md:justify-around">
        <li className="font-semibold uppercase tracking-widest border-solid mb-3 ">
          Family Gathering
        </li>
        <li className="font-medium uppercase tracking-widest text-gray-400 mb-3">
          Special Events
        </li>
        <li className="font-medium uppercase tracking-widest text-gray-400">
          Social Events
        </li>
      </ul>
      <div className="text-center mt-10 w-11/12 mb-14 md:w-6/12 md:mb-10">
        <h2 className="text-3xl font-bold mb-5 md:text-4xl">
          Family Gathering
        </h2>
        <p className="font-normal">
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
      </div>
      <div className="bg-black py-5 px-16 mb-10">
        <p className="text-white uppercase font-medium tracking-wide">
          Book a table
        </p>
      </div>
      <div className="bg-ready-mobile w-full flex flex-col items-center bg-cover md:bg-ready-tablet">
        <h4 className="text-white font-bold text-4xl text-center pt-20 pb-6">
          Ready to make a reservation?
        </h4>
        <div className=" py-5 px-16 border border-solid border-white mb-20">
          <p className="text-white uppercase font-medium tracking-wide">
            Book a table
          </p>
        </div>
      </div>
    </div>
  );
}
