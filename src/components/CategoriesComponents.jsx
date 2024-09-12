import React from "react";
import { CategoryHero } from "./CategoryHero";
import FeaturedJob from "./FeaturedJob";
const categories = [
  {
    id: 1,
    name: "Writing & Translation",
    img: "URL_to_image_for_Writing_Translation",
    jobs: 5000,
    subJobs: [
      {
        id: 1,
        name: "Content Writing",
        img: "URL_to_image_for_Content_Writing",
        company: "Runway",
        cost: "$50/hr",
      },
      {
        id: 2,
        name: "Copywriting",
        img: "URL_to_image_for_Copywriting",
        company: "Cameo",
        cost: "$45/hr",
      },
      {
        id: 3,
        name: "Technical Writing",
        img: "URL_to_image_for_Technical_Writing",
        company: "Superhuman",
        cost: "$55/hr",
      },
      {
        id: 4,
        name: "Blogging",
        img: "URL_to_image_for_Blogging",
        company: "Runway",
        cost: "$40/hr",
      },
      {
        id: 5,
        name: "Translation",
        img: "URL_to_image_for_Translation",
        company: "Sonder",
        cost: "$60/hr",
      },
      {
        id: 6,
        name: "Editing & Proofreading",
        img: "URL_to_image_for_Editing_Proofreading",
        company: "Sonder",
        cost: "$50/hr",
      },
    ],
  },
  {
    id: 2,
    name: "Design & Creative",
    img: "URL_to_image_for_Design_Creative",
    jobs: 3500,
    subJobs: [
      {
        id: 1,
        name: "Graphic Design",
        img: "URL_to_image_for_Graphic_Design",
        company: "Cameo",
        cost: "$65/hr",
      },
      {
        id: 2,
        name: "Web Design",
        img: "URL_to_image_for_Web_Design",
        company: "Figma",
        cost: "$70/hr",
      },
      {
        id: 3,
        name: "UX/UI Design",
        img: "URL_to_image_for_UX_UI_Design",
        company: "Superhuman",
        cost: "$75/hr",
      },
      {
        id: 4,
        name: "Logo Design",
        img: "URL_to_image_for_Logo_Design",
        company: "Cameo",
        cost: "$80/hr",
      },
      {
        id: 5,
        name: "Illustration",
        img: "URL_to_image_for_Illustration",
        company: "Sonder",
        cost: "$70/hr",
      },
      {
        id: 6,
        name: "Animation",
        img: "URL_to_image_for_Animation",
        company: "Superhuman",
        cost: "$85/hr",
      },
      {
        id: 7,
        name: "Video Production",
        img: "URL_to_image_for_Video_Production",
        company: "Runway",
        cost: "$90/hr",
      },
    ],
  },
  {
    id: 3,
    name: "Programming & Tech",
    img: "URL_to_image_for_Programming_Tech",
    jobs: 4000,
    subJobs: [
      {
        id: 1,
        name: "Web Development",
        img: "URL_to_image_for_Web_Development",
        company: "Superhuman",
        cost: "$100/hr",
      },
      {
        id: 2,
        name: "Mobile App Development",
        img: "URL_to_image_for_Mobile_App_Development",
        company: "Cameo",
        cost: "$110/hr",
      },
      {
        id: 3,
        name: "Software Development",
        img: "URL_to_image_for_Software_Development",
        company: "Figma",
        cost: "$120/hr",
      },
      {
        id: 4,
        name: "Data Analysis",
        img: "URL_to_image_for_Data_Analysis",
        company: "Superhuman",
        cost: "$90/hr",
      },
      {
        id: 5,
        name: "Cybersecurity",
        img: "URL_to_image_for_Cybersecurity",
        company: "Sonder",
        cost: "$130/hr",
      },
      {
        id: 6,
        name: "IT Support",
        img: "URL_to_image_for_IT_Support",
        company: "Sonder",
        cost: "$85/hr",
      },
      {
        id: 7,
        name: "Game Development",
        img: "URL_to_image_for_Game_Development",
        company: "Figma",
        cost: "$115/hr",
      },
    ],
  },
  {
    id: 4,
    name: "Marketing & Sales",
    img: "URL_to_image_for_Marketing_Sales",
    jobs: 3000,
    subJobs: [
      {
        id: 1,
        name: "Digital Marketing",
        img: "URL_to_image_for_Digital_Marketing",
        company: "Figma",
        cost: "$80/hr",
      },
      {
        id: 2,
        name: "SEO (Search Engine Optimization)",
        img: "URL_to_image_for_SEO",
        company: "Runway",
        cost: "$85/hr",
      },
      {
        id: 3,
        name: "Social Media Management",
        img: "URL_to_image_for_Social_Media_Management",
        company: "Superhuman",
        cost: "$75/hr",
      },
      {
        id: 4,
        name: "Email Marketing",
        img: "URL_to_image_for_Email_Marketing",
        company: "Sonder",
        cost: "$70/hr",
      },
      {
        id: 5,
        name: "Sales Strategy",
        img: "URL_to_image_for_Sales_Strategy",
        company: "Cameo",
        cost: "$90/hr",
      },
      {
        id: 6,
        name: "Market Research",
        img: "URL_to_image_for_Market_Research",
        company: "Figma",
        cost: "$65/hr",
      },
    ],
  },
  {
    id: 5,
    name: "Administrative Support",
    img: "URL_to_image_for_Administrative_Support",
    jobs: 2500,
    subJobs: [
      {
        id: 1,
        name: "Virtual Assistance",
        img: "URL_to_image_for_Virtual_Assistance",
        company: "Carta",
        cost: "$50/hr",
      },
      {
        id: 2,
        name: "Data Entry",
        img: "URL_to_image_for_Data_Entry",
        company: "Sonder",
        cost: "$45/hr",
      },
      {
        id: 3,
        name: "Customer Service",
        img: "URL_to_image_for_Customer_Service",
        company: "Runway",
        cost: "$55/hr",
      },
      {
        id: 4,
        name: "Project Management",
        img: "URL_to_image_for_Project_Management",
        company: "Cameo",
        cost: "$60/hr",
      },
      {
        id: 5,
        name: "Research",
        img: "URL_to_image_for_Research",
        company: "Superhuman",
        cost: "$65/hr",
      },
    ],
  },
  {
    id: 6,
    name: "Finance & Accounting",
    img: "URL_to_image_for_Finance_Accounting",
    jobs: 2000,
    subJobs: [
      {
        id: 1,
        name: "Bookkeeping",
        img: "URL_to_image_for_Bookkeeping",
        company: "Sonder",
        cost: "$55/hr",
      },
      {
        id: 2,
        name: "Financial Analysis",
        img: "URL_to_image_for_Financial_Analysis",
        company: "Figma",
        cost: "$65/hr",
      },
      {
        id: 3,
        name: "Tax Preparation",
        img: "URL_to_image_for_Tax_Preparation",
        company: "Runway",
        cost: "$70/hr",
      },
      {
        id: 4,
        name: "Accounting",
        img: "URL_to_image_for_Accounting",
        company: "Sonder",
        cost: "$60/hr",
      },
      {
        id: 5,
        name: "Business Planning",
        img: "URL_to_image_for_Business_Planning",
        company: "Cameo",
        cost: "$75/hr",
      },
    ],
  },
  {
    id: 7,
    name: "Engineering & Architecture",
    img: "URL_to_image_for_Engineering_Architecture",
    jobs: 1500,
    subJobs: [
      {
        id: 1,
        name: "CAD Design",
        img: "URL_to_image_for_CAD_Design",
        company: "Tesla",
        cost: "$100/hr",
      },
      {
        id: 2,
        name: "Structural Engineering",
        img: "URL_to_image_for_Structural_Engineering",
        company: "Runway",
        cost: "$110/hr",
      },
      {
        id: 3,
        name: "Civil Engineering",
        img: "URL_to_image_for_Civil_Engineering",
        company: "Cameo",
        cost: "$95/hr",
      },
      {
        id: 4,
        name: "Architecture",
        img: "URL_to_image_for_Architecture",
        company: "Sonder",
        cost: "$120/hr",
      },
      {
        id: 5,
        name: "Mechanical Engineering",
        img: "URL_to_image_for_Mechanical_Engineering",
        company: "Superhuman",
        cost: "$105/hr",
      },
    ],
  },
  {
    id: 8,
    name: "Legal",
    img: "URL_to_image_for_Legal",
    jobs: 1000,
    subJobs: [
      {
        id: 1,
        name: "Legal Writing",
        img: "URL_to_image_for_Legal_Writing",
        company: "Google",
        cost: "$120/hr",
      },
      {
        id: 2,
        name: "Contract Drafting",
        img: "URL_to_image_for_Contract_Drafting",
        company: "Sonder",
        cost: "$130/hr",
      },
      {
        id: 3,
        name: "Intellectual Property",
        img: "URL_to_image_for_Intellectual_Property",
        company: "Runway",
        cost: "$140/hr",
      },
      {
        id: 4,
        name: "Compliance",
        img: "URL_to_image_for_Compliance",
        company: "Figma",
        cost: "$125/hr",
      },
      {
        id: 5,
        name: "Legal Consulting",
        img: "URL_to_image_for_Legal_Consulting",
        company: "Cameo",
        cost: "$150/hr",
      },
    ],
  },
  {
    id: 9,
    name: "Education & Training",
    img: "URL_to_image_for_Education_Training",
    jobs: 1200,
    subJobs: [
      {
        id: 1,
        name: "Tutoring",
        img: "URL_to_image_for_Tutoring",
        cost: "$35/hr",
      },
      {
        id: 2,
        name: "Course Development",
        img: "URL_to_image_for_Course_Development",
        cost: "$50/hr",
      },
      {
        id: 3,
        name: "Language Instruction",
        img: "URL_to_image_for_Language_Instruction",
        cost: "$45/hr",
      },
      {
        id: 4,
        name: "Educational Consulting",
        img: "URL_to_image_for_Educational_Consulting",
        cost: "$55/hr",
      },
      {
        id: 5,
        name: "Training Programs",
        img: "URL_to_image_for_Training_Programs",
        cost: "$60/hr",
      },
    ],
  },
  {
    id: 10,
    name: "Health & Wellness",
    img: "URL_to_image_for_Health_Wellness",
    jobs: 800,
    subJobs: [
      {
        id: 1,
        name: "Medical Writing",
        img: "URL_to_image_for_Medical_Writing",
        cost: "$70/hr",
      },
      {
        id: 2,
        name: "Health Coaching",
        img: "URL_to_image_for_Health_Coaching",
        cost: "$65/hr",
      },
      {
        id: 3,
        name: "Nutrition Consulting",
        img: "URL_to_image_for_Nutrition_Consulting",
        cost: "$75/hr",
      },
      {
        id: 4,
        name: "Mental Health Support",
        img: "URL_to_image_for_Mental_Health_Support",
        cost: "$80/hr",
      },
      {
        id: 5,
        name: "Fitness Training",
        img: "URL_to_image_for_Fitness_Training",
        cost: "$60/hr",
      },
    ],
  },
  {
    id: 11,
    name: "Consulting",
    img: "URL_to_image_for_Consulting",
    jobs: 600,
    subJobs: [
      {
        id: 1,
        name: "Business Consulting",
        img: "URL_to_image_for_Business_Consulting",
        cost: "$90/hr",
      },
      {
        id: 2,
        name: "Management Consulting",
        img: "URL_to_image_for_Management_Consulting",
        cost: "$95/hr",
      },
      {
        id: 3,
        name: "Strategy Consulting",
        img: "URL_to_image_for_Strategy_Consulting",
        cost: "$100/hr",
      },
      {
        id: 4,
        name: "HR Consulting",
        img: "URL_to_image_for_HR_Consulting",
        cost: "$85/hr",
      },
    ],
  },
];
function CategoriesComponents() {
  return (
    <div>
      {/* <div className="flex items-center justify-center text-7xl text-gray-800 font-thin m-10 underline">
        Job Categories
      </div> */}
      <CategoryHero />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gradient-to-b">
        {categories.slice(0, 8).map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center items-center max-w-sm m-4"
          >
            <div
              style={{
                backgroundImage: `url(${category.img})`,
              }}
              className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>
            <div className="w-56 md:w-64 -mt-10 shadow-lg rounded-lg bg-gray-700 overflow-hidden">
              <div className="py-2  text-center font-bold uppercase tracking-wide text-gray-200">
                {category.name}
              </div>
              <div className="flex items-center justify-center w-full py-2 px-3 bg-gray-300">
                {/* <h1 className="text-gray-800 font-bold gap-2 flex items-center justify-center">
                  <IoIosPeople size={22} />
                  {category.jobs}
                </h1> */}
                <button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-blue-700 opacity-75">
                  Apply Now
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
                backgroundImage: `url(${category.subJobs.img})`,
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
      <div className="flex items-center justify-center w-11/12 mx-auto my-10 border-gray-900 border opacity-75  rounded-full">
        {/* <div className="h-0.5 w-11/12 bg-gray-800"></div> */}
      </div>
    </div>
  );
}

export default CategoriesComponents;
