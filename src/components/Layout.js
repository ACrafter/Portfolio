import React from 'react'
import Sky from './Sky'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({childern}) {

  return (
    <div>
      <Navbar />
      <div>
        {childern}
      </div>
      <Sky />
      <Footer />
    </div>

  )
}
