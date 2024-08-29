import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoilCompatibility = () => {
  const navigate = useNavigate();

  return (
    <div className="soil-compatibility-page">
      <h1>Soil Compatibility</h1>
      <p>Check the compatibility of your soil for different crops here.</p>
      <button onClick={() => navigate(-1)}>Go Back</button> {/* Back Button */}
    </div>
  );
};

export default SoilCompatibility;
