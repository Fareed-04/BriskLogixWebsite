import { motion } from "framer-motion";
import Section from "../../components/Section";
import FeaturesSectionDemo2 from "../../components/ui/features-section-demo-2";
import { SparklesCore } from "../../components/ui/sparkles";

const BENEFITS = [
  {
    title: "Pre-Vetted Talent",
    description: "Every professional in our network goes through a rigorous technical assessment and comprehensive background check."
  },
  {
    title: "Rapid Onboarding",
    description: "Get the talent you need in days, not months. Our streamlined process cuts traditional hiring timelines by up to 75%."
  },
  {
    title: "Cultural Fit",
    description: "We match professionals not just on technical skills, but also on soft skills and cultural alignment with your team."
  },
  {
    title: "No Recruitment Fees",
    description: "Save thousands on recruitment costs. Our transparent pricing eliminates hidden fees and markups."
  },
  {
    title: "Flexible Terms",
    description: "Scale up or down as needed with no long-term commitments. Pay only for the hours you need."
  },
  {
    title: "Dedicated Support",
    description: "Our team provides ongoing support throughout the engagement to ensure smooth collaboration and maximum productivity."
  }
];

const WhyChooseUs = () => {
  return (
    <Section className="overflow-hidden py-16 relative" id="why-choose-us">
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="why-choose-us-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Additional focused sparkles around heading */}
      <div className="absolute inset-0 w-full h-[40%] top-[10%]">
        <SparklesCore
          id="heading-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#AC6AFF"
        />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-[62rem] mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h2 mb-10 max-w-4xl mx-auto"
          >
            At <span className="text-purple-gradient">BriskLogix</span>, we stand apart through our commitment to quality, flexibility, and transparent partnership.
          </motion.h2>
        </div>

        <div className="relative">
          <FeaturesSectionDemo2 />
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs; 