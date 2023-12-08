import React from "react";
import "../styles/SearchView.css";
import { Link } from "react-router-dom";

const SearchView = (props) => {
  return (
    <>
      <div style={{ margin: "5vh 0 35vh" }}>
        <ul className="list-group w-75 mx-auto mt-2 mb-5">
          {props.filter.map((item) => {
            return (
              <div className="row mt-2">
                <div className="col-md-8">
                  <div className="d-flex align-items-center">
                    <img src={item.image} height="70px" />
                    <h3 className="mx-3 fs-6 fw-bold">{item.title}</h3>
                    <h3 className="mx-3 fs-6 fw-bold">₹ {item.price}</h3>
                    <h3 className="text-uppercase text-dark-50 mx-5 fs-6">
                      ({item.category})
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <Link to={`/products/${item.id}`}>
                    <button className="btn btn-dark">Shop Now</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchView;
