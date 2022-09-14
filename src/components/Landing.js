import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion'
import '../styles/Landing.css';


export default function Landing() {
  return (
    <motion.div className='heading'
      initial = {{y: -3000}}
      animate = {{y: 0}}
      transition = {{type: 'spring', delay: 0.1}}
    >
        <h2>Hi There! I am Ahmed Yasser, A Software Developer.</h2>
        <h3>Welcome to my Portfolio.</h3>
        <Button className='button' onClick={() => {window.scrollBy(0, 1900)}} variant="light">Projects</Button>
        <Button className='button' onClick={() => {window.scrollBy(0, 2850)}} variant="dark">Contact</Button>
        

    </motion.div>
  )
}
