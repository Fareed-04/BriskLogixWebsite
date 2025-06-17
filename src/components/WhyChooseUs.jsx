import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const WhyChooseUs = () => {
  const scrollToWelcome = () => {
    const welcomeSection = document.getElementById('welcome');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyChooseUsItems = [
    {
      title: "Smart Talent. Sustainable Results.",
      description: "We don't just place talent—we grow it. Our distinctive model blends technical expertise with leadership coaching and soft skills training.",
      icon: "🎯"
    },
    {
      title: "Purpose-Driven Professionals",
      description: "Every professional we deploy is handpicked, mentored, and aligned with purpose, ensuring not just task completion—but value creation.",
      icon: "💡"
    },
    {
      title: "Excellence & Flexibility",
      description: "From scaling your tech team to launching intelligent products, we help you build capacity with excellence, flexibility, and cost-efficiency at the core.",
      icon: "⚡"
    },
    {
      title: "Comprehensive Solutions",
      description: "We specialize in Staff Augmentation, AR/VR, Web & App Development, AI Integration, Microsoft ERP Implementation, and Project Management Services.",
      icon: "🔧"
    }
  ];

  return (
    <Section id="whychooseus" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
      <div className="container">
        {/* Main Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Choose 
            <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> Us?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What Makes Us Different?</h3>
              <div className="space-y-6">
                {whyChooseUsItems.map((item, index) => (
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

          {/* Right Side - Ready to Transform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-start"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform? Let's Elevate Your Business 
                <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> Together!</span>
              </h2>
              <p className="text-lg text-n-3 leading-relaxed mb-8">
                Take the first step towards digital transformation. Our expert team is ready to help you 
                scale your business with cutting-edge solutions and exceptional talent.
              </p>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-gradient-to-br from-n-7/80 to-n-8/80 rounded-3xl p-8 backdrop-blur-xl border border-purple-500/20 shadow-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule a Meeting?</h3>
                <p className="text-n-3 text-lg leading-relaxed mb-6">
                  Join hundreds of companies who have transformed their business with our expert team. 
                  Let's discuss your next big project!
                </p>
                
                <motion.button
                  onClick={scrollToWelcome}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Meeting
                </motion.button>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
