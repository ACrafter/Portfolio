import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Card.css'
import Cards from './Cards'
import web from '../images/coding.png'
import game from '../images/game-development (2).png'
import app from '../images/python.png'

export default function Board() {

  const MotionCard = motion(Cards)

  const boardVariants = {
    hidden:{
      opacity: 0,
      scale: 0
    },
    visible:{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        when: 'beforeChildren'
      }
    }
  }
  
  const childVariants = {
    hidden: {
      x: '3000vw'
    },
    visible:{
      x: 0
    }
  }

  return (
    <motion.div className='project'
      variants={boardVariants}
      initial='hidden'
      whileInView='visible'
    >
      <h1>Projects</h1>
      <p>As I already mentioned I fell in love with development in general, that lead me to seek all 3 types of it.</p>
      <p>Web, Game & App Development</p>

      <MotionCard
        variants={childVariants}
        transition={{delay: 0.5, type: 'tween'}}

        title='Web Dev'
        img={web}
        paraOne = 'A seasoned full stack developer at your service sparking fully fledged websites into existance'
        paraTwo = 'Explore previous projects, from paid to personal and even practice project'
        link='/projects/web'
      />
      <MotionCard
        variants={childVariants}
        transition={{delay: 1, type: 'tween'}} 

        title='Game Dev'
        img={game}
        paraOne = 'A seasoned full stack developer at your service sparking fully fledged websites into existance'
        paraTwo = 'Explore previous projects, from paid to personal and even practice project'
        link='/projects/game'
      />
      <MotionCard
        variants={childVariants}
        transition={{delay: 1.5, type: 'tween'}}

        title='App Dev'
        img={app}
        paraOne = 'A seasoned full stack developer at your service sparking fully fledged websites into existance'
        paraTwo = 'Explore previous projects, from paid to personal and even practice project'
        link='/projects/app'
      />

    </motion.div>
  )
}
