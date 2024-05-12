import React from "react";

export default function Head() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <span className="header__logo-icon">G</span>
          <span className="header__logo-name">Norman</span>
        </div>
        <nav className="header__navigation">
          <li className="header__navigation-link">Services</li>
          <li className="header__navigation-link">Work</li>
          <li className="header__navigation-link">Resume</li>
          <li className="header__navigation-link">Skills</li>
          <li className="header__navigation-link">Testimonials</li>
          <li className="header__navigation-link">Contacts</li>
          <a href="#none" className="btn btn-text">
            Hire me
          </a>
        </nav>
      </header>
      <div className="container">
        <p className="container__username">Hi am T-chala</p>
        <h1 className="container__devtype">Web developer + ux Designer</h1>
        <p className="container__slogan">
          I break down complex user experinece problems to create integritiy
          focussed solutions that connect billions of people
        </p>
        <div className="container__media">
          <a href="download" className="btn">
            Downliad cv
          </a>
          <i className="twiter">TW</i>
          <i className="linkedin">LN</i>
          <i className="github">GH</i>
          <i className="gram">IG</i>
        </div>
      </div>
    </>
  );
}
