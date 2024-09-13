import React from 'react';

const FeaturesSection = ({ title, description, features }) => {
  return (
    <div className=" dark:text-gray-800 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg dark:text-gray-600">{description}</p>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium">{feature.title}</dt>
              <dd className="mt-2 dark:text-gray-600">{feature.description}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FeaturesSection;
