import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../components/Landing';
// import Layout from '../components/Layout';
import Navbar from '../components/Navbar'
import Sky from '../components/Sky';
import Footer from '../components/Footer'

export default function App() {
  return (
    <div>
    <Navbar />
    <Sky />
    <Landing />
    <Footer />
    </div>
  )
}
