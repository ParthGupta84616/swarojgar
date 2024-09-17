import React from "react";

function EventNewsletter({ title, description, placeholder, buttonText }) {
  return (
    <div>
      <section className="bg-white :bg-gray-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 :text-white lg:text-4xl">
              {title}
            </h1>

            <p className="mt-6 text-gray-500 :text-gray-300">
              {description}
            </p>

            <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md :border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 :focus-within:border-blue-300 focus-within:ring-opacity-40">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder={placeholder}
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none :text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventNewsletter;
