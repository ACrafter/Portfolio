import sun from '../images/Planets/Asset 7.png'
import '../styles/SolarSystem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import { motion } from 'framer-motion'

export default function SolarSystem() {
  return (
    <div className='solar md'>
        <motion.img src={sun} 
            animate={{rotate: [0, 360]}}
            initial={{x: '47vw'}}
            transition={{repeat:Infinity,}}
        />
    </div>
  )
}
