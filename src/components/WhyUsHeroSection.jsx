import React from "react";
import { Link } from "react-router-dom";
import WhyUs from "../assets/WhyUs.jpg"

function WhyUsHeroSection() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div
        className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        bis_skin_checked="1"
      >
        <div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          bis_skin_checked="1"
        >
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Why <span className="dark:text-violet-600">Us?</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Swarojgar bridges the gap between clients and freelancers by
            emphasizing talent over titles, offering secure transactions,
            multilingual support, and active community engagement.
          </p>
          <div
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            bis_skin_checked="1"
          >
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Get Started
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/why-us"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          bis_skin_checked="1"
        >
          <img
            src={WhyUs}
            alt="whyus"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUsHeroSection;
