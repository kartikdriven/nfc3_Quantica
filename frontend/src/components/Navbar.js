import React from 'react';
import './Navbar.css'
import chatbot from '../pages/chatbot';
import { Link } from 'react-router-dom';
import ProfilePage from '../pages/Profilepage';

const Navbar = () => {
  return (
    <header className="header">
        <div className='profile'>
            <Link to="/profile-page"><button>Profile</button></Link>
        </div>
    <div className='Nav-title'><h1><Link to="/" className="title-link">AGRO BUDDY</Link></h1></div>
    <nav>
      <ul>
        <Link to=""></Link><button className='nav-button'>Check Soil Compatibility</button>
        <button className='nav-button'>Check Crop Compatibility</button>
        <button className='nav-button'>Weather Forecast</button>
        <button className='nav-button'>Contact & Support</button>
      </ul>
    </nav>
  </header>
 
  );
};

export default Navbar;