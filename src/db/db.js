import Writing from "../assets/Home/writting.jpg";
import designing from "../assets/Home/designing.jpg";
import programming from "../assets/Home/programming.jpg";
import legal from "../assets/Home/Legal.jpg";
import Socialmedia from "../assets/Home/Socialmedia.jpg";
import Admin from "../assets/Home/Admin.jpg";
import Finance from "../assets/Home/Finance.jpg";
import Engg from "../assets/Home/Engg.jpg";
import Content from "../assets/Home/Content.jpg";
import graphic from "../assets/Home/graphic.jpg";
import Webdesign from "../assets/Home/Webdesign.jpg";
import digital from "../assets/Home/digital.jpg";
import SEO from "../assets/Catelogue/SEO.jpg";
import Soical from "../assets/Catelogue/Social.jpg";
import Store from "../assets/Catelogue/Store.jpg";
import Analysis from "../assets/Catelogue/Analysis.jpg";
import Online from "../assets/Catelogue/Online.jpg";
import App from "../assets/Catelogue/App.jpg";
import Brand from "../assets/Catelogue/Brand.jpg";
import Solution from "../assets/Catelogue/Solution.jpg";
import Ecommerce from "../assets/Catelogue/Ecommerce.jpg";
import Food from "../assets/Catelogue/Food.png";
import SocialMedia from "../assets/Catelogue/SocialMedia.png";
import freelancer1 from "../assets/Catelogue/freelancer1.jpg";
import freelancer2 from "../assets/Catelogue/freelancer4.jpg";
import freelancer3 from "../assets/Catelogue/freelancer3.jpg";
import event1 from "../assets/Events/event1.jpg";
import event2 from "../assets/Events/event2.jpg";
import event3 from "../assets/Events/event3.jpg";
import event4 from "../assets/Events/event4.jpg";
import event5 from "../assets/Events/event5.jpg";
import event6 from "../assets/Events/event6.jpg";

