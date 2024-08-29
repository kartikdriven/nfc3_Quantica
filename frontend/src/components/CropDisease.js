import React from 'react';
import { useNavigate } from 'react-router-dom';

const CropDisease = () => {
  const navigate = useNavigate();

  return (
    <div className="crop-disease-page">
      <h1>Crop Disease Detection</h1>
      <p>Find out about potential crop diseases here.</p>
      <button onClick={() => navigate(-1)}>Go Back</button> {/* Back Button */}
    </div>
  );
};

export default CropDisease;
