import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Card.css'
import Cards from './Cards'
import web from '../images/coding.png'
import game from '../images/game-development (2).png'
import app from '../images/python.png'

export default function Board() {
  return (
    <div className='project'>
      <h1>Projects</h1>
      <p>As I already mentioned I fell in love with development in general, that lead me to seek all 3 types of it.</p>
      <p>Web, Game & App Development</p>
      <Cards 
        title='Web Dev'
        img={web}
        paraOne = 'A seasoned full stack developer at your service sparking fully fledged websites into existance'
        paraTwo = 'Explore previous projects, from paid to personal and even practice project'
      />
      <Cards 
        title='Game Dev'
        img={game}
        paraOne = 'A seasoned full stack developer at your service sparking fully fledged websites into existance'
        paraTwo = 'Explore previous projects, from paid to personal and even practice project'
      />
      <Cards 
        title='App Dev'
        img={app}
        paraOne = 'A seasoned full stack developer at your service sparking fully fledged websites into existance'
        paraTwo = 'Explore previous projects, from paid to personal and even practice project'
      />
    </div>
  )
}
