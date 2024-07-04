import React, { useState } from 'react'
import data from './data.js'
import './Accordion.css'
import Contents from './Contents.js'

const Accordion = () => {
    const [height, setHeight] = useState(0);
    // 0, 1, 2, 3, 4, 5 ...

  return (
    <div>
        {
            data.title.map((title, index)=>(
              <Contents index={index} 
                        title={title} 
                        setHeight={setHeight} 
                        height={height} 
                        content={data.content[index]} 
              />
              
          ))
        }
    </div>
  )
}

export default Accordion