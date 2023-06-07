import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import BookingForm from './Components/BookingForm';
import AppointmentList from './Components/AppointmentList';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm';


const App = () => (
  <div className="App">
    <Navbar />
    <div className="content-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;

