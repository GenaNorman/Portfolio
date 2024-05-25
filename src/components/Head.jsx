import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
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
          <p className="container1__username">Hi, I'm Norman</p>
          <h1 className="container1__devtype">
            Sofware Engineer + Devops Engineer
          </h1>
          <i className="container__slogan">
            I am a dedicated and passionate software engineer with a strong
            background in developing innovative software solutions. With
            experience in various programming languages and frameworks like
            react and node.js
          </i>
          <div className="container1__media">
            <a href="download" className="btn cv">
              Download cv <FiDownload />
            </a>
            <a
              href="https://www.linkedin.com/in/gena-norman-kamando-58553828b/'[]  "
              className="container1__media-linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/GenaNorman"
              className="container1__media-github"
            >
              <FaGithub />
            </a>
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
    </>
  );
}
