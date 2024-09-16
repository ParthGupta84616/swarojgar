import React from "react";
import "../styles/JobsTestimonialCSS.css";

function JobsTestimonial({ testimonialsData }) {
  return (
    <div className="bg-gray-50 py-10">
      <div className="flex item-center justify-center pb-10">
      <div className="flex-col items-center justify-center">
        {" "}
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          {testimonialsData.title}
        </h1>
        <div className="h-1 w-20  bg-indigo-500 rounded"></div>
      </div>
      </div>
      <div id="testimonials">
        <ul>
          {testimonialsData.stories.map((testimonial, index) => (
            <li
              key={index}
              className={`  border-opacity-20 border-black ${
                index === 3 ? "border-0" : "border-r-2"
              }`}
            >
              <p className="text-lg p-4 flex items-center justify-center min-h-28 font-semibold">
                {testimonial.project_title}
              </p>
              <p className="testimonial-body">{testimonial.testimonial}</p>
              <div className="testimonial-profile">
                <div className="img-cover"></div>
                <div className="px-4">{testimonial.success_date}</div>
                <div className="flex items-center">
                  <img
                    src={testimonial.image_url}
                    className=" m-4"
                    alt={testimonial.freelancer_name}
                  />
                  <span>{testimonial.freelancer_name}</span>
                </div>

                <br />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobsTestimonial;
