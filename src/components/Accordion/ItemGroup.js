import React from 'react'
import Content from './Content'
import Btn from './Btn'

const ItemGroup = ({show, setShow}) => {
  return (
    <div>
      <Btn setShow={setShow} show={show} />
      <Content show={show} />
    </div>
  )
}

export default ItemGroup