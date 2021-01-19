import React from "react";

export default function BookingLanding() {
  return (
    <div className="bg-hero-mobile-booking bg-cover bg-center bg-no-repeat flex flex-col items-center z-0  overflow-visible ">
      <img
        src="/starter-code/images/logo.svg"
        alt="company logo"
        className="w-30 object-contain mb-10 pt-10 "
      />
      <div className="flex flex-col items-center text-white w-5/6 text-center pb-48">
        <h1 className="text-5xl font-extra-light mb-5">Reservations</h1>
        <p className="font-extra-light text-md">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
      </div>
    </div>
  );
}
