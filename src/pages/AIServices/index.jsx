import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { FlickeringGrid } from "../../components/ui/flickering-grid";
import { SparklesCore } from "../../components/ui/sparkles";
import GlobeDemo from "../../components/ui/globe-demo";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const AIServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'AI & Generative AI Services',
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
          service: 'AI & Generative AI Services',
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

  // AI Tech Stack
  const aiTechStack = [
    {
      id: "1",
      title: "TensorFlow",
      icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "2",
      title: "PyTorch",
      icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "3",
      title: "OpenAI GPT",
      icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
      width: 32,
      height: 32,
    },
    {
      id: "4",
      title: "Hugging Face",
      icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      width: 32,
      height: 32,
    },
    {
      id: "5",
      title: "scikit-learn",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      width: 32,
      height: 32,
    },
    {
      id: "6",
      title: "Keras",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      width: 32,
      height: 32,
    },
    {
      id: "7",
      title: "NVIDIA CUDA",
      icon: "https://developer.nvidia.com/sites/default/files/akamai/cuda/images/cuda_logo.png",
      width: 32,
      height: 32,
    },
    {
      id: "8",
      title: "Docker",
      icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "9",
      title: "Jupyter",
      icon: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
      width: 32,
      height: 32,
    },
    {
      id: "10",
      title: "Python",
      icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      width: 32,
      height: 32,
    }
  ];

  const navigate = useNavigate();

  const aiCapabilities = [
    {
      title: "Machine Learning (ML)",
      description: "Custom models that enable predictive analytics, customer behavior analysis, and process optimization.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Build intelligent systems that learn from data and make accurate predictions.",
      features: ["Predictive Analytics", "Behavior Analysis", "Process Optimization", "Custom Models"]
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Advanced text analysis, chatbots, sentiment analysis, and language translation for enhanced customer engagement.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Transform how your business communicates with AI-powered language understanding.",
      features: ["Text Analysis", "Chatbots", "Sentiment Analysis", "Language Translation"]
    },
    {
      title: "Computer Vision",
      description: "Image and video recognition, object detection, and visual data analytics tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Enable machines to see and understand visual content with precision.",
      features: ["Image Recognition", "Object Detection", "Visual Analytics", "Video Processing"]
    },
    {
      title: "Generative AI & Content Creation",
      description: "AI-powered content generation, automated writing, creative design, and intelligent document processing.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Create compelling content and automate creative processes with advanced AI models.",
      features: ["Content Generation", "Automated Writing", "Creative Design", "Document Processing"]
    }
  ];

  // Automation Services
  const automationServices = [
    {
      title: "Employee Onboarding Automation",
      description: "Complete employee onboarding workflow that automatically creates IT accounts, requests laptops, orders access cards, and sends welcome emails.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Streamline your HR processes with end-to-end employee onboarding automation that ensures nothing is missed.",
      features: ["IT Account Creation", "Equipment Requests", "Access Card Orders", "Welcome Email Sequences"]
    },
    {
      title: "Customer Support Ticketing System",
      description: "Automatically handle customer questions by creating tickets and using AI to sort them based on inquiry type, location, and language.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      hoverText: "Transform customer support with intelligent ticket routing and automated response systems for faster resolution.",
      features: ["Smart Ticket Creation", "AI-Powered Sorting", "Language Detection", "Priority Assignment"]
    }
  ];

  // Enhanced Observation Platform Features
  const observationPlatformFeatures = [
    {
      title: "Theft Detection",
      description: "AI-powered theft detection with real-time alerts and evidence capture",
      icon: "🚨"
    },
    {
      title: "Fire Safety",
      description: "Automated fire detection and emergency response coordination",
      icon: "🔥"
    },
    {
      title: "Employee Monitoring",
      description: "Workplace safety and productivity monitoring with privacy compliance",
      icon: "👥"
    },
    {
      title: "Perimeter Security",
      description: "Advanced perimeter monitoring with intrusion detection",
      icon: "🛡️"
    },
    {
      title: "Quality Control",
      description: "Automated quality inspection and defect detection",
      icon: "✅"
    },
    {
      title: "Crowd Management",
      description: "Real-time crowd density analysis and flow optimization",
      icon: "👫"
    },
    {
      title: "Vehicle Tracking",
      description: "Automated vehicle identification and movement tracking",
      icon: "🚗"
    },
    {
      title: "Anomaly Detection",
      description: "AI-powered detection of unusual patterns and behaviors",
      icon: "⚠️"
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, supply chain optimization, and safety monitoring.",
      icon: "🏭"
    },
    {
      title: "Retail & E-commerce",
      description: "Customer behavior analysis, inventory management, theft prevention, and personalized shopping experiences.",
      icon: "🛍️"
    },
    {
      title: "Hospitality",
      description: "Guest experience optimization, booking automation, staff management, and security monitoring.",
      icon: "🏨"
    },
    {
      title: "Healthcare",
      description: "Patient monitoring, appointment scheduling, medical imaging analysis, and diagnostic assistance.",
      icon: "🏥"
    },
    {
      title: "Transportation & Logistics",
      description: "Route optimization, fleet management, cargo monitoring, and predictive maintenance.",
      icon: "🚛"
    },
    {
      title: "Real Estate",
      description: "Property valuation, virtual tours, market analysis, and customer relationship management.",
      icon: "🏢"
    }
  ];

  const keyFeatures = [
    {
      title: "Scalable Solutions",
      description: "AI systems that grow with your business and adapt to changing requirements.",
      icon: "📈"
    },
    {
      title: "Real-Time Insights",
      description: "AI models designed for instant data analysis and actionable outcomes.",
      icon: "⚡"
    },
    {
      title: "Seamless Integration",
      description: "AI services integrated into existing workflows and platforms without disruption.",
      icon: "🔗"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize resources and reduce operational costs with AI automation.",
      icon: "💰"
    }
  ];

  const whyChooseUs = [
    {
      title: "Cutting-Edge AI Technology",
      description: "Access to the latest AI models, frameworks, and technologies including GPT-4, Claude, custom machine learning solutions, and advanced computer vision systems",
      icon: "🚀"
    },
    {
      title: "Proven Industry Expertise",
      description: "Our team combines deep technical knowledge with real-world business experience across manufacturing, retail, healthcare, and logistics sectors",
      icon: "🏆"
    },
    {
      title: "Custom-Tailored Solutions",
      description: "Every AI solution is designed specifically for your business needs, ensuring maximum relevance, efficiency, and return on investment",
      icon: "🎯"
    },
    {
      title: "Rapid Implementation",
      description: "Accelerated deployment timelines with our proven methodologies, getting your AI solutions operational quickly without disrupting existing workflows",
      icon: "⚡"
    },
    {
      title: "Continuous Support & Optimization",
      description: "24/7 monitoring, regular performance optimization, and ongoing updates ensure your AI systems evolve with your business needs",
      icon: "🔄"
    },
    {
      title: "Measurable Results",
      description: "Clear ROI metrics, performance dashboards, and regular reporting demonstrate the tangible impact of AI on your business operations",
      icon: "📊"
    }
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Hero Section */}
        <Section className="pt-[6rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.2),transparent_50%)]" />
          
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
                  AI & Generative
                  <span className="block mt-2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      AI Services
                    </span>
                  </span>
                </h1>
                
                <p className="body-1 text-n-2 max-w-lg">
                  Harness the power of Artificial Intelligence and Generative AI to drive innovation, 
                  streamline operations, and deliver transformative business solutions.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "10+", label: "AI Models" },
                    { number: "95%", label: "Accuracy" },
                    { number: "24/7", label: "AI Support" }
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
                    onClick={() => document.getElementById('capabilities').scrollIntoView({ behavior: 'smooth' })}
                    white
                  >
                    Our AI Services
                  </Button>
                </div>
              </motion.div>

              {/* Right Side - Globe Component */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center items-center"
              >
                <GlobeDemo />
              </motion.div>
            </div>
          </div>
        </Section>

        {/* AI Capabilities Section */}
        <Section id="capabilities" className="py-20">
          <div className="container">
            <Heading
              tag="Our AI Capabilities"
              title="Intelligent Systems That Adapt & Learn"
              text="Crafting intelligent systems that provide actionable insights, helping businesses stay ahead in a rapidly evolving digital landscape"
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-20">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-n-7 to-n-8 h-[400px]"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${capability.image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* FlickeringGrid Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <FlickeringGrid
                      className="z-0 absolute inset-0 size-full"
                      squareSize={4}
                      gridGap={6}
                      color="#A855F7"
                      maxOpacity={0.5}
                      flickerChance={0.1}
                      height={400}
                      width={400}
                    />
                  </div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                      <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-left transition-all duration-300">
                        {capability.title}
                      </h3>
                      
                      {/* Default Content */}
                      <div className="group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-n-3 text-center text-sm">
                          {capability.description}
                        </p>
                      </div>
                      
                      {/* Hover Content */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                          {capability.hoverText}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {capability.features.map((feature, idx) => (
                            <div key={idx} className="text-purple-300 text-xs">
                              • {feature}
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
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

        {/* Intelligent Chatbots & Virtual Assistants Section */}
        <Section id="chatbots" className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
          <div className="container">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5 rounded-3xl"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-400/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 p-8 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                      Intelligent Chatbots & Virtual Assistants
                    </span>
                  </h2>
                  <p className="text-xl text-n-2 max-w-3xl mx-auto leading-relaxed">
                    Transform customer interactions with AI-powered chatbots that understand context, provide intelligent responses, and seamlessly integrate with your business systems.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left Side - Enhanced Chatbot Interface */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-700 overflow-hidden">
                      {/* Phone/Chat Interface Frame */}
                      <div className="bg-white rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">AI</span>
                          </div>
                          <div>
                            <h4 className="text-gray-800 font-semibold">Customer Support Bot</h4>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600 text-xs">Online</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Chat Messages */}
                        <div className="space-y-4 max-h-80 overflow-y-auto">
                          <div className="flex justify-start">
                            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                              <p className="text-gray-800 text-sm">Hi! How can I help you today? 😊</p>
                              <span className="text-xs text-gray-500 mt-1 block">9:30 AM</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <div className="bg-blue-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                              <p className="text-white text-sm">I need help with my recent order</p>
                              <span className="text-xs text-blue-200 mt-1 block">9:31 AM</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                              <p className="text-gray-800 text-sm">I'd be happy to help! Could you please provide your order number?</p>
                              <span className="text-xs text-gray-500 mt-1 block">9:31 AM</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <div className="bg-blue-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                              <p className="text-white text-sm">#ORD-2024-1234</p>
                              <span className="text-xs text-blue-200 mt-1 block">9:32 AM</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                              <p className="text-gray-800 text-sm">Perfect! I found your order. It was shipped yesterday and should arrive tomorrow. Here's your tracking: <span className="text-blue-600 font-semibold">TRK123456789</span></p>
                              <span className="text-xs text-gray-500 mt-1 block">9:32 AM</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                              <p className="text-gray-800 text-sm">Is there anything else I can help you with? 🚚</p>
                              <span className="text-xs text-gray-500 mt-1 block">9:33 AM</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Input Area */}
                        <div className="mt-6 flex items-center space-x-2">
                          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                            <input 
                              type="text" 
                              placeholder="Type your message..." 
                              className="w-full bg-transparent text-gray-800 text-sm focus:outline-none"
                              disabled
                            />
                          </div>
                          <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Floating Animation Elements */}
                      <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      <div className="absolute top-1/2 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    </div>
                  </motion.div>

                  {/* Right Side - Enhanced Features */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 order-1 lg:order-2"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-6">🤖 Advanced AI Capabilities</h3>
                      <div className="grid grid-cols-1 gap-6">
                        {[
                          {
                            title: "Natural Language Understanding",
                            description: "Advanced NLP that comprehends context, intent, and sentiment for human-like conversations",
                            icon: "🧠",
                            color: "from-blue-500 to-cyan-500"
                          },
                          {
                            title: "Multi-Language Support",
                            description: "Communicate with customers in their preferred language with real-time translation",
                            icon: "🌍",
                            color: "from-green-500 to-emerald-500"
                          },
                          {
                            title: "Smart Escalation",
                            description: "Intelligently route complex queries to human agents when needed",
                            icon: "🎯",
                            color: "from-purple-500 to-pink-500"
                          },
                          {
                            title: "Business Integration",
                            description: "Seamlessly connect with CRM, ERP, and other business systems for complete workflow automation",
                            icon: "🔗",
                            color: "from-orange-500 to-red-500"
                          }
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{feature.title}</h4>
                                <p className="text-n-3 text-sm leading-relaxed">{feature.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-xl p-6 border border-blue-400/30">
                      <h4 className="text-lg font-bold text-white mb-4">🚀 Transform Customer Experience</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-n-3">24/7 Availability</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-n-3">Instant Responses</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-n-3">Cost Reduction</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                          <span className="text-n-3">Scalable Support</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Automation Services Section */}
        <Section id="automation" className="py-20 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
          <div className="container">
            <Heading
              tag="AI Workflow Automations"
              title="Streamline Operations with Smart Automation"
              text="Transform your business operations with powerful workflow automations that eliminate manual tasks and boost efficiency"
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-20">
              {automationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
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
                      color="#A855F7"
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
                            <div key={idx} className="text-purple-300 text-xs">
                              • {feature}
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Explore
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
        <Section id="industries" className="py-20 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
          <div className="container">
            <Heading
              tag="Industries We Serve"
              title="AI Solutions Across All Sectors"
              text="Delivering specialized AI solutions tailored to the unique needs of different industries"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

        {/* Contact Section with Enhanced Sticky Form */}
        <Section id="contact" className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-t border-blue-500/20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform with
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Solutions?</span>
                  </h2>
                  <p className="text-lg text-n-3 leading-relaxed mb-8">
                    Transform your business operations with our AI & Generative AI services. 
                    Whether it's automating processes, creating content, or developing AI-driven applications, we've got you covered.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our AI Solutions?</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Cutting-Edge Technology",
                        description: "Latest AI models and frameworks including GPT, Claude, and custom machine learning solutions.",
                        icon: "🚀"
                      },
                      {
                        title: "Rapid Implementation",
                        description: "Get your AI solutions deployed quickly with our proven development and deployment methodologies.",
                        icon: "⚡"
                      },
                      {
                        title: "Custom AI Solutions",
                        description: "Tailored AI applications that solve your specific business challenges and requirements.",
                        icon: "🎯"
                      },
                      {
                        title: "24/7 AI Support",
                        description: "Continuous monitoring and optimization of your AI systems for maximum performance.",
                        icon: "🔄"
                      },
                      {
                        title: "Scalable Architecture",
                        description: "AI solutions designed to grow with your business and handle increasing workloads.",
                        icon: "📈"
                      },
                      {
                        title: "ROI Focused",
                        description: "Measurable results and clear return on investment with our AI transformation strategies.",
                        icon: "💰"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-sm text-n-3">AI Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-sm text-n-3">AI Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">2+</div>
                    <div className="text-sm text-n-3">Years Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Properly Sticky Form - Only on Large Screens */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-20 lg:self-start"
              >
                <div className="relative p-8 bg-gradient-to-br from-n-7/95 to-n-8/95 rounded-3xl backdrop-blur-xl border border-blue-500/30 shadow-2xl">
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-500"></div>
                  
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-sm"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Start Your AI Transformation
                      </h3>
                      <p className="text-n-3">Tell us about your AI requirements and get a custom solution proposal</p>
                    </div>
                    
                    {submitSuccess ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                        <p className="text-n-3">We'll get back to you within 24 hours to discuss your AI transformation journey.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-n-7/50 border border-n-6/50 text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              name="company"
                              placeholder="Company Name"
                              value={formData.company}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-n-7/50 border border-n-6/50 text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-n-7/50 border border-n-6/50 text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-n-7/50 border border-n-6/50 text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <textarea
                            name="description"
                            placeholder="Tell us about your AI requirements and current challenges..."
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-n-7/50 border border-n-6/50 text-white placeholder-n-4 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                          ></textarea>
                        </div>
                        
                        {submitError && (
                          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm">
                            {submitError}
                          </div>
                        )}
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              <span>Sending Request...</span>
                            </div>
                          ) : (
                            'Start AI Transformation'
                          )}
                        </button>
                      </form>
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

export default AIServices; 