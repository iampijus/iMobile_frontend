import React, { useEffect, useState } from "react";
import "../styles/ConfirmOrder.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmOrder = (props) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const shippingAddress = props.shippingAddress;
  const amount = props.subTotal + 40;

  // Loading
  const Loading = () => {
    return (
      <>
        <div className="text-center fs-4 confirm-processing">
          Please wait...
        </div>
      </>
    );
  };
  // Getting the user data from the local storage
  const getUserData = () => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // get cart items
  const fetchCartData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/getcartitems", {
        email: userData.email,
      });
      const data = await res.data;
      setCart(data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [userData.email]);

  // Razorpay payment
  const paymentHandler = async () => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:5000/getkey");
      const {
        data: { order },
      } = await axios.post("http://localhost:5000/payment", {
        amount,
      });

      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "iMobile",
        description: "Test Transaction",
        image:
          "https://w7.pngwing.com/pngs/953/232/png-transparent-payment-gateway-computer-icons-e-commerce-payment-system-payment-blue-text-service.png",
        order_id: order.id,
        handler: async function (response) {
          const verifyPayload = {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            amount: amount,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          const res = await axios.post(
            "http://localhost:5000/paymentverify",
            verifyPayload
          );
          if (res.data.success) {
            console.log("Payment and signature verification successful");

            // send the order data to the server
            const { name, email, phone } = userData;

            const data = { name, email, phone, amount, shippingAddress, cart };
            await axios.post("http://localhost:5000/postordereditems", data);

            // navigate to the order successful page
            navigate("/ordersuccessful");
          } else {
            console.error("Payment verification failed");
          }
        },
        prefill: {
          name: `${userData.name}`,
          email: `${userData.email}`,
          contact: `{${userData.phone}}`,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ff7b07",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="confirm-order-container">
            <div className="row col-11">
              <div className="col-md-6 ms-5 ps-5">
                {/* shipping info */}
                <h5 className="my-4">Shipping Info</h5>
                <div className="d-flex">
                  <p className="fw-bold">Name: </p>
                  <span className="ms-5">{userData.name}</span>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">Phone: </p>
                  <span className="ms-5">{props.shippingAddress.phone}</span>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">Address:</p>
                  <div className="confirm-order-address">
                    <span>{props.shippingAddress.address},</span>
                    <span className="ms-1">{props.shippingAddress.city},</span>
                    <span className="ms-1">
                      {props.shippingAddress.pincode},
                    </span>
                    <span className="ms-1">{props.shippingAddress.state}</span>
                  </div>
                </div>

                {/* Cart items */}
                <div className="mt-4">
                  <h5>Your items in the cart</h5>
                  <div className="">
                    <ul className="list-group w-75 ms-3 mt-2 mb-5">
                      {cart.map((item) => {
                        return (
                          <div className="row mt-3" key={item.id}>
                            <div className="col-md-8">
                              <div className="d-flex align-items-center">
                                <img src={item.image} height="40px" />
                                <p className="mx-5 confirm-order-cart-title">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <p className="confirm-order-cart-title">
                                ₹ {item.price}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Order summery */}
              <div className="col-md-5 order-summery">
                <h5 className="my-4 ms-5">Order Summery</h5>
                <hr className="hr-confirmorder " />
                <div>
                  <span className="fw-bold">Subtotal:</span>
                  <span className="ms-5 ps-4">₹ {props.subTotal}</span>
                </div>
                <br />
                <div className="d-flex">
                  <p className="fw-bold">Shipping Charge:</p>
                  <span className="ms-3"> ₹40</span>
                </div>
                <hr className="hr-confirmorder" />
                <span className="fw-bold">Total: </span>
                <span className="subTotal">₹ {props.subTotal + 40}</span>
                <button
                  className="btn btn-dark proceed-payment rounded-pill mt-5"
                  onClick={paymentHandler}
                >
                  Proceed To Payment
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmOrder;
