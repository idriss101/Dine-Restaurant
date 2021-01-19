import React from "react";

export default function About() {
  return (
    <div className="mx-auto w-screen flex flex-col items-center relative pb-10 ">
      <img
        src="/starter-code/images/patterns/pattern-curve-top-left.svg"
        alt="pattern svg"
        className="object-contain hidden md:block w-full absolute -left-96 top-56 z-0 lg:w-3/6 lg:top-0 rounded-lg "
      />
      <img
        src="/starter-code/images/patterns/pattern-curve-bottom-right.svg"
        alt="pattern svg"
        className="object-contain hidden md:block w-full absolute -right-96 bottom-0 z-0 lg:w-3/6 xl:w-3/6 lg:-right-60"
      />
      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:w-11/12 lg:mb-40 xl:w-7/12 xl:justify-center">
        <img
          src={`/starter-code/images/homepage/enjoyable-place-mobile.jpg`}
          alt="enjoyable place image"
          className="object-contain -mt-20 shadow-2xl block md:hidden lg:hidden w-10/12 lg:w-96 lg:left-24 xl:mr-40"
        />
        <img
          src={`/starter-code/images/homepage/enjoyable-place-tablet.jpg`}
          alt="enjoyable place image"
          className="object-contain hidden -mt-20 shadow-2xl md:block lg:hidden w-10/12 lg:w-96 lg:left-24 xl:mr-40"
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
            className="object-contain w-20 mx-auto mb-10 lg:mt-0 xl:mx-0"
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

      <div className="flex flex-col items-center lg:flex-row-reverse lg:w-11/12 lg:justify-around xl:w-7/12 xl:justify-center">
        <div className=" flex flex-col items-center relative md:w-10/12 lg:w-max">
          <img
            src="/starter-code/images/patterns/pattern-lines.svg"
            alt="line patterns"
            className="absolute hidden md:block md:-right-10 bottom-16 lg:-right-20"
          />
          <img
            src={`/starter-code/images/homepage/locally-sourced-mobile.jpg`}
            alt="enjoyable place image"
            className="object-contain md:hidden lg:hidden shadow-2xl w-80 lg:-mb-20 xl:ml-40"
          />
          <img
            src={`/starter-code/images/homepage/locally-sourced-tablet.jpg`}
            alt="enjoyable place image"
            className="object-contain hidden md:inline-block lg:hidden shadow-2xl w-96 lg:-mb-20 xl:ml-40 md:w-full"
          />
          <img
            src={`/starter-code/images/homepage/locally-sourced-desktop.jpg`}
            alt="enjoyable place image"
            className="object-contain hidden md:hidden lg:inline-block shadow-2xl w-96 lg:-mb-48 xl:ml-40 xl:-mb-20 "
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
