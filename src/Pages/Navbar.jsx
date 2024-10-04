import React from 'react';
import './Header.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-checkmark">&#10004;</div>
        <div className="version-info">
          <h1>omni 2.0</h1>
          <p>Indirect Retailing Interface</p>
        </div>
        <div className="location-info">
          <p>Location Code</p>
          <p>E60686</p>
          <p>Location ABC Wireless GW</p>
          <p>USWIN cdbac34</p>
        </div>
      </div>
      <div className="tools-section">
        <div className="tool-icon">VIKI 2.0</div>
        <div className="tool-icon">Settings</div>
        <div className="tool-icon">More</div>
      </div>
    </header>
  );
};

export default Navbar;
