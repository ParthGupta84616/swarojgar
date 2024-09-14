import React from "react";
import FAQimg from "../assets/FAQ.png";

const FAQ = ({ faqItems }) => {
  return (
    <div className="xl:flex xl:justify-between bg-gray-100">
      <div className=" flex items-center justify-center xl:absolute xl:w-1/2  xl:m-0  xl:min-h-screen">
        <img src={FAQimg} alt="FAQ" className="  xl:w-96 w-64 rounded-full" />
      </div>
      <div className="flex items-center justify-center xl:w-1/2  xl:min-h-screen">
      </div>
      <div className="xl:h-96 xl:my-auto m-0 flex items-center justify-center border border-gray-400 w-0.5"></div>
      <div className=" mx-auto p-12 xl:p-0  xl:w-1/3">
        <div className="divide-neutral-200 xl:my-28">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
