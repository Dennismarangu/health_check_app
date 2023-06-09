import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = ({ setUserRegistered, handleRegistrationSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user identifier exists in localStorage
    const userIdentifier = localStorage.getItem('userIdentifier');
    if (userIdentifier) {
      setUserRegistered(true);
    }
  }, [setUserRegistered]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    try {
      // Make a POST request to the backend API to create a new user
      const response = await axios.post('http://localhost:9292/users', newUser);
      console.log(response.data);

      // Store the user identifier in localStorage
      localStorage.setItem('userIdentifier', response.data.user_id);

      // Call the handleRegistrationSuccess function with the user data
      handleRegistrationSuccess(response.data);

      // Navigate to the booking page
      navigate('/booking');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
