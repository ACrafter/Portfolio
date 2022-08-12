import Nav from 'react-bootstrap/Nav'

import React from 'react'

export default function Navbar() {
  return (
    <div>
    <Nav variant="tabs" className='justify-content-center' defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

