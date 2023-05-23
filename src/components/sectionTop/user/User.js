import React, { Fragment } from "react";
import "../../../styles/components/sectionTop/user/User.css";
import userImage from "./icon/userImage.svg";
import arrowDown from "./icon/arrowDown.svg";
import Notifications from "./icon/Notifications.svg";

const User = () => {
  return (
    <div className="user">
      <div className="container">
        <div className="userInfo">
          <div className="userImage">
            <img src={userImage} />
          </div>
          <span>سارة حداد</span>
        </div>
        <img src={arrowDown} className="arrowDown" />
      </div>
      <div className="containerNotifications">
        <img src={Notifications} className="notifications"/>
      </div>
    </div>
  );
};

export default User;
