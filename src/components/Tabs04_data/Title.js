import React from 'react'

const Title = ({item, setCount, index}) => {
  return (
    <div onClick={()=>setCount(index)}>{item}</div>
  )
}

export default Title