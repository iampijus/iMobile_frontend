import React from "react";
import "../styles/HomeFeatures.css";
import f1 from "../images/features/f1.png";
import f2 from "../images/features/f2.png";
import f3 from "../images/features/f3.png";
import f4 from "../images/features/f4.png";
import f5 from "../images/features/f5.png";
import f6 from "../images/features/f6.png";

const feature = [
  {
    id: 1,
    title: "Free Shipping",
    image: f1,
  },
  {
    id: 2,
    title: "Online Order",
    image: f2,
  },
  {
    id: 3,
    title: "Save Money",
    image: f3,
  },
  {
    id: 4,
    title: "Promotions",
    image: f4,
  },
  {
    id: 5,
    title: "Happy Sell",
    image: f5,
  },
  {
    id: 6,
    title: "F24/7 Support",
    image: f6,
  },
];

const HomeFeatures = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        {feature.map((item) => {
          return (
            <div className="card fe-box mx-3 shadow rounded" key={item.id}>
              <img
                src={item.image}
                className="card-img-top card-image mx-auto my-3"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-text text-center my-2">{item.title}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeFeatures;
