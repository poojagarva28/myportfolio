import React from "react";
import { Link } from "react-router-dom";
import djzaame from "../Data/Portfolioimg/djzaame.png";
import luxurysteeldoors from "../Data/Portfolioimg/luxurysteeldoors.png";
import "./Projects.css";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" data-aos="fade-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-11 offset-sm-1">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Portfolio</h2>
                  <br />
                </div>
                <div className="col-sm-6">
                  <a href="https://www.djzaame.com" target="_blank">
                    <div className="imgsec" data-aos="zoom-in">
                      <img src={djzaame} className="img-fluid" alt="1Life" />
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="https://luxury-doors.glitch.me/" target="_blank">
                    <div className="imgsec" data-aos="zoom-in">
                      <img
                        src={luxurysteeldoors}
                        className="img-fluid"
                        alt="1Life"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
