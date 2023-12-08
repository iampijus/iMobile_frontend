import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPoster = () => {
  return (
    <>
      <div className="mx-4 my-4">
        <Carousel data-bs-theme="dark" indicators={false} interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg"
              alt="First slide"
              height="350px"
            />
            <Carousel.Caption>
              <h3 className="fw-bold text-light">
                APPLE iPhone 14 (Midnight, 128 GB)
              </h3>
              <p className="fs-5 text-light">
                With the superb APPLE iPhone 14 , you can take advantage of
                greatpictures
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://fdn.gsmarena.com/imgroot/news/21/02/vivo-s9-design-poster/-1220x526/gsmarena_002.jpg"
              height="350px"
            />
            <Carousel.Caption>
              <h3 className="fw-bold">vivo T2x 5G (Marine Blue, 128 GB)</h3>
              <p className="fs-5">
                With the superb Vivo T2x 5G, you can take advantage of
                greatpictures
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://global.hisense.com/dam/jcr:a0622ec8-3501-4c44-92dc-afafb9398077/product-overview-hisense-smartphone-kv.jpg"
              alt="Third slide"
              height="350px"
            />
            <Carousel.Caption>
              <h3 className="fw-bold text-light">
                SAMSUNG Galaxy F13 (Nightsky Green, 64 GB) (4 GB RAM)
              </h3>
              <p className="fs-5 text-light">
                Enjoy seamless connectivity and an uninterrupted movie marathon
                with the impressive Samsung Galaxy F13
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselPoster;
