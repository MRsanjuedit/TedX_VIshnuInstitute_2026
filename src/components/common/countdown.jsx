import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set your event date here
      const eventDate = new Date("2026-02-28T08:59:59").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 sm:border-3 md:border-4 border-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] md:shadow-[0_0_30px_rgba(220,38,38,0.8)] bg-transparent">
        <p className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.9)] md:drop-shadow-[0_0_20px_rgba(220,38,38,0.9)]">
          {String(value).padStart(2, "0")}
        </p>
      </div>
      <p className="text-white text-[10px] sm:text-[12px] md:text-xs lg:text-sm font-semibold mt-2 md:mt-3 lg:mt-4 uppercase">
        {label}
      </p>
    </div>
  );

  return (
    <div className="w-full flex justify-center items-center bg-black py-4 md:py-6 lg:py-8 px-2 md:px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-center text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 drop-shadow-lg">
          Event Countdown
        </h2>
        <div className="mx-auto mb-4 md:mb-6 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-red-600"></div>

        {/* Announcement Text */}
        <div className="text-center text-white mb-6 md:mb-8 px-2 md:px-4">
          <p className="text-sm sm:text-sm md:text-xl lg:text-xl leading-relaxed">
            We are delighted to announce that a TEDx event will be held on
          </p>
          <p className="text-lg sm:text-lg md:text-3xl lg:text-3xl font-bold text-red-600 my-1 md:my-2 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            28th February 2026
          </p>
          <p className="text-sm sm:text-sm md:text-xl lg:text-xl leading-relaxed">
            Join us for an inspiring day of talks, innovation, creativity, and
            meaningful conversations. Be part of a community that believes in
            ideas worth spreading.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-4">
          <TimeBox label="Days" value={timeLeft.days} />
          <span className="text-red-600 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] mb-5 sm:mb-6 md:mb-8 lg:mb-10">
            :
          </span>
          <TimeBox label="Hours" value={timeLeft.hours} />
          <span className="text-red-600 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] mb-5 sm:mb-6 md:mb-8 lg:mb-10">
            :
          </span>
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <span className="text-red-600 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] mb-5 sm:mb-6 md:mb-8 lg:mb-10">
            :
          </span>
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
