import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is staff augmentation and how can it benefit my business?",
      answer: "Staff augmentation is a flexible outsourcing strategy that allows you to hire skilled IT professionals on-demand to supplement your existing team. It provides access to specialized expertise without the long-term commitment of permanent hiring, reduces recruitment costs, and enables rapid scaling of your team for specific projects or skill gaps."
    },
    {
      question: "How long does it typically take to develop custom software?",
      answer: "Custom software development timelines vary based on project complexity, features, and requirements. Simple applications may take 2-4 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process."
    },
    {
      question: "What technologies do you specialize in for software development?",
      answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, Flutter, Swift, MongoDB, and Microsoft technologies. Our team stays current with the latest frameworks and tools to ensure your software is built using the most appropriate and future-proof technologies for your specific needs."
    },
    {
      question: "Do you provide ongoing support and maintenance after software deployment?",
      answer: "Yes, we offer comprehensive post-deployment support including bug fixes, security updates, performance optimization, and feature enhancements. Our maintenance packages are tailored to your needs and ensure your software remains secure, up-to-date, and performs optimally as your business grows."
    },
    {
      question: "Can you help modernize our existing legacy systems?",
      answer: "Absolutely! We specialize in legacy code integration and modernization. We can refactor outdated code, migrate to modern platforms, improve performance, and add new features while preserving your existing business logic and data. This approach is often more cost-effective than rebuilding from scratch."
    },
    {
      question: "What industries do you serve for software development services?",
      answer: "We serve various industries including healthcare, finance, e-commerce, logistics, real estate, education, and more. Our team has experience across multiple sectors and can adapt our solutions to meet industry-specific requirements, compliance standards, and business processes."
    },
    {
      question: "How do you ensure the security of custom software applications?",
      answer: "Security is integrated into our development process from day one. We follow secure coding practices, conduct regular security audits, implement encryption, perform vulnerability testing, and ensure compliance with industry standards. We also provide ongoing security monitoring and updates to protect against emerging threats."
    },
    {
      question: "What is your pricing model for software development projects?",
      answer: "Our pricing depends on project scope, complexity, timeline, and resources required. We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. We provide detailed estimates after understanding your specific requirements and goals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="overflow-hidden" id="FAQ">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl mx-auto text-center"
          title="Frequently Asked Questions"
          text="Get answers to common questions about our software development and IT services"
        />

        <div className="max-w-4xl mx-auto mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-n-7/50 backdrop-blur-sm rounded-2xl border border-n-1/10 hover:bg-n-7/70 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="h6 text-n-1 group-hover:text-color-1 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-n-4 group-hover:text-color-1 transition-colors"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="body-2 text-n-3 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ; 