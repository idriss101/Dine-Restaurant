import React from "react";

export default function Menu() {
  let isTablet;
  if (typeof window !== "undefined") {
    isTablet = window.matchMedia("(min-width:700px)").matches;
  }
  return (
    <div className="w-full flex flex-col items-center bg-black pb-10 lg:flex-row lg:items-start lg:pt-40 lg:justify-between xl:justify-center ">
      <div className="text-center mt-10 w-11/12 mb-14 text-white md:w-7/12 lg:mt-0 lg:mr-20 lg:ml-20 lg:w-10/12 xl:w-3/12 ">
        <img
          src="/starter-code/images/patterns/pattern-divide.svg"
          alt="divide pattern"
          className="object-contain w-20 mt-16 mx-auto mb-10 lg:mt-0 lg:mb-10 lg:mx-0"
        />
        <h2 className="text-4xl font-bold mb-5 lg:text-left">
          A few highlights from our menu
        </h2>
        <p className="font-extra-light lg:text-left">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className="lg:mr-20 md:flex md:flex-col md:items-center">
        <div className="text-white flex flex-col items-center text-center pb-10 md:flex-row md:text-left md:w-8/12 md:items-start lg:w-full">
          <div className="relative z-0">
            <img
              src="/starter-code/images/homepage/salmon-mobile.jpg"
              alt="salmon dish"
              className="object-contain w-full mb-8 md:w-9/12 z-0 lg:w-8/12 "
            />
          </div>

          <div className="w-8/12 mt-5 lg:mt-0 xl:w-6/12 ">
            <h3 className="font-bold text-lg mb-2">Seared Salmon Fillet</h3>
            <p className="text-center font-extra-light md:text-left">
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <hr className="w-11/12 mx-auto md:w-8/12 lg:w-full" />
        <div className="text-white flex flex-col items-center text-center mt-10 pb-10 md:flex-row md:text-left md:w-8/12 md:items-start md:mt-10 lg:w-full">
          <div className="">
            <img
              src="/starter-code/images/homepage/beef-mobile.jpg"
              alt="beef dish"
              className="object-contain w-full mb-8 md:w-9/12 lg:w-8/12 "
            />
          </div>
          <div className="w-8/12 mt-5 lg:mt-0 xl:w-6/12">
            <h3 className="font-bold text-lg mb-2">Rosemary Filet Mignon</h3>
            <p className="text-center font-extra-light md:text-left">
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </div>
        <hr className="w-11/12 mx-auto md:w-8/12 lg:w-full" />
        <div className="text-white flex flex-col items-center mt-10 text-center pb-10 md:flex-row md:text-left md:w-8/12 md:items-start md:mt-10 lg:w-full">
          <div className="">
            <img
              src="/starter-code/images/homepage/chocolate-mobile.jpg"
              alt="chocolate dish"
              className="object-contain w-full mb-8 md:w-9/12 lg:w-8/12 "
            />
          </div>

          <div className="w-10/12 flex flex-col items-center md:w-8/12 xl:w-6/12 xl:items-start ">
            <h3 className="font-bold text-lg mb-2 xl:text-left">
              Summer Fruit Chocolate Mousse
            </h3>
            <p className="text-center font-extra-light md:text-left ">
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
