import React from 'react';
import PropTypes from 'prop-types';

function WhyUsFeatures({ title, description, advantages, imgSRC, alt }) {
  return (
    <header className={`bg-white ${alt ? 'dark:bg-gray-100' : 'dark:bg-gray-900'}`}>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className={`text-3xl font-semibold tracking-wide ${alt ? 'text-gray-900 dark:text-gray-800' : 'text-gray-800 dark:text-white'}  lg:text-4xl`}>{title}</h1>
           
            <p className={`mt-4 ${alt ? 'text-gray-900 dark:text-gray-800' : 'text-gray-800 dark:text-white'}`}>{description}</p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div key={index} className={`flex items-center ${alt ? 'text-gray-900 dark:text-gray-800' : 'text-gray-800 dark:text-white'}`}>
                  <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="mx-3">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src={imgSRC} alt={alt ? '' : 'Glasses'} />
        </div>
      </div>
    </header>
  );
}

WhyUsFeatures.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgSRC: PropTypes.string.isRequired,
  alt: PropTypes.bool.isRequired,
};

export default WhyUsFeatures;