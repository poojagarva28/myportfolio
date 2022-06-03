import React from "react";
import "./Services.css";
import services from "../Data/Services.json";

const Services = () => {
  return (
    <div id="services" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2 className="text-center">What I do</h2>
            <br/>
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              {services.map((item, i) => (
                <div className="col-sm-4" key={i} >
                  <div className="servicebox" data-aos="fade-zoom-in">
                    <img src={item.imgg} alt="serviceimg" className="img-fluid" />
                    <h4>{item.servicename}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
