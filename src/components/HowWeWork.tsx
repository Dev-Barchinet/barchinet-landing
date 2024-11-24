import Image from "next/image";
import React from "react";

const howWeWorkData = [
  {
    title: "Finding the Perfect Match",
    body: "Employers browse and compare architect portfolios based on style, budget, and expertise to find the ideal professional for their project.",
  },
  {
    title: "Seamless Project Management",
    body: "Once an architect is selected, the entire process is managed online, from project brief submission to delivery. Our platform ensures transparency and communication throughout.",
  },
  {
    title: "Digital Contracts and Supervision",
    body: "To begin the project, you'll share everything with us through a video conference call.",
  },
  {
    title: "Quality and Trust",
    body: "We incorporates your ideas into the space design and make adjustments depending on your comments to make sure it will satisfy your needs.",
  },
  {
    title: "Global Collaboration",
    body: "To begin the project, you'll share everything with us through a video conference call.",
  },
];

export const HowWeWork = () => {
  return (
    <div className="relative w-full ">
      {/* Background Image with Opacity + Backdrop Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/bg-wework.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2, // Lightens the image
          backdropFilter: "blur(10px)", // Applies a blur effect
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col gap-10 sm:flex-row items-center sm:justify-between w-full h-full p-10 max-w-screen-xl mx-auto">
        <div className="flex-1 w-full">
          <div className="h-[340px] sm:h-[670px] w-full relative">
            <Image
              fill
              alt="How We Work here In Barchinet For Architects"
              src="/assets/images/wework.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-[#323232] leading-[110%] text-[24px] sm:text-[56px] font-bold relative">
            How we work
            <div className="absolute bottom-1 w-[30%] text-[#4D4D4D] left-0 right-0 h-[10px] bg-[#159a9c1f]"></div>
          </h1>
          <p className="text-[20px] text-[#4D4D4D] max-w-[635px]">
            At Barchinet, we simplify the process of connecting employers with
            talented architects and managing design projects online. Here’s how
            we do it:
          </p>
          <div className="flex flex-col gap-2">
            {howWeWorkData.map((howWeWork) => (
              <div className="how-we-work-box" key={howWeWork.title}>
                <h3 className="how-we-work-box-title">{howWeWork.title}</h3>
                <p className="how-we-work-box-body">{howWeWork.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
