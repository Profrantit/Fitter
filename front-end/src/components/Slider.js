import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ImgOne from "../images/imgOne.jpg";
import ImgTwo from "../images/imgTwo.jpg";
import ImgThree from "../images/imgThree.jpg";
import ImgFour from "../images/imgFour.jpg";

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div>
            <img
              style={{ width: "100%", height: "500px" }}
              src={ImgOne}
              alt="none"
            />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              style={{ width: "100%", height: "500px" }}
              src={ImgTwo}
              alt="none"
            />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              style={{ width: "100%", height: "500px" }}
              src={ImgThree}
              alt="none"
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slider;
