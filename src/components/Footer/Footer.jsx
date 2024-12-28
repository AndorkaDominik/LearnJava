// src/components/Footer/Footer.js
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";


const Footer = () => {

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" id='footer-logo'>
            <img src={logo} alt="" className='logo' width={180} />
            <h1>LearnJava</h1>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"} onClick={scrollToTop}><li>Home</li></Link>
            <Link to={"/Java/"} onClick={scrollToTop}><li>Course</li></Link>
            <Link to={"/practise/"} onClick={scrollToTop}><li>Practise</li></Link>
            <Link to={"/learning/"} onClick={scrollToTop}><li>My Learning</li></Link>
            <Link to={"/join/"} onClick={scrollToTop}><li>Join Us</li></Link>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <a href="https://andorkadominik.hu" target='_blank'>Creator</a><br />
          <a href='mailto:dominik.andorka@gmail.com' target='_blank'>Gmail</a><br />
          <a href='https://github.com/AndorkaDominik' target='_blank'>Github</a>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <a href="https://github.com/AndorkaDominik" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord  /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LearnLab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
