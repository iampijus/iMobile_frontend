import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const HelpSupport = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // getting the user details from the local storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUser({ ...user, name: data.name, email: data.email, phone: data.phone });
  }, []);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //send the data to the server
    try {
      const response = await axios.post(
        "http://localhost:5000/helpsupport",
        user
      );
      if (response.status === 201) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message Sent Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        toast.info("Please Enter Message!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="py-1 mx-auto" style={{ margin: "6vh 0 40vh" }}>
        <h2 className="text-center mb-4 text-dark fs-2">Help & Support</h2>
        <hr className="mb-4 mx-5" />
        <form
          method="POST"
          className="w-75 mx-auto mt-5"
          onSubmit={handleSubmit}
        >
          <div className="d-flex mb-4">
            <input
              type="text"
              name="name"
              className="form-control me-3 border-3"
              placeholder="Name"
              value={user.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="email"
              className="form-control me-3 border-3"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />

            <input
              type="num"
              name="phone"
              className="form-control  border-3"
              placeholder="Phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-control mb-3"
            placeholder="Enter your message"
            rows="7"
            onChange={handleChange}
          ></textarea>
          <div className="text-center">
            <button type="submit" className="btn btn-dark my-4 px-5 rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HelpSupport;
