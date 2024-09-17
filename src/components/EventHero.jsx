import React from "react";
import Herobanner from "../assets/Herobanner.jpg";

function EventHero() {
  return (
    <header class="">
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800  lg:text-4xl">
              Join Our Freelance Community Events and{" "}
              <span class="text-blue-600 ">
                Connect with Like-Minded Professionals
              </span>
            </h2>

            <p class="mt-4 text-sm text-gray-500  lg:text-base">
              "Connect, learn, and grow with our exclusive freelancer events
              designed to boost your career, expand your network, and provide
              valuable insights into the freelancing world.
            </p>

            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="#"
                class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Get Started
              </a>
              <a
                href="#"
                class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="w-full p-4 h-64 lg:w-1/2 lg:h-auto bg-white">
          <div class="w-full h-full ">
            <div class="w-full h-full  opacity-95 ">
              <img
                src={Herobanner}
                alt="Herobanner"
                className="rounded-bl-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    // <>Hello</>
  );
}

export default EventHero;
