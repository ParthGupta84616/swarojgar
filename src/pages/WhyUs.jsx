import React from "react";
import WhyUsFeatures from "../components/WhyUsFeatures";
import advantages from "../assets/Advantages.jpg";
import TestimonialUser from "../components/TestimonialUser";
import WhyUsHeroSection from "../components/WhyUsHeroSection";
import FAQ from "../components/FAQ";
import FeaturesSection from "../components/FeaturesSection";


const testimonialUser = [
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
];
const faqItems = [
  {
    "question": "What unique features does Swarojgar offer?",
    "answer": "Swarojgar provides features like project catalog for pre-built projects, secure escrow payment system, group freelancing, multilingual support, and an achievement leaderboard."
  },
  {
    "question": "Can I form teams to work on bigger projects?",
    "answer": "Yes, Swarojgar offers a team freelancing feature that allows you to collaborate with other freelancers on large projects."
  },
  {
    "question": "How does Swarojgar ensure data security?",
    "answer": "We use NDA contracts to maintain confidentiality between freelancers and clients. Additionally, all financial transactions are handled through a secure escrow account."
  },
  {
    "question": "Is there support for non-English clients and freelancers?",
    "answer": "Absolutely! Swarojgar offers multilingual support, allowing freelancers and clients from around the world to collaborate seamlessly."
  },
  {
    "question": "What is the escrow system?",
    "answer": "The escrow system ensures that payments are held securely until the work is completed to the client’s satisfaction. It protects both freelancers and clients."
  },
  {
    "question": "Are there any benefits for women freelancers?",
    "answer": "Yes! Women freelancers get a 50% exemption on service fees to promote diversity and empower women in the freelancing sector."
  },
  {
    "question": "What is the project catalog feature?",
    "answer": "Freelancers can showcase pre-built projects in the project catalog, allowing clients to purchase ready-made solutions without starting from scratch."
  },
  {
    "question": "How does the leaderboard work?",
    "answer": "Swarojgar’s leaderboard ranks freelancers based on their performance, helping them gain visibility and attract more clients based on achievements."
  }
];
const advantages_in_detail= [
  {
    "title": "Escrow Payments for Transparency",
    "description": "Both clients and freelancers are protected through our escrow payment system. Funds are only released after the project is completed and both parties are satisfied."
  },
  {
    "title": "Skill-Based Matching, Not Degrees",
    "description": "Unlike other platforms that prioritize education, Swarojgar focuses on connecting freelancers with clients based on their skills and portfolio, giving opportunities to a wider range of professionals."
  },
  {
    "title": "Group Freelancing for Large Projects",
    "description": "Swarojgar allows freelancers to form teams and bid on larger contracts, which promotes collaboration and enables the completion of complex projects."
  },
  {
    "title": "Diversity Initiatives for Women Freelancers",
    "description": "By providing 50% exemption on service fees for women freelancers, Swarojgar is helping to create a more inclusive and diverse workforce in the freelancing industry."
  },
  {
    "title": "Multilingual Support for Global Reach",
    "description": "With integrated multilingual support, Swarojgar breaks language barriers, allowing clients and freelancers from different countries to communicate and collaborate efficiently."
  },
  {
    "title": "Community Events and Networking",
    "description": "Regularly scheduled community events and networking opportunities help freelancers and clients build lasting professional relationships, expanding their reach beyond the platform."
  },
  {
    "title": "NDA Contracts for Confidentiality",
    "description": "Swarojgar implements NDA contracts to ensure that all project details and sensitive information remain confidential between clients and freelancers, providing peace of mind for both parties."
  },
  {
    "title": "Achievement Badges and Leaderboard",
    "description": "Freelancers can earn achievement badges and climb the leaderboard, giving them increased visibility on the platform. This motivates freelancers to continuously improve and excel in their work."
  }
]

function WhyUs() {
  return (
    <div>
      <WhyUsHeroSection />
      <TestimonialUser testimonials={testimonialUser} />;
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
        features={advantages_in_detail}
      />
      <FAQ faqItems={faqItems} />
    </div>
  );
}

export default WhyUs;
