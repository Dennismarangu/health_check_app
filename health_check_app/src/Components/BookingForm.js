import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [hospital, setHospital] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newAppointment = { hospital, date, time, reason };

      try {
        // Make a POST request to the backend API to create a new appointment
        const response = await axios.post('http://localhost:9292/appointments', newAppointment);
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div>
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
          </form>
        </div>
      );
    };

export default BookingForm;

