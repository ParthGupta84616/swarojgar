import React from "react";
import CategoriesHeroBanner from "../components/CategoriesHeroBanner";
import { Link } from "react-router-dom";
import { VscFeedback } from "react-icons/vsc";
import FeatureJobComponent from "../components/FeatureJobComponent";
import {data} from "../db/db.js"
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
          src={data.img}
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
