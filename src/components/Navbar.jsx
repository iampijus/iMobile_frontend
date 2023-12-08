import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FiShoppingCart, FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";
import { useEffect, useState, useContext } from "react";
import UserProfile from "./UserProfile";
import { UserContext } from "../App";

function Navbar(props) {
  const { state, dispatch } = useContext(UserContext);
  // getting the data from localstorage
  const [name, setName] = useState("");
  const getUserData = () => {
    try {
      const data = JSON.parse(localStorage.getItem("userData"));
      //  splitting the name into first name and last name
      const userFullName = data.name;
      const names = userFullName.split(" ");
      const fname = names[0];
      setName(fname);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, [state]);
  // login status
  const isLoggedIn = localStorage.getItem("loggedIn");

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const RenderMenu = () => {
    if (state || isLoggedIn) {
      return (
        <>
          <nav className="navbar navbar-expand-lg bg-light py-3 shadow">
            <div className="container">
              <Link className="navbar-brand fw-bold fs-4 text-dark" to="/home">
                iMobile
              </Link>

              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* Dropdown profile */}
              <span className="me-4 fw-bold">Hi, {name}</span>
              <UserProfile />
              <Link
                to="/cart"
                className="btn btn-outline-dark ms-3 nav-register"
              >
                <FiShoppingCart className="me-2" />
                Cart
              </Link>
              <Link
                className="btn btn-outline-dark ms-3 nav-register"
                to="/logout"
              >
                <FiLogOut className="me-2" />
                Logout
              </Link>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar navbar-expand-lg bg-light py-3 shadow">
            <div className="container">
              <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
                iMobile
              </Link>

              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <Link className="btn btn-outline-dark nav-register" to="/login">
                <FiLogIn className="me-2" />
                Login
              </Link>
              <Link
                className="btn btn-outline-dark ms-3 nav-register"
                to="/register"
              >
                <FiUserPlus className="me-2" />
                Register
              </Link>
            </div>
          </nav>
        </>
      );
    }
  };
  return (
    <>
      <div className={`myNav ${scrolled ? "sticky-header" : ""}`}>
        <RenderMenu />
      </div>
    </>
  );
}

export default Navbar;
