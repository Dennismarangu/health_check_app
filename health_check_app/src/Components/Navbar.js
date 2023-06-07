import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosCalendar } from 'react-icons/io';
import './Navbar.css';

const Navbar = ({ appointmentCount }) => (
  <div className="navbar-container">
    <Link to="/" className="navbar-logo">Healthcheck</Link>
    {appointmentCount > 0 && (
      <Link to="/appointments" className="navbar-appointment-link">
        <IoIosCalendar className="navbar-appointment-icon" />
        <span className="navbar-appointment-count">{appointmentCount}</span>
      </Link>
    )}
  </div>
);

export default Navbar;
