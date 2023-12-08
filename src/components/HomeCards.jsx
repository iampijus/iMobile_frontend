import React from "react";
import "../styles/HomeCards.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeCards = () => {
  const [card, setCard] = useState([]);

  // get the data from the api
  const API =
    "https://iampijus.github.io/home-products-api/homeCategoryCards.json";

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      const product = await res.data;
      setCard(product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <>
      <h4 className="feature-heading">Our Feature Services</h4>
      <hr className="mx-5" />
      <div
        className="d-flex justify-content-between company-card-container my-4"
        style={{ cursor: "pointer" }}
      >
        {card.map((item) => {
          return (
            <div className="col w-25 mx-2" key={item.id}>
              <Link to="/products">
                <div className="card category">
                  <img
                    src={item.image}
                    className="card-img-top rounded"
                    alt="SmartPhone"
                    height="160px"
                  />
                  <h5 className="card-img-overlay text-center text-uppercase fs-4 fw-bold my-5">
                    {item.category}
                  </h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeCards;
