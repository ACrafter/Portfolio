import React from 'react'
import web from '../images/Planets/Asset 1.png'
import { Button } from 'react-bootstrap'


export default function Cards(props) {
  return (
    <div className='card'>
        <img src={props.img} alt='missing'/>
        <h3>{props.title}</h3>
        <p>{props.paraOne}</p>
        <p>{props.paraTwo}</p>
        <Button>View</Button>
    </div>
  )
}
