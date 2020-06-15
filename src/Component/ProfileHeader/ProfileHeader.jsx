import React from 'react'
import s from './ProfileHeader.module.css'

const ProfileHeader = (props) => {
  return <div className='profileHeader'>
    <div className={s.container}>
      <div className={s.title}>MY BALANCE</div>
      <div className={s.subtitleContainer}>
        <div className={s.subtitle}> $ 708<span className={s.postSubtitle}>,83</span></div>
        <div className={s.buttonContainer}>
          <button className={s.button}>Make up deposit</button>
        </div>
      </div>
    </div>
  </div>
}


export default ProfileHeader
