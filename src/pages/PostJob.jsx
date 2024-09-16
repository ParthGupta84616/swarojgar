import React from "react";

function PostJob() {
  const bodyStyle = {
    minHeight: "100vh",
    margin: 0,
    backgroundImage: `repeating-linear-gradient(
          135deg,
          #2B3284 0px, #2B3284 100px,
          #4177BC 100px, #4177BC 105px,
          #2B3284 105px, #2B3284 130px,
          #4177BC 130px, #4177BC 260px,
          #FFFFFF 260px, #FFFFFF 265px,
          #4177BC 265px, #4177BC 270px,
          #FFFFFF 270px, #FFFFFF 330px
        )`,
  };
  return (
    <div className="" style={bodyStyle}>
      <div className="flex flex-col items-center justify-center w-full h-auto ">
        <div class="mt-10 mb-10 text-center flexx items-center max-w-3xl justify-center">
          <h2 class="text-5xl text-blue-200 font-extrabold  mb-2">
            Post a Project and Connect with Top Freelancers
          </h2>
          <div className="flex items-center justify-center ">
            <p class=" text-blue-100 text-xl max-w-xl my-4">
              Post your project, set your budget, and connect with skilled
              freelancers. Get work done quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <form class="w-full max-w-2xl px-20 pt-10 bg-gray-100 bg-opacity-95 m-4 rounded-xl border-black border-2 border-opacity-20">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Project Title
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Swarojgar"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full  px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                project description
              </label>
              <textarea
                class="appearance-none min-h-48 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Swarojgar is a freelancing platform designed to empower individuals and businesses by connecting them with top freelance talent. With a focus on transparency and secure transactions through an escrow system, Swarojgar ensures that both clients and freelancers can collaborate with confidence. The platform offers a variety of features, including project catalogs, team-based freelancing, multilingual support, and a 50% service charge exemption for women freelancers. By fostering an inclusive and diverse environment, Swarojgar enables freelancers to scale their careers while giving clients access to skilled professionals across industries. Whether you're a startup seeking creative solutions or a freelancer looking for your next big project, Swarojgar is your gateway to growth and success."
              />
              <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Required Skills
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="HTML, CSS, JavaScript , React , Next.js"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Project Budget
              </div>
              <div className="">Project Budget</div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Type
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Hourly</option>
                  <option>Fixed</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Budget Amount (in INR)
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                placeholder="1000"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Preferred Freelancers
              </div>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="Parth Gupta"
              />
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Project Deadline
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="date"
              />
            </div>
          </div>
          <div className="flex items-center justify-center pt-8">
            <div class="flex flex-col items-center justify-center w-full h-auto  bg-white  sm:rounded-lg sm:shadow-xl">
              <div class="mt-10 mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-2">File Attachments</h2>
                <p class="text-xs text-gray-500">
                  File should be of format .mp4, .avi, .mov or .mkv
                </p>
              </div>
              <form
                action="#"
                class="relative w-4/5 h-32 max-w-xs mb-10  bg-gray-100 rounded-lg shadow-inner"
              >
                <input type="file" id="file-upload" class="hidden" />
                <label
                  for="file-upload"
                  class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                >
                  <p class="z-10 text-xs font-light text-center text-gray-500">
                    Drag & Drop your files here
                  </p>
                  <svg
                    class="z-10 w-8 h-8 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                  </svg>
                </label>
              </form>
            </div>
          </div>
          <div className="button flex justify-center items-center my-10">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
