import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../components/Section";
import Button from "../../components/Button";

// Import profile images
import leslieAlexander from "../../assets/images/profiles/leslie-alexander.jpeg";
import umarDurrani from "../../assets/images/profiles/Umar-Durrani.jpg";
import davinRobert from "../../assets/images/profiles/Davin-robert.jpeg";
import joshHawkins from "../../assets/images/profiles/Josh-Hawkins.jpeg";

const AlternativeHero = () => {
  return (
    <Section id="hero" className="pt-[12rem] md:pt-[20rem] -mt-[5.25rem] pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8" />
      
      <div className="container px-4 mx-auto relative z-10 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 min-h-[80vh] py-12">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Connecting Devs with Employers
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-lg font-normal text-n-3 sm:mt-8"
            >
              Access pre-vetted developers, designers, and tech specialists who seamlessly integrate with your team. 
              Get the talent you need, when you need it.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12"
            >
              <Button className="text-lg px-8 py-4">
                Augment your team today
              </Button>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 sm:mt-12"
            >
              <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>

              <div className="flex items-center mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                        fill="url(#star-gradient)"
                      />
                      <defs>
                        <linearGradient
                          id="star-gradient"
                          x1="3.07813"
                          y1="3.8833"
                          x2="23.0483"
                          y2="6.90161"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#AC6AFF" />
                          <stop offset="100%" stopColor="#FFC876" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-base font-normal text-white">4.1/5</span>
                <span className="ml-1 text-base font-normal text-n-4">(14k Reviews)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Network */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Enhanced Background Blob with Brighter Glow */}
            <div className="absolute inset-0">
              <svg
                className="blur-3xl filter opacity-40"
                style={{ filter: "blur(64px)" }}
                width="444"
                height="536"
                viewBox="0 0 444 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                  fill="url(#blob-gradient)"
                />
                <defs>
                  <linearGradient
                    id="blob-gradient"
                    x1="82.7339"
                    y1="550.792"
                    x2="-39.945"
                    y2="118.965"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#AC6AFF" />
                    <stop offset="100%" stopColor="#FFC876" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Network Diagram - Custom React Component */}
            <div className="relative w-full max-w-lg mx-auto h-[500px] max-[470px]:h-[550px]">
              
              {/* Developer 1 - Frontend (Top Left) - Responsive positioning with custom breakpoint */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-2 left-8 max-[470px]:top-20 max-[470px]:left-4 z-20"
              >
                <div className="text-center">
                  <img 
                    src={umarDurrani} 
                    alt="Frontend Developer"
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover shadow-lg border-2 border-purple-400/30"
                  />
                  <p className="text-purple-300 text-xs font-medium max-[470px]:text-[10px]">Frontend Developer</p>
                </div>
              </motion.div>

              {/* Developer 2 - Full Stack (Top Center) - Responsive positioning */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute top-2 left-[calc(50%-60px)] transform -translate-x-1/2 z-20"
              >
                <div className="text-center">
                  <img 
                    src={joshHawkins} 
                    alt="Full Stack Developer"
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover shadow-lg border-2 border-purple-400/30"
                  />
                  <p className="text-purple-300 text-xs font-medium max-[470px]:text-[10px]">Full Stack Developer</p>
                </div>
              </motion.div>

              {/* Developer 3 - Backend (Top Right) - Responsive positioning with custom breakpoint */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute top-2 right-8 max-[470px]:top-20 max-[470px]:right-4 z-20"
              >
                <div className="text-center">
                  <img 
                    src={davinRobert} 
                    alt="Backend Developer"
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover shadow-lg border-2 border-purple-400/30"
                  />
                  <p className="text-purple-300 text-xs font-medium max-[470px]:text-[10px]">Backend Developer</p>
                </div>
              </motion.div>

              {/* HR Executive (Bottom Center) - Responsive positioning */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-[calc(50%-50px)] transform -translate-x-1/2 z-30"
              >
                <div className="text-center">
                  <img 
                    src={leslieAlexander} 
                    alt="HR Executive"
                    className="w-28 h-28 rounded-full mx-auto mb-3 object-cover shadow-xl border-3 border-purple-400/50"
                  />
                  <p className="text-purple-300 text-sm font-medium">HR Executive</p>
                </div>
              </motion.div>

              {/* Connection Arrows - Responsive paths */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                viewBox="0 0 400 400"
                style={{ overflow: 'visible' }}
              >
                {/* Line from Frontend Developer to HR Executive - Responsive path */}
                <motion.path
                  d="M 70 90 Q 120 180 200 300"
                  className="max-[470px]:hidden"
                  stroke="#AC6AFF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                />
                
                {/* Mobile path for Frontend Developer */}
                <motion.path
                  d="M 50 160 Q 100 220 200 300"
                  className="hidden max-[470px]:block"
                  stroke="#AC6AFF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                />
                
                {/* CENTER LINE - Responsive */}
                <motion.path
                  d="M 200 90 L 200 300"
                  className="max-[470px]:hidden"
                  stroke="#AC6AFF"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
                
                {/* Mobile center line */}
                <motion.path
                  d="M 200 90 L 200 300"
                  className="hidden max-[470px]:block"
                  stroke="#AC6AFF"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
                
                {/* Line from Backend Developer to HR Executive - Responsive path */}
                <motion.path
                  d="M 330 90 Q 280 180 200 300"
                  className="max-[470px]:hidden"
                  stroke="#AC6AFF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 1.7 }}
                />
                
                {/* Mobile path for Backend Developer */}
                <motion.path
                  d="M 350 160 Q 300 220 200 300"
                  className="hidden max-[470px]:block"
                  stroke="#AC6AFF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 1.7 }}
                />
              </svg>

              {/* Subtle glow effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AlternativeHero; 