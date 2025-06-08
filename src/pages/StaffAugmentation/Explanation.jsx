import { motion } from "framer-motion";
import Section from "../../components/Section";
import { SparklesCore } from "../../components/ui/sparkles";
import { check } from "../../assets";

const Explanation = () => {
  return (
    <Section className="overflow-hidden relative" id="explanation">
      {/* Fullpage Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="relative z-1">
          <div className="relative max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h2 mb-6"
            >
              What is <span className="text-purple-gradient">Staff Augmentation?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="body-1 text-n-3 mb-10 max-w-3xl mx-auto"
            >
              Staff augmentation is a flexible outsourcing strategy that enables you to add skilled tech professionals to your existing team for specific projects or ongoing work. It combines the best aspects of in-house hiring and outsourcing.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-n-7 rounded-[2rem] overflow-hidden"
            >
              <div className="px-6 py-8 md:p-10">
                <h4 className="h4 mb-4 text-purple-gradient">Traditional Hiring Challenges</h4>
                <ul className="space-y-4">
                  {[
                    "Lengthy recruitment processes (3+ months)",
                    "High onboarding costs",
                    "Long-term commitments",
                    "Limited access to specialized skills",
                    "Overhead expenses (benefits, workspace, equipment)",
                    "Scaling difficulties for project-based needs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <img src={check} alt="Check" width={24} height={24} />
                      <p className="body-2 text-n-3 ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-n-7 rounded-[2rem] overflow-hidden"
            >
              <div className="px-6 py-8 md:p-10">
                <h4 className="h4 mb-4 text-purple-gradient">BriskLogix Staff Augmentation Benefits</h4>
                <ul className="space-y-4">
                  {[
                    "Immediate access to pre-vetted talent (days, not months)",
                    "Flexible engagement models (hourly, part-time, full-time)",
                    "No recruitment or training overhead",
                    "Scale your team up or down as needed",
                    "Access to specialized skills on demand",
                    "Seamless integration with your existing workflows"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <img src={check} alt="Check" width={24} height={24} />
                      <p className="body-2 text-n-3 ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Explanation; 