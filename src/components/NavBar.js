import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <header>
      <div className="nav" style={{ margin: '0 auto' }}>
        <nav className="nav-container">
          <div className="Route Buttons">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ display: 'inline-block', margin: '0 10px' }}>
                <NavLink exact to="/" className="nav-links">
                  <span className = "nav-text">Home</span>
                </NavLink>
              </li>


              <li style={{ display: 'inline-block', margin: '0 10px' }}>
                <NavLink exact="true" to="/game" className="nav-links">
                  <span className = "nav-text">Game</span>
                </NavLink>
              </li>
              
              <li style={{ display: 'inline-block', margin: '0 10px' }}>
                <NavLink exact="true" to="/rules" className="nav-links">
                  <span className = "nav-text">Rules</span>
                </NavLink>
              </li>
              

            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;