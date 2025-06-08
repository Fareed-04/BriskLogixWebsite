import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MouseParallax } from "react-just-parallax";
import Section from "../../components/Section";
import { SparklesCore } from "../../components/ui/sparkles";

const ProcessDiagram = () => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const processSteps = [
    {
      id: 1,
      title: "Requirements Analysis",
      description: "Understanding your project needs and skill requirements",
      icon: "🔍",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-400/50"
    },
    {
      id: 2,
      title: "Talent Matching",
      description: "Finding perfect developers from our vetted pool",
      icon: "🎯",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-400/50"
    },
    {
      id: 3,
      title: "Interviews & Selection",
      description: "Conducting interviews and technical assessments",
      icon: "💬",
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/50"
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "Continuous monitoring and project support",
      icon: "🛠️",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/50"
    },
    {
      id: 5,
      title: "Flexible Scaling",
      description: "Easy team scaling based on project needs",
      icon: "📈",
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-400/50"
    }
  ];

  const ArrowIcon = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
      className="hidden lg:flex items-center justify-center mx-3"
    >
      <div className="relative flex items-center">
        {/* Arrow Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 1 + (index * 0.2) }}
          className="w-12 h-0.5 bg-gradient-to-r from-color-1 to-purple-400 origin-left"
        />
        {/* Arrow Head */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: 1.2 + (index * 0.2) }}
          className="relative ml-[-4px]"
        >
          <div className="w-0 h-0 border-l-[8px] border-l-color-1 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  const ProcessCard = ({ step, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + (index * 0.15),
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="group relative w-full"
    >
      {/* Main Card */}
      <div className={`relative p-5 rounded-2xl ${step.bgColor} ${step.borderColor} border-2 backdrop-blur-md shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-[240px] w-[180px] flex flex-col justify-between`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-2xl group-hover:opacity-15 transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="relative z-10 w-14 h-14 mx-auto mb-3 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        >
          <span className="text-2xl">{step.icon}</span>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 leading-tight">
            {step.title}
          </h3>
          <p className="text-xs text-n-3 leading-relaxed px-1">
            {step.description}
          </p>
        </div>

        {/* Step Number */}
        <div className="absolute -top-2 -left-2 w-7 h-7 bg-color-1 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
          {step.id}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-color-1/0 via-color-1/0 to-color-1/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <ProcessCard step={step} index={index} />
              {index < processSteps.length - 1 && <ArrowIcon index={index} />}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6 max-w-[200px] mx-auto">
        {processSteps.map((step, index) => (
          <div key={step.id} className="relative flex justify-center">
            <ProcessCard step={step} index={index} />
            {index < processSteps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                className="absolute left-1/2 -bottom-3 w-0.5 h-6 bg-gradient-to-b from-color-1 to-purple-400 transform -translate-x-1/2 origin-top"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const BackgroundElements = ({ parallaxRef }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <MouseParallax strength={0.03} parallaxContainerRef={parallaxRef}>
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-color-1/20 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/15 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-color-1/25 rounded-full" />
        <div className="absolute top-2/3 right-1/6 w-5 h-5 bg-purple-500/20 rounded-full" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-color-1/10 to-purple-600/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-xl"
        />
      </MouseParallax>
    </div>
  );
};

const Process = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="py-20 relative overflow-hidden" id="process">
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="process-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(172,106,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl" ref={parallaxRef}>
        {/* Background Elements */}
        <BackgroundElements parallaxRef={parallaxRef} />
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h2 mb-6 bg-gradient-to-r from-white to-color-1 bg-clip-text text-transparent"
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="body-1 text-n-3 max-w-3xl mx-auto"
          >
            From initial consultation to ongoing support, we follow a structured approach 
            to ensure you get the right talent for your project needs.
          </motion.p>
        </motion.div>

        {/* Process Diagram */}
        <div className="flex justify-center mb-16">
          <ProcessDiagram />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-n-2 mb-6">
            Ready to scale your team with top-tier talent?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-color-1 text-white rounded-lg font-semibold hover:bg-color-1/90 transition-colors duration-300 shadow-lg hover:shadow-color-1/25"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Process;