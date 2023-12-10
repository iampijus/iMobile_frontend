import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const SingleProduct = (props) => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the single product details from the database
  const fetchSingleProduct = async (url) => {
    try {
      const res = await axios.post("https://imobile-backend.onrender.com/singleproduct", {
        id,
      });
      const product = await res.data;
      setSingleData(product);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, [id]);

  //   loading
  const Loading = () => {
    return (
      <>
        <div className="fs-5" style={{ margin: "20vh 10vw 80vh" }}>
          Loading...
        </div>
      </>
    );
  };

  // add to cart single product
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
    const res = await axios.post("https://imobile-backend.onrender.com/postcartitems", data);
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

  // show single products
  const ShowSingleProduct = () => {
    return (
      <>
        {singleData && (
          <>
            <div className="col-md-4" style={{ margin: "0 0 30vh" }}>
              <img
                src={singleData.image}
                alt={singleData.title}
                height="400px"
                width="300px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {singleData.category}
              </h4>
              <h1 className="display-5">{singleData.title}</h1>
              <h3 className="display-6 fw-bold my-4">₹ {singleData.price}</h3>
              <p className="fs-5">{singleData.description}</p>
              <button
                className="btn btn-warning my-4 me-3"
                onClick={() => addToCart(singleData)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark">
                Go to Cart
              </Link>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5 mx-5">
          {loading ? <Loading /> : <ShowSingleProduct />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
