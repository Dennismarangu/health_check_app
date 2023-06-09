import React, { useState } from 'react';
import './Footer.css';
import { FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);


  const togglePopup = (popupName) => {
    setActivePopup((activePopup) => (activePopup === popupName ? null : popupName));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data here

    // Set the formSubmitted state to true
    setFormSubmitted(true);
    // Show the success message
    setSuccessMessage(true);
  };

  return (
    <footer className="footer-container">
      <div className="about-us">
        <h3 onClick={() => togglePopup('about-us')}>
          About us {activePopup === 'about-us' ? <FaAngleUp /> : <FaAngleDown />}
        </h3>
        {activePopup === 'about-us' && (
          <div className={`dropdown-content ${activePopup === 'about-us' ? 'active' : ''}`}>
            <p>We aim to provide easy access to healthcare services and exceptional customer support.</p>
            <p>
              <em>Reach out for any assistance:</em> <b>077777999</b>
            </p>
            <p>
              <b>Headquarters:</b> Drive Inn lane, Westlands, Nairobi
            </p>
            <p>
              <button className="link-button" onClick={() => togglePopup('report-issue')}>
                Raise an issue.
              </button>
            </p>
          </div>
        )}
      </div>

      <div className="social-media">
        <h3 onClick={() => togglePopup('social-media')}>Follow us on social media</h3>
        <div className={`dropdown-content ${activePopup === 'social-media' ? 'active' : ''}`}>
          <a href="https://www.facebook.com/healthcheck" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/healthcheck" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/healthcheck/" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="app-buttons">
        <h3 onClick={() => togglePopup('download-app')}>Download Healthcheck App</h3>
        <div className={`dropdown-content ${activePopup === 'download-app' ? 'active' : ''}`}>
          <button>
            <a href="https://www.apple.com/ios/app-store/" className="app-store-btn">
              App Store
            </a>
          </button>
          <button>
            <a href="https://play.google.com/store/apps" className="play-store-btn">
              Play Store
            </a>
          </button>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 Healthcheck. All rights reserved.</p>
      </div>

      {activePopup === 'report-issue' && (
        <div className={`issue-popup ${activePopup === 'report-issue' ? 'active' : ''}`}>
          <button className="close-btn" onClick={() => togglePopup('report-issue')}>
            <FaTimes />
          </button>
          {formSubmitted ? (
            <div className={`success-message ${successMessage ? 'active' : ''}`}>
              <p>Your issue has been successfully submitted.</p>
              <button onClick={() => setSuccessMessage(false)}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              {/* Issue form fields */}
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="issue" placeholder="Describe the issue"></textarea>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </footer>
  );
};

export default Footer;
