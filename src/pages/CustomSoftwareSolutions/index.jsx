import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { FlickeringGrid } from "../../components/magicui/flickering-grid";
import HeroScrollDemo from "../../components/ui/container-scroll-animation-demo";
import { motion } from "motion/react";
import { collabApps } from "../../constants";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const CustomSoftwareSolutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Custom Software Solutions',
    serviceType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Check if we're in development or production
      const isDevelopment = import.meta.env.DEV;
      
      if (isDevelopment) {
        // In development, just simulate a successful response
        console.log('Form submitted in development mode:', formData);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate successful submission
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          service: 'Custom Software Solutions',
          serviceType: '',
          description: ''
        });
      } else {
        // In production, send the request to the API
        try {
          console.log('Sending form data to API:', formData);
          
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          // Check if the response is JSON
          const contentType = response.headers.get("content-type");
          
          let data;
          let errorText = '';
          
          try {
            if (contentType && contentType.includes("application/json")) {
              data = await response.json();
            } else {
              // If not JSON, get the text and log it
              errorText = await response.text();
              console.error('Non-JSON response received:', errorText);
              throw new Error("Server returned a non-JSON response. Please try again later.");
            }
          } catch (parseError) {
            console.error('Error parsing response:', parseError);
            throw new Error(`Failed to parse server response. ${errorText ? `Response text: ${errorText.substring(0, 100)}...` : ''}`);
          }
          
          if (!response.ok) {
            throw new Error(data.error || data.details || 'Something went wrong. Please try again.');
          }
          
          // Check if there's a redirect URL in the response
          if (data.redirectUrl) {
            // Redirect after a short delay to show the success message
            setSubmitSuccess(true);
            setTimeout(() => {
              window.location.href = data.redirectUrl;
            }, 2000);
          } else {
            // Just show success message without redirect
            setSubmitSuccess(true);
          }
          
          setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            service: 'Custom Software Solutions',
            serviceType: '',
            description: ''
          });
        } catch (fetchError) {
          console.error('Fetch error:', fetchError);
          if (fetchError.message.includes('JSON')) {
            throw new Error('Server error. This is likely due to a misconfigured API route on the server. Please contact the administrator.');
          } else {
            throw new Error('Network error. Please check your connection and try again.');
          }
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError(null);
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // Extended tech stack with 20+ technologies
  const extendedTechStack = [
    ...collabApps, // Original 8 technologies
    {
      id: "8",
      title: "Vue.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "9", 
      title: "Angular",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "10",
      title: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "11",
      title: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "12",
      title: "Kubernetes",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      width: 32,
      height: 32,
    },
    {
      id: "13",
      title: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "14",
      title: "GraphQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
      width: 32,
      height: 32,
    },
    {
      id: "15",
      title: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "16",
      title: "Redis",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "17",
      title: "Laravel",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
      width: 32,
      height: 32,
    },
    {
      id: "18",
      title: "Django",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
      width: 32,
      height: 32,
    },
    {
      id: "19",
      title: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "20",
      title: "Firebase",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      width: 32,
      height: 32,
    }
  ];
  const services = [
    {
      title: "Web Development",
      description: "Build responsive, scalable web applications using modern frameworks and technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "From simple websites to complex web platforms, we create digital experiences that engage and convert.",
      features: ["React/Vue/Angular", "Node.js Backend", "Database Integration", "API Development"]
    },
    {
      title: "Mobile App Development", 
      description: "Create native and cross-platform mobile applications for iOS and Android.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
      hoverText: "Transform your ideas into powerful mobile apps that users love and businesses depend on.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Progressive Web Apps"]
    },
    {
      title: "Enterprise Solutions",
      description: "Develop robust enterprise software solutions that scale with your business.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Enterprise-grade software that grows with your organization and adapts to changing needs.",
      features: ["Microservices Architecture", "Cloud Integration", "Enterprise Security", "Scalable Infrastructure"]
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, efficient, and maintainable applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Breathe new life into your legacy systems with modern architecture and technologies.",
      features: ["Code Refactoring", "Database Migration", "API Integration", "Performance Optimization"]
    },
    {
      title: "SaaS Solutions",
      description: "Build Software-as-a-Service platforms with multi-tenancy and subscription management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Complete SaaS platforms that handle everything from user management to billing automation.",
      features: ["Multi-tenant Architecture", "Subscription Management", "Analytics Dashboard", "API-first Design"]
    },
    {
      title: "Ongoing Maintenance",
      description: "Provide continuous support, updates, and enhancements for your software solutions.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Keep your software running smoothly with our comprehensive maintenance and support services.",
      features: ["24/7 Support", "Security Updates", "Performance Monitoring", "Feature Enhancements"]
    }
  ];

  const industries = [
    {
      title: "Real Estate",
      description: "Property management, CRM systems, and virtual tour platforms.",
      icon: "🏢"
    },
    {
      title: "Manufacturing",
      description: "Supply chain management, inventory tracking, and quality control systems.",
      icon: "🏭"
    },
    {
      title: "Retail",
      description: "Point-of-sale systems, inventory management, and customer analytics.",
      icon: "🛍️"
    },
    {
      title: "Transportation/Logistics",
      description: "Fleet management, route optimization, and tracking systems.",
      icon: "🚛"
    },
    {
      title: "E-commerce",
      description: "Online stores, payment gateways, and marketplace platforms.",
      icon: "💳"
    },
    {
      title: "Textile/Clothing",
      description: "Fashion design tools, inventory management, and supply chain optimization.",
      icon: "👕"
    }
  ];

  const agileSteps = [
    { step: "Plan", description: "Define requirements and project roadmap" },
    { step: "Design", description: "Create user-centric designs and prototypes" },
    { step: "Develop", description: "Build features using iterative development" },
    { step: "Test", description: "Ensure quality through comprehensive testing" },
    { step: "Deploy", description: "Release to production with CI/CD pipelines" },
    { step: "Review", description: "Gather feedback and plan next iteration" }
  ];

  const whyChooseUs = [
    {
      title: "Proven Expertise",
      description: "Extensive experience delivering successful projects across various industries",
      icon: "⭐"
    },
    {
      title: "Scalable Solutions",
      description: "Build software that grows with your business needs and adapts to change",
      icon: "📈"
    },
    {
      title: "24/7 Support",
      description: "Continuous support and maintenance to keep your software running smoothly",
      icon: "🛠️"
    }
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Modern Hero Section */}
        <Section id="hero" className="pt-[12rem] md:pt-[20rem] -mt-[5.25rem] pb-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
          
          <div className="container px-4 mx-auto relative z-10 max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 min-h-[80vh] py-12">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                >
                  Custom Software Solutions{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">
                    Tailored to Your Needs
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-4 text-lg font-normal text-n-3 sm:mt-8"
                >
                  Web, Mobile, Enterprise, Legacy Systems, SaaS, and Beyond – Designed for Your Growth. 
                  Transform your ideas into powerful digital solutions that drive business success.
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8 grid grid-cols-3 gap-8"
                >
                                   <div>
                   <div className="text-2xl font-bold text-white">5+</div>
                   <div className="text-sm text-n-3">Years Experience</div>
                 </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-n-3">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-n-3">Support Available</div>
                  </div>
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 sm:mt-12"
                >
                  <Button href="#what-we-do" className="text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 text-center">
                    <span className="hidden sm:inline">Start Building Your Custom Solution Today</span>
                    <span className="sm:hidden">Get Started Today</span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Side - Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Background Blob */}
                <div className="absolute inset-0">
                  <svg
                    className="blur-3xl filter opacity-40"
                    style={{ filter: "blur(64px)" }}
                    width="444"
                    height="536"
                    viewBox="0 0 444 536"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                      fill="url(#blob-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="blob-gradient"
                        x1="82.7339"
                        y1="550.792"
                        x2="-39.945"
                        y2="118.965"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#AC6AFF" />
                        <stop offset="100%" stopColor="#FFC876" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating Tech Icons */}
                <div className="relative w-full max-w-lg mx-auto h-[500px]">
                  {/* Code Icon - Top Left */}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute top-10 left-10 z-20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Mobile Icon - Top Right */}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="absolute top-10 right-10 z-20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 16a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Database Icon - Bottom Left */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="absolute bottom-10 left-10 z-20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Cloud Icon - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="absolute bottom-10 right-10 z-20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Center Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center z-30"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">Custom</div>
                        <div className="text-white font-bold text-lg">Software</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* What We Do Section - Modern Cards with Hover Effects */}
        <Section id="what-we-do" className="py-20">
          <div className="container">
            <Heading
              tag="Our Services"
              title="How We Transform Your Ideas"
              text="Discover our comprehensive suite of custom software development services designed to elevate your business"
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Title - Always visible, aligned to center */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 px-8">
                    <h3 className="text-2xl font-bold text-white text-center group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Hover Content - Slides in from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <div className="h-full flex flex-col justify-end p-8">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed mb-4">
                          {service.hoverText}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <button 
                          onClick={() => window.location.href = '/contact-us'}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Tech Stack Section - Revolving Diagram */}
        <Section id="tech-stack" className="py-20 bg-n-8">
          <div className="container">
            <Heading
              tag="Technologies"
              title="Our Technology Stack"
              text="Powered by cutting-edge technologies and frameworks"
            />
            
            <div className="flex justify-center mt-16">
              <div className="relative w-96 h-96">
                {/* Central Hub */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">20+</div>
                      <div className="text-white text-sm opacity-80">Technologies</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Dual-Orbit Revolving Tech Icons */}
                {extendedTechStack.map((app, index) => {
                  // Split into two orbits: inner (first 10) and outer (remaining)
                  const isInnerOrbit = index < 10;
                  const orbitIndex = isInnerOrbit ? index : index - 10;
                  const orbitSize = isInnerOrbit ? 10 : extendedTechStack.length - 10;
                  
                  const angle = (orbitIndex * (360 / orbitSize)) - 90;
                  const radian = (angle * Math.PI) / 180;
                  const radius = isInnerOrbit ? 120 : 180; // Inner orbit closer, outer orbit further
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  return (
                    <motion.div
                      key={app.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        animate={{ 
                          rotate: isInnerOrbit ? 360 : -360,
                        }}
                        transition={{
                          duration: isInnerOrbit ? 5 : 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl cursor-pointer"
                      >
                        <img 
                          src={app.icon} 
                          alt={app.title}
                          width={app.width}
                          height={app.height}
                          className="object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* Agile Methodology - Enhanced with Floating Descriptions */}
        <Section id="agile" className="py-20">
          <div className="container">
            <Heading
              tag="Our Process"
              title="Agile Development Process"
              text="We follow proven Agile principles with transparent communication and iterative development"
            />
            
            <div className="relative flex justify-center mt-20 overflow-hidden">
              <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] transform scale-50 sm:scale-75 lg:scale-100 origin-center">
                {/* Agile Cycle Diagram with Floating Descriptions */}
                {agileSteps.map((item, index) => {
                  const angle = (index * 60) - 90; // Starting from top
                  const radian = (angle * Math.PI) / 180;
                  
                  // Use fixed radius that scales with container
                  const radius = 200;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  // Description box position
                  const descRadius = 300;
                  let descX = Math.cos(radian) * descRadius;
                  let descY = Math.sin(radian) * descRadius;
                  
                  // Smart positioning to avoid overlap and keep within bounds
                  const quadrantX = Math.cos(radian) > 0 ? 1 : -1;
                  const quadrantY = Math.sin(radian) > 0 ? 1 : -1;
                  
                  // Adjust based on position to prevent overflow
                  descX = Math.max(-280, Math.min(280, descX + (quadrantX * 80)));
                  descY = Math.max(-280, Math.min(280, descY + (quadrantY * 40)));
                  
                  return (
                    <div key={index}>
                      {/* Step Circle */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="absolute w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl"
                        style={{
                          left: `calc(50% + ${x}px - 2.5rem)`,
                          top: `calc(50% + ${y}px - 2.5rem)`,
                        }}
                      >
                        {index + 1}
                      </motion.div>
                      
                      {/* Floating Description Box */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        className="absolute bg-n-7 rounded-2xl p-4 shadow-xl border border-n-6 max-w-[180px]"
                        style={{
                          left: `calc(50% + ${descX}px - 90px)`,
                          top: `calc(50% + ${descY}px - 40px)`,
                        }}
                      >
                        <h4 className="text-white font-bold text-sm mb-2">{item.step}</h4>
                        <p className="text-n-3 text-xs leading-tight">{item.description}</p>
                      </motion.div>
                      
                      {/* Connection Line */}
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        className="absolute pointer-events-none"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                      />
                    </div>
                  );
                })}
                
                {/* Center Circle - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">AGILE</div>
                      <div className="text-white text-sm opacity-80">Process</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* Industries We Serve - Enhanced Design */}
        <Section id="industries" className="py-20 bg-gradient-to-br from-n-8 via-purple-900/10 to-pink-900/10">
          <div className="container">
            <Heading
              tag="Industries"
              title="Industries We Serve"
              text="Delivering specialized solutions across diverse sectors with proven expertise and innovation"
            />
            

            
            {/* Industry Cards with Enhanced Design */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  {/* Card Background with Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-n-7 to-n-8 rounded-3xl p-8 text-center m-0.5 transition-all duration-300 group-hover:m-0 h-72 flex flex-col justify-center">
                    
                    {/* Floating Icon with Animation */}
                    <motion.div 
                      whileHover={{ y: -10, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-6xl mb-6 inline-block"
                    >
                      {industry.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {industry.title}
                    </h4>
                    <p className="text-n-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6">
                      {industry.description}
                    </p>
                    

                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section with Why Choose Us - Left/Right Layout */}
        <Section id="contact" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Why Choose Brisk Logix + CTA Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Main CTA Header */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Ideas into 
                    <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> Reality?</span>
                  </h2>
                  <p className="text-lg text-n-3 leading-relaxed mb-8">
                    Let's discuss your custom software requirements and create a solution that drives your business forward. 
                    Our team is ready to turn your vision into powerful digital reality.
                  </p>
                </div>

                {/* Why Choose Us Cards */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Brisk Logix?</h3>
                  <div className="space-y-6">
                    {whyChooseUs.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 bg-n-7/30 rounded-2xl backdrop-blur-sm border border-n-6/30 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div className="text-3xl mt-1">{item.icon}</div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-n-3 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Free</div>
                    <div className="text-sm text-n-3">Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24h</div>
                    <div className="text-sm text-n-3">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-n-3">Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Enhanced Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-n-7/80 to-n-8/80 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-2 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Start Your Custom Software Journey
                      </h3>
                      <p className="text-n-3">Tell us about your project and get a free consultation</p>
                    </div>
                    
                    {submitSuccess && (
                      <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-300">
                        <p className="text-center">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                      </div>
                    )}
                    
                    {submitError && (
                      <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-300">
                        <p className="text-center">{submitError}</p>
                      </div>
                    )}
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* Name and Company Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-purple-300 text-sm font-medium">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                            placeholder="Enter your name"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-purple-300 text-sm font-medium">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                            placeholder="Company name"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                      </div>

                      {/* Email and Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-purple-300 text-sm font-medium">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                            placeholder="your@email.com"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-purple-300 text-sm font-medium">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                            placeholder="+1 (555) 000-0000"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                      </div>

                      {/* Type of Service */}
                      <div className="space-y-2">
                        <label className="block text-purple-300 text-sm font-medium">Type of Service</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                          disabled={isSubmitting}
                          required
                        >
                          <option value="">Select a service type</option>
                          <option value="Custom Web Application">Custom Web Application</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Desktop Software">Desktop Software</option>
                          <option value="API Development">API Development</option>
                          <option value="Database Solutions">Database Solutions</option>
                          <option value="Enterprise Software">Enterprise Software</option>
                          <option value="Software Integration">Software Integration</option>
                          <option value="Legacy System Modernization">Legacy System Modernization</option>
                          <option value="Full Software Suite">Full Software Suite</option>
                        </select>
                      </div>

                      {/* Project Description */}
                      <div className="space-y-2">
                        <label className="block text-purple-300 text-sm font-medium">Project Description</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-32 resize-none"
                          placeholder="Tell us about your project requirements, timeline, and goals..."
                          disabled={isSubmitting}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                      </button>
                      
                      <p className="text-center text-xs text-n-4 mt-4">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default CustomSoftwareSolutions; 