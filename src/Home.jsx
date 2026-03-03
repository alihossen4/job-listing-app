import React from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header"
import Brand from "./components/brand"
import Category from "./components/Category"
import Dashboard from "./components/Dashboard"
function Home() {
  return (
    <>
    
        <Navbar />
    <div className="container">
        <Header />
        <Brand />
        <Category />
        <Dashboard />
    </div>
    </>
  )
}

export default Home