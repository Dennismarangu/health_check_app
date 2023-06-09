import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import BookingForm from './Components/BookingForm';
import AppointmentList from './Components/AppointmentList';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm';
import axios from 'axios';


const App = () => {
  const [userRegistered, setUserRegistered] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  const handleRegistrationSuccess = (userData) => {
    setUserRegistered(true);
    setLoggedInUser(userData.user);
  };

  useEffect(() => {
    // Fetch the hospitals data from the backend API
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:9292/hospitals');
        setHospitals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <div className="App">
      <Navbar
        userRegistered={userRegistered}
        loggedInUser={loggedInUser}
      />
      <div className="content-container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home userRegistered={userRegistered} />}
          />
          <Route path="/login" element={<LoginForm setLoggedInUser={setLoggedInUser} />} />
          <Route
            path="/registration"
            element={<RegistrationForm
              setUserRegistered={setUserRegistered}
              handleRegistrationSuccess={handleRegistrationSuccess}
            />}
          />
          {userRegistered ? (
            <>
              <Route
                path="/booking"
                element={<BookingForm hospitals={hospitals} />}
              />
              <Route path="/appointments" element={<AppointmentList />} />
            </>
          ) : (
            <Route path="" element={<Navigate to="/registration" replace />} />
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
