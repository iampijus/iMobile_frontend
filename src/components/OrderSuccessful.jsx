import React, { useEffect, useState, useContext } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../styles/OrderSuccessful.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const OrderSuccessful = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="text-center fs-4 order-processing">Processing...</div>
      </>
    );
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Confetti className="ordersuccessful-confetti" />
          <div className="text-center order-successful">
            <BsFillCheckCircleFill className="display-3 text-success" />
            <p className="fs-2 mt-3">Your Order has been Placed Successfully</p>
            <Link to="/orders">
              <button className="btn btn-dark mt-5 px-4">View Orders</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default OrderSuccessful;
