import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Swal from "sweetalert2";

const Logout = () => {
  // usercontext for toggle between login and logout
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "USER", payload: false });
    navigate("/login");

    // removing the data from the local storage
    localStorage.removeItem("userData");
    localStorage.removeItem("loggedIn");

    // showing the alert
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  });
  return (
    <>
      <div style={{ margin: "50vh 0px 50vh" }}></div>
    </>
  );
};

export default Logout;
