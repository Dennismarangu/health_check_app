import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import BookingForm from './BookingForm';
import AppointmentList from './AppointmentList';

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <BookingForm />
      <AppointmentList />
    </div>
  );
}

export default App;
