import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../styles/Landing.css';




export default function Landing() {
  const [appear, setAppear] = useState(true)


  return (
    <div className='heading'>
        <h2>Hi There! I am Ahmed Yasser, A Full Stack Web Developer.</h2>
        <h3>Welcome to my Portfolio.</h3>
        <Button onClick={() => {window.scrollBy(0, 1500)}} variant="light">Explore</Button>
        <Button variant="dark">Contact</Button>
        

    </div>
  )
}
