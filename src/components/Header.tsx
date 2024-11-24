import { BarchinetLogo } from "@/svgs/BarchinetLogo";
import React from "react";

export const Header = () => {
  return (
    <div className="max-w-screen-xl px-10 mx-auto items-center justify-between hidden sm:flex py-6">
      <div className="flex items-center gap-4">
        <BarchinetLogo />
        <p className="text-[#159A9C] text-[16px] font-medium">
          Building Beyond Boundaries
        </p>
      </div>
    </div>
  );
};
