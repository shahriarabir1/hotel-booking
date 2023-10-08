import React from "react";
import { TypeAnimation } from "react-type-animation";
import back from "../../../assets/bckhome.jpg";
const HomeBody = () => {
  return (
    <div>
      <div
        className="lg:block hidden"
        style={{ position: "absolute", left: "40%", top: "20%" }}
      >
        <span style={{ fontSize: "2em" }}>You Can Found here </span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Premium Living",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Healthy Food",
            1000,
            "Qualityful Service",
            1000,
            "Natural Environment",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "4em",
            display: "inline-block",
            color: "black",
            fontFamily: "'Lugrasimo', cursive",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="absolute bottom-[40%] right-20 ">
        <h2 className="text-2xl font-bold italic">Find Your Next Stay</h2>
        <h5 className="text-lg">Search for premium low price hotel rooms </h5>
      </div>
      <img src={back} className="h-[50vh] w-screen" />
    </div>
  );
};

export default HomeBody;
