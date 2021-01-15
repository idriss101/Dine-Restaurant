import React from "react";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col items-center  text-white pb-20 md:flex-row md:mx-auto md:items-start md:pt-16 md:pl-14">
      <div className="">
        <img
          src="/starter-code/images/logo.svg"
          alt="company logo"
          className="w-30 object-contain mb-10 pt-16 md:pt-0 md:pr-32"
        />
      </div>
      <div className="">
        <p className="font-extra-light uppercase text-sm tracking-widest w-4/6 text-center mb-2 md:text-left md:w-5/6">
          Marthwaite, Sedbergh Cumbria
        </p>
        <p className="font-extra-light uppercase text-sm tracking-widest mb-10">
          +00 44 123 4567
        </p>
        <p className="font-extra-light uppercase text-sm tracking-widest mb-2">
          Open Times
        </p>
        <p className="font-extra-light uppercase text-sm tracking-widest mb-1">
          Mon - Fri: 09:00 AM - 10:00 PM
        </p>
        <p className="font-extra-light uppercase text-sm tracking-widest">
          Sat - Sun: 09:00 AM - 11:30 PM
        </p>
      </div>
    </div>
  );
}
