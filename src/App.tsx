import { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Certificates from "./components/certificate/Certificates";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Helmet } from "react-helmet-async";

function App() {
  const [load, updateLoad] = useState(true);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Trigger page entrance animation after preloader finishes
  useEffect(() => {
    if (!load) {
      // Small delay to let the preloader fade out first
      const entranceTimer = setTimeout(() => {
        setPageReady(true);
      }, 100);
      return () => clearTimeout(entranceTimer);
    }
  }, [load]);

  return (
    <>
      <Helmet>
        <title>HoangHuynh | Portfolio</title>
      </Helmet>
      <Preloader load={load} />
      <div
        className="App"
        id={load ? "no-scroll" : "scroll"}
        style={{
          opacity: pageReady ? 1 : 0,
          transform: pageReady ? "none" : "translateY(20px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
