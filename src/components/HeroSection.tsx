import React from "react";
import Countdown from "./CountDown";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex flex-col-reverse gap-10 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 flex flex-col items-start">
        <h1 className="text-[#323232] leading-[110%] text-[56px] font-bold relative">
          Barchinet
          <div className="absolute bottom-1  sm:w-[200%] w-[130%] text-[#4D4D4D] left-0 right-0 h-[10px] bg-[#159a9c1f]"></div>
        </h1>
        <p className="text-[#4D4D4D] mt-4 text-[20px] ">
          Platform for freelancers of employer and architects
        </p>
        <p className="text-[#4D4D4D] text-[14px] mb-7">
          <span className="font-bold">128+</span>
          <span>Projects featured all over the world</span>
        </p>
        <Countdown />
      </div>
      <div className="flex-1 ">
        <div className="w-full relative h-[300px] sm:h-[700px]">
          <Image
            fill
            objectFit="contain"
            alt="Barchinet, Architect platform, Muscat"
            src="/assets/images/landing.png"
          />
        </div>
      </div>
    </div>
  );
};
