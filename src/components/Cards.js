import React from 'react'
import web from '../images/Planets/Asset 1.png'
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion'


export default function Cards(props) {
  return (
    <motion.div className='card'>
        <img src={props.img} alt='missing'/>
        <h3>{props.title}</h3>
        <p>{props.paraOne}</p>
        <p>{props.paraTwo}</p>
        <Button>View</Button>
    </motion.div>
  )
}
