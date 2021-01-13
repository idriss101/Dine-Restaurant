import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="w-screen bg-hero-mobile flex flex-col items-center no-repeat bg-cover pb-36">
        <div className=" w-10/12 mt-64 text-center flex flex-col items-center">
          <img
            src="/starter-code/images/logo.svg"
            alt="company logo"
            className="w-30 object-contain mb-12"
          />
          <h1 className="text-white text-4xl font-extra-light mb-6">
            Exquisite dining since 1989
          </h1>
          <p className="text-white font-extra-light mb-8">
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
