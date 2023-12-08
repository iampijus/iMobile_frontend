import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <>
      <h2 className="text-center mt-5">About Us</h2>
      <hr className="mx-5" />
      <div
        className="d-flex justify-content-center"
        style={{ margin: "70px 20% 0px" }}
      >
        <img
          src="https://uploads-ssl.webflow.com/614d610a3dd0725153e51ded/6222149bfbdb5b0645ae4c0e_eCommerce-Website-Components-photo.jpeg"
          className="img-fluid rounded w-50"
          alt="..."
        />
        <div className="card-body ms-4 my-auto">
          <h5 className="card-title fw-bold mb-4 fs-3">iMobile</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, dolorem minima nam omnis nemo nisi error cum doloribus
            est exercitationem sit, animi ratione similique molestias laboriosam
            voluptatibus non quas harum quis voluptatem temporibus alias
            doloremque velit? Dolor voluptas, nesciunt obcaecati nihil iure
            molestiae deleniti repellat quisquam culpa animi, consectetur
            repudiandae?
          </p>
          <button className="btn btn-success mt-1 rounded-4">Read More</button>
        </div>
      </div>
      <div className="mt-5" style={{margin:"0 0 22vh"}}>
        <h6 className="text-center">Follow Us</h6>
        <p className="socials text-center">
          <BsFacebook className="social-icons" />
          <BsTwitter className="ms-3 social-icons" />
          <BsInstagram className="ms-3 social-icons" />
          <BsLinkedin className="ms-3 social-icons" />
        </p>
      </div>
    </>
  );
};

export default About;
