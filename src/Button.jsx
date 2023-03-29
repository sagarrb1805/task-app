import React from 'react'

function Button({color, text, onClick}) {
  return (
    <div>
      <button onClick={onClick} style={{background:color}}>{text}</button>
    </div>
  )
}

export default Button
