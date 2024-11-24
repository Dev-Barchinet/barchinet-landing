import { BarchinetLogo } from "@/svgs/BarchinetLogo";
import { InstagramIcon } from "@/svgs/InstagramIcon";
import { LinkedinIcon } from "@/svgs/LinkedinIcon";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="px-10 max-w-screen-xl mx-auto">
      <div className="w-full h-[1px] bg-[#000]/20"></div>
      <div className=" items-center justify-between flex py-6">
        <div className="flex items-center gap-4">
          <BarchinetLogo />
          <p className="text-[#159A9C] text-[16px] font-medium">
            Building Beyond Boundaries
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={''}>
            <InstagramIcon />
          </Link>
          <Link href={''}>
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
