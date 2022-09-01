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
            var objY = obj.y
            return(
              <SkyObj
                key = {uuidv4()}
                id = {Math.floor(Math.random()*15)} 
                x = {`${obj.x}vw`}
                y = {`${obj.y}vw`}
                time = {obj.time}
                scale = {obj.scale}
              />
        )
        })}

    </div>
  )
}

