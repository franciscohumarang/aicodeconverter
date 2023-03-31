import React from 'react';
import '../css/menu.css'

function Menu() {
  return (
    <div className="menu">
      <ul className="menu-options">
        <li className="menu-option">
          <button
        
            className="menu-link"
          >
            Sign In
          </button>
        </li>
        <li className="menu-option">
          <button 
            className="menu-button"
          >
        Upgrade
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
