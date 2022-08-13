import React from 'react'
// import Star from './Star'
import '../styles/Sky.css'
import stars from '../Extras/starAssest.js'
import { v4 as uuidv4 } from 'uuid';
import SkyObj from './SkyObj';

// import comets from '../Extras/cometAssest'



export default function Sky() {

  return (
    <div className='sky'>
        {stars.map((obj) => {
            return(
              <SkyObj
                key = {uuidv4()}
                id = {Math.floor(Math.random()*10)} 
                x = {obj.x}
                y = {obj.y}
                time = {obj.time}
                scale = {obj.scale}
              />
            )
        })}

    </div>
  )
}

