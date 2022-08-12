import React from 'react'
import Star from './Star'
import '../styles/Sky.css'
import stars from '../Extras/stars'

export default function Sky() {

  return (
    <div className='sky'>
        {stars.map((star) => {
          return (
            <Star 
              x={star.x}
              y={star.y}
              scale={star.scale}
              time={star.time}
            />
          )
        })}
    </div>
  )
}

