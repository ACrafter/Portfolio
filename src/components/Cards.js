import { Link } from 'gatsby'
import React, {forwardRef} from 'react'
import { Button } from 'react-bootstrap'

const Cards = forwardRef((props, ref)  => {
  return (
    <div className='card'
      ref={ref}
    >
        <img src={props.img} alt='missing'/>
        <h3>{props.title}</h3>
        <p>{props.paraOne}</p>
        <p>{props.paraTwo}</p>
        <Link to={props.link}><Button variant="dark" style={{'marginTop': 5}}>View</Button></Link>
    </div>
  )
})

export default Cards