import React from "react";
import bgVideo from "../assets/videos/home_bg.mp4";
import bgVideoMobile from "../assets/videos/home_bg_mobile.mp4";
import Loader from "../components/loaders/loading _spinner";
import Countdown from "../components/common/countdown";
import Schedule from "../components/common/schedule";
import EventLogo from "./../assets/images/tedx/tedx_event_image.jpeg";
import { useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const showSchedule = false; // Set to true to show schedule, false for coming soon

  const handleVideoCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full">
      {isLoading && <Loader />}

      <div className="hidden lg:block relative w-full h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleVideoCanPlay}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div
          className="absolute inset-0 flex justify-between font-bold px-36 text-8xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]
      [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] items-center"
        >
          <div className="mb-12 text-[#7A1E28]">Shifting</div>
          <div className="mb-12 text-[#F44336]">Realms</div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-12">
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg">
              Ideas Worth Spreading
            </p>
            <div className="h-1 w-32 md:w-48 bg-red-600 mx-auto mt-3 rounded-full" />
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full bg-black h-screen md:mt-20 flex flex-col justify-center items-center">
        <div className="relative w-full h-96 md:h-182  overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={handleVideoCanPlay}
          >
            <source src={bgVideoMobile} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className="py-8 px-4 flex flex-col items-center justify-center bg-black">
          <h1 className="text-4xl font-bold text-center text-white mb-2 md:text-7xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)]">
            <span className="">Shifting </span>
            <span className="">Realms</span>
          </h1>
          <div className="h-1 w-48 bg-red-600 mx-auto rounded-full my-2" />
          <p className="text-white md:text-2xl text-lg font-semibold text-center drop-shadow-lg">
            Ideas Worth Spreading
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-[-1px] mb-[-1px] overflow-x-hidden xl:flex-row w-full  lg:h-auto px-4 md:px-8 lg:px-20 py-8 lg:py-10 lg:pt-25 bg-black justify-center lg:justify-between items-center gap-8 lg:gap-4">
        <img
          src={EventLogo}
          alt="Event Logo"
          className="w-80 h-60 mt-[-70px] md:w-120 md:h-90 md:mt-[-50px] lg:mt-0 lg:w-135 lg:h-110 xl:w-150 xl:h-125 object-contain"
        />
        <Countdown />
      </div>

      {showSchedule ? (
        <Schedule />
      ) : (
        <div className="w-full bg-black py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black opacity-50" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium mb-1 md:mb-2">
              Schedule
            </h2>
            <div className="mx-auto mb-4 md:mb-6 w-16 sm:w-16 md:w-24 lg:w-32 h-1 bg-red-600"></div>

            <div className="flex flex-col items-center space-y-6 px-4">
              <div className="text-red-600 text-7xl md:text-8xl mb-2 animate-pulse">
                ⏰
              </div>

              <h3 className="text-red-600 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider">
                Coming Soon
              </h3>

              <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl">
                Stay tuned for the exciting lineup of events and speakers
              </p>
            </div>

            <div className="mt-12 flex gap-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse delay-200" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
