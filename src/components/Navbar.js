import Nav from 'react-bootstrap/Nav'
import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <div>
    <Nav variant="tabs" className='justify-content-center' defaultActiveKey="/home">
      <Nav.Item>
       <Link to='/'><Nav.Link href='/'>Home</Nav.Link></Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/mentions'><Nav.Link href='/mentions'>Mentions</Nav.Link></Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Blog
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

