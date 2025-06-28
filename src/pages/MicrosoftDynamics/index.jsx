import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { FlickeringGrid } from "../../components/ui/flickering-grid";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const MicrosoftDynamics = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Microsoft Dynamics 365 ERP',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          service: 'Microsoft Dynamics 365 ERP',
          description: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // Microsoft Tech Stack
  const microsoftTechStack = [
    {
      id: "1",
      title: "Microsoft Azure",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "2",
      title: "Microsoft 365",
      icon: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "3",
      title: "Dynamics 365",
      icon: "https://img.icons8.com/color/48/microsoft-dynamics-365.png",
      width: 32,
      height: 32,
    },
    {
      id: "4",
      title: "Power BI",
      icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "5",
      title: "Power Apps",
      icon: "https://img.icons8.com/color/48/power-apps.png",
      width: 32,
      height: 32,
    },
    {
      id: "6",
      title: "SQL Server",
      icon: "https://www.vectorlogo.zone/logos/microsoft_sql_server/microsoft_sql_server-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "7",
      title: "Power Automate",
      icon: "https://img.icons8.com/color/48/microsoft-flow.png",
      width: 32,
      height: 32,
    },
    {
      id: "8",
      title: "SharePoint",
      icon: "https://www.vectorlogo.zone/logos/microsoft_sharepoint/microsoft_sharepoint-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "9",
      title: "Teams",
      icon: "https://www.vectorlogo.zone/logos/microsoft_teams/microsoft_teams-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "10",
      title: "Azure AI",
      icon: "https://img.icons8.com/color/48/artificial-intelligence.png",
      width: 32,
      height: 32,
    },
    {
      id: "11",
      title: "Machine Learning",
      icon: "https://img.icons8.com/color/48/machine-learning.png",
      width: 32,
      height: 32,
    },
    {
      id: "12",
      title: "PowerShell",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-original.svg",
      width: 32,
      height: 32,
    }
  ];

  const navigate = useNavigate();

  const services = [
    {
      title: "Finance Management",
      description: "Enhanced financial oversight with advanced analytics and automation for budgeting, cash flow, and compliance.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Empower your business with AI-driven insights for smarter decision-making and financial forecasting.",
      features: ["Advanced Analytics", "Automation", "Compliance", "AI Insights"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Real-time visibility into inventory, demand planning, and vendor management with comprehensive logistics insights.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Streamline your supply chain with reduced downtime and increased responsiveness across all touchpoints.",
      features: ["Real-time Visibility", "Demand Planning", "Vendor Management", "Logistics Insights"]
    },
    {
      title: "Project Operations",
      description: "Complete project management solution from planning to execution with optimized resource allocation and tracking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Optimize resource allocation, manage budgets, and track progress in real-time for better project delivery.",
      features: ["Project Planning", "Resource Allocation", "Budget Management", "Real-time Tracking"]
    },
    {
      title: "Human Resource Management",
      description: "Streamlined HR operations with performance tracking, talent acquisition, and compliance management solutions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Enhance employee experiences with self-service portals and workforce management tools.",
      features: ["Performance Tracking", "Talent Acquisition", "Compliance", "Self-service Portals"]
    },
    {
      title: "Commerce Transformation",
      description: "Seamless omnichannel experience with centralized product management and personalized customer promotions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Transform retail operations with integrated payment solutions and consistent customer engagement.",
      features: ["Omnichannel Experience", "Product Management", "Customer Insights", "Payment Integration"]
    },
    {
      title: "Custom Implementation",
      description: "Tailored Dynamics 365 solutions aligned with your unique organizational goals and business requirements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Get fully customized ERP solutions that adapt to your evolving business needs with enterprise-grade scalability.",
      features: ["Custom Solutions", "Scalable Architecture", "Enterprise-grade", "Business Alignment"]
    }
  ];

  const implementationProcess = [
    {
      step: "Discovery",
      description: "Analyze business processes, requirements, and existing systems to define optimal ERP strategy"
    },
    {
      step: "Planning",
      description: "Design comprehensive implementation roadmap with timeline, resources, and migration strategy"
    },
    {
      step: "Configuration",
      description: "Configure Dynamics 365 modules according to your business requirements and workflows"
    },
    {
      step: "Integration",
      description: "Connect with existing systems, APIs, and third-party applications for seamless operations"
    },
    {
      step: "Testing",
      description: "Comprehensive testing of all modules, integrations, and business processes"
    },
    {
      step: "Deployment",
      description: "Go-live with full support, training, and ongoing optimization for maximum ROI"
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Streamline operations, optimize production processes, and gain real-time supply chain visibility.",
      icon: "🏭"
    },
    {
      title: "Retail",
      description: "End-to-end solutions for inventory management, demand forecasting, and omnichannel integration.",
      icon: "🛍️"
    },
    {
      title: "Healthcare",
      description: "Improve financial management, streamline supply chains, and enhance patient care delivery.",
      icon: "🏥"
    },
    {
      title: "Finance & Banking",
      description: "Streamline financial operations, optimize compliance, and enhance reporting accuracy.",
      icon: "🏦"
    },
    {
      title: "Distribution & Wholesale",
      description: "Optimize supply chains, manage inventory effectively, and improve demand forecasting.",
      icon: "📦"
    },
    {
      title: "Professional Services",
      description: "Drive project management, resource allocation, and billing efficiency for service organizations.",
      icon: "💼"
    },
    {
      title: "Education",
      description: "Streamline administrative processes, student data management, and resource allocation.",
      icon: "🎓"
    },
    {
      title: "Government & Public Sector",
      description: "Streamline procurement, compliance, and budget management for transparency and efficiency.",
      icon: "🏛️"
    }
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Certified Experts",
      description: "Team of certified Dynamics 365 professionals with extensive implementation experience",
      icon: "🏆"
    },
    {
      title: "End-to-End Implementation",
      description: "Complete ERP solutions from assessment to deployment and ongoing support",
      icon: "🔄"
    },
    {
      title: "Industry-Specific Solutions",
      description: "Tailored configurations and customizations for your specific industry requirements",
      icon: "🎯"
    }
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Hero Section */}
        <Section className="pt-[12rem] -mt-[5.25rem] pb-20" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(172,106,255,0.1),transparent_50%)]" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-[6rem]">
              
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="h1">
                  Microsoft 
                  <span className="block mt-2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Dynamics 365 ERP
                    </span>
                  </span>
                </h1>
                
                <p className="body-1 text-n-2 max-w-lg">
                  Expert Microsoft Dynamics 365 ERP solutions that streamline business operations, enhance decision-making, 
                  and ensure seamless integration across your organization for transformative growth.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "5+", label: "Years Experience" },
                    { number: "50+", label: "Implementations" },
                    { number: "99%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                      <div className="text-sm text-n-3">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    white
                  >
                    Our Services
                  </Button>
                </div>
              </motion.div>

              {/* Right Side - MS Dynamics Logo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Microsoft Dynamics 365 Official Logo */}
                  <div className="w-80 h-80 flex items-center justify-center mb-6">
                    <img 
                      src="https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Dynamics-365-CRM-Logo.png" 
                      alt="Microsoft Dynamics 365"
                      className="w-72 h-auto object-contain filter drop-shadow-2xl"
                      style={{ 
                        filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))'
                      }}
                    />
                  </div>
                  
                  {/* Microsoft Dynamics 365 Text */}
                  <div className="text-center">
                    <div className="text-xl font-semibold text-blue-300 mb-2">
                      Microsoft certified team
                    </div>
                    <div className="text-sm text-n-3">
                      Trusted by enterprises worldwide
                    </div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl scale-110 -z-10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* What We're Good At Section */}
        <Section id="capabilities" className="py-20 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
          <div className="container">
            <Heading
              tag="Our Expertise"
              title="What We Are Good At"
              text="Our services are tailored to unlock maximum efficiency and adaptability, driving transformative growth"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                {
                  title: "Workflow Optimization",
                  description: "Simplify complex processes and improve operational efficiency across all departments.",
                  icon: "⚡"
                },
                {
                  title: "Data-Driven Insights",
                  description: "Utilize advanced analytics to make informed business decisions with real-time data.",
                  icon: "📊"
                },
                {
                  title: "Cross-Functional Integration",
                  description: "Achieve seamless connectivity across departments for unified operations and communication.",
                  icon: "🔗"
                },
                {
                  title: "Scalable Solutions",
                  description: "Adapt to evolving business needs with flexible, enterprise-grade ERP solutions.",
                  icon: "📈"
                },
                {
                  title: "Custom Implementation",
                  description: "Tailor Dynamics 365 to align with your unique organizational goals and requirements.",
                  icon: "⚙️"
                },
                {
                  title: "AI-Powered Automation",
                  description: "Leverage Azure AI and machine learning for intelligent process automation and insights.",
                  icon: "🤖"
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-n-3 text-sm leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" className="py-20">
          <div className="container">
            <Heading
              tag="Our Services"
              title="Seamless ERP Solutions"
              text="Comprehensive Microsoft Dynamics 365 modules to transform every aspect of your business operations"
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-n-7 to-n-8 h-[400px]"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* FlickeringGrid Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <FlickeringGrid
                      className="z-0 absolute inset-0 size-full"
                      squareSize={4}
                      gridGap={6}
                      color="#3B82F6"
                      maxOpacity={0.5}
                      flickerChance={0.1}
                      height={400}
                      width={400}
                    />
                  </div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                      <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-left transition-all duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Default Content */}
                      <div className="group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-n-3 text-center text-sm">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Hover Content */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                          {service.hoverText}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="text-blue-300 text-xs">
                              • {feature}
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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

        {/* Industries We Serve */}
        <Section id="industries" className="py-20">
          <div className="container">
            <Heading
              tag="Industries"
              title="ERP for Modern Enterprises"
              text="Specialized Microsoft Dynamics 365 solutions tailored to the unique needs of different industries"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10 text-center"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-n-3 text-sm leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section id="why-choose-us" className="py-20 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
          <div className="container">
            <Heading
              tag="Why Choose Us"
              title="Your Microsoft Dynamics 365 Partner"
              text="Comprehensive expertise and proven methodology for successful ERP implementations"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-n-3 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-t border-blue-500/20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your 
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Business Operations?</span>
                  </h2>
                  <p className="text-lg text-n-3 leading-relaxed mb-8">
                    Streamline your business operations with Microsoft Dynamics 365 ERP. 
                    Our expert team will guide you through every step of your digital transformation journey.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose BriskLogix?</h3>
                  <div className="space-y-6">
                    {whyChooseUs.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 bg-n-7/30 rounded-2xl backdrop-blur-sm border border-n-6/30 hover:border-blue-500/30 transition-all duration-300"
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

                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">Free</div>
                    <div className="text-sm text-n-3">Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-sm text-n-3">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-n-3">Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-n-7/80 to-n-8/80 rounded-3xl backdrop-blur-xl border border-blue-500/20 shadow-2xl">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-2 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Start Your ERP Transformation
                      </h3>
                      <p className="text-n-3">Get a free consultation and strategy session for your business</p>
                    </div>
                    
                    {submitSuccess ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                        <p className="text-n-3">We'll get back to you within 24 hours to discuss your ERP requirements.</p>
                      </div>
                    ) : (
                      <>
                        {submitError && (
                          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-300">
                            <p className="text-center">{submitError}</p>
                          </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="block text-blue-300 text-sm font-medium">Full Name</label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-n-8/50 border border-blue-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                placeholder="Enter your name"
                                disabled={isSubmitting}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-blue-300 text-sm font-medium">Company</label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-n-8/50 border border-blue-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                placeholder="Company name"
                                disabled={isSubmitting}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="block text-blue-300 text-sm font-medium">Email</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-n-8/50 border border-blue-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                placeholder="your@email.com"
                                disabled={isSubmitting}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-blue-300 text-sm font-medium">Phone</label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-n-8/50 border border-blue-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                placeholder="+1 (555) 000-0000"
                                disabled={isSubmitting}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-blue-300 text-sm font-medium">Project Description</label>
                            <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-n-8/50 border border-blue-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 h-32 resize-none"
                              placeholder="Tell us about your ERP requirements and current challenges..."
                              disabled={isSubmitting}
                              required
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? 'Submitting...' : 'Get Free ERP Consultation'}
                          </button>
                          
                          <p className="text-center text-xs text-n-4 mt-4">
                            We respect your privacy. Your information will never be shared.
                          </p>
                        </form>
                      </>
                    )}
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

export default MicrosoftDynamics; 