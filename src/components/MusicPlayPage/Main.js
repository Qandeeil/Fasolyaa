import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iconLove from "./icon/love.svg";
import iconShare from "./icon/share.svg";
import iconInterrogative from "./icon/interrogative.svg";
import iconList from "./icon/list.svg";
import iconReplay from "./icon/replay.svg";
import iconBack from "./icon/back.svg";
import iconPlay from "./icon/play.svg";
import iconNext from "./icon/next.svg";
import iconDownload from "./icon/download.svg";
import iconPaused from "./icon/paused.svg";

const Main = ({ songData, songs }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
    }
  }, [songData]);

  const handlePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleReplay = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = songData?.audioFile;
    link.download = "audio.mp3";
    link.click();
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((item) => item.id === songData.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex >= 0 && nextIndex < songs.length) {
      const nextSongId = songs[nextIndex].id;
      navigate(`/Music/${nextSongId}`);
    }
  };

  const handleBack = () => {
    const currentIndex = songs.findIndex((item) => item.id === songData.id);
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0 && previousIndex < songs.length) {
      const previousSongId = songs[previousIndex].id;
      navigate(`/Music/${previousSongId}`);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="containerSongData">
      <div className="data">
        <div className="coverImage">
          <img src={songData?.coverImg} alt="Cover" />
        </div>
        <div className="reactOptions">
          <div className="op">
            <img src={iconLove} alt="Love" />
          </div>
          <div className="op">
            <img src={iconShare} alt="Share" />
          </div>
          <div className="op">
            <img src={iconInterrogative} alt="Interrogative" />
          </div>
          <div className="op">
            <img src={iconList} alt="List" />
          </div>
        </div>
        <div className="text">
          <h1>{songData?.title}</h1>
          <p>{songData?.author}</p>
        </div>
        <div className="audio-controls">
          <span className="current-time">{formatTime(currentTime)}</span>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <span className="duration">{formatTime(duration)}</span>
        </div>
        <audio
          ref={audioRef}
          src={songData?.audioFile}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <div className="playSong">
          <img src={iconReplay} alt="Replay" onClick={handleReplay} />
          <img src={iconBack} alt="Back" onClick={handleBack} />
          <div
            className={isPlaying ? "containerIconPaused" : "containerIconPlay"}
            onClick={handlePlay}
          >
            <img
              src={isPlaying ? iconPaused : iconPlay}
              alt={isPlaying ? "Pause" : "Play"}
            />
          </div>
          <img src={iconNext} alt="Next" onClick={handleNext} />
          <img src={iconDownload} alt="Download" onClick={handleDownload} />
        </div>
      </div>
    </div>
  );
};

export default Main;
