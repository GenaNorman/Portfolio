import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function Myquality() {
  return (
    <div className="block">
      <div className="title">
        <h1 className="title__name">My services</h1>
        <p className="title__slogan">
          As a dedicated and versatile software engineer, I offer a wide range
          of services designed to meet your unique business needs and drive your
          projects to success
        </p>
      </div>
      <div className="services">
        <div className="services__list">
          <div className="services__list--left">
            <p className="services__list--left-number">01</p>
            <p className="services__list--left-name">Web Developement</p>
          </div>
          <div className="services__list--right">
            <p className="services__list--right-description">
              Creation of responsive and user-friendly websites using modern
              technologies (HTML, CSS, JavaScript, React, Angular, etc.).
            </p>
            <p className="services__list--right-icon">
              <IoCheckmarkDoneCircle />
            </p>
          </div>
        </div>
        <div className="services__list">
          <div className="services__list--left">
            <p className="services__list--left-number">02</p>
            <p className="services__list--left-name">Mobile App Development</p>
          </div>
          <div className="services__list--right">
            <p className="services__list--right-description">
              Design and development of native and cross-platform mobile
              applications for iOS and Android.
            </p>
            <p className="services__list--right-icon">
              <IoCheckmarkDoneCircle />
            </p>
          </div>
        </div>
        <div className="services__list">
          <div className="services__list--left">
            <p className="services__list--left-number">03</p>
            <p className="services__list--left-name">
              Cloud Services and DevOps
            </p>
          </div>
          <div className="services__list--right">
            <p className="services__list--right-description">
              Implementation of continuous integration and continuous deployment
              (CI/CD) pipelines to streamline software delivery.
            </p>
            <p className="services__list--right-icon">
              <IoCheckmarkDoneCircle />
            </p>
          </div>
        </div>
        <div className="services__list">
          <div className="services__list--left">
            <p className="services__list--left-number">04</p>
            <p className="services__list--left-name">Software Consulting</p>
          </div>
          <div className="services__list--right">
            <p className="services__list--right-description">
              Providing expert advice on software architecture, technology
              stack, and best practices. .
            </p>
            <p className="services__list--right-icon">
              <IoCheckmarkDoneCircle />
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
