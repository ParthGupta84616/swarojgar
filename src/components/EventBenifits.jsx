import React from "react";
import { Link } from "react-router-dom";

const data = {
  title: "Why Attend Our Events?",
  benefits: [
    {
      title: "Networking Opportunities",
      description: "Meet fellow freelancers, clients, and industry leaders.",
    },
    {
      title: "Skill Development",
      description:
        "Gain new insights, tips, and strategies to grow your freelance business.",
    },
    {
      title: "Exclusive Access",
      description:
        "Participate in members-only discussions, panels, and workshops.",
    },
    {
      title: "Collaboration Potential",
      description: "Discover team-based opportunities for larger projects.",
    },
  ],
};

function EventBenifits() {
  return (
    <div>
      <section class="bg-white :bg-gray-900">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold tracking-wide text-gray-800 :text-white lg:text-4xl">
                {data.title}
              </h1>

              <div class="mt-8 space-y-5">
                {data.benefits.map((benefit) => (
                  <p class="flex items-center -mx-2 text-gray-700 :text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="mx-2">{benefit.title}</span>
                  </p>
                ))}
              </div>
            </div>

            <div class="w-full mt-8 bg-transparent  rounded-md lg:max-w-sm :border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 :focus-within:border-blue-400 focus-within:ring-opacity-40">
              <Link to={"/login"}>
                <button
                  type="button"
                  class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Signup Now
                </button>
              </Link>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventBenifits;
