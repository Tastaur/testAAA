import React from 'react'
import s from './NavBar.module.css'
import dollar from '../../assets/Icon/Dollar.png'
import myinfo from '../../assets/Icon/MyInfo.png'
import Schedule from '../../assets/Icon/Shculde.png'
import orders from '../../assets/Icon/List .png'
import arrowDown from '../../assets/Icon/Vector 86.png'

const NavBar = (props) => {
  return <div className={s.container}>
    <div className={s.row}><img className={s.img} alt='img' src={dollar}/> <span className={s.title}>Balance</span></div>
    <div className={s.row}><img alt='img' className={s.img} src={orders}/> <span className={s.title}>Orders</span> <img  className={s.imgIcon} src={arrowDown} alt='img'/></div>
    <div className={s.row}><img className={s.img} alt='img' src={myinfo}/> <span className={s.title}>My Info</span></div>
    <div className={s.row}><img className={s.img} alt='img' src={Schedule}/> <span className={s.title}>Schedule</span></div>

  </div>
}


export default NavBar
