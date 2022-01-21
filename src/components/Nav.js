import React from 'react';
import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="Earth" className="logo" />
      <p className="brand">my travel journal</p>
    </nav>
  );
};

export default Nav;
