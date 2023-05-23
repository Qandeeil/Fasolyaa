import React from 'react'
import '../../../styles/components/bottomBar/infoSong/InfoSong.css'
import imageTester from './images/Group.svg'

const InfoSong = () => {
  return (
    <div className='infoSong'>
      <div className='containerImage'>
        <img alt='image' src={imageTester}/>
      </div>
      <div className='text'>
        <h1>باص مدرستي</h1>
        <p>لالي كيدز</p>
      </div>
    </div>
  )
}

export default InfoSong
