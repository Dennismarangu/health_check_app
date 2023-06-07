import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      // Fetch the list of appointments from the backend API
      const fetchAppointments = async () => {
        try {
          const response = await axios.get('http://localhost:9292/appointments');
          setAppointments(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchAppointments();
    }, []);



  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Hospital: {appointment.hospital}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Reason: {appointment.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
