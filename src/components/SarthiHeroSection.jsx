import React from "react";
import { Link } from "react-router-dom";
import Robo from "../assets/Robo.png";
import SarthiHeroSectionImg from "../assets/SarthiHeroSection.jpg";
import WhyUsFeatures from "./WhyUsFeatures";
function SarthiHeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Your Personal Career Navigator—Sarthi AI: Free, Smart, and Ready to
            Help You Find Your Perfect Job.
          </h1>
          <div className="flex items-center justify-center m-8">
            <img src={Robo} alt="sarthi" className="size-48" />
          </div>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Meet Sarthi AI, your free career assistant on our platform. Log in
            to receive job recommendations tailored to your skills and
            preferences. Sarthi AI also offers instant support for general and
            technical queries, making your job search smoother and more
            efficient. Let Sarthi AI guide you to your next opportunity!
          </p>
          <Link to="/login" className="btn mt-6">
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Start Your 14-Day Free Trial
            </button>
          </Link>
        </div>
        <Link to="/why-us">
          <button className="px-5 py-2 mt-2 text-base font-normal leading-5 text-center text-gray-500 capitalize  lg:mx-0 lg:w-auto focus:outline-none">
            learn more
          </button>
        </Link>

        <WhyUsFeatures
          title="Sarthi AI: Your Smart, Free Job-Matching Assistant."
          description="Sarthi AI effortlessly connects you with ideal job opportunities and provides instant support for your queries, all at no cost."
          advantages={[
            "Personalized",
            "Instant",
            "Free",
            "Efficient",
            "Tailored",
            "Supportive",
          ]}
          imgSRC={SarthiHeroSectionImg}
        />

        {/* <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src={SarthiHeroSectionImg}
            alt="App Screenshot"
          />
        </div> */}
      </div>
    </section>
  );
}

export default SarthiHeroSection;
