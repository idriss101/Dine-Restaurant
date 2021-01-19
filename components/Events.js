import React, { useState } from "react";
export default function Events(props) {
  const [eventContent, setEventContent] = useState({
    title: "Family Gathering",
    body: `We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.`,
    img: {
      mobile: `/starter-code/images/homepage/family-gathering-mobile.jpg`,
      tablet: "/starter-code/images/homepage/family-gathering-tablet.jpg",
      desktop: "/starter-code/images/homepage/family-gathering-desktop.jpg",
    },
  });
  const [clicked, setClicked] = useState(false);
  const getContent = (e) => {
    if (e.target.innerText.toLowerCase().includes("family")) {
      setEventContent({
        img: {
          mobile: `/starter-code/images/homepage/family-gathering-mobile.jpg`,
          tablet: "/starter-code/images/homepage/family-gathering-tablet.jpg",
          desktop: "/starter-code/images/homepage/family-gathering-desktop.jpg",
        },
        title: "Family Gathering",
        body: `We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.`,
      });
    } else if (e.target.innerText.toLowerCase().includes("special")) {
      setEventContent({
        img: {
          mobile: `/starter-code/images/homepage/special-events-mobile.jpg`,
          tablet: "/starter-code/images/homepage/special-events-tablet.jpg",
          desktop: "/starter-code/images/homepage/special-events-desktop.jpg",
        },
        title: "Special Events",
        body: `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
  We’ll be sure to mark your special date with an unforgettable meal.`,
      });
    } else {
      setEventContent({
        img: {
          mobile: `/starter-code/images/homepage/social-events-mobile.jpg`,
          tablet: "/starter-code/images/homepage/social-events-tablet.jpg",
          desktop: "/starter-code/images/homepage/social-events-desktop.jpg",
        },
        title: "Social Events",
        body: `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
  parties. We’ll work with you to make your event a hit with everyone.`,
      });
    }
  };
  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src="/starter-code/images/patterns/pattern-curve-top-left.svg"
        alt="pattern svg"
        className="object-contain hidden md:block w-full absolute -left-96 top-0 z-0 rounded-full xl:w-6/12"
      />
      <div className="flex flex-col items-center lg:flex lg:justify-around lg:w-full lg:py-20 xl:justify-center xl:w-9/12 lg:flex-row">
        <div className="relative lg:h-full lg:ml-20">
          <img
            src="/starter-code/images/patterns/pattern-lines.svg"
            alt="line patterns"
            className="absolute hidden md:block top-7 -left-16"
          />

          <img
            src={eventContent.img.mobile}
            alt="family gathering"
            className="shadow-2xl md:hidden lg:hidden mt-16 mb-10 "
          />
          <img
            src={eventContent.img.tablet}
            alt="family gathering"
            className="shadow-2xl hidden md:inline-block lg:hidden mt-16 mb-10 "
          />
          <img
            src={eventContent.img.desktop}
            alt="family gathering"
            className="shadow-2xl hidden md:hidden lg:inline-block mt-16 mb-10 "
          />
        </div>
        <div className="flex flex-col items-center lg:flex lg:flex-col-reverse lg:w-4/6 lg:ml-28 lg:h-full xl:ml-56 lg:items-start">
          <ul className="text-center md:flex md:w-11/12 md:justify-around lg:flex-col lg:items-start lg:mb-10 ">
            <li
              className="font-semibold uppercase tracking-widest border-solid mb-3 cursor-pointer hover:text-black"
              onClick={getContent}
            >
              Family Gathering
            </li>
            <li
              className="font-semibold uppercase tracking-widest  mb-3 cursor-pointer hover:text-black"
              onClick={getContent}
            >
              Special Events
            </li>
            <li
              className="font-semibold uppercase tracking-widest  cursor-pointer hover:text-black"
              onClick={getContent}
            >
              Social Events
            </li>
          </ul>
          <div className="text-center mt-10 w-11/12 mb-14 md:w-6/12 md:mb-10 lg:w-5/6 lg:mt-20 xl:w-5/6">
            <h2 className="text-3xl font-bold mb-5 md:text-4xl lg:text-left">
              {eventContent.title}
            </h2>
            <p className="font-normal lg:text-left lg:mb-10 mb-10 md:text-xl ">
              {eventContent.body}
            </p>
            <div className="bg-black text-white  py-5 px-16 mb-10 lg:px-10 lg:mb-0 xl:px-10 xl:w-1/2 hover:bg-white hover:text-black border border-solid hover:border-black cursor-pointer transition-all">
              <p className="uppercase font-medium tracking-wide">
                Book a table
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ready-mobile w-full flex flex-col items-center bg-cover md:bg-ready-tablet lg:flex-row lg:items-center lg:justify-around lg:py-20 lg:bg-ready-desktop">
        <h4 className="text-white font-bold text-4xl text-center pt-20 pb-6 lg:text-3xl lg:pt-10">
          Ready to make a reservation?
        </h4>
        <div className=" py-5 px-16 border border-solid border-white mb-20 lg:mb-0  hover:bg-white hover:text-black transition-all cursor-pointer text-white">
          <p className=" uppercase font-medium tracking-wide">Book a table</p>
        </div>
      </div>
    </div>
  );
}
