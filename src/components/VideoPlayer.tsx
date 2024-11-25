"use client";
import React, { useRef, useState, useEffect } from "react";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Update currentTime as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      video.addEventListener("timeupdate", updateTime);
      return () => video.removeEventListener("timeupdate", updateTime);
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }

    // Ensure the video is scrolled into view after fullscreen is toggled
    setTimeout(() => {
      videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = Number(e.target.value);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="relative w-full h-auto group">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg"
        src={videoSrc}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
      ></video>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div
          onClick={togglePlayPause}
          className="absolute inset-0 flex row-start-1 justify-center items-center bg-black bg-opacity-40 rounded-lg cursor-pointer group-hover:bg-opacity-50 transition"
        >
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-teal-500 ml-[2px]"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute -bottom-12 sm:bottom-4 left-4 right-4 grid sm:grid-cols-[auto,1fr,auto] items-center bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg gap-2 md:gap-4">
        <button
          onClick={togglePlayPause}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full text-white hover:bg-teal-600 transition"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5 ml-[2px]"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2">
          <div className="text-xs md:text-sm text-gray-700 ml-2 sm:flex-shrink-0">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <input
            type="range"
            className="flex-1 mx-2 md:mx-4 appearance-none rounded-lg bg-gray-300 h-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleRangeChange}
            style={{
              background: `linear-gradient(to right, #14b8a6 ${
                (currentTime / duration) * 100 || 0
              }%, #d1d5db 0%)`,
            }}
          />
        </div>

        <button
          onClick={handleFullscreen}
          className="flex items-center justify-center row-start-1 col-start-3 ml-auto w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full text-gray-600 hover:text-teal-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path d="M4 10V4h6v2H6v4H4zm10 0V6h4v4h2V4h-6v6h2zm6 4v6h-6v-2h4v-4h2zM10 20H4v-6h2v4h4v2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
