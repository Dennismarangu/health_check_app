import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosCalendar, IoIosPerson, IoIosChatboxes } from 'react-icons/io';
import './Navbar.css';
import axios from 'axios';


const Navbar = ({ appointmentCount, userRegistered, loggedInUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    setShowDropdown(false); // Close the dropdown menu on component updates
  }, [loggedInUser]); // Reset dropdown state when loggedInUser prop changes

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
    setShowPopup(false);
  };

  const openPopup = async () => {
    try {
      // Fetch the text replies from the backend API
      const response = await axios.get('http://localhost:9292/replies');
      setReplies(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Perform logout logic here, e.g., clear user session, reset state, etc.
    // For simplicity, we will simply navigate to the login page after logout
    setShowDropdown(false); // Close the dropdown menu
    navigate('/login');
  };

  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        Healthcheck
      </Link>
      <div className="navbar-icons">
        {appointmentCount > 0 && (
          <Link to="/appointments" className="navbar-appointment-link">
            <IoIosCalendar className="navbar-appointment-icon" />
            <span className="navbar-appointment-count">{appointmentCount}</span>
          </Link>
        )}
        <div className="navbar-dropdown">
          <IoIosPerson className="navbar-appointment-icon" onClick={toggleDropdown} />
          {showDropdown && (
            <div className="navbar-dropdown-content">
              {(loggedInUser || userRegistered) && (
                <>
                  <p>Email: {loggedInUser ? loggedInUser.email : userRegistered.email}</p>
                  <Link to="/settings">Settings</Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
              )}
            </div>
          )}
        </div>

        <IoIosChatboxes className="navbar-message-icon" onClick={openPopup} />
        {showPopup && (
          <div className="navbar-popup">
            <h3>Text Replies</h3>
            {replies.length > 0 ? (
              <ul>
                {replies.map((reply, index) => (
                  <li key={index}>{reply}</li>
                ))}
              </ul>
            ) : (
              <p>No replies available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
