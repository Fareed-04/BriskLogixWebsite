import { cn } from "../../lib/utils";
import { 
  check, 
  benefitIcon1, 
  benefitIcon2, 
  benefitIcon3, 
  benefitIcon4,
  recording01,
  recording03,
  sliders04,
  chromecast
} from "../../assets";

export default function FeaturesSectionDemo2() {
  const features = [
    {
      title: "Pre-Vetted Talent",
      description: "Every professional in our network goes through a rigorous technical assessment and comprehensive background check.",
      icon: <img src={benefitIcon1} alt="Pre-Vetted Talent" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "Rapid Onboarding", 
      description: "Get the talent you need in days, not months. Our streamlined process cuts traditional hiring timelines by up to 75%.",
      icon: <img src={benefitIcon2} alt="Rapid Onboarding" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "Cultural Fit",
      description: "We match professionals not just on technical skills, but also on soft skills and cultural alignment with your team.",
      icon: <img src={benefitIcon3} alt="Cultural Fit" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "No Recruitment Fees",
      description: "Save thousands on recruitment costs. Our transparent pricing eliminates hidden fees and markups.",
      icon: <img src={benefitIcon4} alt="No Recruitment Fees" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "Flexible Terms",
      description: "Scale up or down as needed with no long-term commitments. Pay only for the hours you need.",
      icon: <img src={recording01} alt="Flexible Terms" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "Dedicated Support",
      description: "Our team provides ongoing support throughout the engagement to ensure smooth collaboration and maximum productivity.",
      icon: <img src={recording03} alt="Dedicated Support" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality checks and continuous monitoring ensure your projects meet the highest standards.",
      icon: <img src={sliders04} alt="Quality Assurance" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
    {
      title: "Global Talent Pool",
      description: "Access to a worldwide network of skilled professionals across all time zones and expertise areas.",
      icon: <img src={chromecast} alt="Global Talent Pool" width={24} height={24} className="text-neutral-600 dark:text-neutral-400" />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-n-6",
        (index === 0 || index === 4) && "lg:border-l border-n-6",
        index < 4 && "lg:border-b border-n-6"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-n-7 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-n-7 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-n-4">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-n-6 group-hover/feature:bg-color-1 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-n-1">
          {title}
        </span>
      </div>
      <p className="text-sm text-n-3 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 