import React from 'react'

const Btn = ({setCount, item}) => {
  return (
    <li onClick={()=>setCount(item)}>title {item+1}</li>
  )
}

export default Btn

//분리하는 이유 : 재사용성