export const categories = [
  {
    id: 1,
    name: "Writing & Translation",
    img: `${Writing}`,
    jobs: 5000,
    subJobs: [
      {
        id: 1,
        name: "Content Writing",
        img: `${Content}`,
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
    img: `${designing}`,
    jobs: 3500,
    subJobs: [
      {
        id: 1,
        name: "Graphic Design",
        img: `${graphic}`,
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
    img: `${programming}`,
    jobs: 4000,
    subJobs: [
      {
        id: 1,
        name: "Web Development",
        img: `${Webdesign}`,
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
    img: `${Socialmedia}`,
    jobs: 3000,
    subJobs: [
      {
        id: 1,
        name: "Digital Marketing",
        img: `${digital}`,
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
    img: `${Admin}`,
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
    img: `${Finance}`,
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
    img: `${Engg}`,
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
    img: `${legal}`,
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

export const data = {
  hero_banner: {
    heading: "Find Ready-Made Projects Tailored to Your Business",
    subheading:
      "Browse our diverse project catalog to find solutions that meet your needs. From social media to software development, get inspired by the work of top freelancers.",
    cta: "Explore Projects",
  },
  categories: [
    {
      name: "Web Development",
      img: `${Online}`,
      projectName: "Custom Web Solutions",
      description:
        "Custom websites and web apps to fit your business needs. Discover our range of solutions now.",
      cta: "View Projects",
      image: "web-development.jpg",
    },
    {
      name: "Mobile App Solutions",
      img: `${App}`,
      projectName: "Mobile App Suite",
      description:
        "Ready-made mobile apps for Android and iOS platforms. Explore our cutting-edge mobile solutions.",
      cta: "View Projects",
      image: "mobile-app.jpg",
    },
    {
      name: "Graphic Design",
      img: `${Brand}`,
      projectName: "Visual Branding",
      description:
        "Logos, branding, and design projects to boost your visual presence. Our designs make a statement.",
      cta: "View Projects",
      image: "graphic-design.jpg",
    },
    {
      name: "Content Writing",
      img: `${SEO}`,
      projectName: "SEO Content Creator",
      description:
        "SEO-optimized content writing for blogs, websites, and more. Crafting content that engages and converts.",
      cta: "View Projects",
      image: "content-writing.jpg",
    },
    {
      name: "SEO & Marketing",
      img: `${Solution}`,
      projectName: "Traffic Booster",
      description:
        "Boost your website traffic with proven SEO and digital marketing strategies. Achieve higher rankings now.",
      cta: "View Projects",
      image: "seo-marketing.jpg",
    },
    {
      name: "Social Media Management",
      img: `${Soical}`,
      projectName: "Social Growth",
      description:
        "Grow your brand on social media with effective management solutions. Engage with your audience effectively.",
      cta: "View Projects",
      image: "social-media-management.jpg",
    },
    {
      name: "E-commerce Solutions",
      img: `${Store}`,
      projectName: "Online Storefront",
      description:
        "Ready-made online stores and e-commerce solutions. Start selling online with ease and efficiency. Grow with Us.",
      cta: "View Projects",
      image: "e-commerce.jpg",
    },
    {
      name: "Data Analytics",
      img: `${Analysis}`,
      projectName: "Insightful Analytics",
      description:
        "Data-driven solutions for business intelligence and insights. Make informed decisions with our analytics.",
      cta: "View Projects",
      image: "data-analytics.jpg",
    },
  ],
  social_media_solutions: {
    heading: "Boost Your Brand with Cutting-Edge Social Media Strategies",
    content:
      "In the digital age, a strong social media presence is crucial. Our solutions improve visibility and engagement through tailored campaigns, strategic content, and influencer outreach. We also manage paid ads and provide analytics to measure success. Whether you're refining your strategy or launching a new campaign, our services deliver impactful results.",
    testimonials: [
      {
        client_name: "Digital Creatives Ltd.",
        feedback:
          "Thanks to Swarojgar, our social media presence grew significantly. The targeted campaign broadened our audience.",
      },
      {
        client_name: "BrandBoost Inc.",
        feedback:
          "Swarojgar’s solutions were a game changer. The content calendar boosted engagement and follower growth quickly.",
      },
      {
        client_name: "Innovative Solutions Group",
        feedback:
          "Swarojgar's influencer outreach greatly improved our brand’s online presence and engagement.",
      },
      {
        client_name: "TechForward Enterprises",
        feedback:
          "Swarojgar streamlined our social media management, with valuable insights from analytics and measurable ROI from paid ads.",
      },
    ],
    cta: "Browse Social Media Solutions",
  },

  featured_projects: {
    heading: "Featured Projects to Get You Inspired",
    projects: [
      {
        title: "E-commerce Website",
        description:
          "A fully functional e-commerce website with product listing and payment integration.",
        price: "Rs 1,499",
        img: `${Ecommerce}`,
        freelancer: {
          name: "Priya Gupta",
          rating: 4.8,
          completed_projects: 32,
        },
        cta: "Buy Now",
      },
      {
        title: "Mobile App for Food Delivery",
        description:
          "A ready-to-launch food delivery app for both iOS and Android.",
        price: "Rs 1,799",
        img: `${Food}`,
        freelancer: {
          name: "Rahul Verma",
          rating: 4.9,
          completed_projects: 45,
        },
        cta: "Buy Now",
      },
      {
        title: "Social Media Marketing Campaign",
        description:
          "A complete social media campaign for Facebook, Instagram, and Twitter.",
        price: "Rs 1,299",
        img: `${SocialMedia}`,
        freelancer: {
          name: "Aarti Singh",
          rating: 4.7,
          completed_projects: 21,
        },
        cta: "Buy Now",
      },
    ],
  },
  popular_freelancers: {
    heading: "Meet the Top Creators on Swarojgar",
    freelancers: [
      {
        name: "Ravi Sharma",
        img: `${freelancer1}`,
        expertise: "Web Developer",
        rating: 4.9,
        completed_projects: 56,
        portfolio_cta: "View Portfolio",
      },
      {
        name: "Anjali Deshmukh",
        img: `${freelancer2}`,
        expertise: "Graphic Designer",
        rating: 4.8,
        completed_projects: 42,
        portfolio_cta: "View Portfolio",
      },
      {
        name: "Sara Khan",
        img: `${freelancer3}`,
        expertise: "Data Analyst",
        rating: 4.9,
        completed_projects: 31,
        portfolio_cta: "View Portfolio",
      },
    ],
  },
  how_it_works: {
    heading: "How It Works",
    steps: [
      {
        step: "1",
        title: "Browse Categories",
        description:
          "Explore various categories to discover a wide range of ready-made projects. Each category is designed to help you find exactly what you're looking for, whether it's a web development project, a mobile app, or a marketing campaign.",
      },
      {
        step: "2",
        title: "Preview Project Details",
        description:
          "Review detailed information about each project, including the project scope, cost, and expected delivery time. Make sure to check out any available previews or demos to assess the quality and fit for your needs.",
      },
      {
        step: "3",
        title: "Purchase or Customize",
        description:
          "Choose to purchase the project as-is or contact the freelancer to discuss customizations and adjustments. This step allows you to tailor the project to better match your specific requirements and preferences.",
      },
      {
        step: "4",
        title: "Secure Payment",
        description:
          "Complete the payment process through our secure escrow system. This ensures that the funds are safely held until the project is completed to your satisfaction, protecting both you and the freelancer.",
      },
      {
        step: "5",
        title: "Receive and Finalize",
        description:
          "Receive the final project deliverables. After reviewing the completed work, finalize the payment to the freelancer. If everything meets your expectations, you can complete the transaction and provide any necessary feedback.",
      },
    ],
  },
};

export const eventsData = [
  {
    color: "blue",
    imageUrl: `${event1}`,
    title: "Women in Freelancing: Empowerment Workshop",
    date: "October 22, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual Event (Zoom)",
    previewText:
      "A workshop focused on empowering women freelancers with tools, resources, and strategies to succeed in a competitive industry.",
    cta: "Join Now",
  },
  {
    color: "red",
    imageUrl: `${event2}`,
    title: "Mastering Client Relationships",
    date: "November 5, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual Event (Google Meet)",
    previewText:
      "Learn how to manage client expectations, deliver high-quality work, and build lasting relationships with clients.",
    cta: "Sign Up",
  },
  {
    color: "green",
    imageUrl: `${event3}`,
    title: "Freelancer Career Growth: Tips & Tools",
    date: "November 12, 2024",
    time: "5:00 PM - 6:30 PM",
    location: "Virtual Event (Zoom)",
    previewText:
      "Get insights from industry experts on how to scale your freelance career, attract high-paying clients, and develop a growth mindset.",
    cta: "Reserve Seat",
  },
];
export const event_highlights = [
  {
    color: "blue",
    //   imageUrl: "https://picsum.photos/600/400",
    imageUrl: `${event4}`,
    title: "Freelancer Success Stories",
    date: "October 10, 2023",
    time: "2:00 PM - 3:00 PM",
    location: "Virtual Event (Zoom)",
    previewText:
      "Hear from freelancers who secured major projects and collaborations through our events. Their success stories inspire others to make the most of our community.",
    cta: "View Highlights",
  },
  {
    color: "red",
    imageUrl: `${event5}`,
    title: "Keynote Session: Navigating the Gig Economy",
    date: "September 22, 2023",
    time: "1:00 PM - 2:30 PM",
    location: "Virtual Event (YouTube)",
    previewText:
      "Industry experts shared insights on how to thrive in the gig economy, covering topics from finding high-paying clients to managing work-life balance.",
    cta: "Watch Now",
  },
  {
    color: "green",
    imageUrl: `${event6}`,
    title: "Live Q&A with Industry Leaders",
    date: "August 15, 2023",
    time: "4:00 PM - 5:00 PM",
    location: "Virtual Event (Google Meet)",
    previewText:
      "Freelancers had the opportunity to ask questions and receive expert guidance during our live Q&A session. The session provided valuable strategies to tackle freelance challenges.",
    cta: "Watch Q&A",
  },
  {
    color: "yellow",
    imageUrl: `${event1}`,
    title: "Panel Discussion: Future of Remote Work",
    date: "July 18, 2023",
    time: "3:00 PM - 4:30 PM",
    location: "Virtual Event (Zoom)",
    previewText:
      "A forward-looking panel discussion about the evolving landscape of remote work, exploring new opportunities and challenges freelancers will face in the coming years.",
    cta: "View Discussion",
  },
];

export const newsletter = {
  title: "Subscribe for the Latest Event Updates",
  description:
    "Stay informed and never miss an event! Subscribe to our newsletter to get the latest updates directly in your inbox.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const JobsData = {
  hero_section: {
    title: "Find the Perfect Project or Post Your Opportunity",
    subtitle:
      "Whether you’re a company looking for top talent or a freelancer looking for exciting projects, you’ve come to the right place.",
    cta_buttons: {
      post_project: {
        text: "Post a Project",
        link: "#post-project-form",
      },
      browse_projects: {
        text: "Browse Projects",
        link: "#browse-projects",
      },
    },
    search_bar: {
      placeholder: "Search for projects or keywords",
      enabled: true,
    },
  },
  post_project_section: {
    title: "Post a Project and Connect with Top Freelancers",
    brief_description:
      "Post your project, set your budget, and connect with skilled freelancers. Get work done quickly and efficiently.",
    post_project_form: {
      input_fields: [
        {
          name: "project_title",
          label: "Project Title",
          type: "text",
          placeholder: "Enter project title",
          required: true,
        },
        {
          name: "project_description",
          label: "Project Description",
          type: "textarea",
          placeholder: "Describe your project in detail",
          required: true,
        },
        {
          name: "required_skills",
          label: "Required Skills",
          type: "tags",
          placeholder: "Add required skills",
          required: true,
        },
        {
          name: "project_budget",
          label: "Project Budget",
          type: "select",
          options: ["Fixed Price", "Hourly"],
          required: true,
        },
        {
          name: "budget_amount",
          label: "Budget Amount",
          type: "number",
          placeholder: "Enter budget amount",
          required: true,
        },
        {
          name: "project_deadline",
          label: "Project Deadline",
          type: "date",
          required: true,
        },
        {
          name: "preferred_freelancers",
          label: "Preferred Freelancers",
          type: "text",
          placeholder: "Specify if any",
          required: false,
        },
        {
          name: "file_attachments",
          label: "File Attachments",
          type: "file",
          required: false,
        },
      ],
      submit_button: {
        text: "Post Project",
        type: "submit",
      },
    },
    benefits_section: {
      title: "Why Post a Project with Us?",
      benefits: [
        "Secure Payments: Ensure safe and timely transactions with our escrow system.",
        "Easy Collaboration: Streamlined communication tools to collaborate effectively.",
        "Access to Diverse Talent: Connect with freelancers from various industries and expertise levels.",
        "Quality Assurance: Access to freelancer ratings and reviews to choose the best fit for your project.",
      ],
    },
  },
  browse_projects_section: {
    title: "Browse Freelance Projects",
    filters_and_sorting: {
      filters: {
        categories: [
          "Web Development",
          "Design",
          "Marketing",
          "Writing",
          "Data Science",
          "Mobile App Development",
        ],
        budget: ["Low ($0-$500)", "Medium ($500-$2000)", "High ($2000+)"],
        duration: ["Short-term (1-3 months)", "Long-term (3+ months)"],
        experience_level: ["Beginner", "Intermediate", "Expert"],
      },
      sorting_options: ["Newest", "Highest Paying", "Deadline Soon"],
    },
    project_listings: {
      view_mode: "grid", // Options: "grid", "list"
      projects: [
        {
          id: 1,
          title: "Develop a Responsive E-commerce Website",
          budget: "$1500",
          posted_by: "Tech Solutions Inc.",
          project_description:
            "Looking for an experienced web developer to create a responsive e-commerce website with payment integration and user-friendly interface.",
          required_skills: ["React", "Node.js", "MongoDB", "CSS"],
          deadline: "2024-12-15",
          apply_button_text: "Apply Now",
          project_link: "#project-details-1",
        },
        {
          id: 2,
          title: "Logo Design for New Startup",
          budget: "$300",
          posted_by: "Creative Minds",
          project_description:
            "Seeking a creative graphic designer to design a unique and memorable logo for our new startup in the fintech industry.",
          required_skills: ["Adobe Illustrator", "Graphic Design", "Branding"],
          deadline: "2024-11-30",
          apply_button_text: "Apply Now",
          project_link: "#project-details-2",
        },
        {
          id: 3,
          title: "Digital Marketing Campaign for Product Launch",
          budget: "$2000",
          posted_by: "MarketGurus",
          project_description:
            "Need a digital marketer to strategize and execute a comprehensive marketing campaign for our upcoming product launch.",
          required_skills: [
            "SEO",
            "Content Marketing",
            "Social Media Marketing",
          ],
          deadline: "2024-11-20",
          apply_button_text: "Apply Now",
          project_link: "#project-details-3",
        },
        {
          id: 4,
          title: "Mobile App Development for Fitness Tracker",
          budget: "$5000",
          posted_by: "HealthTech",
          project_description:
            "Looking for a skilled mobile app developer to create a fitness tracker app compatible with both iOS and Android platforms.",
          required_skills: [
            "Swift",
            "Kotlin",
            "React Native",
            "API Integration",
          ],
          deadline: "2025-01-10",
          apply_button_text: "Apply Now",
          project_link: "#project-details-4",
        },
        {
          id: 5,
          title: "Content Writer for Blog Series",
          budget: "$800",
          posted_by: "BlogSphere",
          project_description:
            "Seeking talented content writers to produce a series of blog posts on technology and innovation topics.",
          required_skills: ["Content Writing", "SEO", "Research"],
          deadline: "2024-12-05",
          apply_button_text: "Apply Now",
          project_link: "#project-details-5",
        },
      ],
      pagination: {
        current_page: 1,
        total_pages: 5,
        items_per_page: 5,
      },
    },
  },
  featured_projects_section: {
    title: "Featured Projects",
    projects: [
      {
        id: 101,
        title: "Advanced Data Analytics Dashboard",
        budget: "$3000",
        posted_by: "DataPros LLC",
        project_description:
          "Develop a comprehensive data analytics dashboard with real-time data visualization and reporting features.",
        required_skills: ["Python", "Django", "React", "Data Visualization"],
        deadline: "2025-02-28",
        apply_button_text: "Apply Now",
        project_link: "#project-details-101",
        image_url: "https://picsum.photos/600/400?random=1",
        premium: true,
      },
      {
        id: 102,
        title: "Full-Stack Development for SaaS Platform",
        budget: "$7000",
        posted_by: "Innovatech",
        project_description:
          "Looking for a full-stack developer to build and maintain our SaaS platform with a focus on scalability and performance.",
        required_skills: ["Node.js", "React", "AWS", "Microservices"],
        deadline: "2025-03-15",
        apply_button_text: "Apply Now",
        project_link: "#project-details-102",
        image_url: "https://picsum.photos/600/400?random=2",
        premium: true,
      },
      {
        id: 103,
        title: "UI/UX Redesign for Mobile Application",
        budget: "$2500",
        posted_by: "AppDesigners",
        project_description:
          "Need a creative UI/UX designer to revamp the user interface and experience of our existing mobile application.",
        required_skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
        deadline: "2025-01-25",
        apply_button_text: "Apply Now",
        project_link: "#project-details-103",
        image_url: "https://picsum.photos/600/400?random=3",
        premium: true,
      },
    ],
  },
  freelancer_success_stories: {
    title: "Freelancer Success Stories",
    stories: [
      {
        freelancer_name: "Jane Doe",
        testimonial:
          "Posting my project on this platform was a game-changer. I connected with a talented developer who delivered exceptional work ahead of schedule.",
        project_title: "Develop a Responsive E-commerce Website",
        image_url: "https://picsum.photos/100/100?random=1",
        success_date: "2024-11-20",
      },
      {
        freelancer_name: "John Smith",
        testimonial:
          "I found amazing design projects here that matched my skills perfectly. The secure payment system gave me peace of mind.",
        project_title: "Logo Design for New Startup",
        image_url: "https://picsum.photos/100/100?random=2",
        success_date: "2024-12-05",
      },
      {
        freelancer_name: "Emily Johnson",
        testimonial:
          "The platform's filtering options made it easy to find high-paying projects. I've significantly grown my freelance business thanks to this site.",
        project_title: "Digital Marketing Campaign for Product Launch",
        image_url: "https://picsum.photos/100/100?random=3",
        success_date: "2024-12-15",
      },
      {
        freelancer_name: "Michael Brown",
        testimonial:
          "Collaborating on the mobile app development project was seamless. The client was clear with their requirements and the project was a huge success.",
        project_title: "Mobile App Development for Fitness Tracker",
        image_url: "https://picsum.photos/100/100?random=4",
        success_date: "2025-01-10",
      },
    ],
  },
};

export const WhyUsData = {
  advantages_in_detail: [
    {
      title: "Escrow Payments for Transparency",
      description:
        "Both clients and freelancers are protected through our escrow payment system. Funds are only released after the project is completed and both parties are satisfied.",
    },
    {
      title: "Skill-Based Matching, Not Degrees",
      description:
        "Unlike other platforms that prioritize education, Swarojgar focuses on connecting freelancers with clients based on their skills and portfolio, giving opportunities to a wider range of professionals.",
    },
    {
      title: "Group Freelancing for Large Projects",
      description:
        "Swarojgar allows freelancers to form teams and bid on larger contracts, which promotes collaboration and enables the completion of complex projects.",
    },
    {
      title: "Diversity Initiatives for Women Freelancers",
      description:
        "By providing 50% exemption on service fees for women freelancers, Swarojgar is helping to create a more inclusive and diverse workforce in the freelancing industry.",
    },
    {
      title: "Multilingual Support for Global Reach",
      description:
        "With integrated multilingual support, Swarojgar breaks language barriers, allowing clients and freelancers from different countries to communicate and collaborate efficiently.",
    },
    {
      title: "Community Events and Networking",
      description:
        "Regularly scheduled community events and networking opportunities help freelancers and clients build lasting professional relationships, expanding their reach beyond the platform.",
    },
    {
      title: "NDA Contracts for Confidentiality",
      description:
        "Swarojgar implements NDA contracts to ensure that all project details and sensitive information remain confidential between clients and freelancers, providing peace of mind for both parties.",
    },
    {
      title: "Achievement Badges and Leaderboard",
      description:
        "Freelancers can earn achievement badges and climb the leaderboard, giving them increased visibility on the platform. This motivates freelancers to continuously improve and excel in their work.",
    },
  ],
  faqItems: [
    {
      question: "What unique features does Swarojgar offer?",
      answer:
        "Swarojgar provides features like project catalog for pre-built projects, secure escrow payment system, group freelancing, multilingual support, and an achievement leaderboard.",
    },
    {
      question: "Can I form teams to work on bigger projects?",
      answer:
        "Yes, Swarojgar offers a team freelancing feature that allows you to collaborate with other freelancers on large projects.",
    },
    {
      question: "How does Swarojgar ensure data security?",
      answer:
        "We use NDA contracts to maintain confidentiality between freelancers and clients. Additionally, all financial transactions are handled through a secure escrow account.",
    },
    {
      question: "Is there support for non-English clients and freelancers?",
      answer:
        "Absolutely! Swarojgar offers multilingual support, allowing freelancers and clients from around the world to collaborate seamlessly.",
    },
    {
      question: "What is the escrow system?",
      answer:
        "The escrow system ensures that payments are held securely until the work is completed to the client’s satisfaction. It protects both freelancers and clients.",
    },
    {
      question: "Are there any benefits for women freelancers?",
      answer:
        "Yes! Women freelancers get a 50% exemption on service fees to promote diversity and empower women in the freelancing sector.",
    },
    {
      question: "What is the project catalog feature?",
      answer:
        "Freelancers can showcase pre-built projects in the project catalog, allowing clients to purchase ready-made solutions without starting from scratch.",
    },
    {
      question: "How does the leaderboard work?",
      answer:
        "Swarojgar’s leaderboard ranks freelancers based on their performance, helping them gain visibility and attract more clients based on achievements.",
    },
  ],
  testimonialUser: [
    {
      userName: "Ravi Sharma",
      role: "Web Developer",
      description:
        "Swarojgar has truly empowered me to expand my career. The secure escrow system ensures fair payments, and the project catalog has helped me land some great clients. I feel valued and confident while working on this platform.",
    },
    {
      userName: "Anjali Deshmukh",
      role: "Graphic Designer",
      description:
        "The women freelancer benefits have been amazing. The 50% exemption on service fees has made a big difference in my earnings. The escrow system has also been a blessing in securing timely payments from clients.",
    },
    {
      userName: "Vikram Mehta",
      role: "Mobile App Developer",
      description:
        "Swarojgar’s team freelancing feature has allowed me to collaborate with other developers to tackle larger projects. It’s a powerful feature that makes bigger contracts easier to manage.",
    },
    {
      userName: "Sara Khan",
      role: "Data Analyst",
      description:
        "The platform’s multilingual support opened up doors for me with international clients. It’s exciting to work across borders without the language barrier being an issue.",
    },
    {
      userName: "Neha Dubey",
      role: "Content Writer",
      description:
        "Swarojgar's leaderboard and achievement badges motivate me to stay competitive. I’ve gained visibility on the platform through these features, and it has helped me land more consistent work.",
    },
    {
      userName: "Rohit Agarwal",
      role: "Software Engineer",
      description:
        "The secure payment system sets Swarojgar apart. Knowing that the funds are held in escrow until the project is completed gives me peace of mind, and the dispute resolution process is clear and effective.",
    },
  ],
};

export const Navitems = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Sarthi",
    link: "/sarthi",
  },
  {
    id: 2,
    title: "Jobs",
    link: "/jobs",
  },
  {
    id: 3,
    title: "Quick Search",
    link: "/quick-search",
  },
  {
    id: 4,
    title: "Catalogue",
    link: "/catalogue",
  },
  {
    id: 5,
    title: "Events",
    link: "/events",
  },
  {
    id: 6,
    title: "Why Us?",
    link: "/why-us",
  },
];

