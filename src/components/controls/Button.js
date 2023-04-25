import React from 'react'
import './button.css'

function Button({ play, isPlaying }) {
  return (
    <div className='btn-container'>
      <div>
        <button onClick={play}>{isPlaying ? 'PAUSE' : 'PLAY'}</button>
      </div>
    </div>
  )
}
export default Button
