import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
    </>
  );
}

export default App;
