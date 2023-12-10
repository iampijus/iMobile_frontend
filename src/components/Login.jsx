import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../App";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// form validation
const validation = (userObj) => {
  let errors = {};

  // validation for username
  if (!userObj.email) {
    errors.email = "Enter Your Email";
  }
  // validation for password
  if (!userObj.password) {
    errors.password = "Enter Your Password";
  }
  return errors;
};

const Login = () => {
  // usercontext for toggle between login and logout
  const { state, dispatch } = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState({});

  //   handle user
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //   handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    let err = validation(user);
    if (Object.keys(err).length === 0) {
      console.log(user);
    } else {
      setValidationError(err);
    }
  };
  // send data to server
  const navigate = useNavigate();
  const loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    const res = await fetch("https://imobile-backend.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials",
        timer: 1500,
      });
    } else if (res.status === 401 || !data) {
      let err = validation(user);
      setValidationError(err);
    } else {
      // changing the nav menu after successful login
      dispatch({ type: "USER", payload: true });
      // set the data to the local storage
      localStorage.setItem("userData", JSON.stringify(data));
      localStorage.setItem("loggedIn", true);

      Swal.fire({
        title: "Good job!",
        text: "Login Successful!",
        icon: "success",
        timer: 1500,
      });
      navigate("/home");
    }
  };

  return (
    <>
      <div className="main-login-container">
        <div className="card login-container">
          <form className="w-50 mx-auto" method="POST" onSubmit={handleSubmit}>
            <h3 className="text-center fw-bold text-dark mb-4">Login</h3>
            {/* Username */}
            <div className="input-field">
              <MdEmail className="login-icons fs-5" />
              <input
                type="text"
                name="email"
                className="mb-3 border-1 border-dark"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            {/* display the error message */}
            {validationError.email && (
              <p className="text-danger text-center">{validationError.email}</p>
            )}
            {/* password */}
            <div className="input-field">
              <FaLock className="login-icons" />
              <input
                type="password"
                name="password"
                className="mb-3 border-1 border-dark"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            {/* display the error message */}
            {validationError.password && (
              <p className="text-danger text-center">
                {validationError.password}
              </p>
            )}
            {/* login button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn login-button fs-6 px-4"
                onClick={loginUser}
              >
                Login
              </button>
              <p className="mt-4">
                Don't have an account?{" "}
                <span className="register-option">
                  <Link
                    style={{ textDecoration: "none", color: "orange" }}
                    to="/register"
                  >
                    Register
                  </Link>
                </span>{" "}
                here
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
