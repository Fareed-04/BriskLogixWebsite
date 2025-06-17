import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const WelcomeBriskLogix = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
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
      const isDevelopment = import.meta.env.DEV;
      
      if (isDevelopment) {
        console.log('Form submitted in development mode:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          serviceType: '',
          description: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            source: 'Home Page - Welcome to BriskLogix'
          }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            serviceType: '',
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

  return (
    <Section id="welcome" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
      <div className="container">
        {/* Centered Overall Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to 
            <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent"> BriskLogix</span>
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-n-3 leading-relaxed mb-6">
                BriskLogix is an emerging IT services company dedicated to empowering businesses with purpose-driven, 
                high-performing tech professionals and smart digital solutions.
              </p>
              <p className="text-lg text-n-3 leading-relaxed mb-6">
                We specialize in Staff Augmentation, AR/VR, Web & App Development, AI Integration, Microsoft ERP Implementation, 
                and Project Management Services—with a focus on results, not just resources.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What Makes Us Different?</h3>
              <p className="text-lg text-n-3 leading-relaxed mb-4">
                We don't just place talent—we grow it.
              </p>
              <p className="text-lg text-n-3 leading-relaxed mb-4">
                Our distinctive model blends technical expertise with leadership coaching and soft skills training. 
                Every professional we deploy is handpicked, mentored, and aligned with purpose, ensuring not just 
                task completion—but value creation.
              </p>
              <p className="text-lg text-n-3 leading-relaxed mb-6">
                From scaling your tech team to launching intelligent products, we help you build capacity with 
                excellence, flexibility, and cost-efficiency at the core.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
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
                    Schedule a Meeting
                  </h3>
                  <p className="text-n-3">Let's discuss how we can help accelerate your business growth</p>
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
                      <option value="Staff Augmentation">Staff Augmentation</option>
                      <option value="Custom Software Solutions">Custom Software Solutions</option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Microsoft Dynamics ERP">Microsoft Dynamics ERP</option>
                      <option value="AR/VR Development">AR/VR Development</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Project Management">Project Management</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-purple-300 text-sm font-medium">Project Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-n-8/50 border border-purple-500/30 rounded-2xl text-white placeholder-n-4 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
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
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Schedule a Meeting'
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

export default WelcomeBriskLogix; 