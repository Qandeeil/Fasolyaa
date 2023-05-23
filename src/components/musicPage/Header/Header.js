import React from "react";
import "../../../styles/components/musicPage/Header/Header.css";
import arrowLeft from "./icon/arrowLeft.svg";
import arrowRight from "./icon/arrowRight.svg";

const Header = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="musicPageHeader">
      <div className="arrowLeft arrow">
        <img src={arrowLeft} />
      </div>
      <div className="arrowRight arrow" onClick={handleBack}>
        <img src={arrowRight} />
      </div>
    </div>
  );
};

export default Header;
