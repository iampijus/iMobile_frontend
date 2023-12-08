import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeBanner = () => {
  const [banner1, setBanner1] = useState([]);
  const [banner2, setBanner2] = useState([]);

  // get the data from the api
  const API1 = "https://iampijus.github.io/home-products-api/homeBanner1.json";
  const API2 = "https://iampijus.github.io/home-products-api/homeBanner2.json";

  const fetchBanner1Data = async (url) => {
    try {
      const res = await axios.get(url);
      const product = await res.data;
      setBanner1(product);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchBanner2Data = async (url) => {
    try {
      const res = await axios.get(url);
      const product = await res.data;
      setBanner2(product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBanner1Data(API1);
    fetchBanner2Data(API2);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mx-5">
        {banner1.map((item) => {
          return (
            <div className="card text-bg-dark border-0 mx-3 mt-4" key={item.id}>
              <img
                src={item.image}
                className="card-img"
                alt="Background"
                height="400px"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                  <h5 className="card-title fs-4 fw-bolder mb-1">
                    {item.title}
                  </h5>
                  <h5 className="card-title display-6 fw-bolder mb-1">
                    {item.discount}
                  </h5>
                  <p className="card-text fs-4">{item.description}</p>
                  <Link to="/products">
                    <button className="btn btn-warning">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div
          className="d-flex justify-content-between mx-5 my-4"
          style={{ cursor: "pointer" }}
        >
          {banner2.map((item) => {
            return (
              <div className="col w-25 mx-3" key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="SmartPhone"
                    height="260px"
                  />
                  <div className="card-body card-img-overlay mt-5 text-light mx-2 fs-6">
                    <h5 className="card-title my-4">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link to="/products">
                      <button className="btn btn-warning">Shop Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
