import React from "react";
import CategoriesHeroBanner from "../components/CategoriesHeroBanner";
import { Link } from "react-router-dom";
import { VscFeedback } from "react-icons/vsc";
import FeatureJobComponent from "../components/FeatureJobComponent";
const data = {
  hero_banner: {
    heading: "Find Ready-Made Projects Tailored to Your Business",
    subheading:
      "Browse our diverse project catalog to find solutions that meet your needs. From social media to software development, get inspired by the work of top freelancers.",
    cta: "Explore Projects",
  },
  categories: [
    {
      name: "Web Development",
      projectName: "Custom Web Solutions",
      description:
        "Custom websites and web apps to fit your business needs. Discover our range of solutions now.",
      cta: "View Projects",
      image: "web-development.jpg",
    },
    {
      name: "Mobile App Solutions",
      projectName: "Mobile App Suite",
      description:
        "Ready-made mobile apps for Android and iOS platforms. Explore our cutting-edge mobile solutions.",
      cta: "View Projects",
      image: "mobile-app.jpg",
    },
    {
      name: "Graphic Design",
      projectName: "Visual Branding",
      description:
        "Logos, branding, and design projects to boost your visual presence. Our designs make a statement.",
      cta: "View Projects",
      image: "graphic-design.jpg",
    },
    {
      name: "Content Writing",
      projectName: "SEO Content Creator",
      description:
        "SEO-optimized content writing for blogs, websites, and more. Crafting content that engages and converts.",
      cta: "View Projects",
      image: "content-writing.jpg",
    },
    {
      name: "SEO & Marketing",
      projectName: "Traffic Booster",
      description:
        "Boost your website traffic with proven SEO and digital marketing strategies. Achieve higher rankings now.",
      cta: "View Projects",
      image: "seo-marketing.jpg",
    },
    {
      name: "Social Media Management",
      projectName: "Social Growth",
      description:
        "Grow your brand on social media with effective management solutions. Engage with your audience effectively.",
      cta: "View Projects",
      image: "social-media-management.jpg",
    },
    {
      name: "E-commerce Solutions",
      projectName: "Online Storefront",
      description:
        "Ready-made online stores and e-commerce solutions. Start selling online with ease and efficiency. Grow with Us.",
      cta: "View Projects",
      image: "e-commerce.jpg",
    },
    {
      name: "Data Analytics",
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
        image: "ecommerce-project.jpg",
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
        image: "food-delivery-app.jpg",
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
        image: "social-media-campaign.jpg",
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
        expertise: "Web Developer",
        rating: 4.9,
        completed_projects: 56,
        portfolio_cta: "View Portfolio",
      },
      {
        name: "Anjali Deshmukh",
        expertise: "Graphic Designer",
        rating: 4.8,
        completed_projects: 42,
        portfolio_cta: "View Portfolio",
      },
      {
        name: "Sara Khan",
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

function Catalogue() {
  return (
    <div>
      <CategoriesHeroBanner />
      <section className="text-gray-600 body-font bg-gray-100 py-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full xl:mb-20 mb-6">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Shop by Categories
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Explore a wide range of ready-made projects across various
              domains. From website development to social media solutions, find
              the perfect project to suit your needs. All projects are created
              by experienced freelancers and are ready for immediate
              implementation.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.categories.slice(0, 4).map((category, index) => (
              <Card key={index} data={category} />
            ))}
          </div>
          <div className="flex flex-wrap -m-4">
            {data.categories.slice(4).map((category, index) => (
              <Card key={index + 4} data={category} />
            ))}
          </div>
        </div>
      </section>
      <SocialMediaComponent
        social_media_solutions={data.social_media_solutions}
      />
      <FeatureJobComponent
        data={data.featured_projects}
        data1={data.popular_freelancers}
        data3={data.how_it_works}
      />
    </div>
  );
}

function Card({ data }) {
  return (
    <div class="xl:w-1/4 md:w-1/2 xl:p-4" bis_skin_checked="1">
      <div class="bg-gray-100 p-6 rounded-lg" bis_skin_checked="1">
        <img
          class="h-40 rounded w-full object-cover object-center mb-6"
          src={"https://dummyimage.com/722x402"}
          alt="content"
        />
        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {data.name}
        </h3>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          {data.projectName}
        </h2>
        <p class="leading-relaxed text-base">{data.description}</p>
        <Link class="mt-3 text-indigo-500 inline-flex items-center">
          {data.cta}
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function SocialMediaComponent({ social_media_solutions }) {
  return (
    <section className="relative xl:pt-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-500">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-pink-500 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  {social_media_solutions.heading}
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  {social_media_solutions.content}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <VscFeedback size={24} />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Digital Creatives Ltd.
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Thanks to Swarojgar, our social media presence grew
                      significantly. The targeted campaign broadened our
                      audience.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <VscFeedback size={24} />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      BrandBoost Inc.
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Swarojgar’s solutions were a game changer. The content
                      calendar boosted engagement and follower growth quickly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <VscFeedback size={24} />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Innovative Solutions Group
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Swarojgar's influencer outreach greatly improved our
                      brand’s online presence and engagement.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <VscFeedback size={24} />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      TechForward Enterprises
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Swarojgar streamlined our social media management, with
                      valuable insights from analytics and measurable ROI from
                      paid ads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
