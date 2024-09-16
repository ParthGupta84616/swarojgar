import React from "react";
import WhyUsFeatures from "../components/WhyUsFeatures";
import advantages from "../assets/Advantages.jpg";
import TestimonialUser from "../components/TestimonialUser";
import WhyUsHeroSection from "../components/WhyUsHeroSection";
import FAQ from "../components/FAQ";
import FeaturesSection from "../components/FeaturesSection";
import { WhyUsData } from "../db/db";

function WhyUs() {
  return (
    <div>
      <WhyUsHeroSection />
      <TestimonialUser testimonials={WhyUsData.testimonialUser} />;
      <WhyUsFeatures
        title="Swarojgar - Start Your Freelancing Career Journey With Us"
        description="At Swarojgar, we make finding the perfect freelancing job effortless. Our platform seamlessly connects you with opportunities that match your skills and interests. Plus, get instant support for all your queries, completely free of charge. Start your journey towards the ideal freelance career today!"
        advantages={[
          "Secure",
          "Diverse",
          "Empowering Womens",
          "Secure",
          "Global",
          "Skill-Focused",
        ]}
        alt={true}
        imgSRC={advantages}
      />
      <FeaturesSection
        title="All the features you want"
        description="Robust features that make Swarojgar the best platform for freelancers and clients alike."
        features={WhyUsData.advantages_in_detail}
      />
      <FAQ faqItems={WhyUsData.faqItems} />
    </div>
  );
}

export default WhyUs;
