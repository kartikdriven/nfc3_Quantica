import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SoilCompatibility from './components/SoilCompatiblity';
import CropDisease from './components/CropDisease';
import ProfilePage from './pages/Profilepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile-page' element={<ProfilePage />}/>
        <Route path="/soil-compatibility" element={<SoilCompatibility />} />
        <Route path="/crop-disease" element={<CropDisease />} />
      </Routes>
    </Router>
  );
};

export default App;
