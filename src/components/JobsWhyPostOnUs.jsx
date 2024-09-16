import React from "react";

function JobsWhyPostOnUs({whyJoinUs}) {
  return (
    <div>
      <section class="text-gray-600 bg-gray-50 body-font">
        <div class="container px-5 py-2 mx-auto" bis_skin_checked="1">
          <div
            class="xl:w-2//3 lg:w-3/4 w-full mx-auto text-center"
            bis_skin_checked="1"
          >
            <div className="text-3xl font-bold py-10">{whyJoinUs.title}</div>
            {whyJoinUs.benefits.map((point) => (
              <p class="leading-relaxed text-lg p-2">
               {point}
          </p>
            ))}
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobsWhyPostOnUs;
