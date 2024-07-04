import React, { useState } from 'react'
import TabBtn from './TabBtn';
import TabContent from './TabContent';

const Tabs = () => {
    const [count, setCount] = useState('a'); // 화면을 바꾸고 싶을때 화면의 기본값을 우리가 정해놓는것
    // a, b, c

  return (
    <div className='Tabs_container'>
        <TabBtn     setCount={setCount} value={'hello'} />
        <TabContent count={count} />
    </div>
  )
}

export default Tabs