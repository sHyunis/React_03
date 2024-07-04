import React, { useState } from 'react'

const Tabs = () => {
    const [count, setCount] = useState('a');
    // a, b, c
  return (
    <div className='Tabs_container'>
        <ul>
            <li onClick={()=>setCount('a')}>title1</li>
            <li onClick={()=>setCount('b')}>title2</li>
            <li onClick={()=>setCount('c')}>title3</li>
        </ul>
        <div>
            <div style={{display : count === 'a' ? "block" : "none"}}>content01</div>
            <div style={{display : count === 'b' ? "block" : "none"}}>content02</div>
            <div style={{display : count === 'c' ? "block" : "none"}}>content03</div>
        </div>
    </div>
  )
}

export default Tabs