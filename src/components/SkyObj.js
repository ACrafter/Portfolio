import React from 'react'
import { motion } from "framer-motion"
import { stars_img } from '../Extras/starAssest'
import comet from '../images/Stars/Asset 10.png'

export default function SkyObj(props) {
  return (
    <div>
        {props.id < 8? 
         ( 
        <div>
            <motion.img
                src={stars_img[Math.floor(Math.random()*stars_img.length)]} 
                initial={{x: props.x, y:props.y, scale: 0}}
                animate={{scale: [0, props.scale, props.scale, 0]}}
                transition={{duration: 2 + props.time, repeat:Infinity}}
            />
        </div>
        ):
        <motion.img 
            src={comet}
            initial={{x: props.x, y:props.y}}
            animate={{x: props.x - 200, y:props.y + 200, scale: 0}}
            transition={{duration: 0.7 + props.time, repeat: Infinity}}
        />
    }
</div>
)}

