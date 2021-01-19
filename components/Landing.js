import React from "react";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <div className="w-screen bg-hero-mobile flex flex-col items-center no-repeat bg-cover pb-36 md:bg-hero-tablet lg:bg-hero-desktop lg:items-start lg:bg-right">
        <div className=" w-10/12 mt-64 text-center flex flex-col items-center md:mt-96 lg:w-6/12 lg:items-start lg:mt-20 lg:ml-20 xl:ml-40 xl:w-4/12">
          <img
            src="/starter-code/images/logo.svg"
            alt="company logo"
            className="w-30 object-contain mb-12 lg:mb-36 "
          />
          <h1 className="text-white text-4xl font-extra-light mb-6 md:text-5xl w-4/6 lg:text-left lg:text-6xl lg:w-5/6 lg:mb-10">
            Exquisite dining since 1989
          </h1>
          <p className="text-white font-extra-light mb-8 md:text-xl lg:text-left lg:w-4/6 lg:mb-10">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Link href="/booking">
            <a>
              <div className="border-white border-solid border py-5 px-14 hover:bg-white hover:text-black transition-all cursor-pointer text-white">
                <p className=" uppercase font-medium text-md hover:text-black">
                  Book a table
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
