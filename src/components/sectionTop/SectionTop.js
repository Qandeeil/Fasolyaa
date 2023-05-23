import React from "react";
import "../../styles/components/sectionTop/SectionTop.css";
import Search from "./search/Search";
import User from "./user/User";

const SectionRight = () => {
  return (
    <div className="sectionTop">
      <User />
      <Search />
    </div>
  );
};

export default SectionRight;
