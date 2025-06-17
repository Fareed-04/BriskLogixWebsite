import { curve, heroBackgroundImage } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] relative overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Background Image */}
      <img 
        src={heroBackgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-n-8/70 z-1" />
      
      <div className="container relative mt-24 z-10" ref={parallaxRef}>
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Your Digital Transformation {` `}
            <span className="inline-block relative">
              Powerhouse{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8">
            From cutting-edge AI solutions to enterprise-grade scalable systems, we deliver comprehensive digital excellence. 
            Transform your business with intelligent automation, custom development, and strategic digital presence enhancement 
            that drives real results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              href="#Services"
            >
              Explore Solutions
            </Button>
            <Button 
              white
              href="#welcome"
            >
              Get Consultation
            </Button>
          </div>
        </div>

        {/* Facts Section */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-n-7/30 rounded-2xl backdrop-blur-sm border border-n-6/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">24hr</div>
              <div className="text-n-2 text-sm uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center p-6 bg-n-7/30 rounded-2xl backdrop-blur-sm border border-n-6/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-n-2 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-n-7/30 rounded-2xl backdrop-blur-sm border border-n-6/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-n-2 text-sm uppercase tracking-wider">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
      
      <Gradient />
    </Section>
  );
};

export default Hero;
