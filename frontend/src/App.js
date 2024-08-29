import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SoilCompatibility from './components/SoilCompatiblity';
import CropDisease from './components/CropDisease';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <ProtectedRoute path="/" element={<Home/>} />
        <ProtectedRoute path="/soil-compatibility" element={SoilCompatibility} />
        <ProtectedRoute path="/crop-disease" element={CropDisease} />
      </Routes>
    </Router>
  );
};

export default App;
