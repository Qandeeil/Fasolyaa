import React, { useEffect } from "react";
import '../styles/pages/Homepage.css'
import { useDispatch } from "react-redux";
import { getSongs } from "../store/songs/Songs";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, []);
  return (
    <div className="homePage test">
      <h1>الصفحة الرئيسية</h1>
    </div>
  );
};

export default HomePage;
