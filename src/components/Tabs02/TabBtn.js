import React from 'react'

// const TabBtn = (props) => {
const TabBtn = ({ setCount, value }) => {
  return (
    <ul>
        <li onClick={()=>setCount('a')}>{value}1</li>
        <li onClick={()=>setCount('b')}>title2</li>
        <li onClick={()=>setCount('c')}>title3</li>
    </ul>
  )
}

export default TabBtn