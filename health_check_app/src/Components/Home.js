import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <p className="home-text">
        Welcome to Healthcheck, where you can book your medical appointments from any Hospital in Kenya online!
      </p>
    </div>
    <div className="home-buttons">
      <Link to="/registration" className="home-button">Register</Link>
      <Link to="/login" className="home-button">Login</Link>
    </div>
  </div>
);

export default Home;
