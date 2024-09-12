import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleGetLecitte = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex py-24 items-center font-sans">
      <div className="flex flex-col w-1/2 gap-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>Product of the day</span>
          <span className="font-semibold">3rd</span>
        </div>
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Translate your videos in minutes.
        </h1>
        <h2 className="text-xl text-gray-600 leading-relaxed">
          Get instant transcriptions and translations for your videos, making
          them accessible to a global audience effortlessly.
        </h2>
        <button
          className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg w-fit flex items-center gap-2"
          onClick={handleGetLecitte}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          Get Lecitte
        </button>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt={`User avatar ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            512 Creators Empowered with Lecitte
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/path-to-your-hero-image.svg"
          alt="Video translation illustration"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
