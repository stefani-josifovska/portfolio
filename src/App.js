import { useRef } from "react";
import "./App.css";
import Navbar from "./components/navbarComponents/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contactComponents/Contact";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => aboutRef.current.scrollIntoView();
  const scrollToProjects = () => projectsRef.current.scrollIntoView();
  const scrollToContacts = () => contactRef.current.scrollIntoView();

  return (
    <>
      <Navbar
        scrollToAbt={scrollToAbout}
        scrollToProj={scrollToProjects}
        scrollToCont={scrollToContacts}
      />
      <Hero scrollToAbt={scrollToAbout} />
      <About innerRef={aboutRef} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
    </>
  );
}

export default App;
