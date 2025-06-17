import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { collabApps } from "../../constants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FlickeringGrid } from "../../components/ui/flickering-grid";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const DigitalMarketing = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Digital Marketing',
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
          service: 'Digital Marketing',
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
            service: 'Digital Marketing',
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
  
  // Extended marketing tech stack
  const marketingTechStack = [
    {
      id: "1",
      title: "Google Analytics",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "2",
      title: "Facebook",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/facebook/facebook-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "3",
      title: "WordPress",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "4",
      title: "Shopify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "5",
      title: "HubSpot",
      icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "6",
      title: "Mailchimp",
      icon: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "7",
      title: "Salesforce",
      icon: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "8",
      title: "Adobe",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      width: 32,
      height: 32,
    },
    {
      id: "9",
      title: "Instagram",
      icon: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "10",
      title: "LinkedIn",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "11",
      title: "YouTube",
      icon: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "12",
      title: "Twitter",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/twitter/twitter-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "13",
      title: "Canva",
      icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "14",
      title: "TikTok",
      icon: "https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "15",
      title: "Snapchat",
      icon: "https://www.vectorlogo.zone/logos/snapchat/snapchat-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "16",
      title: "Pinterest",
      icon: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "17",
      title: "Slack",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "18",
      title: "Zapier",
      icon: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "19",
      title: "Buffer",
      icon: "https://www.vectorlogo.zone/logos/buffer/buffer-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "20",
      title: "Hootsuite",
      icon: "https://www.vectorlogo.zone/logos/hootsuite/hootsuite-icon.svg",
      width: 32,
      height: 32,
    }
  ];

  const navigate = useNavigate();

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website's visibility and organic traffic with data-driven SEO strategies.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Dominate search rankings with our comprehensive SEO optimization strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      title: "LLMEO (LLM Engine Optimization)",
      description: "Revolutionary new approach to optimize your business presence in AI chatbot responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Be the first choice when AI recommends businesses to customers.",
      features: ["AI Training Data", "Chatbot Optimization", "Brand Positioning", "Response Enhancement"]
    },
    {
      title: "Social Media Management",
      description: "Engage your audience and build your brand across all major social media platforms.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Transform your social presence with engaging content and strategic management.",
      features: ["Content Creation", "Community Management", "Social Analytics", "Influencer Outreach"]
    },
    {
      title: "Digital Advertising (Meta Ads)",
      description: "Drive targeted traffic and conversions with optimized Facebook and Instagram ad campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Maximize ROI with precision-targeted advertising campaigns across digital platforms.",
      features: ["Meta Ads", "Google Ads", "Campaign Optimization", "A/B Testing"]
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that drives engagement, builds authority, and converts prospects.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Tell your brand story through strategic content that resonates with your audience.",
      features: ["Blog Writing", "Video Production", "Infographics", "Email Campaigns"]
    },
    {
      title: "Virtual Tours & 360° Media",
      description: "Interactive virtual tour experiences showcasing spaces with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Transform property showcasing with cutting-edge virtual tour technology and immersive experiences.",
      features: ["Aerial Hotspots", "Grounded Navigation", "Navigation Bars", "2D Interactive Maps", "Embedded Media & Links"],
      isVirtualTours: true
    }
  ];

  const marketingProcess = [
    {
      step: "Strategy",
      description: "Analyze your market, competitors, and audience to create a winning strategy"
    },
    {
      step: "Planning",
      description: "Develop comprehensive campaigns with clear goals and timelines"
    },
    {
      step: "Creation",
      description: "Produce high-quality content and creative assets for your campaigns"
    },
    {
      step: "Launch",
      description: "Execute campaigns across chosen platforms with precision targeting"
    },
    {
      step: "Monitor",
      description: "Track performance metrics and campaign effectiveness in real-time"
    },
    {
      step: "Optimize",
      description: "Continuously refine and improve campaigns based on data insights"
    }
  ];

  const industries = [
    {
      title: "E-commerce",
      description: "Drive online sales with targeted digital marketing strategies.",
      icon: "🛍️"
    },
    {
      title: "Sports & Fitness",
      description: "Engage sports enthusiasts and fitness communities with dynamic marketing campaigns.",
      icon: "⚽"
    },
    {
      title: "Real Estate",
      description: "Generate leads and showcase properties with visual marketing.",
      icon: "🏢"
    },
    {
      title: "Technology",
      description: "Reach tech-savvy audiences with innovative marketing approaches.",
      icon: "💻"
    },
    {
      title: "Hospitality",
      description: "Attract guests and build brand loyalty in the hospitality sector.",
      icon: "🏨"
    },
    {
      title: "Influencer Management",
      description: "Professional account management services for influencers, handling their digital presence and brand partnerships.",
      icon: "🎯"
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Results",
      description: "Track record of delivering measurable ROI and business growth for our clients",
      icon: "📈"
    },
    {
      title: "Data-Driven Approach",
      description: "Every decision backed by analytics and performance insights for optimal results",
      icon: "📊"
    },
    {
      title: "Full-Service Team",
      description: "Complete digital marketing expertise under one roof for seamless execution",
      icon: "👥"
    }
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Hero Section */}
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-[6.25rem]">
              
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="h1">
                  Transform Your Business with 
                  <span className="block mt-2">
                    <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">
                      Digital Marketing
                    </span>
                  </span>
                </h1>
                
                <p className="body-1 text-n-2 max-w-lg">
                  Drive growth, increase visibility, and maximize ROI with our comprehensive digital marketing solutions. 
                  From SEO to innovative LLMEO strategies, we help your business thrive in the digital landscape.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "300%", label: "Avg. ROI Increase" },
                    { number: "4+", label: "Years Experience" },
                    { number: "24/7", label: "Performance Monitoring" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                      <div className="text-sm text-n-3">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="#contact"
                  >
                    Get Started
                  </Button>
                  <Button 
                    white
                    href="#services"
                  >
                    Our Services
                  </Button>
                </div>
              </motion.div>

              {/* Right Side - Tech Stack Diagram */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:flex justify-center"
              >
                <div className="relative w-[500px] h-[500px]">
                  {marketingTechStack.map((tool, index) => {
                    // Create a more scattered, organic layout
                    const angles = [15, 45, 75, 110, 145, 180, 215, 250, 285, 320, 355, 30, 60, 90, 130, 170, 200, 240, 270, 300];
                    const angle = angles[index % angles.length];
                    const radian = (angle * Math.PI) / 180;
                    
                    // Vary the radius for a more natural scatter
                    const baseRadius = 120 + (index % 3) * 40;
                    const radiusVariation = (index % 5) * 15;
                    const radius = baseRadius + radiusVariation;
                    
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          opacity: { duration: 0.5, delay: index * 0.1 },
                          scale: { duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }
                        }}
                        className="absolute w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                        style={{
                          left: `calc(50% + ${x}px - 2rem)`,
                          top: `calc(50% + ${y}px - 2rem)`,
                        }}
                      >
                        <img 
                          src={tool.icon} 
                          alt={tool.title}
                          width={tool.width}
                          height={tool.height}
                          className="object-contain"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" className="py-20">
          <div className="container">
            <Heading
              tag="Our Services"
              title="Comprehensive Digital Marketing Solutions"
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
                      color="#8B5CF6"
                      maxOpacity={0.5}
                      flickerChance={0.1}
                      height={400}
                      width={400}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                      <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-left transition-all duration-300 min-h-[3.5rem] flex items-center justify-center group-hover:justify-start">
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
                            <div key={idx} className="text-purple-300 text-xs">
                              • {feature}
                            </div>
                          ))}
                        </div>
                        
                        {service.isVirtualTours ? (
                          <a 
                            href="https://www.panoraproperties.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-block"
                          >
                            Visit Virtual Tours Site
                          </a>
                        ) : (
                          <button 
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Marketing Technology Stack */}
        <Section id="technology" className="py-20 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
          <div className="container">
            <Heading
              tag="Technology Stack"
              title="Marketing Tools & Platforms We Master"
              text="Leveraging the best-in-class marketing technologies to drive exceptional results for your business"
            />
            
            <div className="flex justify-center mt-20">
              <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                
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
                      <div className="text-white text-sm opacity-80">Platforms</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Dual-Orbit Marketing Tools */}
                {marketingTechStack.map((tool, index) => {
                  const isInnerOrbit = index < 10;
                  const orbitIndex = isInnerOrbit ? index : index - 10;
                  const orbitSize = isInnerOrbit ? 10 : marketingTechStack.length - 10;
                  
                  const angle = (orbitIndex * (360 / orbitSize)) - 90;
                  const radian = (angle * Math.PI) / 180;
                  const radius = isInnerOrbit ? 120 : 180;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        rotate: isInnerOrbit ? 360 : -360,
                      }}
                      transition={{
                        opacity: { duration: 0.5, delay: index * 0.1 },
                        scale: { duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 },
                        rotate: { duration: isInnerOrbit ? 20 : 30, repeat: Infinity, ease: "linear" }
                      }}
                      className="absolute w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl cursor-pointer"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                      }}
                    >
                      <img 
                        src={tool.icon} 
                        alt={tool.title}
                        width={tool.width}
                        height={tool.height}
                        className="object-contain"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>



        {/* Industries We Serve */}
        <Section id="industries" className="py-20 bg-gradient-to-br from-n-8 via-purple-900/10 to-pink-900/10">
          <div className="container">
            <Heading
              tag="Industries"
              title="Industries We Serve"
              text="Delivering tailored digital marketing solutions across diverse sectors with proven expertise"
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-n-7 to-n-8 rounded-3xl p-8 text-center m-0.5 transition-all duration-300 group-hover:m-0 h-72 flex flex-col justify-center">
                    
                    <motion.div 
                      whileHover={{ y: -10, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-6xl mb-6 inline-block"
                    >
                      {industry.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {industry.title}
                    </h4>
                    <p className="text-n-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
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
                    Ready to Dominate the 
                    <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> Digital Space?</span>
                  </h2>
                  <p className="text-lg text-n-3 leading-relaxed mb-8">
                    Transform your digital presence and drive unprecedented growth with our comprehensive marketing solutions. 
                    Let's create campaigns that convert and build lasting customer relationships.
                  </p>
                </div>

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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-n-7/80 to-n-8/80 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-2xl">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-2 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Start Your Digital Marketing Journey
                      </h3>
                      <p className="text-n-3">Get a free marketing audit and strategy consultation</p>
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
                          <option value="SEO Optimization">SEO Optimization</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Content Marketing">Content Marketing</option>
                          <option value="Email Marketing">Email Marketing</option>
                          <option value="PPC Advertising">PPC Advertising</option>
                          <option value="Digital Strategy">Digital Strategy</option>
                          <option value="Marketing Analytics">Marketing Analytics</option>
                          <option value="Virtual Tours">Virtual Tours</option>
                          <option value="Full Marketing Package">Full Marketing Package</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-purple-300 text-sm font-medium">Project Description</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-32 resize-none"
                          placeholder="Tell us about your marketing goals, target audience, and current challenges..."
                          disabled={isSubmitting}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free Marketing Audit'}
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

export default DigitalMarketing;