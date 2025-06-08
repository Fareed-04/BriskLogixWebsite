import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";
import Section from "../../components/Section";
import Button from "../../components/Button";
import { curve } from "../../assets";

// Floating Background Elements
const FloatingElements = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <MouseParallax strength={0.05} parallaxContainerRef={parallaxRef}>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-color-1/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-color-1/20 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-color-1/25 rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-color-1/15 rounded-full" />
      </MouseParallax>
    </div>
  );
};

// Dashboard UI Component for Right Side
const DashboardComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const teamMembers = [
    { name: "Sarah Chen", role: "Frontend Developer", status: "online", avatar: "👩‍💻" },
    { name: "Alex Rodriguez", role: "Backend Developer", status: "online", avatar: "👨‍💻" },
    { name: "Maya Patel", role: "UI/UX Designer", status: "busy", avatar: "👩‍🎨" },
    { name: "James Wilson", role: "DevOps Engineer", status: "online", avatar: "👨‍🔧" }
  ];

  const projects = [
    { name: "E-commerce Platform", progress: 85, status: "In Progress" },
    { name: "Mobile App", progress: 60, status: "Development" },
    { name: "API Integration", progress: 95, status: "Review" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 50 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Main Dashboard Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-semibold text-white">Team Dashboard</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-n-3">Live</span>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-5">
          <h4 className="text-xs font-medium text-color-1 mb-3">Active Team Members</h4>
          <div className="space-y-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="text-lg">{member.avatar}</div>
                <div className="flex-1">
                  <p className="text-white text-xs font-medium">{member.name}</p>
                  <p className="text-n-3 text-xs">{member.role}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  member.status === 'online' ? 'bg-green-400' : 
                  member.status === 'busy' ? 'bg-yellow-400' : 'bg-gray-400'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h4 className="text-xs font-medium text-color-1 mb-3">Current Projects</h4>
          <div className="space-y-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                className="p-2 rounded-lg bg-white/5"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-xs font-medium">{project.name}</p>
                  <span className="text-xs text-color-1">{project.status}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <motion.div
                    className="bg-color-1 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 1.2 + (index * 0.2) }}
                  ></motion.div>
                </div>
                <p className="text-xs text-n-3 mt-1">{project.progress}% Complete</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute -top-3 -right-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-3 shadow-xl"
      >
        <div className="text-center">
          <p className="text-lg font-bold text-white">150+</p>
          <p className="text-xs text-color-1">Developers</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="absolute -bottom-3 -left-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-3 shadow-xl"
      >
        <div className="text-center">
          <p className="text-lg font-bold text-white">24/7</p>
          <p className="text-xs text-color-1">Support</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section id="hero" className="pt-[12rem] -mt-[5.25rem] pb-16 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(172,106,255,0.1),transparent_50%)]" />
      
      <div className="container px-4 mx-auto relative z-10 max-w-7xl" ref={parallaxRef}>
        {/* Background Elements */}
        <FloatingElements parallaxRef={parallaxRef} />
        
        {/* Hero Content - Left/Right Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh] py-8">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.h1 
              className="h1 mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center lg:text-left">
                Elite Talent, On-Demand: <br />
                <span className="inline-block relative text-color-1">
                  Scale Your Team with BriskLogix{" "}
                  <img
                    src={curve}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-full xl:-mt-2 opacity-60"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="body-1 mb-8 text-n-2 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Access pre-vetted developers, designers, and tech specialists who seamlessly integrate with your team. 
              Get the talent you need, when you need it.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <Button href="#contact-form" white>
                Augment Your Team Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Component */}
          <div className="relative flex justify-center lg:justify-end">
            <DashboardComponent />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero; 