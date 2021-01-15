import React from "react";

export default function About() {
  let isTablet;
  let isDesktop;
  if (typeof window !== "undefined") {
    isTablet = window.matchMedia("(min-width:700px)").matches;
    isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  }
  const showpatternTablet = () => {
    if (isTablet === true) {
      return (
        <>
          <img
            src="/starter-code/images/patterns/pattern-curve-top-left.svg"
            alt="pattern svg"
            className="object-contain w-full absolute -left-96 top-56 z-0"
          />
          <img
            src="/starter-code/images/patterns/pattern-curve-bottom-right.svg"
            alt="pattern svg"
            className="object-contain w-full absolute -right-96 bottom-0 z-0"
          />
        </>
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
    <div className="mx-auto w-11/12 flex flex-col items-center relative pb-10">
      {showpatternTablet()}
      <img
        src={`/starter-code/images/homepage/enjoyable-place-${getDeviceSize()}.jpg`}
        alt="enjoyable place image"
        className="object-contain absolute -top-20 shadow-2xl block w-11/12 lg:w-4/12 lg:left-24"
      />
      <img
        src="/starter-code/images/patterns/pattern-divide.svg"
        alt="divide pattern"
        className="object-contain w-20 mt-96 lg:mt-40 lg:ml-20"
      />
      <div className="text-center mt-10 w-11/12 mb-16 md:w-7/12  lg: ml-96 lg:pl-20 lg:w-5/12">
        <h2 className="text-4xl font-bold mb-5 lg:text-left">
          Enjoyable place for all the family
        </h2>
        <p className="lg:text-left">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
      <div className=" flex flex-col items-center relative">
        {isTablet && (
          <img
            src="/starter-code/images/patterns/pattern-lines.svg"
            alt="line patterns"
            className="absolute -right-16 bottom-16"
          />
        )}
        <img
          src={`/starter-code/images/homepage/locally-sourced-${
            isTablet ? "tablet" : "mobile"
          }.jpg`}
          alt="enjoyable place image"
          className="object-contain shadow-2xl w-full"
        />
      </div>

      <img
        src="/starter-code/images/patterns/pattern-divide.svg"
        alt="divide pattern"
        className="object-contain w-20 mt-16"
      />
      <div className="text-center mt-10 w-11/12 mb-16 md:w-7/12">
        <h2 className="text-4xl font-bold mb-5">
          The most locally sourced food
        </h2>
        <p>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>
    </div>
  );
}
