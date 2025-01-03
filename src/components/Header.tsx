import { BarchinetLogo } from "@/svgs/BarchinetLogo";
import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="max-w-screen-xl px-10 mx-auto items-center justify-between hidden sm:flex py-6">
        <div className="flex items-center gap-4 flex-1">
          <BarchinetLogo />
          <p className="text-[#159A9C] text-[16px] font-medium">
            Building Beyond Boundaries
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <a
            href="https://architect.barchinet.com"
            target="_blank"
            style={{
              display: "flex",
              height: "44px",
              padding: "8px 32px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              color: "white",
              backgroundColor: "#67a7ab",
            }}
          >
            Architects platform
          </a>
          <a
            style={{
              display: "flex",
              height: "44px",
              padding: "8px 32px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              color: "black",
              backgroundColor: "white",
              border: "1px solid #e4e4e7",
            }}
            href="https://employer.barchinet.com"
            target="_blank"
          >
            Employers platform
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap justify-between p-3 px-10 sm:hidden">
        <BarchinetLogo />
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <a
            href="https://architect.barchinet.com"
            target="_blank"
            style={{
              display: "flex",
              padding: "8px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              color: "white",
              fontSize: '.8rem',
              backgroundColor: "#67a7ab",
            }}
          >
            Architects platform
          </a>
          <a
            style={{
              display: "flex",
              padding: "8px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              color: "black",
              fontSize: '.8rem',

              backgroundColor: "white",
              border: "1px solid #e4e4e7",
            }}
            href="https://employer.barchinet.com"
            target="_blank"
          >
            Employers platform
          </a>
        </div>
      </div>
    </div>
  );
};
