import React from "react";
import useReactSimpleMatchMedia from "react-simple-matchmedia";
export default function About() {
  // let isTablet;
  // let isDesktop;
  // if (typeof window !== "undefined") {
  //   isTablet = window.matchMedia("screen and (min-width:700px)").matches;
  //   isDesktop = window.matchMedia("screen and (min-width: 1024px)").matches;
  // }
  const isPhone = useReactSimpleMatchMedia("phone");
  const isTablet = useReactSimpleMatchMedia("tablet");
  const isDesktop = useReactSimpleMatchMedia("desktop");

  const showpatternTablet = () => {
    if (isTablet === true) {
      return (
        <>
          <img
            src="/starter-code/images/patterns/pattern-curve-top-left.svg"
            alt="pattern svg"
            className="object-contain w-full absolute -left-96 top-56 z-0 lg:w-3/6 lg:top-0 rounded-lg"
          />
          <img
            src="/starter-code/images/patterns/pattern-curve-bottom-right.svg"
            alt="pattern svg"
            className="object-contain w-full absolute -right-96 bottom-0 z-0 lg:w-3/6"
          />
        </>
      );
    } else {
      return null;
    }
  };
  const getDeviceSize = () => {
    if (isPhone) {
      return (
        <img
          src={`/starter-code/images/homepage/enjoyable-place-mobile.jpg`}
          alt="enjoyable place image"
          className="object-contain -mt-20 shadow-2xl block md:hidden lg:hidden w-11/12 lg:w-96 lg:left-24 xl:mr-40"
        />
      );
    } else if (isTablet) {
      return (
        <img
          src={`/starter-code/images/homepage/enjoyable-place-tablet.jpg`}
          alt="enjoyable place image"
          className="object-contain hidden -mt-20 shadow-2xl md:block lg:hidden w-11/12 lg:w-96 lg:left-24 xl:mr-40"
        />
      );
    } else {
      return (
        <img
          src={`/starter-code/images/homepage/enjoyable-place-desktop.jpg`}
          alt="enjoyable place image"
          className="object-contain -mt-20 shadow-2xl block w-11/12 lg:w-96 lg:left-24 xl:mr-40"
        />
      );
    }
  };
  return (
    <div className="mx-auto w-screen flex flex-col items-center relative pb-10 ">
      {showpatternTablet()}
      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:w-11/12 lg:mb-40 xl:w-7/12 xl:justify-center">
        <img
          src={`/starter-code/images/homepage/enjoyable-place-mobile.jpg`}
          alt="enjoyable place image"
          className="object-contain -mt-20 shadow-2xl block md:hidden lg:hidden w-11/12 lg:w-96 lg:left-24 xl:mr-40"
        />
        <img
          src={`/starter-code/images/homepage/enjoyable-place-tablet.jpg`}
          alt="enjoyable place image"
          className="object-contain hidden -mt-20 shadow-2xl md:block lg:hidden w-11/12 lg:w-96 lg:left-24 xl:mr-40"
        />
        <img
          src={`/starter-code/images/homepage/enjoyable-place-desktop.jpg`}
          alt="enjoyable place image"
          className="object-contain -mt-20 shadow-2xl hidden md:hidden lg:block w-11/12 lg:w-96 lg:left-24 xl:mr-40"
        />
        <div className="text-center flex flex-col items center mt-10 w-11/12 mb-16 md:w-7/12 lg:w-4/12 lg:mt-20 ">
          <img
            src="/starter-code/images/patterns/pattern-divide.svg"
            alt="divide pattern"
            className="object-contain w-20  mb-10 lg:mt-0"
          />
          <h2 className="text-4xl font-bold mb-5 lg:text-left">
            Enjoyable place for all the family
          </h2>
          <p className="lg:text-left">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:w-full lg:justify-around xl:w-7/12 xl:justify-center">
        <div className=" flex flex-col items-center relative">
          {isTablet && (
            <img
              src="/starter-code/images/patterns/pattern-lines.svg"
              alt="line patterns"
              className="absolute -right-16 bottom-16 "
            />
          )}
          <img
            src={`/starter-code/images/homepage/locally-sourced-${getDeviceSize()}.jpg`}
            alt="enjoyable place image"
            className="object-contain shadow-2xl w-96 lg:-mb-20 xl:ml-40"
          />
        </div>
        <div className="text-center mt-10 w-11/12 mb-16 md:w-7/12 lg:w-4/12">
          <img
            src="/starter-code/images/patterns/pattern-divide.svg"
            alt="divide pattern"
            className="object-contain w-20 mt-8 mb-10 mx-auto xl:mx-0"
          />
          <h2 className="text-4xl font-bold mb-5 lg:text-left">
            The most locally sourced food
          </h2>
          <p className="lg:text-left">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </div>
  );
}
