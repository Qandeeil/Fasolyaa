import React, { Fragment, useState, useEffect } from "react";
import "../../../styles/components/musicPage/musicList/MusicList.css";
import Cover from "./images/Cover.svg";
import Vector from "./images/Vector.svg";
import { NavLink } from "react-router-dom";

const MusicList = ({ songs }) => {
  const [songOrder, setSongOrder] = useState([]);
  const [shuffledSongs, setShuffledSongs] = useState([]);

  useEffect(() => {
    setShuffledSongs([...songs].sort(() => Math.random() - 0.5));
  }, [songs]);

  const displayedSongs = songOrder.length > 0 ? songOrder : shuffledSongs;

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const updatedOrder = [...displayedSongs];
    const [movedSong] = updatedOrder.splice(sourceIndex, 1);
    updatedOrder.splice(targetIndex, 0, movedSong);
    setSongOrder(updatedOrder);
  };

  return (
    <div className="musicList">
      {displayedSongs.map((item, index) => (
        <div
          className="containerMusicList"
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
        >
          <NavLink className="containerCover" to={`/Music/${item.id}`}>
            <div className="cover">
              <img src={item.coverImg} style={{ width: "50%" }} alt="Cover" />
            </div>
            <span className="title text">{item.title}</span>
          </NavLink>
          <span className="author text">{item.author}</span>
          <img src={Vector} className="option" alt="Options" />
        </div>
      ))}
    </div>
  );
};

export default MusicList;
