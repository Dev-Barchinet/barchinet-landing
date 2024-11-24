"use client";
import React, { useState, useEffect, useMemo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = useMemo(() => new Date("2024-12-30T14:30:00"), []); // Add 35 days to the hardcoded date
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = getTimeRemaining(targetDate);
      setTimeLeft(updatedTimeLeft);

      // Clear interval if countdown is over
      if (
        updatedTimeLeft.days <= 0 &&
        updatedTimeLeft.hours <= 0 &&
        updatedTimeLeft.minutes <= 0 &&
        updatedTimeLeft.seconds <= 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={unit} className="flex items-start gap-2">
          <div className="flex flex-col items-center">
            <div className=" text-lg sm:text-3xl font-bold text-gray-900 bg-gray-100 rounded-lg w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
              {String(value).padStart(2, "0")}
            </div>
            <span className="text-teal-500 font-medium text-[10px] md:text-[14px]">{unit}</span>
          </div>
          {index < 3 && (
            <div className="border-l border-teal-500 h-[50px] sm:h-[80px] ml-2 "></div>
          )}
        </div>
      ))}
    </div>
  );
};

const getTimeRemaining = (targetDate: Date): TimeLeft => {
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime(); // Use .getTime() for both

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default Countdown;
