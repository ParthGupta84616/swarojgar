import React from "react";
import JobHeroSection from "../components/JobHeroSection";
import JobsTestimonial from "../components/JobsTestimonial";
import JobsWhyPostOnUs from "../components/JobsWhyPostOnUs";
import {JobsData} from "../db/db.js";



function Jobs() {
  return (
    <div>
      <JobHeroSection data={JobsData.hero_section} />
      <JobsWhyPostOnUs whyJoinUs={JobsData.post_project_section.benefits_section} />
      <JobsTestimonial testimonialsData={JobsData.freelancer_success_stories} />
    </div>
  );
}

export default Jobs;
