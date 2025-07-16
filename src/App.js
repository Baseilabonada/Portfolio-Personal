import { Fragment, lazy  } from "react";
import Footer from "./Components/Footer";
const Header = lazy(() => import("./Components/Header"));
const About = lazy(() => import("./pages/About"));
const Content = lazy(() => import("./pages/Content"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Content />
      <Footer/>

    </Fragment>
  );
}
export default App;
