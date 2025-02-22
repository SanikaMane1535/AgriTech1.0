import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">Logo</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resource">Resource/Library</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/enabler-profile">Enabler Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;