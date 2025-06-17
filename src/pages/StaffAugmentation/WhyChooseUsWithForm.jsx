import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';

const WhyChooseUsWithForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'staff-augmentation',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

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
          email: '',
          phone: '',
          serviceType: 'staff-augmentation',
          description: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        // In production, send the request to the API
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            source: 'Staff Augmentation Page'
          }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            serviceType: 'staff-augmentation',
            description: ''
          });
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
      setTimeout(() => setSubmitError(''), 5000);
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

  const whyChooseStaffAug = [
    {
      title: "Pre-Vetted Excellence",
      description: "Every professional undergoes rigorous technical assessments and comprehensive background checks to ensure top-tier quality.",
      icon: "✨"
    },
    {
      title: "Lightning-Fast Onboarding",
      description: "Get skilled talent integrated into your team in days, not months. Cut traditional hiring timelines by up to 75%.",
      icon: "⚡"
    },
    {
      title: "Perfect Cultural Fit",
      description: "We match professionals based on technical skills, soft skills, and cultural alignment with your existing team.",
      icon: "🎯"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden recruitment fees or markups. Our transparent pricing model saves you thousands on traditional hiring costs.",
      icon: "💰"
    },
    {
      title: "Ultimate Flexibility",
      description: "Scale your team up or down as project needs evolve. No long-term commitments, pay only for what you need.",
      icon: "🔄"
    },
    {
      title: "Dedicated Support",
      description: "Ongoing support throughout the engagement ensures smooth collaboration and maximum team productivity.",
      icon: "🤝"
    }
  ];

  return (
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
                Ready to Augment Your 
                <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> Team?</span>
              </h2>
              <p className="text-lg text-n-3 leading-relaxed mb-8">
                Transform your hiring process with our staff augmentation solution. Get pre-vetted talent that integrates seamlessly with your team and delivers results from day one.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Staff Augmentation?</h3>
              <div className="space-y-6">
                {whyChooseStaffAug.map((item, index) => (
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
                <div className="text-2xl font-bold text-purple-400">75%</div>
                <div className="text-sm text-n-3">Faster Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24h</div>
                <div className="text-sm text-n-3">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-n-3">Pre-Vetted</div>
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
                    Request Staff Augmentation
                  </h3>
                  <p className="text-n-3">Tell us about your talent needs and get matched with the perfect professionals</p>
                </div>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-300">
                    <p className="text-center">Thank you! Your request has been sent successfully. We'll get back to you soon.</p>
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
                    <label className="block text-purple-300 text-sm font-medium">Project Requirements</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your staff augmentation needs, including required skills, team size, and project duration..."
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Request Staff Augmentation'
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUsWithForm;
