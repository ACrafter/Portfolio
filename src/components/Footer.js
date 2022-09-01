import React from 'react'
import '../styles/Footer.css'
import fb from '../images/Footer/github.png'
import tw from '../images/Footer/twitter.png'
import gm from '../images/Footer/gmail.png'
import lk from '../images/Footer/linkedin.png'
import up from '../images/Footer/unnamed.png'
import { motion } from 'framer-motion'


export default function Footer() {
  return (
    <div className='footer'>
      <h1>Thanks For Visiting</h1>
      <p>Don't Hesitate To Contact</p>
          <motion.img src={fb}
            whileHover={{scale: 1.2, boxShadow: '0px 0px 6px gold'}}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img src={tw}
            whileHover={{scale: 1.2, boxShadow: '0px 0px 6px gold'}}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img src={gm}
            whileHover={{scale: 1.2}}
            whileTap={{ scale: 0.9 }}
            style={{borderRadius:0}}

          />
          <motion.img src={up}
            whileHover={{scale: 1.2, boxShadow: '0px 0px 6px gold'}}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img src={lk}
            whileHover={{scale: 1.2, boxShadow: '0px 0px 6px gold'}}
            whileTap={{ scale: 0.9 }}
          />
          <p style={{color: 'white', marginTop: '5rem'}}>Copyright © {new Date().getFullYear()}</p>
    </div>
  )
}
