import Section from "./Section";
import { useEffect, useRef } from "react";
import { StarAnimation } from "./design/Hero";

const MissionVision = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Remove any existing script
    const existingScript = document.querySelector('script[src*="jotform"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new script
    const script = document.createElement('script');
    script.src = "https://form.jotform.com/jsform/251265744109457";
    script.type = "text/javascript";
    script.async = true;
    
    const container = document.getElementById('jotform-container');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <Section>
      <div className="container">
        {/* Welcome Heading */}
        <h2 className="h1 mb-6 text-center bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
          Welcome to BriskLogix
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="relative z-1">
            <div className="relative p-8 bg-n-7/50 rounded-2xl backdrop-blur-sm">
              <StarAnimation parallaxRef={parallaxRef} />
              <div className="relative z-1">
                {/* Smart Talent Section */}
                <h3 className="h4 mb-6 text-[#DD734F]">Smart Talent - Sustainable Results.</h3>
                <p className="body-2 mb-6 text-n-3">
                  BriskLogix is an emerging IT services company dedicated to empowering businesses with purpose-driven, high-performing tech professionals and smart digital solutions.
                </p>
                <p className="body-2 mb-6 text-n-3">
                  We specialize in Staff Augmentation, AR/VR, Web & App Development, AI Integration, Microsoft ERP Implementation, and Project Management Services—with a focus on results, not just resources.
                </p>

                {/* What Makes Us Different Section */}
                <h3 className="h4 mb-4 text-[#DD734F]">What Makes Us Different?</h3>
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

            {/* Vision and Mission Statements - Now below What Makes Us Different */}
            <div className="mt-8 space-y-8">
              {/* Vision Statement */}
              <div className="relative p-6 bg-n-7/50 rounded-2xl backdrop-blur-sm">
                <StarAnimation parallaxRef={parallaxRef} />
                <div className="relative z-1 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DD734F] to-[#1A1A32] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="h4 mb-4 text-[#DD734F]">Vision Statement</h4>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DD734F] to-[#1A1A32] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="h4 mb-4 text-[#DD734F]">Mission Statement</h4>
                    <p className="body-2 text-n-3">
                      To empower businesses with purpose-driven, high-performing tech professionals and smart digital solutions that drive sustainable growth and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - JotForm */}
          <div className="relative z-1">
            <div className="relative p-8 bg-n-7/50 rounded-2xl backdrop-blur-sm">
              <StarAnimation parallaxRef={parallaxRef} />
              <div className="relative z-1">
                <div id="jotform-container" className="w-full min-h-[600px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MissionVision; 