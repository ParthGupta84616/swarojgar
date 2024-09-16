import { prettyDOM } from "@testing-library/react";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

function FeatureJobComponent({ data, data1 ,data3 }) {
  return (
    <div className="bg-gray-100">
      <div className="relative mx-auto w-full items-center justify-center flex py-10 pt-20 font-medium p-20 text-5xl">
        {data.heading}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 p-12 w-full">
        {data.projects.map((project) => (
          <div class="relative mx-auto w-full">
            <a
              href="#"
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              
              <div class="shadow p-4 rounded-lg bg-white">
                <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                    <img src={project.img} alt="project" class="object-cover object-center w-full h-full" />
                    <div class="absolute inset-0 bg-black opacity-10">
                      
                    </div>
                  </div>

                  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                    Featured
                  </span>
                </div>

                <div class="mt-4">
                  <h2
                    class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                    title="New York"
                  >
                    {project.title}
                  </h2>
                  <p
                    class="mt-2 text-sm text-gray-800 line-clamp-1"
                    title={project.description}
                  >
                    {project.description}
                  </p>
                </div>
                <div class="grid grid-cols-2 mt-8 gap-4">
                  <div class="flex items-center">
                    <div class="relative">
                      <div class="rounded-full  w-6 h-6 md:w-8 md:h-8 "></div>
                    </div>

                    <p class="ml-2 text-gray-800 line-clamp-1">
                      {project.freelancer.name}
                    </p>
                  </div>

                  <div class="flex justify-end">
                    <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                      {/* <span class="text-sm uppercase">Rs</span> */}
                      <span class="text-lg">{project.price}</span>
                    </p>
                  </div>
                </div>

                <div class="flex justify-between gap-4 mt-8">
                  <p class="inline-flex flex-col gap-2 xl:flex-row xl:items-center text-gray-800">
                    <GoProjectRoadmap size={20} />
                    <span class="mt-2 xl:mt-0">
                      {project.freelancer.completed_projects}
                    </span>
                  </p>
                  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 gap-2">
                    <FaRegStar size={20} />
                    <span class="mt-2 xl:mt-0">
                      {project.freelancer.rating}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="">
        <div className="relative mx-auto w-full items-center justify-center flex my-10 mt-20 font-medium text-5xl">
          {data1.heading}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 p-12 w-full">
          {data1.freelancers.map((project) => (
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <img
                class="w-full h-56 object-cover object-center"
                src={project.img}
                alt="avatar"
              />
              <div class="flex items-center  justify-center px-6 py-3 bg-gray-900">
                <h1 class="mx-3 text-white font-semibold text-lg">
                  {project.expertise}
                </h1>
              </div>
              <div class="py-4 px-6">
                <h1 class="text-2xl font-semibold text-gray-800">
                  {project.name}
                </h1>
                <p class="py-2 text-lg text-gray-700">
                  Full Stack maker & UI / UX Designer , love hip hop music
                  Author of Building UI.
                </p>
                <div className="flex justify-between">
                  <div class="flex items-center mt-4 text-gray-700">
                    <FaRegStar size={20} />
                    <h1 class="px-2 text-sm">{project.rating}</h1>
                  </div>
                  <div class="flex items-center mt-4 text-gray-700">
                    <GoProjectRoadmap size={20} />
                    <h1 class="px-2 text-sm">{project.completed_projects}</h1>
                  </div>
                  <div class="flex items-center mt-4 text-gray-700">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                      <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                    </svg>
                    <h1 className="px-2 text-sm">{`${project.name
                      .replace(/\s+/g, "")
                      .toLowerCase()}${
                      project.completed_projects
                    }@gmail.com`}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div
          className="container mx-auto flex flex-col p-6"
          bis_skin_checked="1"
        >
          <h2 className="py-4 text-3xl font-bold text-center">
            {data3.heading}
          </h2>
          <div className="divide-y dark:divide-gray-300" bis_skin_checked="1">
            <div
              className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
              bis_skin_checked="1"
            >
              <div
                className="flex items-center justify-center lg:col-span-1 col-span-full"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                  <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                  <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                </svg>
              </div>
              <StepCard data = {data3.steps[0]} />
            </div>
            <div
              className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
              bis_skin_checked="1"
            >
              <div
                className="flex items-center justify-center lg:col-span-1 col-span-full"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
                  <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
                </svg>
              </div>
              <StepCard data = {data3.steps[1]} />
            </div>
            <div
              className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
              bis_skin_checked="1"
            >
              <div
                className="flex items-center justify-center lg:col-span-1 col-span-full"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                  <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
                </svg>
              </div>
              <StepCard data = {data3.steps[2]} />
            </div>
            <div
              className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
              bis_skin_checked="1"
            >
              <div
                className="flex items-center justify-center lg:col-span-1 col-span-full"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                  <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                  <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
                </svg>
              </div>
              <StepCard data = {data3.steps[3]} />
            </div>
            <div
              className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
              bis_skin_checked="1"
            >
              <div
                className="flex items-center justify-center lg:col-span-1 col-span-full"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                  <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                  <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                </svg>
              </div>
              <StepCard data = {data3.steps[4]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const StepCard = ({ data }) => {
  return (
    <div
      className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left"
      bis_skin_checked="1"
    >
      <span className="text-xs tracking-wider uppercase dark:text-violet-600">
        Step {data.step} - {data.title}
      </span>
      <span className="text-xl font-bold md:text-2xl">{data.title}</span>
      <span className="mt-4 dark:text-gray-700">
        {data.description}
      </span>
    </div>
  );
};

export default FeatureJobComponent;
