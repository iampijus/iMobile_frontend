import React from "react";
import "../styles/Footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer2 = () => {
  return (
    <>
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-box">
                  <h4 className="text-light">iMobile</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam repellendus sunt praesentium aspernatur iure molestias.
                  </p>
                  <h3>We Accept</h3>
                  <div className="card-area">
                    <i className="fa fa-cc-visa" />
                    <i className="fa fa-credit-card" />
                    <i className="fa fa-cc-mastercard" />
                    <i className="fa fa-cc-paypal" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-box">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-box">
                  <h2>Help</h2>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Order Status</a>
                    </li>
                    <li>
                      <a href="#">Payments</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-box">
                  <h2>More</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur doloremque earum similique fugiat nobis.
                    Facere?
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Id "
                      aria-label="Enter your Email ..."
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-long-arrow-right" />
                    </span>
                  </div>
                  <h2>Follow us on</h2>
                  <p className="socials">
                    <BsFacebook className="social-icons" />
                    <BsTwitter className="ms-2 social-icons" />
                    <BsInstagram className="ms-2 social-icons" />
                    <BsLinkedin className="ms-2 social-icons" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer2;
