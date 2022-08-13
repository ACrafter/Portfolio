import React from 'react'
import { motion } from "framer-motion"

export default function Comet(props) {
  return (
    <div>
        <motion.img 
            src={props.img}
            initial={{x: props.x, y:props.y}}
            animate={{x: props.x - 200, y:props.y + 200, scale: 0}}
            transition={{duration: 0.7 + props.time, repeat: Infinity}}
        />
    </div>
  )
}
