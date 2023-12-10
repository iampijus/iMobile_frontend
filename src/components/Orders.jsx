import { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [userData, setUserData] = useState("");
  const [orderedItem, setOrderedItem] = useState([]);
  const getUserData = () => {
    try {
      const data = JSON.parse(localStorage.getItem("userData"));
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  const fetchOrderData = async () => {
    try {
      const res = await axios.post("https://imobile-backend.onrender.com/ordereditems", {
        email: userData.email,
      });
      const data = await res.data;
      setOrderedItem(data.order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [userData.email]);

  return (
    <>
      {orderedItem.length === 0 ? (
        <>
          <div style={{ margin: "300px auto 370px" }}>
            <h3 className="text-center">No Order Placed</h3>
            <div className="text-center">
              <Link to="/cart">
                <button className="btn btn-outline-dark mt-4">
                  <FaShoppingCart className="me-3" />
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="" style={{ margin: "40px 0px 75vh" }}>
          <h2 className="text-center">Order History</h2>
          <hr className="mx-5" />

          <ul className="list-group w-75 mx-auto mt-2 mb-5">
            {orderedItem.map((item) => {
              return (
                <div className="row mt-3" key={item.id}>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center">
                      <img src={item.image} height="50px" />
                      <h6 className="mx-3 fw-bold order-title">{item.title}</h6>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p className="fw-bold order-title">₹ {item.price}</p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-truncate order-title">
                      {item.description}
                    </p>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-success btn-sm">
                      <BsFillCheckCircleFill className="me-2" />
                      Success
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Orders;
