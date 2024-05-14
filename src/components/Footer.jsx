import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <span className="header__logo-icon">G</span>
        <span className="header__logo-name">Norman</span>
      </div>
      <nav className="footer__navigation">
        <li className="footer__navigation-link">Services</li>
        <li className="footer__navigation-link">Work</li>
        <li className="footer__navigation-link">Resume</li>
        <li className="footer__navigation-link">Skills</li>
        <li className="footer__navigation-link">Testimonials</li>
        <li className="footer__navigation-link">Contacts</li>
      </nav>
      <hr />
      <p className="copyright">&copy;2024 All rights reservec by Gena Norman</p>
    </div>
  );
}
