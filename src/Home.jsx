import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header"
import Brand from "./components/brand"
import Category from "./components/Category"
import Dashboard from "./components/Dashboard"
import FeatureJobs from './components/FeatureJobs'
import LatestJobs from './components/LatestJobs'



function Home() {
//   const [jobs, setJobs] = useState([]);
//   useEffect(()=>{

//     const getJobData = async()=>{
//     try {
//       const response= await fetch("http://localhost:3000/jobs");
//       const data = await response.json();
//       setJobs(data);
//     } catch (error) {
//       throw new Error(error.message)
//     }
// }
//   getJobData();
//   },[])
  return (
    <>
    
        <Navbar />
    <div className="container">
        <Header />
        <Brand />
        <Category />
        {/* <FeatureJobs /> */}
        <LatestJobs />
    </div>
   
    </>
  )
}

export default Home