import React from "react";
import "../../../styles/components/sectionRight/Header/Header.css";
import { NavLink } from "react-router-dom";
import iconHome from "./icon/Home.svg";
import iconSongs from "./icon/Songs.svg";
import iconStories from "./icon/Stories.svg";
import iconFamilyGames from "./icon/FamilyGames.svg";
import iconBlogging from "./icon/Blogging.svg";

const Header = () => {
  return (
    <div className="headerSliderRight">
      <img
        src="https://www.fasolyaa.com/images/fasolyaa.png"
        width={147.61}
        height={113.02}
      />
      <div className="list">
        <NavLink to='/'>
          <span>الرئيسية</span>
          <div className="icon ich">
            <img src={iconHome} />
          </div>
        </NavLink>
        <NavLink to='/Music'>
          <span>أغاني</span>
          <div className="icon icso">
            <img src={iconSongs} />
          </div>
        </NavLink>
        <NavLink to='/Stories'>
          <span>قصص</span>
          <div className="icon ics">
            <img src={iconStories} />
          </div>
        </NavLink>
        <NavLink to='/FamilyGames'>
          <span>الألعاب العائلية</span>
          <div className="icon icf">
            <img src={iconFamilyGames} />
          </div>
        </NavLink>
        <NavLink to='/Blogging'>
          <span>المدونات</span>
          <div className="icon icb">
            <img src={iconBlogging} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
