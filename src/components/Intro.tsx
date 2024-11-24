import React from "react";

export const Intro = () => {
  return (
    <div className="bg-[#F8F8F8] max-w-screen-xl px-10 mx-auto mt-10 rounded-lg p-4 flex flex-col items-start gap-4 sm:gap-10 sm:flex-row sm:items-center sm:justify-between sm:px-16">
      <h1 className="text-[24px] text-[#242424] font-normal sm:text-[65px] min-w-fit">
        Who We Are
      </h1>
      <p className="text-[#242424] text-[16px] sm:text-[18px] font-light text-pretty">
        Barchinet is a platform designed to transform the way architectural
        projects are managed. We connect employers with architects from around
        the world, offering a seamless space for collaboration, creativity, and
        innovation. With a focus on quality, transparency, and convenience, we
        empower clients to bring their vision to life while enabling architects
        to showcase their talent on a global stage. At Barchinet, we believe in
        bridging the gap between exceptional design needs and outstanding
        architectural expertise.
      </p>
    </div>
  );
};
