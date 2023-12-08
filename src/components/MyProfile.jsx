import React, { useEffect, useState } from "react";
import "../styles/MyProfile.css";
import profile_img from "../images/profile_img.png";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [name, setName] = useState({
    fname: " ",
    lname: " ",
  });
  const getUserData = () => {
    try {
      const data = JSON.parse(localStorage.getItem("userData"));
      //  splitting the name into first name and last name
      const userFullName = data.name;
      const names = userFullName.split(" ");
      const fname = names[0];
      const lname = names[1];
      setName({ fname, lname });

      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="" style={{ margin: "8vh 0 40vh" }}>
        <div className="card shadow-lg mb-3 mx-auto profile_card px-5 ">
          <div className="d-flex">
            <div className="profile-pic">
              <img src={profile_img} className="rounded-pill" />
              <p className="mt-2 ms-2">{userData.name}</p>
            </div>
            <div className="ms-5">
              <div className="card-body">
                <h4 className="card-title mt-4">Profile</h4>
                <p className="card-text">
                  <div className="profile-body">
                    <form method="GET">
                      <div className="d-flex">
                        <div>
                          <label class="form-label">First Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control me-3 border-1"
                            value={name.fname}
                          />
                        </div>

                        <div className="ms-3">
                          <label class="form-label">Last Name</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control me-3 border-1"
                            value={name.lname}
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <label class="form-label">User Id</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control me-3 border-1"
                          value={userData._id}
                        />
                      </div>
                      <div className="mt-3">
                        <label class="form-label">Email</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control me-3 border-1"
                          value={userData.email}
                        />
                      </div>
                      <div className="mt-3">
                        <label class="form-label">Phone No</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control me-3 border-1"
                          value={userData.phone}
                        />
                      </div>
                    </form>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
