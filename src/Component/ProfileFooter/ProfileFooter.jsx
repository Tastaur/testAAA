import React from 'react'
import s from './ProfileFooter.module.css'
import SelectPage from './SelectPage'
import Paginator from './Paginator'

const ProfileFooter = (props) => {
  return <div className='profileFooter'>
    <div className={s.wrapper}>
   <SelectPage/>
    <Paginator/>
    </div>
  </div>
}


export default ProfileFooter
