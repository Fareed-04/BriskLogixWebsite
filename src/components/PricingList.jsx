import { check } from "../assets";
import { Product } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
      {Product.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-8 flex flex-col"
        >
          <h4 className="h4 mb-4 text-[#AC6AFF]">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {item.id === "0" && (
            <Button
              className="w-full mb-6"
              href="/explore"
              white
            >
              Explore
            </Button>
          )}

          <ul className="mt-auto">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
