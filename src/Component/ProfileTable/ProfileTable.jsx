import React from 'react'
import s from './ProfileTable.module.css'
import TableRow from './TableRow/TableRow'

const ProfileTable = (props) => {
 let rows = props.order.orders.map(m => <TableRow id={m.id} data={m.data} time={m.time} actMessage={m.actMessage}
                                                  gameName={m.gameName} actDescription={m.actDescription} artefactname={m.artefactname} key={m.id} type={m.type} price={m.price} status={m.status}/>)
  return <div>
    <table className={s.table}>
      <thead className={s.header}>
      <tr>
        <th className={s.headerNum}>#</th>
        <th className={s.headerData}>Data & Time</th>
        <th className={s.headerInfo}>Info</th>
        <th className={s.headerType}>Type</th>
        <th className={s.headerCash}>Cash</th>
        <th className={s.headerStatus}>Status</th>
      </tr>
      </thead>
      <tbody className={s.body}>

      {rows}

      </tbody>
    </table>
  </div>
}


export default ProfileTable
