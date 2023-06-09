import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentList.css';


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
  appointment.reason && appointment.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  const handleEditClick = async (id) => {
    try {
      // Make an API request to fetch the appointment details
      const response = await axios.get(`http://localhost:9292/appointments/${id}`);
      const appointmentData = response.data;

      // Prompt the user for updated appointment information using a form or modal
      const updatedHospital = prompt('Enter updated hospital:', appointmentData.hospital);
      const updatedDate = prompt('Enter updated date:', appointmentData.date);
      const updatedTime = prompt('Enter updated time:', appointmentData.time);
      const updatedReason = prompt('Enter updated reason:', appointmentData.reason);

      // Make an API request to update the appointment with the given id
      await axios.put(`http://localhost:9292/appointments/${id}`, {
        hospital: updatedHospital,
        date: updatedDate,
        time: updatedTime,
        reason: updatedReason,
      });

      // Update the local state to reflect the changes
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) => {
          if (appointment.id === id) {
            return {
              ...appointment,
              hospital: updatedHospital,
              date: updatedDate,
              time: updatedTime,
              reason: updatedReason,
            };
          }
          return appointment;
        })
      );

      console.log(`Appointment with id ${id} edited successfully.`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      // Make an API request to delete the appointment with the given id
      await axios.delete(`http://localhost:9292/appointments/${id}`);

      // Update the local state to remove the deleted appointment
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== id)
      );

      console.log(`Appointment with id ${id} deleted successfully.`);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <div className="appointment-controls">
        <input
          type="text"
          placeholder="Search reason for appointment"
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
          <div className="appointment-container" key={appointment.id}>
            <p>Hospital: {appointment.hospital}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Reason: {appointment.reason}</p>
            <span
              className="edit-icon"
              onClick={() => handleEditClick(appointment.id)} // Add event handler for edit button
            >
              Edit
            </span>
            <span
              className="delete-icon"
              onClick={() => handleDeleteClick(appointment.id)} // Add event handler for delete button
            >
              Delete
            </span>
          </div>
        ))}
      </ul>
    </div>
  );

};

export default AppointmentList;
