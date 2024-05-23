import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import ReviewSection from './Components/ReviewSection';
import MagicBar from './Components/MagicBar';
import ApplaySection from './Components/ApplaySection';
import Browse from './Components/Browse';
import FeatureSection from './Components/FeatureSection';
import Footer from './Components/Footer';
import { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid'; // Ensure you're using the correct library version

function App() {
  const canvas = useRef(null);

  useEffect(() => {
    let c = canvas.current;
    const fluid = Fluid(c);

    if (!fluid || typeof fluid.addRandomSplats !== 'function') { // Check for 'addRandomSplats' method
      console.error('Failed to initialize Fluid or addRandomSplats method not found.');
      return;
    }

    // Attach mouse move listener
    const handleMouseMove = (event) => {
      const rect = c.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      fluid.addRandomSplats(x, y); // Use the correct method for adding particles
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <canvas ref={canvas} className='background-canvas'></canvas>
      <div className='content'>
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

export default App;