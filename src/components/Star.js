import React from 'react'
import { motion } from 'framer-motion'
import '../styles/SkyObject.css'



export default function Star(props) {
  
  return ( 
    <div className='obj'>
        <motion.img
            src={props.img} 
            initial={{x: props.x, y:props.y, scale: 0}}
            animate={{scale: [0, props.scale, props.scale, 0]}}
            transition={{duration: 2 + props.time, repeat:Infinity}}
        />
    </div>
  )
}
