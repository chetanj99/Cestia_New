import React from "react";
import Home from "../../components/Home";
import About from "../../components/About";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default LandingPage;
