import Section from "../../components/Section";
import { SparklesCore } from "../../components/ui/sparkles";
import { motion } from "framer-motion";

const TALENT_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Vue.js", "Angular", "Next.js", "JavaScript/TypeScript", "HTML/CSS", "Responsive Design"],
    icon: "/src/assets/staff-augmentation/frontend-icon.svg"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Java", "PHP", "C#/.NET", "Ruby on Rails", "Express.js", "Django", "Laravel"],
    icon: "/src/assets/staff-augmentation/backend-icon.svg"
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin/Java)", "Xamarin", "Mobile UI/UX", "App Testing"],
    icon: "/src/assets/staff-augmentation/mobile-icon.svg"
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
    icon: "/src/assets/staff-augmentation/devops-icon.svg"
  },
  {
    title: "AI & Machine Learning",
    skills: ["Data Science", "ML Engineering", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Model Deployment"],
    icon: "/src/assets/staff-augmentation/ai-ml-icon.svg"
  },
  {
    title: "QA & Testing",
    skills: ["Manual Testing", "Automated Testing", "Selenium", "Cypress", "API Testing", "Performance Testing", "Security Testing"],
    icon: "/src/assets/staff-augmentation/qa-icon.svg"
  }
];

const TalentCard = ({ category }) => {
  return (
    <div className="h-full min-h-[320px] flex flex-col p-8 bg-n-7 border border-n-6 rounded-2xl relative z-10">
      <div className="flex flex-col h-full">
        <div className="mb-6 flex items-center">
          <img 
            src={category.icon}
            alt={category.title}
            className="w-16 h-16 mr-4"
          />
          <h4 className="h4 text-white">{category.title}</h4>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {category.skills.map((skill, skillIndex) => (
            <span 
              key={skillIndex}
              className="px-3 py-1.5 bg-gray-600/60 text-white rounded-full text-xs font-medium backdrop-blur-sm border border-gray-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TalentCategories = () => {
  return (
    <>
      {/* Heading Section with Plain Sparkles Background */}
      <Section className="relative py-20" id="talent-heading">
        {/* Background Sparkles */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="heading-sparkles"
            background="transparent"
            minSize={0.8}
            maxSize={2.0}
            particleDensity={150}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        {/* Focused Purple Sparkles */}
        <div className="absolute inset-0 w-full h-[70%] top-[15%]">
          <SparklesCore
            id="purple-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#AC6AFF"
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif", letterSpacing: '-0.02em' }}
          >
            OUR TALENT 
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-black">
              EXPERTISE
            </span>
          </motion.h1>
        </div>
      </Section>

      {/* Cards Section with Extended Sparkles Behind and Above Cards */}
      <Section className="overflow-hidden relative -mt-16" id="expertise">
        {/* Background Sparkles extending behind cards */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="talent-cards-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.0}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        {/* Additional sparkles above the cards area */}
        <div className="absolute inset-0 w-full h-[40%] top-0">
          <SparklesCore
            id="above-cards-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#AC6AFF"
          />
        </div>
        
        {/* Sparkles specifically behind the cards area */}
        <div className="absolute inset-0 w-full h-[70%] bottom-0">
          <SparklesCore
            id="behind-cards-sparkles"
            background="transparent"
            minSize={0.3}
            maxSize={0.8}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#18CCFC"
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[2rem] md:pt-8 lg:pt-12">
            {TALENT_CATEGORIES.map((category, index) => (
              <TalentCard key={index} category={category} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default TalentCategories; 