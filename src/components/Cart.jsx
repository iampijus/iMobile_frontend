import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiSad } from "react-icons/bi";
import "../styles/Cart.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Cart = ({getTotalPrice}) => {
  const [userData, setUserData] = useState("");
  const [price, setPrice] = useState(0);
  // Creating the copy of cart to newCart
  const [newCart, setNewCart] = useState([]);

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

  const fetchCartData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/getcartitems", {
        email: userData.email,
      });
      const data = await res.data;
      setNewCart(data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [userData.email]);

  
  // handle the total price of the cart
  const handleTotalPrice = () => {
    let total = 0;
    newCart.map((item) => {
      total += item.quantity * item.price;
    });
    setPrice(total);
  };

  useEffect(() => {
    handleTotalPrice();
  });

  // handle the remove button of the cart item
  const handleRemove = async(id) => {
    try{
      const res=await axios.post("http://localhost:5000/removecartitem", {email:userData.email ,id});
      if(res.status===200){
        toast.success("Item removed successfully", {
            position: "top-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          window.location.reload(); //reload the page after successful deletion of the cart item.
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      {newCart.length === 0 ? (
        <>
          <div style={{ margin: "300px auto 370px" }}>
            <h3 className="text-center">Your Cart is Empty!</h3>
            <p className="display-1 text-center">
              <BiSad />
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="cart_container mt-5 pt-3">
            {newCart.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                      <img src={item.image} />
                      <p className="my-4 mx-4">{item.title}</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          let updateCart = newCart.map((item, index) => {
                            return index === itemIndex
                              ? {
                                  ...item,
                                  quantity:
                                    item.quantity > 0 ? item.quantity - 1 : 0,
                                }
                              : item;
                          });
                          setNewCart(updateCart);
                        }}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button className="btn btn-light mx-2">
                        {item.quantity}
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          let updateCart = newCart.map((item, index) => {
                            return index === itemIndex
                              ? { ...item, quantity: item.quantity + 1 }
                              : item;
                          });
                          setNewCart(updateCart);
                        }}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <div>
                      <span>₹ {item.quantity * item.price}</span>
                      <button onClick={() => handleRemove(item.id)}>
                        <MdDelete className="text-danger fs-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr />
            <div className="container total mb-5">
              <span>Total Price of Cart :</span>
              <span className="text-success"> ₹ {price}</span>
            </div>
          </div>
          <div className="pb-5" style={{ margin: "0 0 40vh" }}>
            <Link to="/checkout">
              <button
                className="btn btn-dark checkout-button px-5 rounded-pill" onClick={()=>getTotalPrice(price)}
              >
                Check Out
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
