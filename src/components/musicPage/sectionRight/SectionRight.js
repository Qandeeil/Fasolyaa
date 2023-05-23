import React, { useEffect, useState } from "react";
import "../../../styles/components/musicPage/sectionRight/SectionRight.css";
import LogoMusic from "./images/logoMusic.svg";
import Play from "./images/Play.svg";

const SectionRight = ({ songs }) => {
  const [randomSong, setRandomSong] = useState(null);

  useEffect(() => {
    if (randomSong?.id) {
      window.location.href = `/Music/${randomSong?.id}`;
    }
  }, [randomSong]);

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    setRandomSong(selectedSong);
  };

  return (
    <div className="musicSectionRight">
      <div className="musicContainerRight">
        <div className="logoMusic">
          <img src={LogoMusic} alt="Logo" />
        </div>
        <h1>الحيوانات</h1>
        <span className="numberOfSongs">عدد الأغاني: {songs?.length}</span>
        <div className="containerPlay" onClick={handleRandomClick}>
          <span>استمع عشوائياً</span>
          <img src={Play} alt="Play" />
        </div>
      </div>
    </div>
  );
};

export default SectionRight;
