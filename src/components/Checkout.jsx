import React, { useState } from "react";
import "../styles/Checkout.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCity,BiSolidPhone } from "react-icons/bi";
import { MdPinDrop } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Checkout = (props) => {
  const [address, setAddress] = useState({
    address: "",
    city: "",
    pincode: "",
    state: "",
    phone: "",
  });

  // handle address
  const handleAddress = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  // handle submit
  const handleAddressSubmit = (event) => {
    event.preventDefault();
    console.log(address);
  };

  return (
    <>
      <div className="py-1 mx-auto" style={{ margin: "5vh 0 40vh" }}>
        <form
          className=" mx-auto my-5 shipping-details-form"
          onSubmit={handleAddressSubmit}
        >
          <p className="text-center mb-4 text-dark fs-2">Shipping Details</p>
          <hr className="mb-4" />
          <div className="checkout-input-field">
            <AiFillHome className="checkout-icons"/>
            <input
              type="text"
              name="address"
              className="mb-3 border-3"
              placeholder="Address"
              onChange={handleAddress}
            />
          </div>

          <div className="checkout-input-field">
            <BiSolidCity className="checkout-icons"/>
            <input
              type="text"
              name="city"
              className="mb-3 border-3"
              placeholder="City"
              onChange={handleAddress}
            />
          </div>

          <div className="checkout-input-field">
            <MdPinDrop className="checkout-icons"/>
            <input
              type="num"
              name="pincode"
              className="mb-3 border-3"
              placeholder="Pincode"
              onChange={handleAddress}
            />
          </div>

          <div className="checkout-input-field">
            <TbTruckDelivery className="checkout-icons"/>
            <input
            type="text"
            name="state"
            className="mb-3 border-3"
            placeholder="State"
            onChange={handleAddress}
          />
          </div>
         <div className="checkout-input-field">
          <BiSolidPhone className="checkout-icons"/>
          <input
            type="num"
            name="phone"
            className="mb-3 border-3"
            placeholder="Phone Number"
            onChange={handleAddress}
          />
         </div>
      
          <div className="text-center">
            <Link to="/confirmorder">
              <button
                type="submit"
                className="btn btn-dark my-4 continue-button rounded-pill"
                onClick={() => props.getAddress(address)}
              >
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
