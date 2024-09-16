import React, { useState, useEffect } from "react";

const UnderConstruction = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2024-12-31T00:00:00"); // Set your desired launch date here
    const currentTime = new Date();
    const difference = launchDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="construction-page bg-gray-900 min-h-[80vh] flex items-center justify-center text-center">
      <div className="max-w-sm xl:max-w-xl  mx-auto p-16 bg-gray-50 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900">We're Coming Soon!</h1>
        <p className="text-gray-600 mt-4">
          Our website is under construction. Stay tuned for something amazing!
        </p>

        {/* Countdown Timer */}
        <div className="countdown mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <span className="block text-4xl font-bold text-blue-600">
              {timeLeft.days || "0"}
            </span>
            <span className="block text-gray-600">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold text-blue-600">
              {timeLeft.hours || "0"}
            </span>
            <span className="block text-gray-600">Hours</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold text-blue-600">
              {timeLeft.minutes || "0"}
            </span>
            <span className="block text-gray-600">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold text-blue-600">
              {timeLeft.seconds || "0"}
            </span>
            <span className="block text-gray-600">Seconds</span>
          </div>
        </div>

        {/* Subscribe Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Stay Updated
          </h2>
          <form className="mt-4 flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-500">
          <p>&copy; 2024 Swarojgar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
