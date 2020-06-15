import React from 'react'
import s from './ProfileFooter.module.css'

const SelectPage = (props) => {
  return <div className={s.select}>
    <span className={s.selectTitle}>Show on page </span>
    <select className='selector' name='pageSize' id=''>
      <option className={s.option} value='25'>25</option>
      <option className={s.option} value='20'>20</option>
      <option className={s.option} value='15'>15</option>
      <option className={s.option} value='10'>10</option>
      <option className={s.option} value='5'>5</option>
    </select>
  </div>
}


export default SelectPage
