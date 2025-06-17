import { briskLogixLogo, check, smallSphere, stars } from "../assets";
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
            service: '',
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
    <Section crosses className="!pb-0" id="Collaboration">
      <div className="container">
        {/* Small Sphere and Stars */}
        <div className="relative justify-center mb-16 flex">
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

          {/* Enhanced Vision and Mission Statements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Vision Statement */}
            <div className="relative p-8 bg-gradient-to-br from-n-7/80 to-n-8/80 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-2xl group hover:border-purple-400/40 transition-all duration-300">
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
              
              <div className="relative z-1 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Vision Statement</h4>
                  <p className="text-n-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    To be a global catalyst for innovation and excellence—driving digital transformation, AI-powered solutions, AR/VR solutions, project management services, and delivering skilled, purpose-driven talent that enables businesses to thrive in a fast-evolving tech world.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="relative p-8 bg-gradient-to-br from-n-7/80 to-n-8/80 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-2xl group hover:border-purple-400/40 transition-all duration-300">
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
              
              <div className="relative z-1 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Mission Statement</h4>
                  <p className="text-n-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    To empower businesses with purpose-driven, high-performing tech professionals and smart digital solutions that drive sustainable growth and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Section>
  );
};

export default Collaboration;
