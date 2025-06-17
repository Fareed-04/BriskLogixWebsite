import Section from "./Section";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    {
      id: "0",
      name: "Hassan Adil",
      position: "CEO",
      company: "Panora Properties",
      rating: 5,
      text: "BriskLogix delivered a full end-to-end solution including AI bot and full stack application creation with an incredibly smooth experience. Their team's expertise and attention to detail exceeded our expectations.",
      avatar: "HA"
    },
    {
      id: "1", 
      name: "Arsal Manan",
      position: "COO",
      company: "Panora Virtual Tours",
      rating: 5,
      text: "Outstanding website development and digital marketing services including SEO and social media management. BriskLogix transformed our online presence and significantly boosted our visibility.",
      avatar: "AM"
    },
    {
      id: "2",
      name: "Zaid Mushtaq", 
      position: "COO",
      company: "Axle Fleets",
      rating: 4.5,
      text: "Exceptional website development with timely delivery and remarkable professionalism from the entire team. Their commitment to quality and deadlines is truly impressive.",
      avatar: "ZM"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
          <svg className="w-5 h-5 text-yellow-400 fill-current absolute top-0 left-0" viewBox="0 0 20 20" style={{clipPath: 'inset(0 50% 0 0)'}}>
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        </div>
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <Section className="py-20" id="Reviews">
      <div className="container">
        <Heading
          tag="Client Reviews"
          title="What Our Clients Say"
          text="Hear from our satisfied clients about their experience working with BriskLogix"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-n-7 to-n-8 rounded-2xl p-8 m-0.5 transition-all duration-300 group-hover:m-0">
                
                {/* Quote Icon */}
                <div className="text-4xl text-purple-400 mb-4 opacity-50">
                  "
                </div>
                
                {/* Review Text */}
                <p className="text-n-3 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {review.text}
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-n-4 text-sm">({review.rating})</span>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-n-4 text-xs">
                      {review.position}, {review.company}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
