import React from "react";
import "./virtual.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtual = () => {
  return (
    <div>
      <div className="virtual-container">
        <div className="left">
          <span>Virtual Try-On</span>
          <span>Never Buy the wrong Shade again !!!!</span>
          <span>Try Now!</span>
          <img src={shade} />
        </div>
        <div className="right">
          <div className="virtual-wrapper">
            <ReactCompareImage leftImage={Before} rightImage={After} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
