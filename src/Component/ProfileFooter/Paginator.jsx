import React, {useState} from 'react'
import s from './ProfileFooter.module.css'
import {Pagination} from 'react-bootstrap'

const Paginator = (props) => {
  const [activePage, setActivePage] = useState(2)
  const plusPage = () => {
    setActivePage(activePage + 1)
    if(activePage >= 5) {
      setActivePage(1)
    }
      return activePage
  }
  const minusPage = () => {
    setActivePage(activePage - 1)
    if(activePage <= 1) {
      setActivePage(5)
    }
    return activePage
  }
  // let active = activePage
  let items = []
  for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item onClick={() => setActivePage(number)}
                         key={number}
                         // active={number === active}
                         className={s.paginationItem}
        >
          {number}
        </Pagination.Item>,
    )
  }
return <div className={s.paginatorContainer}>
  <Pagination  >
    <Pagination.Item  onClick={minusPage}
                     className={s.paginationItem}
    >
      &lt;
    </Pagination.Item>
    {items}
    <Pagination.Item onClick={plusPage}
                     className={s.paginationItem}
    >
      &gt;
    </Pagination.Item>
  </Pagination>
</div>
}


export default Paginator
