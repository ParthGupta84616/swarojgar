import React from "react";

function HeroBanner() {
  return (
    <div className="w-full xl:py-14">
      <div className="max-w-5xl mx-auto py-16 px-4 text-center  ">
        <div className="w-full max-w-3xl mx-auto ">
          <h1 className="text-4xl font-bold my-10 mb-6">
            Find Ready-Made Projects Tailored to Your Business.
          </h1>
          <div className="flex items-center justify-center w-full">
            <p className="px-4 leading-relaxed my-4 max-w-2xl ">
              Browse our diverse project catalog to find solutions that meet
              your needs. From social media to software development, get
              inspired by the work of top freelancers.
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="mb-8 mt-4 px-4 leading-relaxed my-10 max-w-lg">
              Oh, and did we mention?{" "}
              <span className="text-pink-600 font-bold my-10">
                Get access to exclusive resources and expert guidance!
              </span>
            </p>
          </div>

          <div>
            <div className="inline-block py-4 px-8 my-6 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold">
              Explore Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
