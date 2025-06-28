import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { collabApps } from "../../constants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FlickeringGrid } from "../../components/ui/flickering-grid";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import shopifyLogo from "../../assets/images/Shopify logo no bg.jpeg";
import shopifyLogoBg from "../../assets/images/Shopify logo.jpeg";

const EcommerceSolutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'E-commerce Solutions',
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
          service: 'E-commerce Solutions',
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
            service: 'E-commerce Solutions',
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
  
  // Key E-commerce Platforms for Hero Section
  const keyPlatforms = [
    {
      id: "1",
      title: "Shopify",
      icon: shopifyLogo,
      width: 120,
      height: 60,
    },
    {
      id: "2",
      title: "WooCommerce",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/woocommerce/woocommerce-original.svg",
      width: 80,
      height: 80,
    },
    {
      id: "3",
      title: "PayPal",
      icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
      width: 80,
      height: 80,
    },
    {
      id: "4",
      title: "Stripe",
      icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
      width: 80,
      height: 80,
    },
    {
      id: "5",
      title: "Amazon",
      icon: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg",
      width: 80,
      height: 80,
    }
  ];

  // Extended e-commerce tech stack
  const ecommerceTechStack = [
    {
      id: "1",
      title: "Shopify",
      icon: shopifyLogo,
      width: 32,
      height: 32,
    },
    {
      id: "2",
      title: "WooCommerce",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/woocommerce/woocommerce-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "3",
      title: "Magento",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/magento/magento-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "4",
      title: "Stripe",
      icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "5",
      title: "PayPal",
      icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "6",
      title: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "7",
      title: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "8",
      title: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "9",
      title: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "10",
      title: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "11",
      title: "BigCommerce",
      icon: "https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "12",
      title: "Salesforce",
      icon: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "13",
      title: "Klaviyo",
      icon: "https://www.vectorlogo.zone/logos/klaviyo/klaviyo-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "14",
      title: "Mailchimp",
      icon: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "15",
      title: "Google Analytics",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "16",
      title: "Zendesk",
      icon: "https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "17",
      title: "Twilio",
      icon: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "18",
      title: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "19",
      title: "Kubernetes",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      width: 32,
      height: 32,
    },
    {
      id: "20",
      title: "Redis",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      width: 32,
      height: 32,
    },
    {
      id: "21",
      title: "Meta Business",
      icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "22",
      title: "Amazon Marketplace",
      icon: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "23",
      title: "Etsy",
      icon: "https://www.vectorlogo.zone/logos/etsy/etsy-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "24",
      title: "eBay",
      icon: "https://www.vectorlogo.zone/logos/ebay/ebay-icon.svg",
      width: 32,
      height: 32,
    }
  ];

  const navigate = useNavigate();

  const services = [
    {
      title: "Shopify Development",
      description: "Complete Shopify store setup, customization, and optimization for maximum conversions and sales performance.",
      image: shopifyLogoBg,
      hoverText: "Build stunning Shopify stores with custom themes, app integrations, and conversion optimization.",
      features: ["Custom Store Setup", "Theme Development", "App Integration", "Performance Optimization"]
    },
    {
      title: "Custom E-commerce Development",
      description: "Bespoke e-commerce solutions built from scratch to meet your unique business requirements.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Build powerful, scalable e-commerce platforms tailored to your specific business needs.",
      features: ["Custom Platform", "API Integration", "Advanced Features", "Scalable Architecture"]
    },
    {
      title: "Shipping & Supply Chain Management",
      description: "Complete logistics solutions including inventory management, order processing, shipping integration, and delivery optimization.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Streamline your entire supply chain and shipping operations with automated systems.",
      features: ["Inventory Tracking", "Multi-Carrier Support", "Real-time Tracking", "Automated Alerts"]
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple gateways, fraud protection, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Implement secure, efficient payment systems that boost customer confidence and conversions.",
      features: ["Multiple Gateways", "Fraud Protection", "Mobile Payments", "Subscription Billing"]
    },
    {
      title: "Digital Presence & Marketing Solutions",
      description: "Comprehensive digital marketing strategies to boost your e-commerce visibility and drive sales.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Transform your online presence with strategic digital marketing tailored for e-commerce success.",
      features: ["SEO Optimization", "Social Media", "Email Marketing", "PPC Campaigns"],
      link: "/digital-marketing"
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboard for sales performance, customer insights, and business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Make data-driven decisions with comprehensive analytics and performance insights.",
      features: ["Sales Analytics", "Customer Insights", "Inventory Reports", "ROI Tracking"]
    }
  ];

  const ecommerceProcess = [
    {
      step: "Discovery",
      description: "Analyze your business model, target audience, and competition to define requirements"
    },
    {
      step: "Design",
      description: "Create intuitive user interfaces and seamless shopping experiences"
    },
    {
      step: "Development",
      description: "Build robust e-commerce platform with all required features and integrations"
    },
    {
      step: "Integration",
      description: "Connect payment gateways, shipping providers, and third-party services"
    },
    {
      step: "Testing",
      description: "Comprehensive testing for performance, security, and user experience"
    },
    {
      step: "Launch",
      description: "Deploy your e-commerce store and provide ongoing support and optimization"
    }
  ];

  const industries = [
    {
      title: "Fashion & Apparel",
      description: "Trendy online stores with size guides, virtual try-ons, and style recommendations.",
      icon: "👕"
    },
    {
      title: "Electronics",
      description: "Tech-focused stores with detailed specifications, comparisons, and warranty management.",
      icon: "📱"
    },
    {
      title: "Health & Beauty",
      description: "Cosmetic and wellness stores with ingredient details and subscription services.",
      icon: "💄"
    },
    {
      title: "Home & Garden",
      description: "Furniture and decor stores with room visualization and assembly guides.",
      icon: "🏠"
    },
    {
      title: "Food & Beverage",
      description: "Gourmet food stores with fresh delivery, meal plans, and dietary filters.",
      icon: "🍎"
    },
    {
      title: "Sports & Fitness",
      description: "Athletic gear stores with performance tracking and training program integration.",
      icon: "⚽"
    }
  ];

  const whyChooseUs = [
    {
      title: "E-commerce Expertise",
      description: "Specialized knowledge in building high-converting online stores across all platforms",
      icon: "🏪"
    },
    {
      title: "End-to-End Solutions",
      description: "Complete e-commerce ecosystem from storefront to fulfillment and analytics",
      icon: "🔄"
    },
    {
      title: "Conversion Focused",
      description: "Every element designed and optimized to maximize sales and customer satisfaction",
      icon: "📈"
    }
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Hero Section */}
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(76,29,149,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.2),transparent_50%)]" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-[6.25rem]">
              
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="h1">
                  E-commerce
                  <span className="block mt-2">
                    <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                      Solutions
                    </span>
                  </span>
                </h1>
                
                <p className="body-1 text-n-2 max-w-lg">
                  Complete e-commerce ecosystem with Shopify optimization, custom development, 
                  and comprehensive supply chain solutions to maximize your online sales potential.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "50+", label: "Stores Built" },
                    { number: "3x", label: "Avg. Sales Boost" },
                    { number: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                      <div className="text-sm text-n-3">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="button"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    className="button button-outline"
                  >
                    Our Services
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Key Platforms Display */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center"
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative w-[500px] h-[500px]">
                  {keyPlatforms.map((platform, index) => {
                    const angle = (index * (360 / keyPlatforms.length)) - 90;
                    const radian = (angle * Math.PI) / 180;
                    const radius = 180;
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.15, z: 10 }}
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{
                          opacity: { duration: 0.5, delay: index * 0.2 },
                          scale: { duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 260, damping: 20 },
                          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl cursor-pointer border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                        style={{
                          width: platform.title === 'Shopify' ? '140px' : '100px',
                          height: platform.title === 'Shopify' ? '100px' : '100px',
                          left: `calc(50% + ${x}px - ${platform.title === 'Shopify' ? '70px' : '50px'})`,
                          top: `calc(50% + ${y}px - 50px)`,
                        }}
                      >
                        <img 
                          src={platform.icon} 
                          alt={platform.title}
                          width={platform.width}
                          height={platform.height}
                          className="object-contain filter brightness-110"
                        />
                        
                        {/* Glowing effect for each platform */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    );
                  })}

                  {/* Center Logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">E-COM</div>
                        <div className="text-white text-sm opacity-80">Hub</div>
                      </div>
                    </div>
                  </motion.div>
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
              title="Complete E-commerce Ecosystem"
              text="From store setup to supply chain management, we provide everything you need to succeed in e-commerce"
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
                            <div key={idx} className="text-purple-300 text-xs">
                              • {feature}
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => {
                            if (service.link) {
                              navigate(service.link);
                            } else {
                              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
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

        {/* E-commerce Technology Stack */}
        <Section id="technology" className="py-20 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
          <div className="container">
            <Heading
              tag="Technology Stack"
              title="E-commerce Platforms & Tools We Master"
              text="Leveraging cutting-edge e-commerce technologies to build powerful, scalable online stores"
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
                      <div className="text-white text-sm opacity-80">Tools</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Dual-Orbit E-commerce Tools */}
                {ecommerceTechStack.map((tool, index) => {
                  const isInnerOrbit = index < 10;
                  const orbitIndex = isInnerOrbit ? index : index - 10;
                  const orbitSize = isInnerOrbit ? 10 : ecommerceTechStack.length - 10;
                  
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

        {/* E-commerce Development Process */}
        <Section id="process" className="py-20">
          <div className="container">
            <Heading
              tag="Our Process"
              title="E-commerce Development Methodology"
              text="Our proven 6-step process ensures successful e-commerce store launch and optimization"
            />
            
            <div className="relative flex justify-center mt-20 overflow-hidden">
              <div className="relative w-[700px] h-[700px]">
                {ecommerceProcess.map((item, index) => {
                  const angle = (index * 60) - 90;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 200;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  const descRadius = 300;
                  let descX = Math.cos(radian) * descRadius;
                  let descY = Math.sin(radian) * descRadius;
                  
                  const quadrantX = Math.cos(radian) > 0 ? 1 : -1;
                  const quadrantY = Math.sin(radian) > 0 ? 1 : -1;
                  
                  descX = Math.max(-280, Math.min(280, descX + (quadrantX * 80)));
                  descY = Math.max(-280, Math.min(280, descY + (quadrantY * 40)));
                  
                  return (
                    <div key={index}>
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
                    </div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">E-COMM</div>
                      <div className="text-white text-sm opacity-80">Process</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* Industries We Serve */}
        <Section id="industries" className="py-20 bg-gradient-to-br from-n-8 via-purple-900/10 to-pink-900/10">
          <div className="container">
            <Heading
              tag="Industries"
              title="E-commerce Industries We Serve"
              text="Specialized e-commerce solutions tailored to the unique needs of different industries"
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
                    Ready to Launch Your 
                    <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> E-commerce Empire?</span>
                  </h2>
                  <p className="text-lg text-n-3 leading-relaxed mb-8">
                    Transform your product ideas into a thriving online business with our comprehensive e-commerce solutions. 
                    From store setup to supply chain management, we've got you covered.
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
                        Start Your E-commerce Journey
                      </h3>
                      <p className="text-n-3">Get a free consultation and strategy session for your online store</p>
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
                          <option value="Custom E-commerce Development">Custom E-commerce Development</option>
                          <option value="Shopify Store Setup">Shopify Store Setup</option>
                          <option value="WooCommerce Development">WooCommerce Development</option>
                          <option value="Payment Gateway Integration">Payment Gateway Integration</option>
                          <option value="Inventory Management System">Inventory Management System</option>
                          <option value="Supply Chain Solutions">Supply Chain Solutions</option>
                          <option value="Store Migration">Store Migration</option>
                          <option value="E-commerce Optimization">E-commerce Optimization</option>
                          <option value="Full E-commerce Package">Full E-commerce Package</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-purple-300 text-sm font-medium">Project Description</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-32 resize-none"
                          placeholder="Tell us about your products, target market, and e-commerce goals..."
                          disabled={isSubmitting}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free E-commerce Consultation'}
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

export default EcommerceSolutions;