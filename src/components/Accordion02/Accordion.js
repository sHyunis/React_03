import React, { useState } from 'react'
import ItemGroup from './ItemGroup'

const ary = [0, 1, 2, 3, 4]
const Accordion = () => {
  const [show, setShow] = useState(ary[0]);
  // 0, 1, 2, 3, 4
  return (
    <div>
      {
        ary.map(item=>
                  <ItemGroup  show={show}
                              setShow={setShow} 
                              key={item} // DB에 id값 primary 키 설정하는 것과 같다. (구분값)
                              item={item}
                  />
                )
      }
    </div>
  )
}

export default Accordion