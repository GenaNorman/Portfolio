import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact">
      <div className="title">
        <h1 className="title__name">Get in Touch</h1>
        <p className="title__slogan">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div className="contact__box">
        <div className="contact__box--left">
          <h1 className="title__name--small">Let's work together!</h1>
          <p className="title__slogan--small">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
          <div className="flex">
            <input
              type="text"
              className="contact__box--left-field1 field"
              placeholder="first name"
            />
            <input
              type="text"
              className="contact__box--left-field2 field"
              placeholder="last name"
            />
            <input
              type="text"
              className="contact__box--left-field3 field"
              placeholder="email"
            />
            <input
              type="text"
              className="contact__box--left-field4 field"
              placeholder="Phone number"
            />
            <input
              type="text"
              className="contact__box--left-field5 field"
              placeholder="Wanted service"
            />
          </div>
          <textarea
            name="mESSAGE"
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            className="contact__box--left-field6 field"
          ></textarea>
          <a href="#norman" className="btn btn-text">
            Send Message
          </a>
        </div>
        <div className="contact__box--right">
          <div className="contact__box--right-phone">
            <p className="call">
              <FaPhone />
            </p>
            <div>
              <p>Call</p>
              <p className="bold">678589305</p>
            </div>
          </div>
          <div className="contact__box--right-Email">
            <p className="call">
              <MdEmail />
            </p>
            <div>
              <p>Email</p>
              <p className="bold">normankamando@gmail.com</p>
            </div>
          </div>
          <div className="contact__box--right-Address">
            <p className="call">
              <FaLocationDot />
            </p>
            <div>
              <p>Address</p>
              <p className="bold">South-west buea</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
