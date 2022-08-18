import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <p style={{color: 'white'}}>Copyright © {new Date().getFullYear()}</p>
    </footer>
  )
}
