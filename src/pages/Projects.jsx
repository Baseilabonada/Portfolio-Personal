import ImgMediaCard from "../Components/Card";
import "./pages.css";
import { Fragment } from "react";
import blackandjackphoto from "../assets/Screenshot 2025-07-14 183415.png";
import subwayCounnter from "../assets/Screenshot 2025-07-14 184518.png";
import simpleCalc from "../assets/Screenshot 2025-07-15 090949.png";
import manger from "../assets//manger.png";
import login from "../assets/login.png";


const Projects = () => {
  return (
    <Fragment>
      <div id="projects">
        <h1 className="title-projects">MY PROJECTS</h1>
        <div className="grid-projects">
          <ImgMediaCard
            title="Black Jack Game"
            body="A simple project with a clean code , i saw a small course for free code camp"
            href="https://github.com/Baseilabonada/BlackJack-casino-game.git"
            namehref="</>  Source Code"
            image={blackandjackphoto}
          />
          <ImgMediaCard
            title="USER-MANAGEMENT-MASTER"
            body="Skills used (axios & await & async, Deal withe the Form , validition , Locall Storge  , Api  )"
            href="https://github.com/Baseilabonada/USERMANAGEMENTMASTER.git"
            namehref="</>  Source Code "
            image={manger}
          />
          {/* كرّر أو استخدم .map() حسب الحاجة */}
        </div>
      </div>
      <div id="projects">
        <div className="grid-projects">
          <ImgMediaCard
            title="simple-calculator"
            body="A mathematical calculator for solving simple problems such as addition, subtraction, multiplication, etc."
            href="https://github.com/Baseilabonada/simple-calculator"
            namehref="</>  Source Code "
            image={simpleCalc}
          />
          <ImgMediaCard
            title="Log in using Api "
            body="Handle the form and check errors using four external offices (yup , axios , react-router ,RFH ) and check the user's status and display his data"
            href="https://github.com/Baseilabonada/subway-passenger-counter.git"
            namehref="</>  Source Code "
            image={login}
          />
          {/* كرّر أو استخدم .map() حسب الحاجة */}
        </div>
      </div>

      <div id="projects">
        <div className="grid-projects">
          
          <ImgMediaCard
            title="subway passenger counter"
            body="A simple project with a clean code , i saw a small course for free code camp"
            href="https://github.com/Baseilabonada/subway-passenger-counter.git"
            namehref="</>  Source Code "
            image={subwayCounnter}
          />
          {/* كرّر أو استخدم .map() حسب الحاجة */}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
