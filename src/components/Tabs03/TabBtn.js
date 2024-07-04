import React from 'react'
import Btn from './Btn'

// const TabBtn = (props) => {
const TabBtn = ({ setCount }) => {
  return (
    <ul>
      {
        [0, 1, 2].map(item=><Btn setCount={setCount} key={item} item={item} />)
      }
    </ul>
  )
}

export default TabBtn

//분리하는 이유 : 재사용성