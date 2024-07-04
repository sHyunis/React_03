import React from 'react'

const Content = ({count, value}) => {
  return (
    <div style={{display : count === value ? "block" : "none"}}>
        content {value + 1}
    </div>
  )
}

export default Content

//분리하는 이유 : 재사용성