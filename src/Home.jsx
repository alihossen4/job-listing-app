import React from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header"
import Brand from "./components/brand"
import Category from "./components/Category"
import Dashboard from "./components/Dashboard"
import FeatureJobs from './components/FeatureJobs'
import LatestJobs from './components/LatestJobs'
function Home() {
  return (
    <>
    
        <Navbar />
    <div className="container">
        <Header />
        <Brand />
        <Category />
        <Dashboard />
        <FeatureJobs />
        <LatestJobs />
    </div>
    </>
  )
}

export default Home