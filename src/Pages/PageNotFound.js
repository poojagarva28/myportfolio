import React from "react";

import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div id="pagenotfound" className="text-center" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>404</h1>
            <h2>Page Not Found!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
