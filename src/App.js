import { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbarComponents/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Contact from "./components/contactComponents/Contact";
// import { useDetectScroll } from "@smakss/react-scroll-direction";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = [aboutRef, projectsRef, contactRef];

  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToAbout = () => aboutRef.current.scrollIntoView();
  const scrollToProjects = () => projectsRef.current.scrollIntoView();
  const scrollToContacts = () => contactRef.current.scrollIntoView();

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      const currentSectionIndex = sectionRefs.findIndex((sectionRef) => {
        const offsetTop = sectionRef.current.offsetTop;
        const offsetBottom = offsetTop + sectionRef.current.offsetHeight;
        return window.scrollY >= offsetTop && window.scrollY < offsetBottom;
      });
    
      let nextSectionIndex = currentSectionIndex + delta;
      if (nextSectionIndex < 0) {
        nextSectionIndex = 0;
      } else if (nextSectionIndex >= sectionRefs.length) {
        nextSectionIndex = sectionRefs.length - 1;
      }
    
      const nextSectionRef = sectionRefs[nextSectionIndex];
      if (nextSectionRef) {
        const offsetTop = nextSectionRef.current.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    document.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        scrollToAbt={scrollToAbout}
        scrollToProj={scrollToProjects}
        scrollToCont={scrollToContacts}
      />
      <Hero scrollToAbt={scrollToAbout} />
      <About
        innerRef={aboutRef}
        scrollToHome={scrollToTop}
        scrollToProj={scrollToProjects}
      />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
    </>
  );
}

export default App;
