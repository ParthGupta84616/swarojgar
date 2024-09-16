import React from "react";
import { CategoryHero } from "./CategoryHero";
import FeaturedJob from "./FeaturedJob";
import { categories } from "../db/db";
// import Writing from "../assets/Home/writting.jpg";
function CategoriesComponents() {
  // console.log(Writing);
  return (
    <div>
      {/* <div className="flex items-center justify-center text-7xl text-gray-800 font-thin m-10 underline">
        Job Categories
      </div> */}
      <CategoryHero />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 ">
        {categories.slice(0, 8).map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center items-center max-w-sm m-4"
          >
            <div
              style={{
                backgroundImage: `url("${category.img}")`,
              }}
              className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>
            <div className="w-56 md:w-64 -mt-10 shadow-lg rounded-lg bg-gray-900 overflow-hidden">
              <div className="py-2  text-center font-bold uppercase tracking-wide text-gray-200">
                {category.name}
              </div>
              <div className="flex items-center justify-center w-full py-2 px-3 bg-gray-300">
                {/* <h1 className="text-gray-800 font-bold gap-2 flex items-center justify-center">
                  <IoIosPeople size={22} />
                  {category.jobs}
                </h1> */}
                <button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-blue-700 opacity-75">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-center text-7xl text-gray-800 font-thin m-10 underline">
        Featured Job's
      </div> */}
      <div className="flex items-center justify-center w-11/12 mx-auto my-10 border-gray-900 border opacity-75  rounded-full">
        {/* <div className="h-0.5 w-11/12 bg-gray-800"></div> */}
      </div>
      <FeaturedJob />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {categories.slice(0, 4).map((category) => (
          //   category.subJobs.slice(0, 1).map((subJob) => (
          <div
            key={category.subJobs.id}
            className="flex flex-col justify-center items-center max-w-sm m-4"
          >
            <div
              style={{
                backgroundImage: `url(${category.subJobs[0].img})`,
              }}
              className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>
            <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
              <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                {category.subJobs[0].name}
              </div>
              <div className="flex items-center justify-between w-full py-2 px-3 bg-gray-400">
                <h1 class="text-gray-800 font-bold ">
                  {category.subJobs[0].cost}
                </h1>
                <button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                  Apply Now
                </button>
              </div>
              <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                {category.subJobs[0].company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesComponents;
