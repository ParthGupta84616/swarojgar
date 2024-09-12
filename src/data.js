

const categories = [
    {
      id: 1,
      name: "Writing & Translation",
      img: "URL_to_image_for_Writing_Translation",
      jobs: 5000,
      subJobs: [
        { id: 1, name: "Content Writing", img: "URL_to_image_for_Content_Writing" },
        { id: 2, name: "Copywriting", img: "URL_to_image_for_Copywriting" },
        { id: 3, name: "Technical Writing", img: "URL_to_image_for_Technical_Writing" },
        { id: 4, name: "Blogging", img: "URL_to_image_for_Blogging" },
        { id: 5, name: "Translation", img: "URL_to_image_for_Translation" },
        { id: 6, name: "Editing & Proofreading", img: "URL_to_image_for_Editing_Proofreading" }
      ]
    },
    {
      id: 2,
      name: "Design & Creative",
      img: "URL_to_image_for_Design_Creative",
      jobs: 3500,
      subJobs: [
        { id: 1, name: "Graphic Design", img: "URL_to_image_for_Graphic_Design" },
        { id: 2, name: "Web Design", img: "URL_to_image_for_Web_Design" },
        { id: 3, name: "UX/UI Design", img: "URL_to_image_for_UX_UI_Design" },
        { id: 4, name: "Logo Design", img: "URL_to_image_for_Logo_Design" },
        { id: 5, name: "Illustration", img: "URL_to_image_for_Illustration" },
        { id: 6, name: "Animation", img: "URL_to_image_for_Animation" },
        { id: 7, name: "Video Production", img: "URL_to_image_for_Video_Production" }
      ]
    },
    {
      id: 3,
      name: "Programming & Tech",
      img: "URL_to_image_for_Programming_Tech",
      jobs: 4000,
      subJobs: [
        { id: 1, name: "Web Development", img: "URL_to_image_for_Web_Development" },
        { id: 2, name: "Mobile App Development", img: "URL_to_image_for_Mobile_App_Development" },
        { id: 3, name: "Software Development", img: "URL_to_image_for_Software_Development" },
        { id: 4, name: "Data Analysis", img: "URL_to_image_for_Data_Analysis" },
        { id: 5, name: "Cybersecurity", img: "URL_to_image_for_Cybersecurity" },
        { id: 6, name: "IT Support", img: "URL_to_image_for_IT_Support" },
        { id: 7, name: "Game Development", img: "URL_to_image_for_Game_Development" }
      ]
    },
    {
      id: 4,
      name: "Marketing & Sales",
      img: "URL_to_image_for_Marketing_Sales",
      jobs: 3000,
      subJobs: [
        { id: 1, name: "Digital Marketing", img: "URL_to_image_for_Digital_Marketing" },
        { id: 2, name: "SEO (Search Engine Optimization)", img: "URL_to_image_for_SEO" },
        { id: 3, name: "Social Media Management", img: "URL_to_image_for_Social_Media_Management" },
        { id: 4, name: "Email Marketing", img: "URL_to_image_for_Email_Marketing" },
        { id: 5, name: "Sales Strategy", img: "URL_to_image_for_Sales_Strategy" },
        { id: 6, name: "Market Research", img: "URL_to_image_for_Market_Research" }
      ]
    },
    {
      id: 5,
      name: "Administrative Support",
      img: "URL_to_image_for_Administrative_Support",
      jobs: 2500,
      subJobs: [
        { id: 1, name: "Virtual Assistance", img: "URL_to_image_for_Virtual_Assistance" },
        { id: 2, name: "Data Entry", img: "URL_to_image_for_Data_Entry" },
        { id: 3, name: "Customer Service", img: "URL_to_image_for_Customer_Service" },
        { id: 4, name: "Project Management", img: "URL_to_image_for_Project_Management" },
        { id: 5, name: "Research", img: "URL_to_image_for_Research" }
      ]
    },
    {
      id: 6,
      name: "Finance & Accounting",
      img: "URL_to_image_for_Finance_Accounting",
      jobs: 2000,
      subJobs: [
        { id: 1, name: "Bookkeeping", img: "URL_to_image_for_Bookkeeping" },
        { id: 2, name: "Financial Analysis", img: "URL_to_image_for_Financial_Analysis" },
        { id: 3, name: "Tax Preparation", img: "URL_to_image_for_Tax_Preparation" },
        { id: 4, name: "Accounting", img: "URL_to_image_for_Accounting" },
        { id: 5, name: "Business Planning", img: "URL_to_image_for_Business_Planning" }
      ]
    },
    {
      id: 7,
      name: "Engineering & Architecture",
      img: "URL_to_image_for_Engineering_Architecture",
      jobs: 1500,
      subJobs: [
        { id: 1, name: "CAD Design", img: "URL_to_image_for_CAD_Design" },
        { id: 2, name: "Structural Engineering", img: "URL_to_image_for_Structural_Engineering" },
        { id: 3, name: "Civil Engineering", img: "URL_to_image_for_Civil_Engineering" },
        { id: 4, name: "Architecture", img: "URL_to_image_for_Architecture" },
        { id: 5, name: "Mechanical Engineering", img: "URL_to_image_for_Mechanical_Engineering" }
      ]
    },
    {
      id: 8,
      name: "Legal",
      img: "URL_to_image_for_Legal",
      jobs: 1000,
      subJobs: [
        { id: 1, name: "Legal Writing", img: "URL_to_image_for_Legal_Writing" },
        { id: 2, name: "Contract Drafting", img: "URL_to_image_for_Contract_Drafting" },
        { id: 3, name: "Intellectual Property", img: "URL_to_image_for_Intellectual_Property" },
        { id: 4, name: "Compliance", img: "URL_to_image_for_Compliance" },
        { id: 5, name: "Legal Consulting", img: "URL_to_image_for_Legal_Consulting" }
      ]
    },
    {
      id: 9,
      name: "Education & Training",
      img: "URL_to_image_for_Education_Training",
      jobs: 1200,
      subJobs: [
        { id: 1, name: "Tutoring", img: "URL_to_image_for_Tutoring" },
        { id: 2, name: "Course Development", img: "URL_to_image_for_Course_Development" },
        { id: 3, name: "Language Instruction", img: "URL_to_image_for_Language_Instruction" },
        { id: 4, name: "Educational Consulting", img: "URL_to_image_for_Educational_Consulting" },
        { id: 5, name: "Training Programs", img: "URL_to_image_for_Training_Programs" }
      ]
    },
    {
      id: 10,
      name: "Health & Wellness",
      img: "URL_to_image_for_Health_Wellness",
      jobs: 800,
      subJobs: [
        { id: 1, name: "Medical Writing", img: "URL_to_image_for_Medical_Writing" },
        { id: 2, name: "Health Coaching", img: "URL_to_image_for_Health_Coaching" },
        { id: 3, name: "Nutrition Consulting", img: "URL_to_image_for_Nutrition_Consulting" },
        { id: 4, name: "Mental Health Support", img: "URL_to_image_for_Mental_Health_Support" },
        { id: 5, name: "Fitness Training", img: "URL_to_image_for_Fitness_Training" }
      ]
    },
    {
      id: 11,
      name: "Consulting",
      img: "URL_to_image_for_Consulting",
      jobs: 600,
      subJobs: [
        { id: 1, name: "Business Consulting", img: "URL_to_image_for_Business_Consulting" },
        { id: 2, name: "Management Consulting", img: "URL_to_image_for_Management_Consulting" },
        { id: 3, name: "Strategy Consulting", img: "URL_to_image_for_Strategy_Consulting" },
        { id: 4, name: "HR Consulting", img: "URL_to_image_for_HR_Consulting" }
      ]
    }
  ];
  
  export default categories;