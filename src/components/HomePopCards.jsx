import React, { useEffect, useState } from "react";
import "../styles/HomePopCards.css";
import axios from "axios";

const HomePopCards = () => {
  const [card, setCard] = useState([]);
  // get the data from the api
  const API = "https://iampijus.github.io/home-products-api/homePopCards.json";

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
      <div className="popular-section-heading">
        <h6 className="check-now">CHECK NOW!</h6>
        <h4>Popular Products</h4>
      </div>
      <hr className="mx-5" />
      <div className="d-flex justify-content-between mx-5 my-4">
        {card.map((item) => {
          return (
            <div key={item.id}>
              <div
                className="card h-70 shadow rounded"
                style={{ width: "14vw", cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  className="card-img-top mx-auto card-image mt-3"
                  style={{ height: "130px", width: "50%", padding: "10px" }}
                  alt="..."
                />
                <div className="card-body card_content mt-4">
                  <h6 className="text-uppercase text-black-50">
                    {item.category}
                  </h6>
                  <h5 className="card-title mb-3 fw-bold fs-6 mt-3">
                    {item.title}
                  </h5>
                  <h5 className="card-title fw-bold fs-6">₹ {item.price}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePopCards;
