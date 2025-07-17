import React from "react";
import "./pages.css";

const Skills = () => {
  return (
    <div id="skill" className="div-skill">
      <h1 className="title-skill">My skill</h1>
      <div className="container-skills ">
        <a href="https://www.w3schools.com/html/">
          <div className="half-skills ">
            <img
              width="75px"
              height="75px"
              src="https://www.emaillistvalidation.com/blog/content/images/size/w500/2023/09/HTML5_logo_and_wordmark.svg.png"
              alt="html "
            />
            <h5>HTML</h5>
          </div>
        </a>
        <a href="https://www.w3schools.com/css/default.asp">
          <div className="half-skills ">
            <img
              width="75px"
              height="75px"
              src="https://th.bing.com/th/id/OIP.fuuo-UQGaeRzL9wDDAlZIwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="css "
            />
            <h5>CSS </h5>
          </div>
        </a>
        <a href="https://www.w3schools.com/java/default.asp">
          <div className="half-skills ">
            <img
              width="75px"
              height="75px"
              src="https://th.bing.com/th/id/OIP.hTohJITrIVziX8BF7QmwCAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="js "
            />
            <h5>Java Script</h5>
          </div>
        </a>
        <a href="https://react.dev/">
          <div className="half-skills ">
            <img
              width="75px"
              height="75px"
              src="https://th.bing.com/th/id/OIP.JCGGgssMIuUrZFU3I6jv0AHaHC?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="REACT JS  "
            />
            <h5>REACT JS </h5>
          </div>
        </a>
        <a href="https://nextjs.org/">
          <div className="half-skills ">
            <img
              width="75px"
              height="75px"
              src="https://th.bing.com/th/id/OIP.eXF6SW34jHHps4_SqD1FzgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="next js "
            />
            <h5>NEXT JS </h5>
          </div>
        </a>
        <a href="https://vercel.com/">
          <div className="half-skills ">
            <img
              width="75px"
              height="75px"
              src="https://th.bing.com/th/id/OIP.bN4C-etB9jBR2sKq-0YHXAHaHa?w=156&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="vercel "
            />
            <h5>vercel</h5>
          </div>
        </a>
       
      </div>
    </div>
  );
};

export default Skills;
