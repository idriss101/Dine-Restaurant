import React from "react";

export default function Events() {
  return (
    <div className="w-full flex flex-col items-center">
      <img
        src="/starter-code/images/homepage/family-gathering-mobile.jpg"
        alt="family gathering"
        className="shadow-2xl mt-16 mb-10 "
      />
      <ul className="text-center">
        <li className="font-semibold uppercase tracking-widest border-solid border-beaver border-b mb-3 w-full">
          Family Gathering
        </li>
        <li className="font-medium uppercase tracking-widest text-gray-400 mb-3">
          Special Events
        </li>
        <li className="font-medium uppercase tracking-widest text-gray-400">
          Social Events
        </li>
      </ul>
      <div className="text-center mt-10 w-11/12 mb-14">
        <h2 className="text-3xl font-bold mb-5">Family Gathering</h2>
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
      <div className="bg-ready-mobile w-full flex flex-col items-center bg-cover">
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
