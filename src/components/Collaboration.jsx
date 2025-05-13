import { brainwaveSymbol, check, smallSphere, stars } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { MouseParallax } from "react-just-parallax";
import { useEffect, useState, useRef } from "react";

const StarAnimation = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full opacity-50" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full opacity-50" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full opacity-50" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full opacity-50" />
      </MouseParallax>
    </div>
  );
};

const Collaboration = () => {
  const parallaxRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
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
          service: '',
          description: ''
        });
      } else {
        // In production, send the request to the API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Something went wrong. Please try again.');
        }
        
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          service: '',
          description: ''
        });
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
    <Section crosses className="!pb-0" id="Collaboration">
      <div className="container">
        {/* Mission Vision Section */}
        <div className="mb-10">
          <h2 className="h1 mb-6 text-center text-white">
            Welcome to BriskLogix
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Welcome text */}
            <div className="relative z-1">
              <div className="relative p-8 bg-n-7/50 rounded-2xl backdrop-blur-sm">
                <StarAnimation parallaxRef={parallaxRef} />
                <div className="relative z-1">
                  <h3 className="h4 mb-6 text-[#AC6AFF]">Smart Talent. Sustainable Results.</h3>
                  <p className="body-2 mb-6 text-n-3">
                    BriskLogix is an emerging IT services company dedicated to empowering businesses with purpose-driven, high-performing tech professionals and smart digital solutions.
                  </p>
                  <p className="body-2 mb-6 text-n-3">
                    We specialize in Staff Augmentation, AR/VR, Web & App Development, AI Integration, Microsoft ERP Implementation, and Project Management Services—with a focus on results, not just resources.
                  </p>
                  <h3 className="h4 mb-4 text-[#AC6AFF]">What Makes Us Different?</h3>
                  <p className="body-2 mb-6 text-n-3">
                    We don't just place talent—we grow it.
                  </p>
                  <p className="body-2 mb-6 text-n-3">
                    Our distinctive model blends technical expertise with leadership coaching and soft skills training. Every professional we deploy is handpicked, mentored, and aligned with purpose, ensuring not just task completion—but value creation.
                  </p>
                  <p className="body-2 mb-6 text-n-3">
                    From scaling your tech team to launching intelligent products, we help you build capacity with excellence, flexibility, and cost-efficiency at the core.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Custom Form */}
            <div className="relative z-1">
              <div className="relative p-8 bg-n-7/50 rounded-2xl backdrop-blur-sm">
                <StarAnimation parallaxRef={parallaxRef} />
                <div className="relative z-1">
                  <h3 className="h4 mb-8 text-center text-[#AC6AFF]">
                    Let's build the future together
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
                      <label className="block text-[#AC6AFF] mb-2">Required Services</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-n-8 border border-[#AC6AFF] rounded-lg text-white focus:outline-none focus:border-[#AC6AFF]"
                        disabled={isSubmitting}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="staff-augmentation">Staff Augmentation</option>
                        <option value="web-app">Web & App Development</option>
                        <option value="ai-integration">AI Integration</option>
                        <option value="erp-implementation">Microsoft ERP Implementation</option>
                        <option value="project-management">Project Management Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#AC6AFF] mb-2">Brief Project Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
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
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Small Sphere and Stars */}
          <div className="relative justify-center mb-8 flex">
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>

          {/* Vision and Mission Statements - Parallel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Vision Statement */}
            <div className="relative p-6 bg-n-7/50 rounded-2xl backdrop-blur-sm">
              <StarAnimation parallaxRef={parallaxRef} />
              <div className="relative z-1 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AC6AFF] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="h4 mb-4 text-[#AC6AFF]">Vision Statement</h4>
                  <p className="body-2 text-n-3">
                    To be a global catalyst for innovation and excellence—driving digital transformation, AI-powered solutions, AR/VR solutions, project management services, and delivering skilled, purpose-driven talent that enables businesses to thrive in a fast-evolving tech world.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="relative p-6 bg-n-7/50 rounded-2xl backdrop-blur-sm">
              <StarAnimation parallaxRef={parallaxRef} />
              <div className="relative z-1 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AC6AFF] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="h4 mb-4 text-[#AC6AFF]">Mission Statement</h4>
                  <p className="body-2 text-n-3">
                    To empower businesses with purpose-driven, high-performing tech professionals and smart digital solutions that drive sustainable growth and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
