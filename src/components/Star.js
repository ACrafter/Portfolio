import React from 'react'
import { motion } from 'framer-motion'



export default function Star(props) {
  
  return ( 
    <div>
        <motion.img
            src={props.img} 
            initial={{x: props.x, y:props.y, scale: 0}}
            animate={{scale: [0, props.scale, props.scale, 0]}}
            transition={{duration: 2 + props.time, repeat:Infinity}}
        />
    </div>
  )
}
