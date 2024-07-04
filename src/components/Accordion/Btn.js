import React from 'react'


const Btn = ({setShow, show}) => {
  return (
    // <li onClick={()=>setShow(prev=>!prev)}>title {item+1}</li>
    <li onClick={()=>setShow(!show)}>title</li>
  )
}

export default Btn

//분리하는 이유 : 재사용성