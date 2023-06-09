import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosCalendar, IoIosPerson } from 'react-icons/io';
import './Navbar.css';

const Navbar = ({ appointmentCount, userRegistered, loggedInUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowDropdown(false); // Close the dropdown menu on component updates
  }, [loggedInUser]); // Reset dropdown state when loggedInUser prop changes

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
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
      </div>
    </div>
  );
};

export default Navbar;
