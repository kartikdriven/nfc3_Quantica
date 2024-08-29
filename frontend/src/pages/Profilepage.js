import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';  // Import Firebase auth and db services
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import './Profilepage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [soilPH, setSoilPH] = useState('');
  const [dreamCrop, setDreamCrop] = useState('');
  const [potassium, setPotassium] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, "profiles", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || '');
          setPhoneNumber(data.phoneNumber || '');
          setLocation(data.location || '');
          setSoilPH(data.soilPH || '');
          setDreamCrop(data.dreamCrop || '');
          setPotassium(data.potassium || '');
        }
      }
    };
    fetchProfileData();
  }, [user]);

  const handlePhoneAuth = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        handleSignIn();
      }
    }, auth);

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        alert(error.message);
      });
  };

  const handleVerificationCode = () => {
    window.confirmationResult.confirm(verificationCode).then((result) => {
      setUser(result.user);
      setIsAuthenticated(true);
    }).catch((error) => {
      alert('Incorrect code');
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('You must authenticate with your phone number first.');
      return;
    }

    const profileData = {
      name,
      phoneNumber,
      location,
      soilPH,
      dreamCrop,
      potassium
    };

    try {
      await setDoc(doc(db, "profiles", user.uid), profileData);
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data: ', error.message);
    }
  };

  const handleClear = () => {
    setName('');
    setPhoneNumber('');
    setLocation('');
    setSoilPH('');
    setDreamCrop('');
    setPotassium('');
    alert('Data cleared!');
  };

  return (
    <div className="profile-page">
      <div id="recaptcha-container"></div>

      {!isAuthenticated && (
        <div className="auth-container">
          <h2>Phone Authentication</h2>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <button onClick={handlePhoneAuth}>Send Code</button>
          </div>
          <div className="form-group">
            <label htmlFor="verificationCode">Verification Code:</label>
            <input type="text" id="verificationCode" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
            <button onClick={handleVerificationCode}>Verify</button>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="form-container">
          <h1>Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <select id="location" value={location} onChange={(e) => setLocation(e.target.value)} required>
                <option value="">Select District</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                {/* Add other districts here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="soilPH">Soil pH Value:</label>
              <input type="number" id="soilPH" value={soilPH} onChange={(e) => setSoilPH(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="dreamCrop">Dream Crop:</label>
              <input type="text" id="dreamCrop" value={dreamCrop} onChange={(e) => setDreamCrop(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="potassium">Potassium Value:</label>
              <input type="number" id="potassium" value={potassium} onChange={(e) => setPotassium(e.target.value)} required />
            </div>
            <div className="form-group">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={handleClear}>Clear Details</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
