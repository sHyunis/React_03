import React from 'react'

const Contents = ({index, title, setHeight, height, content}) => {
    return (
        <div>
            <div onClick={()=>setHeight(index)}>{title}</div>
            <div className={index === height ? 'height active' : 'height' }>{content}</div>
        </div>
    )
}

export default Contents