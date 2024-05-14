import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="title">
        <h1 className="title__name">My Recent Works</h1>
        <p className="title__slogan">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div className="project">
        <div className="control">
          <a href="#all" className="btn btn-text">
            All
          </a>
          <a href="#ui/ux" className="btn ">
            UI/UX
          </a>
          <a href="#brand" className="btn ">
            Branding
          </a>
          <a href="#apps" className="btn ">
            Apps
          </a>
        </div>
        <div className="project__image">
          <img
            src="../images/quizy.PNG"
            alt="quizy"
            className="project__image--quizy"
          />
          <img
            src="../images/majesty.PNG"
            alt="majesty"
            className="project__image--majesty"
          />
          <img
            src="../images/ebook.PNG"
            alt="ebook"
            className="project__image--ebook"
          />
        </div>
      </div>
    </div>
  );
}
