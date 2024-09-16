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
