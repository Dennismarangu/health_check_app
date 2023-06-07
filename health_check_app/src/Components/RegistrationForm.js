import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newUser = { name, email, password };

      try {
        // Make a POST request to the backend API to create a new user
        const response = await axios.post('http://localhost:9292/users', newUser);
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div>
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
