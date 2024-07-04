import React from 'react'

const Content = ({show, item}) => {
  return (
    <div style={{display : show === item ? "block" : "none"}}>
        content
    </div>
  )
}

export default Content

//분리하는 이유 : 재사용성