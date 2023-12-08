import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Cards = (props) => {
  const [userData, setUserData] = useState("");

  // get the user data from the local storage
  const getUserData = () => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const addToCart = async (cartItem) => {
    const { name, email, phone } = userData;
    const data = { name, email, phone, cartItem };

    const res = await axios.post("http://localhost:5000/postcartitems", data);

    if (res.status === 200) {
      toast.success("Added to The Cart!", {
        position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
    }
  };


  return (
    <div className="col-11 col-md-6 col-lg-2 mb-5">
      <div
        className="card h-70 shadow rounded"
        style={{ width: "15vw", cursor: "pointer" }}
      >
        <img
          src={props.image}
          className="card-img-top mx-auto card-image mt-3"
          style={{ height: "200px", width: "70%", padding: "10px" }}
          alt="..."
        />
        <div className="card-body card_content">
          <h6 className="text-uppercase text-black-50 mb-3">
            {props.category}
          </h6>
          <h5 className="card-title mb-3 fw-bold fs-6">{props.title}</h5>

          <h5 className="card-title fw-bold fs-6">₹ {props.price}</h5>
          <Link
            className="btn btn-outline-dark mt-2 btn-sm"
            to={`/products/${props.id}`}
          >
            Buy Now
          </Link>
          <button
            className="btn btn-outline-success mt-2 btn-sm ms-3"
            onClick={() => addToCart(props)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
