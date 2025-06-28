import { Link } from "react-router-dom";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section className="overflow-hidden" id="Services">
      <div className="container relative z-2 mt-20">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Comprehensive Digital Solutions"
          tag="Our Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 justify-items-center">
          {benefits.map((item) => {
            const getRouteForService = (id) => {
              switch(id) {
                case "0": return "/staff-augmentation";
                case "1": return "/custom-software-solutions";
                case "2": return "/ai-services";
                case "3": return "/ecommerce-solutions";
                case "4": return "/microsoft-dynamics-erp";
                case "5": return "/digital-marketing";
                default: return "#";
              }
            };

            const hasRoute = ["0", "1", "2", "3", "4", "5"].includes(item.id);

            return (
              <Link
                to={getRouteForService(item.id)}
                key={item.id}
                className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full max-w-[24rem] h-[28rem] ${
                  hasRoute ? "cursor-pointer hover:opacity-90 transition-opacity" : ""
                }`}
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col h-full p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3 flex-grow">{item.text}</p>
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                      className="flex-shrink-0"
                    />
                    <div className="flex items-center">
                      <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider mr-2">
                        {hasRoute ? "Learn More" : "Coming Soon"}
                      </p>
                      <Arrow />
                    </div>
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
