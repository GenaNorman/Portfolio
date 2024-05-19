import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FaTwitter, FaWhatsapp, FaGithub } from "react-icons/fa";

import { RxCross2 } from "react-icons/rx";

export default function Head() {
  const [isOpen, setIsOpen] = useState(false);

  function sidebarslider() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <span className="header__logo-icon">G</span>
          <span className="header__logo-name">Norman</span>

          <a href="#none" className="btn btn-text open header__logo--mobile">
            Hire me!
          </a>
          <p className="header__logo--navbar" onClick={sidebarslider}>
            {isOpen ? <RxCross2 /> : <RiMenu3Fill />}
          </p>
        </div>
        <nav className="header__navigation">
          <li className="header__navigation-link">Services</li>
          <li className="header__navigation-link">Work</li>
          <li className="header__navigation-link">Resume</li>
          <li className="header__navigation-link">Skills</li>
          <li className="header__navigation-link">Testimonials</li>
          <li className="header__navigation-link">Contacts</li>
          <a href="#none" className="btn btn-text disp">
            Hire me!
          </a>
        </nav>
        <nav className={isOpen ? "movein-right" : "mobile__navigation"}>
          <li className="mobile__navigation-link">Services</li>
          <li className="mobile__navigation-link">Work</li>
          <li className="mobile__navigation-link">Resume</li>
          <li className="mobile__navigation-link">Skills</li>
          <li className="mobile__navigation-link">Testimonials</li>
          <li className="mobile__navigation-link">Contacts</li>
        </nav>
      </header>
      <div className="container">
        <div className="container1">
          <p className="container1__username">Hi there I'm Norman your</p>
          <h1 className="container1__devtype">Web developer + UX Designer</h1>
          <i className="container__slogan">
            I break down complex 1user experinece problems to create integritiy
            focussed solutions that connect billions of people integritiy
            focussed solutions that connect integritiy focussed solutions Lorem
            ipsum dolor sit
          </i>
          <div className="container1__media">
            <a href="download" className="btn cv">
              Download cv
            </a>
            <i className="container1__media-twiter">
              <FaTwitter />
            </i>
            <i className="container1__media-linkedin">
              <FaLinkedin />
            </i>
            <i className="container1__media-github">
              <FaGithub />
            </i>
            <i className="container1__media-gram">
              <FaWhatsapp />
            </i>
          </div>
        </div>
        <div className="container2">
          <img
            src="../images/norman.jpg"
            alt="hero"
            className="container2__photo"
          />
        </div>
      </div>
      {/* <div className="counter">
        <center className="years">
          <p>years</p>
        </center>
        <center className="projects">
          <p>projects</p>
        </center>
        <center className="clients">
          <p>clients</p>
        </center>
        <center className="experience">
          <p>experience</p>
        </center>
      </div> */}
    </>
  );
}
