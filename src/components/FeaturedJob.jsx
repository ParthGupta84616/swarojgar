import React from "react";
import { Link } from "react-router-dom";

function FeaturedJob() {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Featured Job's
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Discover Premier
              <br className="hidden md:block" />
              Opportunities—Uncover High-Impact Roles with{" "}
              <span className="inline-block text-deep-purple-accent-400">
                 Our Featured Jobs.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              "Discover Premier Positions with Our Featured Jobs—Handpicked for
              Their Excitement and Growth Potential, These Opportunities Connect
              You with Leading Employers Looking for Top Talent. Explore Now and
              Take the Next Step in Your Professional Journey!"
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/jobs"
              className="inline-flex bg-gray-600 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Apply Now
            </Link>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
}

export default FeaturedJob;
