import React, { useEffect } from "react";
import "../styles/pages/MusicPage.css";
import Header from "../components/musicPage/Header/Header";
import SectionRight from "../components/musicPage/sectionRight/SectionRight";
import MusicList from "../components/musicPage/musicList/MusicList";
import { useSelector, useDispatch } from "react-redux";
import { getSongs } from "../store/songs/Songs";

const MusicPage = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.Songs);
  useEffect(() => {
    dispatch(getSongs());
  }, []);
  return (
    <div className="musicPage">
      <Header />
      <div className="containerSongs">
        <MusicList songs={songs} />
        <SectionRight songs={songs} />
      </div>
    </div>
  );
};

export default MusicPage;
