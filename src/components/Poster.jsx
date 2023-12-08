import React from "react";
import back from "../images/background/background.jpg";

const Poster = () => {
  return (
    <div>
      <div className="card text-bg-dark border-0 mx-4 my-4">
        <img src={back} className="card-img" alt="Background" height="400px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-1">
            OnePlus 10 Pro 5G
            </h5>
            <h5 className="card-title display-6 fw-bolder mb-1">
              Upgrade Your Style
            </h5>
            <p className="card-text fs-2">
              A little more than you'd expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
