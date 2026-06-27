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

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>HoangHuynh | Portfolio</title>
      </Helmet>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
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
