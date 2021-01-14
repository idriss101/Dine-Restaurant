import React from "react";

export default function Landing() {
  let isTablet;
  if (typeof window !== "undefined") {
    isTablet = window.matchMedia("(min-width:768px)").matches;
  }
  return (
    <div>
      <div className="w-screen bg-hero-mobile flex flex-col items-center no-repeat bg-cover pb-36 md:bg-hero-tablet">
        <div className=" w-10/12 mt-64 text-center flex flex-col items-center md:mt-96">
          <img
            src="/starter-code/images/logo.svg"
            alt="company logo"
            className="w-30 object-contain mb-12 "
          />
          <h1 className="text-white text-4xl font-extra-light mb-6 md:text-5xl w-4/6">
            Exquisite dining since 1989
          </h1>
          <p className="text-white font-extra-light mb-8 md:text-xl">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <div className="border-white border-solid border py-5 px-14">
            <p className="text-white uppercase font-medium text-md">
              Book a table
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
