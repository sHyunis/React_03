import React from 'react'
import Content from './Content'
import Btn from './Btn'

const ItemGroup = ({show, setShow, item}) => {
// const ItemGroup = (props) => {
//   console.log(props);
  // console.log(props.key());
  return (
    <div>
      <Btn setShow={setShow} item={item} />
      <Content show={show} item={item} />
    </div>
  )
}

export default ItemGroup