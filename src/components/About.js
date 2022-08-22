import React from 'react'
import '../styles/About.css';
import me from '../images/myself.png'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='about'>
        <h1>About Me</h1>
        <p>If you're curious of course</p>
        <div className='text'>
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
          <motion.img src={me} alt=''
            initial={{x:'75vw', y:'-15vw'}}
          />
        </div>
    </div>
  )
}
