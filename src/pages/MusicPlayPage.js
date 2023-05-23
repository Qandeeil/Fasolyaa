import React, { useEffect } from "react";
import "../styles/pages/MusicPlayPage.css";
import { useParams } from "react-router-dom";
import Header from "../components/musicPage/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import Main from "../components/MusicPlayPage/Main";
import { getSongs } from "../store/songs/Songs";

const MusicPlayPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    !songs.length && dispatch(getSongs());
  }, []);
  const { songs } = useSelector((state) => state.Songs);
  const { id } = useParams();
  const songData = songs.find((item) => item.id === id);

  return (
    <div className="musicPlayPage">
      <Header />
      <Main songData={songData} songs={songs}/>
    </div>
  );
};

export default MusicPlayPage;
