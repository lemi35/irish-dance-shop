import React from 'react'

function Buttons({onClickHandler, value, title}) {
  return (
    <button 
      className='buttons'
      onClick={onClickHandler} 
      value={value} 
      title={title}>
      {title}
    </button>
  )
}
export default Buttons;