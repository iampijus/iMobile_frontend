import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiLock } from "react-icons/fi";

// Form validation
const validation = (userObj) => {
  let errors = {};

  // validatin for name
  if (!userObj.name) {
    errors.name = "Please Enter Your Name";
  }

  // validation for email
  if (!userObj.email) {
    errors.email = "Please Enter Your Email";
  }

  // validation for mobile
  if (!userObj.phone) {
    errors.phone = "Please Enter Your Mobile No";
  }

  // validation for password
  if (!userObj.password) {
    errors.password = "Please Enter Your Password";
  }

  // validatin for confirm password
  if (!userObj.cpassword) {
    errors.cpassword = "Please Re-Enter Your Password";
  }

  return errors;
};

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [validationError, setValidationError] = useState({});

  //   handle user
  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //   handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    let err = validation(user);
    if (Object.keys(err).length === 0) {
      console.log(user);
      Swal.fire("Great!", "Successfully Registered!", "success");
    } else {
      setValidationError(err);
    }
  };

  // send the data to the server
  const navigate = useNavigate();
  const postData = async (event) => {
    event.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("https://imobile-backend.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = res.json();
    if (res.status === 422) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email already exist",
        timer: 1500,
      });
    } else if (res.status === 404 || !data) {
      let err = validation(user);
      setValidationError(err);
    } else {
      Swal.fire({
        title: "Good job!",
        text: "Registration Successful!",
        icon: "success",
        timer: 1500,
      });
      console.log("Successfully Registration");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="main-register-container">
        <div className="card register-container">
          <form
            className="w-50 mx-auto my-5"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center fw-bold mb-4 text-dark">Register Now</h3>
            {/* name */}
            <div className="register-input-field">
              <FaUserAlt className="register-icons" />
              <input
                type="text"
                name="name"
                className="mb-3 border-1 border-dark"
                placeholder="Your Name"
                onChange={handleUser}
              />
            </div>
            {/* display error message */}
            {validationError.name && (
              <p className="text-danger text-center">{validationError.name}</p>
            )}
            {/* email */}
            <div className="register-input-field">
              <MdEmail className="register-icons fs-5" />
              <input
                type="email"
                name="email"
                className="mb-3 border-1 border-dark"
                placeholder="Your Email"
                onChange={handleUser}
              />
            </div>
            {/* display error message */}
            {validationError.email && (
              <p className="text-danger text-center">{validationError.email}</p>
            )}
            {/* phone */}
            <div className="register-input-field">
              <BiSolidPhoneCall className="register-icons fs-5" />
              <input
                type="tel"
                name="phone"
                className="mb-3 border-1 border-dark"
                placeholder="Your Mobile Number"
                onChange={handleUser}
              />
            </div>

            {/* display error message */}
            {validationError.phone && (
              <p className="text-danger text-center">{validationError.phone}</p>
            )}
            {/* password */}
            <div className="register-input-field">
              <FaLock className="register-icons" />
              <input
                type="password"
                name="password"
                className="mb-3 border-1 border-dark"
                placeholder="Your Password"
                onChange={handleUser}
              />
            </div>

            {/* display error message */}
            {validationError.password && (
              <p className="text-danger text-center">
                {validationError.password}
              </p>
            )}
            {/* confirm password */}
            <div className="register-input-field">
              <FiLock className="register-icons fs-5" />
              <input
                type="password"
                name="cpassword"
                className="mb-3 border-1 border-dark"
                placeholder="Confirm Your Password"
                onChange={handleUser}
              />
            </div>

            {/* display error message */}
            {validationError.cpassword && (
              <p className="text-danger text-center">
                {validationError.cpassword}
              </p>
            )}
            {/* register button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn register-button fs-6 px-4"
                onClick={postData}
              >
                Register
              </button>
              <p className="mt-4">
                Already Registered !{" "}
                <span>
                  <Link
                    style={{ textDecoration: "none", color: "orange" }}
                    to="/login"
                  >
                    {" "}
                    Login{" "}
                  </Link>
                  Now
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
