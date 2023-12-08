import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const DropdownProfile = () => {
  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            <FaUserCircle className="me-2 fs-5" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/myprofile"
            >
              <Dropdown.Item href="#/action-1">
                <FiUser className="me-2" />
                My Profile
              </Dropdown.Item>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/orders"
            >
              <Dropdown.Item href="#/action-2">
                <CiDeliveryTruck  className="me-2 fs-5"/>
                Orders
              </Dropdown.Item>
            </Link>

            <Link style={{ textDecoration: "none", color: "black" }} to="/help">
              <Dropdown.Item href="#/action-3">
                <BiHelpCircle className="me-2 fs-5"/>
                Help
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default DropdownProfile;
