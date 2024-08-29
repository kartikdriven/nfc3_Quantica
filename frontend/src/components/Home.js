import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar'
import SoilCompatibility from './SoilCompatiblity';
import CropDisease from './CropDisease';

const Home = () => {
  return (
    <div className="agro-buddy">
      <Navbar />

      <main className="main">
        <div className="hero-section">
          <h1>Agro-Buddy</h1>
          <p>Your Own Agriculture Buddy to help you make your Crop Bloom</p>
          <div className="buttons">
            <Link to="/soil-compatibility"><button>Check Soil Compatibility</button></Link> {/* Link to Soil Compatibility Page */}
            <Link to="/crop-disease"><button>Find Crop Disease</button></Link> {/* Link to Crop Disease Page */}
          </div>
        </div>

        <section className="about-section">
          <h2>About</h2>
          <p>
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look.
          </p>
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite...
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
