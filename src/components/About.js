import React from 'react'
import '../styles/About.css';
import me from '../images/myself.png'
import { motion } from 'framer-motion';

export default function About() {

  var aboutVariants = {
    init:{
      opacity: 0
    },
    ani:{
      opacity: 1,
      transition:{
        delay:1,
        when:'beforeChildren'
      }
    }
  }

  var aboutChildrenVariants = {
    init:{x:'75vw', y:'-15vw', opacity:0},
    ani:{
      opacity: 1,
      transition:{
        delay:1.5
      }
    }
  }


  return (
    <motion.div className='about'
      whileHover={{borderColor:'#C65180'}}
    >
        <h1>About Me</h1>
        <p>If you're curious of course</p>
        <motion.div className='text'
          variants={aboutVariants}
          initial='init'
          whileInView='ani'
        >
          <p>I am a {(new Date().getFullYear()) - 2002} years old developer located in the Middle East Region.
            Cairo, Egypt to be more specific. 
          </p>
          <p>Studying computer engineering, My passion & love for programming started back when I was 17 years old, 
          namely when I realised that I could create many things basically out of nothing.</p>

          <p>My Other hobbies include: </p>
          <ul>
            <li>Swimming</li>
            <li>Diving</li>
            <li>Hiking</li>
          </ul>
          <motion.img src={me} alt='me'
            variants={aboutChildrenVariants}
          />
        </motion.div>
    </motion.div>
  )
}
