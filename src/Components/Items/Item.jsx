import React from 'react'
import "./Item.css"

const Item = ({name,svg}) => {
    console.log(name,svg);
  return (
    <div className='items'>
      {svg}
        <p>{name}</p>
    </div>
  )
}

export default Item



