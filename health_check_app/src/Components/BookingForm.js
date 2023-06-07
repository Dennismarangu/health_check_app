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

}

export default BookingForm;

