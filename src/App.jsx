import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import WelcomeBriskLogix from "./components/WelcomeBriskLogix";
import WhyChooseUs from "./components/WhyChooseUs";
import StaffAugmentation from "./pages/StaffAugmentation";
import CustomSoftwareSolutions from "./pages/CustomSoftwareSolutions";
import DigitalMarketing from "./pages/DigitalMarketing";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import MicrosoftDynamics from "./pages/MicrosoftDynamics";
import AIServices from "./pages/AIServices";
import { Routes, Route } from "react-router-dom";

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/custom-software-solutions" element={<CustomSoftwareSolutions />} />
        <Route path="/ai-services" element={<AIServices />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
        <Route path="/microsoft-dynamics-erp" element={<MicrosoftDynamics />} />
        <Route
          path="/"
          element={
            <>
              <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Benefits />
                <WelcomeBriskLogix />
                <Collaboration />
                <Services />
                <Reviews />
                <WhyChooseUs />
                <Roadmap />
                <Footer />
              </div>
              <ButtonGradient />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
