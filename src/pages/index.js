import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import SolarSystem from '../components/SolarSystem';
import Head from '../components/Head';
import Cards from '../components/Board';
import About from '../components/About';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className='body'>
    <Layout>
      <Landing />
      <SolarSystem />
      <About />
      <Cards />
      <Footer />
    </Layout>
    </div>
  )
}

export {Head}