import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHome, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return(
        <header className="header">
          <NavLink to="/">
            <FontAwesomeIcon icon={ faHome }/>&nbsp; 
              Home
            </NavLink>
          <NavLink to="/favorites">
            <FontAwesomeIcon icon={ faStar }/>&nbsp; 
            Favorites
          </NavLink>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={ faShoppingCart }/>&nbsp; 
              Cart
            </NavLink>
        </header>
    )
}

