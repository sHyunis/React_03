import React from 'react'
import Content from './Content'

// const TabContent = (props) => {
const TabContent = ({ count }) => {
  return (
    <div>
      {
        [0, 1, 2].map(item=><Content count={count} key={item} value={item} />)
      }
    </div>
  )
}

export default TabContent

//분리하는 이유 : 재사용성