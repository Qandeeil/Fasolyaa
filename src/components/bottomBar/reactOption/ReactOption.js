import React, { useState } from 'react';
import '../../../styles/components/bottomBar/reactOption/ReactOption.css';
import like from './icon/likeBotto.svg';
import shear from './icon/shearBottom.svg';
import interrogative from './icon/interrogativeBottom.svg';
import list from './icon/listBottom.svg';
import volumeUp from './icon/volumeUp.svg';

const ReactOption = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  return (
    <div className='reactOptionBottom'>
      <div className='optionBottom'>
        <img src={like} alt='Like' />
        <img src={shear} alt='Share' />
        <img src={interrogative} alt='Interrogative' />
        <img src={list} alt='List' />
      </div>
      <span className='line'></span>
      <div className='volume-control'>
        <input
          type='range'
          min='0'
          max='100'
          value={volume}
          onChange={handleVolumeChange}
          style={{ direction: 'rtl', transform: 'rotate(180deg)' }}
        />
        <img src={volumeUp} alt='Volume' />
      </div>
    </div>
  );
};

export default ReactOption;
