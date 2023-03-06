import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        <FaFacebook />
        <FaYoutube /><br />
      </div>
      <h6>© 2023 Copyright: Company.com</h6>
    </div>
  );
}

export default Footer;
