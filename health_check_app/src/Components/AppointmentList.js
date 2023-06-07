import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortClick = () => {
    setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  // Filter and sort appointments based on search term and sort order
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <div>
      <Navbar appointmentCount={sortedAppointments.length} />
      <div className="appointment-controls">
        <input
          type="text"
          placeholder="Search Hospital"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSortClick}>
          Sort {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
        </button>
      </div>
      <h2>Appointments</h2>
      <ul>
        {sortedAppointments.map((appointment) => (
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
