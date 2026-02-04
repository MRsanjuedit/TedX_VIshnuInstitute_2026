import React from "react";
import image1 from "../assets/images/tedx/tedx_image1.png";
import image2 from "../assets/images/tedx/tedx_image2.png";
import image3 from "../assets/images/tedx/tedx_image3.png";

function About() {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 px-6 md:px-12 lg:px-20 items-center pt-25 md:pt-30 lg:pt-40 w-full py-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={image1}
            alt="TEDx Event"
            className="w-full max-w-2xl h-auto rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] 
            border border-white/10"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-14 bg-red-600"></div>
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              What is <span className="text-red-600">TEDx</span>
            </h2>
          </div>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            TEDx is a locally organized extension of the global TED platform
            that brings “Ideas Worth Spreading” to individual communities. These
            independently curated events feature speakers, innovators and
            storytellers who share meaningful insights and impactful ideas.
            Talks are recorded to TED-quality standards, helping local voices
            reach wider audiences and spark meaningful conversations.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 px-6 md:px-12 lg:px-20 items-center w-full py-20">
        <div className="lg:hidden w-full lg:w-1/2 flex justify-center">
          <img
            src={image2}
            alt="TEDx Event"
            className="w-full max-w-2xl h-auto rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] 
            border border-white/10"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="lg:hidden w-1 h-14 bg-red-600"></div>
            <h2 className="text-white text-3xl lg:text-right w-full md:text-4xl font-semibold">
              Why <span className="text-red-600">TEDx</span>
            </h2>
            <div className="hidden lg:block w-1 h-14 bg-red-600"></div>
          </div>

          <p className="text-white/90 w-full lg:text-right text-base md:text-lg leading-relaxed">
            TEDx gives communities a platform to discover and celebrate local
            talent, innovative ideas and diverse perspectives. It encourages
            collaboration, learning and meaningful dialogue by bringing together
            speakers, creators and audiences in a shared space. TEDx helps
            inspire positive change, spread impactful stories and empower
            individuals to think bigger, connect deeper and take action within
            their community.
          </p>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 flex justify-center">
          <img
            src={image2}
            alt="TEDx Event"
            className="w-full max-w-2xl h-auto rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] 
            border border-white/10"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 px-6 md:px-12 lg:px-20 items-center lg:pb-27 w-full py-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={image3}
            alt="TEDx Event"
            className="w-full max-w-2xl h-auto rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] 
            border border-white/10"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-14 bg-red-600"></div>
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              We The <span className="text-red-600">Vishnu Instittute</span>
            </h2>
          </div>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            We, the Vishnu Institute, are driven by a passion for education,
            collaboration and progress. Our campus is home to young thinkers,
            creators and leaders who strive to make a difference in the world.
            TEDx is an extension of this vision — a platform where people can
            share experiences, spark ideas and influence positive change. With a
            commitment to learning and community engagement, we aim to bring
            together voices that inspire, connect and empower.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
