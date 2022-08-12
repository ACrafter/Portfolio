import React from 'react'
import { motion } from 'framer-motion'
import '../styles/SkyObject.css'
import star1 from '../images/Stars/Asset 1.png'
import star2 from '../images/Stars/Asset 2.png'
import star3 from '../images/Stars/Asset 3.png'
import star4 from '../images/Stars/Asset 4.png'
import star5 from '../images/Stars/Asset 5.png'
import star6 from '../images/Stars/Asset 6.png'
import star7 from '../images/Stars/Asset 7.png'
import star8 from '../images/Stars/Asset 8.png'
import star9 from '../images/Stars/Asset 9.png'
import comet from '../images/Stars/Asset 10.png'


export default function Star(props) {
  
  const stars_img = [star1, star2, star3, star4, star5, star6, star7, star8, star9]

  return ( 
    <div className='obj'>
        <motion.img
            src={stars_img[Math.floor(Math.random()*stars_img.length)]} 
            initial={{x: props.x, y:props.y, scale: 0}}
            animate={{scale: [0, props.scale, props.scale, 0]}}
            transition={{duration: 2 + props.time, repeat:Infinity}}
        />
    </div>
  )
}
