import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Section from "../../components/Section";
import { SparklesCore } from "../../components/ui/sparkles";

const StarAnimation = ({ parallaxRef }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-4 left-4 w-2 h-2 bg-[#AC6AFF] rounded-full animate-pulse"></div>
      <div className="absolute top-12 right-8 w-1 h-1 bg-[#AC6AFF] rounded-full animate-ping"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-[#AC6AFF] rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-[#AC6AFF] rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#AC6AFF] rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#AC6AFF] rounded-full animate-ping"></div>
    </div>
  );
};

const ContactForm = () => {
  const parallaxRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'staff-augmentation',
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
          service: 'staff-augmentation',
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
            service: 'staff-augmentation',
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

  return (
    <>
      {/* Full-width Sparkles Background */}
      <div className="relative w-full min-h-[300px] flex items-center justify-center bg-n-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="contact-heading-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={120}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-20">
          <div className="max-w-[62rem] mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight py-8"
              style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif", letterSpacing: '-0.02em' }}
            >
              Ready to Augment Your Team?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Let us know your talent needs, and we'll help you find the perfect match.
              Fill out the form below to get started.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <Section className="overflow-hidden" id="contact-form">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-[3.875rem] md:pt-20 lg:pt-[6.25rem]">
            {/* Left side - Why Staff Augmentation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-1"
            >
              <div className="relative p-8 bg-n-7/50 rounded-2xl backdrop-blur-sm">
                <StarAnimation parallaxRef={parallaxRef} />
                <div className="relative z-1">
                  <h3 className="h4 mb-6 text-[#AC6AFF]">Why Choose Staff Augmentation?</h3>
                  <p className="body-2 mb-6 text-n-3">
                    In today's fast-paced tech landscape, traditional hiring can't keep up with your dynamic needs. Staff augmentation offers a better way:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-[#AC6AFF]"></span>
                      <p className="body-2 text-n-3">Faster access to specialized talent when you need it most</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-[#AC6AFF]"></span>
                      <p className="body-2 text-n-3">Reduced overhead costs compared to traditional hiring</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-[#AC6AFF]"></span>
                      <p className="body-2 text-n-3">Flexibility to scale your team up or down as project needs change</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-[#AC6AFF]"></span>
                      <p className="body-2 text-n-3">Immediate productivity with pre-vetted, experienced professionals</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-[#AC6AFF]"></span>
                      <p className="body-2 text-n-3">Risk mitigation through our quality assurance and support processes</p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-1" ref={parallaxRef}
            >
              <div className="relative p-8 bg-n-7/50 rounded-2xl backdrop-blur-sm">
                <StarAnimation parallaxRef={parallaxRef} />
                <div className="relative z-1">
                  <h3 className="h4 mb-8 text-center text-[#AC6AFF]">
                    Request Staff Augmentation
                  </h3>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-500">
                      <p className="text-center">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-500">
                      <p className="text-center">{submitError}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Company Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#AC6AFF] mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-n-8 border border-[#AC6AFF] rounded-lg text-white focus:outline-none focus:border-[#AC6AFF]"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#AC6AFF] mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-n-8 border border-[#AC6AFF] rounded-lg text-white focus:outline-none focus:border-[#AC6AFF]"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#AC6AFF] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-n-8 border border-[#AC6AFF] rounded-lg text-white focus:outline-none focus:border-[#AC6AFF]"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#AC6AFF] mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-n-8 border border-[#AC6AFF] rounded-lg text-white focus:outline-none focus:border-[#AC6AFF]"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#AC6AFF] mb-2">Brief Project Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your staff augmentation needs, including required skills, team size, and project duration..."
                        className="w-full px-4 py-2 bg-n-8 border border-[#AC6AFF] rounded-lg text-white focus:outline-none focus:border-[#AC6AFF] h-32"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#AC6AFF] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactForm; 