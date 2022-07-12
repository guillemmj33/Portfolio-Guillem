import React from 'react';
import './Footer.scss';
import logo from '../../assets/Images/logo.png';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer--box">
        <div className="footer--box-logo">
          <a href="index.html"><img src={logo} alt="Logo Guillem" /></a>
        </div>
        <div className="footer--box-links">
          <ul>
            <li><a className="nav-link" href="index.html">Home</a></li>
            <li><a className="nav-link" href="#projects--background-color">Projects</a></li>
            <li><a className="nav-link" href="#contact--page">Contact</a></li>
          </ul>
        </div>
        <div className="footer--box-date">
          <p>2022Ⓒ</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;