import React from 'react'

const Content = ({item, count, index}) => {
  // console.log(count);
  return (
    <div style={{ display : count === index ? "block" : "none" }}>{item}</div>
  )
}

export default Content;