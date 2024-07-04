import React from 'react'


const Btn = ({setShow, item}) => {
  return (
    // <li onClick={()=>setShow(prev=>!prev)}>title {item+1}</li>
    <li onClick={()=>setShow(item)}>title{item + 1}</li>
  )
}

export default Btn

//분리하는 이유 : 재사용성