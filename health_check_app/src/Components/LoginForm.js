import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      // Make a POST request to the backend API to authenticate the user
      const response = await axios.post('http://localhost:9292/login', user);
      console.log(response.data);

      // Set the user as logged in
      setLoggedInUser(response.data.user);

      // Store the user identifier in localStorage
      localStorage.setItem('userIdentifier', response.data.user_id);

      // Navigate to the booking page
      navigate('/booking');
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    // Check if the user identifier exists in localStorage
    const userIdentifier = localStorage.getItem('userIdentifier');
    if (userIdentifier) {
      // Retrieve the user data using the user identifier
      // Make a GET request to the backend API to fetch the user data
      axios
        .get(`http://localhost:9292/users/${userIdentifier}`)
        .then((response) => {
          setLoggedInUser(response.data.user);
          navigate('/booking'); // Navigate to the booking page if the user is already logged in
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [setLoggedInUser, navigate]);

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2 className="login-form-title">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
