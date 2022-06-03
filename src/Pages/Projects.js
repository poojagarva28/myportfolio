import React from "react";
import onelife from "../Data/Portfolioimg/1life.png";
import alembicaustralia from "../Data/Portfolioimg/alembicaustralia.png";
import avidorganics from "../Data/Portfolioimg/avidorganics.png";
import baggsinc from "../Data/Portfolioimg/baggsinc.png";
import designmaxinteriors from "../Data/Portfolioimg/designmaxinteriors.png";
import drdharabhatt from "../Data/Portfolioimg/drdharabhatt.png";
import mastercoin from "../Data/Portfolioimg/mastercoin.png";
import thecafemasala from "../Data/Portfolioimg/thecafemasala.png";
import wimetlab from "../Data/Portfolioimg/wimetlab.png";
import "./Projects.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={onelife} className="img-fluid" alt="1Life" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={alembicaustralia}
                    className="img-fluid"
                    alt="Alembic"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={avidorganics}
                    className="img-fluid"
                    alt="AvidOrganics"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={baggsinc} className="img-fluid" alt="BaggsInc" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={designmaxinteriors}
                    className="img-fluid"
                    alt="DesignMaxInteriors"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={drdharabhatt}
                    className="img-fluid"
                    alt="DrDharaBhatt"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={mastercoin}
                    className="img-fluid"
                    alt="Mastercoin"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={thecafemasala}
                    className="img-fluid"
                    alt="TheCafeMasala"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img src={wimetlab} className="img-fluid" alt="WiMetLab" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
