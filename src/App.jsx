import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Footer />
    </div>
    </>
  );
};

export default App
