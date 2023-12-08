import React, { useEffect } from "react";
import { useState } from "react";
import HomeCards from "./HomeCards";
import CarouselPoster from "./CarouselPoster";
import HomeFeatures from "./HomeFeatures";
import HomeBanner from "./HomeBanner";
import HomePopCards from "./HomePopCards";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
// import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const Loading = () => {
    return (
      <div className="text-center fs-4" style={{ margin: "280px 0px 430px" }}>
        Loading...
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CarouselPoster />
          <HomeCards />
          <HomeFeatures />
          <HomeBanner />
          <HomePopCards />
          <div className="text-center" style={{ margin: "10vh 0px 15vh" }}>
            <Link to="/products">
              <button className="btn btn-warning">
                See More <MdArrowForward />
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
