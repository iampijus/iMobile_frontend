import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import { useState } from "react";
import SingleProduct from "../components/SingleProduct";
import AlertToastify from "../components/AlertToastify";
import Login from "../components/Login";
import Register from "../components/Register";
import About from "../components/About";
import Footer from "../components/Footer";
import MyProfile from "../components/MyProfile";
import Orders from "../components/Orders";
import ScrollToTop from "../components/ScrollToTop";
import Logout from "./Logout";
import Checkout from "./Checkout";
import ConfirmOrder from "./ConfirmOrder";
import OrderSuccessful from "./OrderSuccessful";
import HelpSupport from "./HelpSupport";

const Routing = () => {
  // Code to get the total price of the cart
  const [totalPrice, setTotalPrice] = useState();
  const getTotalPrice = (price) => {
    setTotalPrice(price);
  };

  // Code to get the shipping details
  const [shippingAddress, setShippingAddress] = useState([]);

  const getAddress = (address) => {
    setShippingAddress(address);
  };

  // check the localstorage if the user is logged in or not
  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AlertToastify />
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route
            exact
            path="/cart"
            element={<Cart getTotalPrice={getTotalPrice} />}
          />
          <Route
            exact
            path="/checkout"
            element={<Checkout getAddress={getAddress} />}
          />
          <Route
            exact
            path="/confirmorder"
            element={
              <ConfirmOrder
                shippingAddress={shippingAddress}
                subTotal={totalPrice}
              />
            }
          />
          <Route exact path="/ordersuccessful" element={<OrderSuccessful />} />

          <Route exact path="/help" element={<HelpSupport />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;
