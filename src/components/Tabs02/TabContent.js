import React from 'react'

// const TabContent = (props) => {
const TabContent = ({ count }) => {
  return (
    <div>
        <div style={{display : count === 'a' ? "block" : "none"}}>content01</div>
        <div style={{display : count === 'b' ? "block" : "none"}}>content02</div>
        <div style={{display : count === 'c' ? "block" : "none"}}>content03</div>
    </div>
  )
}

export default TabContent