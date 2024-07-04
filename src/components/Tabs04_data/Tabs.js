import React, { useState } from 'react';
import datas from './data';
import Title from './Title';
import Content from './Content';

const Tabs = () => {
    const [count, setCount] = useState(0); 
    console.log(datas);
  return (
    <div className='Tabs_container'>
      {
        datas.tabTitle.map((item, index)=><Title item={item} key={item} index={index} setCount={setCount} />)
      }
      {
        datas.tabContent.map((item, index)=><Content item={item} key={item} index={index} count={count} />)
      }
    </div>
  )
}

export default Tabs