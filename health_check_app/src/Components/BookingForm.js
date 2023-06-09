import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const [hospital, setHospital] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAppointment = { hospital, date, time, reason };

    try {
      // Make a POST request to the backend API to create a new appointment
      const response = await axios.post('http://localhost:9292/appointments', newAppointment);
      console.log(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hospital"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
        <Link to="/appointments">
          <button>Check Listed Appointments</button>
        </Link>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <span className="emoji">&#x2714;</span>
            <p>Appointment booked successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
