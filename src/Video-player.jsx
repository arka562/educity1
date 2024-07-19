import React, { useRef } from 'react';
import './Video-player.css';
import video_in from './assets/video.mp4';

const Videoplayer = ({ playState, SetPlayState }) => {
  const player = useRef(null);

  const handlePause = () => {
    SetPlayState(true); 
  };
  

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={handlePause}>
      {/* <video src={video_in} autoPlay muted controls></video> */}
      <video src={video_in} autoPlay muted controls onPause={() => SetPlayState(false)}></video>

    </div>
  );
};

export default Videoplayer;
