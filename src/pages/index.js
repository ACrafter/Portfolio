import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import SolarSystem from '../components/SolarSystem';
import Head from '../components/Head';

export default function App() {
  return (
    <div className='body'>
    <Layout>
      <Landing />
      <SolarSystem />
    </Layout>
    </div>
  )
}

export {Head}