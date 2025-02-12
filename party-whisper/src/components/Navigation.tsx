import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li><Link to="/">Send Message</Link></li>
      <li><Link to="/board">Message Board</Link></li>
    </ul>
  </nav>
);

export default Navigation;
