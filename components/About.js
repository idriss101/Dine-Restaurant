import React from "react";

export default function About() {
  return (
    <div className="mx-auto w-11/12 flex flex-col items-center relative pb-10">
      <img
        src="/starter-code/images/homepage/enjoyable-place-mobile.jpg"
        alt="enjoyable place image"
        className="object-contain absolute -top-20 shadow-2xl block w-11/12"
      />
      <img
        src="/starter-code/images/patterns/pattern-divide.svg"
        alt="divide pattern"
        className="object-contain w-20 mt-96"
      />
      <div className="text-center mt-10 w-11/12 mb-16">
        <h2 className="text-4xl font-bold mb-5">
          Enjoyable place for all the family
        </h2>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
      <img
        src="/starter-code/images/homepage/locally-sourced-mobile.jpg"
        alt="enjoyable place image"
        className="object-contain w-11/12 shadow-2xl"
      />
      <img
        src="/starter-code/images/patterns/pattern-divide.svg"
        alt="divide pattern"
        className="object-contain w-20 mt-16"
      />
      <div className="text-center mt-10 w-11/12 mb-16">
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
