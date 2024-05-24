import React from "react";

import { IoMdStar } from "react-icons/io";

export default function Reviews() {
  return (
    <div className="block">
      <div className="reviews">
        <div className="titl title-review">
          <h1 className="title__name">My Client's Stories</h1>
          <p className="title__sloga review-slogan">
            Empowering people in new a digital journey with my super services
          </p>
        </div>
        <div className="user">
          <div className="user_card">
            <div className="user_card--profile">
              <p className="user_card--profile-name">Ndifon V.</p>
              <img
                src="../images/valan.PNG"
                alt="hero"
                className="user_card--profile-tabe"
              />
            </div>
            <p>
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
            </p>
            <p className="user_card-about">
              link inside to complete your registration. This link will expire
              shortly, so verify
            </p>
            <p className="user_card-aboutname">Engineer</p>
            <p className="user_card-level">
              Senior software engineer,
              <br />
              react dev
            </p>
          </div>
          <div className="user_card">
            <div className="user_card--profile">
              <p className="user_card--profile-name">Tabe joel </p>
              <img
                src="../images/tabe.PNG"
                alt="hero"
                className="user_card--profile-tabe"
              />
            </div>
            <p>
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
              <IoMdStar className="icon" />
            </p>
            <p className="user_card-about">
              link inside to complete your registration. This link will expire
              shortly, so verify
            </p>
            <p className="user_card-aboutname">Engineer</p>
            <p className="user_card-level">
              Senior software engineer,
              <br />
              react dev
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
