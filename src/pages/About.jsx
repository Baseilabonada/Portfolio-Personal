import React from "react";
import "./pages.css";
import myPhoto from "../assets/photo_2025-07-13_15-38-48.jpg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";

const About = () => {
  return (
    <div id="about" class="containe">
      <div class="half">
        <img className="image-about" src={myPhoto} alt="baseil abo nada" />
      </div>
      <div class="half">
        <h2 className="about-title"> About Me</h2>
        <p className="p-about">
          I’m a creative{" "}
          <a href="/#">
            <b>Front-End Developer</b> 
          </a>{" "}
          with experience in both <b>front-end technologies. </b> I love to
          bring designs to life using <b>HTML, CSS, and JavaScript,</b> and I
          have expertise in building complex web applications with React js and
          Next js.
          <br />
          <br />
          Over the years, I’ve worked on various projects, from e-commerce
          platforms to portfolio websites, improving my understanding of
          responsive design and user experience. When I'm not coding, I’m
          constantly learning new technologies and frameworks to keep up with
          the evolving tech landscape.
        </p>
        <button className="btn-back">
          <IconButton href="#">
            <ArrowUpwardIcon />
          </IconButton>
        </button>
      </div>
    </div>
  );
};

export default About;
