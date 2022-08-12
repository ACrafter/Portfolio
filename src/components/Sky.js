import React from 'react'
import Star from './Star'
import '../styles/Sky.css'
import stars from '../Extras/stars'
import { v4 as uuidv4 } from 'uuid';
import Comet from './Comet';

export default function Sky() {

  // var el = Math.floor(Math.random()*10);
  // el > 8 
  //   ? 
  //   <div>
  //     <motion.img 
  //           src={comet}
  //           initial={{x: props.x, y:props.y}}
  //           animate={{x: props.x - 200, y:props.y + 200, scale: 0}}
  //           transition={{duration: 1.5, repeat: Infinity}}
  //       />
  //   </div> 

  return (
    <div className='sky'>
        {stars.map((star) => {
          var el = Math.floor(Math.random()*10)
          return (
            el < 8 ?
            <Star 
              key={uuidv4()}
              x={star.x}
              y={star.y}
              scale={star.scale}
              time={star.time}
            />
            :
            <Comet 
              key={uuidv4()}
              x={star.x}
              y={star.y}
            />
          )
        })}
    </div>
  )
}

