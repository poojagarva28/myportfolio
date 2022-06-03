import React from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import Projects from "../assets/img/portfolio.png";
import Services from "../assets/img/services.png";
import Work from "../assets/img/work.png";
import Jsprojects from "../assets/img/jsprojects.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div id="navigation">
        <ul className="list-unstyled">
          <Link to="/home">
            <li data-aos="zoom-in">
              <img src={Home} alt="home" />
            </li>
          </Link>
          <Link to="/about">
            <li data-aos="zoom-in">
              <img src={About} alt="about" />
            </li>
          </Link>
          <Link to="/services">
            <li data-aos="zoom-in">
              <img src={Services} alt="services" />
            </li>
          </Link>
          <Link to="/work">
            <li data-aos="zoom-in">
              <img src={Work} alt="work" />
            </li>
          </Link>
          <Link to="/education">
            <li data-aos="zoom-in">
              <img src={Education} alt="education" />
            </li>
          </Link>
          <Link to="/projects">
            <li data-aos="zoom-in">
              <img src={Jsprojects} alt="jsprojects" />
            </li>
          </Link>
          <Link to="/portfolio">
            <li data-aos="zoom-in">
              <img src={Projects} alt="portfolio" />
            </li>
          </Link>
          <Link to="/contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="contact" />
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <i className="bi bi-list"></i>
      </div>
    </div>
  );
};

export default Nav;
