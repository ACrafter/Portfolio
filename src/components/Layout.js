import Sky from "./Sky";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../styles/global.css'

import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
        <Sky />
        {children}
    </div>
  )
}
