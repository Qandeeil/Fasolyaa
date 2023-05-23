import React from 'react'
import '../../styles/components/bottomBar/BottomBar.css'
import InfoSong from './infoSong/InfoSong'
import Song from './song/Song'
import ReactOption from './reactOption/ReactOption'

const BottomBar = () => {
  return (
    <div className='bottomBar'>
      <InfoSong />
      <Song />
      <ReactOption />
    </div>
  )
}

export default BottomBar
