import React from "react";
import { FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import { FaSass, FaHtml5 } from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";

export default function Skilled() {
  return (
    <div className="skills">
      <div className="title">
        <h1 className="title__name">Skills</h1>
        <p className="title__slogan">
          My diverse skill set ensures that I can tackle a wide range of
          projects and deliver high-quality solutions tailored to your needs.t
        </p>
      </div>
      <div className="skills_block">
        <div className="skills_block-skill">
          <FaHtml5 className="html icon" />
          <p className="name">html</p>
          <p>90%</p>
        </div>
        <div className="skills_block-skill">
          <FaCss3Alt className="css icon" />
          <p className="name">Css</p>
          <p>90%</p>
        </div>
        <div className="skills_block-skill">
          <FaSass className="sass icon" />
          <p className="name">Sass</p>
          <p>80%</p>
        </div>
        <div className="skills_block-skill">
          <BiLogoJavascript className="script icon" />
          <p className="name">Javascript</p>
          <p>70%</p>
        </div>
        <div className="skills_block-skill">
          <FaGitAlt className="git icon" />
          <p className="name">Git</p>
          <p>90%</p>
        </div>
        <div className="skills_block-skill">
          <FaReact className="react icon" />
          <p className="name">React js</p>
          <p>60%</p>
        </div>
      </div>
    </div>
  );
}
