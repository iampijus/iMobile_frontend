import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  // getting the user details from the local storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));

    if (data) {
      setUser({
        ...user,
        name: data.name,
        email: data.email,
      });
    }
  }, []);

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { name, email, message } = user;

      if (!name || !email || !message) {
        toast.info('Please Enter Message!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });
      } else {
        const response = await axios.post(
          "http://localhost:5000/contactus",
          user
        );
        if (response.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-center mx-5">
      <h2 className="mt-5 mb-4">Feel Free To Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158262064!2d73.91420147514656!3d18.562551782539252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1689447027414!5m2!1sen!2sin"
        width="100%"
        height="400"
        className="rounded-2"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Form to contact */}
      <div className="container mb-5">
        <form className="mt-4 mx-auto w-50" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Name"
            value={user.name}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={user.email}
            onChange={changeHandler}
          />
          <textarea
            name="message"
            className="form-control mb-3"
            placeholder="Enter your message"
            rows="5"
            onChange={changeHandler}
          ></textarea>
          <button type="submit" className="btn btn-primary px-5 mb-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
