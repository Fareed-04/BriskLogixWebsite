import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import StaffAugmentation from "./pages/StaffAugmentation";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/staff-augmentation" element={<StaffAugmentation />} />
      <Route
        path="/"
        element={
          <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Header />
              <Hero />
              <Benefits />
              <Collaboration />
              <Product />
              {/* <Services /> */}
              <Roadmap />
              <Footer />
            </div>
            <ButtonGradient />
          </>
        }
      />
    </Routes>
  );
};

export default App;
