import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hotel1 from "./Body/Hotels/Hotel1";
import Hotel2 from "./Body/Hotels/Hotel2";
import Hotel3 from "./Body/Hotels/Hotel3";
import Hotel4 from "./Body/Hotels/Hotel4";
import Hotel5 from "./Body/Hotels/Hotel5";
import Hotel6 from "./Body/Hotels/Hotel6";
import HomeBody from "./Body/HomeBody/HomeBody";
import Cart from "./Body/Cart/Cart";
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <HomeBody />

      <div className="mt-10 ml-10">
        <Carousel responsive={responsive}>
          <div>
            <Hotel1 />
          </div>
          <div>
            <Hotel2 />
          </div>
          <div>
            <Hotel3 />
          </div>
          <div>
            <Hotel4 />
          </div>
          <div>
            <Hotel5 />
          </div>
          <div>
            <Hotel6 />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
