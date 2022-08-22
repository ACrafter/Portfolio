import '../styles/SolarSystem.css';
import React from 'react'
import { motion } from 'framer-motion'
import Planets from '../images/Planets/planets'

export default function SolarSystem() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <motion.div className='solar md'
      // animate={{scale: 0.8}}
    >
        <motion.img src={Planets[0]} 
            animate={{rotate: [0, 360]}}
            initial={{x: '47vw'}}
            transition={{repeat:Infinity, ease:'linear', duration: 6}}
        />

        
        <motion.img className='mer' src={Planets[1]} />
        <motion.img className='ven' src={Planets[2]} />
        <motion.img className='ear' src={Planets[3]} />
        <motion.img className='mar' src={Planets[4]} />
        <motion.img className='jup' src={Planets[5]} />
        <motion.img className='sat' src={Planets[6]} />
        <motion.img className='ura' src={Planets[7]} />
    </motion.div>
  )
}

