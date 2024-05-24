import "./App.css";

import { useEffect, useRef } from "react";

import ApplaySection from "./Components/ApplaySection";
import Browse from "./Components/Browse";
import FeatureSection from "./Components/FeatureSection";
import Fluid from "webgl-fluid"; // Ensure you're using the correct library version
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import MagicBar from "./Components/MagicBar";
import Navbar from "./Components/Navbar";
import ReviewSection from "./Components/ReviewSection";

function App() {
  const canvas = useRef(null);

  useEffect(() => {
    let c = canvas.current;

    Fluid(c, {});
  }, []);

  return (
    <div className="app">
      <canvas ref={canvas} className="background-canvas"></canvas>
      <div className="content">
        <Navbar />
        <LandingPage />
        <ReviewSection />
        <MagicBar />
        <ApplaySection />
        <Browse />
        <FeatureSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;