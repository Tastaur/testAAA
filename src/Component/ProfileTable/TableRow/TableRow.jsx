import React from 'react'
import s from './TableRow.module.css'

const TableRow = (props) => {
  const status = (status)=>{
    if(status === "Cancel"){
      return <td className={s.cancelMessage}>
        {status}
      </td>
    } else if( status==="Error"){
      return <td className={s.errorMessage}>
        {status}
      </td>
    } else{
      return <td className={s.headerStatus}>
        {status}
      </td>
    }
  }
  return<tr className={s.row}>
        <td className={s.headerNum}>{props.id}</td>
        <td className={s.headerData}>{props.data} {props.time}</td>
        <td className={s.headerInfo}>{props.actMessage} <b>{props.gameName} </b>{props.actDescription} <b>{props.artefactname}</b></td>
        <td className={s.headerType}>{props.type}</td>
        <td className={s.headerCash}>$ {props.price}</td>
        {status(props.status)}
      </tr>
}


export default TableRow
