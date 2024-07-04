import React, { useState } from 'react'
import ItemGroup from './ItemGroup'

const Accordion = () => {
  const [show, setShow] = useState(false);
  // true = show, false = hidden
  return (
    <div>
      <ItemGroup show={show} setShow={setShow} />
    </div>
  )
}

export default Accordion