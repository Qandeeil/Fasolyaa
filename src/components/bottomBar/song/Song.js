import React, { useState } from "react";
import "../../../styles/components/bottomBar/song/Song.css";
import iconReplay from "./icon/reloadBottom.svg";
import iconBack from "./icon/leftBottom.svg";
import iconPlay from "../../MusicPlayPage/icon/play.svg";
import iconNext from "./icon/rightBottom.svg";
import iconDownload from "./icon/downloadBottom.svg";
import iconPaused from "../../MusicPlayPage/icon/paused.svg";

const Song = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bottomBarSong">
      <div className="playSong bottomBarSong">
        <img src={iconReplay} alt="Replay" className="Replay" />
        <img src={iconBack} alt="Back" className="Back" />
        <div
          className={isPlaying ? "containerIconPaused" : "containerIconPlay"}
        >
          <img
            src={isPlaying ? iconPaused : iconPlay}
            alt={isPlaying ? "Pause" : "Play"}
          />
        </div>
        <img src={iconNext} alt="Next" className="Next" />
        <img src={iconDownload} alt="Download" className="Download" />
      </div>
      <div className="audio-controls barBtn">
          <span className="current-time CTBtn">{formatTime(currentTime)}</span>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <span className="duration DBtn">{formatTime(duration)}</span>
        </div>
        {/* <audio
          ref={audioRef}
          src={songData?.audioFile}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        /> */}
    </div>
  );
};

export default Song;
