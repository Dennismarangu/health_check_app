import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import BookingForm from './Components/BookingForm';
import AppointmentList from './Components/AppointmentList';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm';

const App = () => {
  const [userRegistered, setUserRegistered] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegistrationSuccess = (userData) => {
    setUserRegistered(true);
    setLoggedInUser(userData.user);
  };

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
              <Route path="/booking" element={<BookingForm />} />
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
