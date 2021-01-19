import React from "react";

export default function BookingForm() {
  return (
    <form
      action=""
      className="bg-white flex flex-col items-center w-5/6  pb-10 shadow-2xl mx-auto -mt-32 z-50 overflow-visible mb-20"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-5/6 p-3 border-b border-solid border-gray-400 text-lg mb-5 mt-5 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-5/6 p-3 border-b border-solid border-gray-400 text-lg mb-5 focus:outline-none"
      />
      <label htmlFor="date" className="w-5/6 text-lg">
        Pick a date
      </label>
      <input
        type="date"
        placeholder=""
        className="w-5/6 p-3 border-b border-solid border-gray-400 text-lg mb-5 focus:outline-none uppercase"
        name="date"
      />
      <label htmlFor="time" className="w-5/6 text-lg">
        Pick a time
      </label>
      <input
        type="time"
        name="time"
        className="w-5/6 p-3 border-b border-solid border-gray-400 text-lg mb-8 focus:outline-none"
      />
      <div className="w-5/6 text-white bg-black py-5 px-8 text-center uppercase tracking-widest font-medium">
        Make Reservation
      </div>
    </form>
  );
}
