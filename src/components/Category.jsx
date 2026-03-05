import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

import bagicon from "../assets/icons/bag-icon.png"
import codeicon from "../assets/icons/code-icon.png"
import crossicon from "../assets/icons/cross-icon.png"
import graphicon from "../assets/icons/graph-icon.png"
import mediaicon from "../assets/icons/media-icon.png"
import mikeicon from "../assets/icons/mike-icon.png"
import monitoricon from "../assets/icons/monitor-icon.png"
import profileicon from "../assets/icons/profile-icon.png"
import Dashboard from './Dashboard';

import canva from "../assets/feature/canva.png"
import dropbox from "../assets/feature/dropbox.png"
import heart from "../assets/feature/heart.png"
import pitch from "../assets/feature/pitch.png"
import r from "../assets/feature/r.png"
import ring from "../assets/feature/ring.png"
import twitter from "../assets/feature/twitter.png"
import camera from "../assets/feature/camera.png"


const arr= [
    {id:1, name:"UI/UX Designer", logo:canva},
    {id:2, name:"Product Manager", logo:dropbox},
    {id:3, name:"DevOps Engineer",logo:heart},
    {id:4, name:"Front-End Developer",logo:pitch},
    {id:5, name:"Web Developer",logo:r},
    {id:6, name:"Software Engineer",logo:ring},
    {id:7, name:"Software Architect",logo:twitter},
    {id:8, name:"IT Consultant",logo:camera}
]
const Cart = ({src, title, desc, jobcount, className, onClick}) =>{
    return(
        <>
        <div className="Category">
            <div className={`category-cart  w-75 h-60 p-5 ${className}`} onClick={onClick} >
                
                    <img src={src} alt="icon"  />
                
                <h1 className='text-[25px] inline-block'>{title}</h1>
                
                <p><span>{jobcount}</span>{desc}</p>
            </div>
        </div>
        </>
    )
}

function Category() {
const[ jobs, setJobs] = useState([]);
const [titleJobs, setTitleJobs] = useState([]);

const [selectedTitle, setSelectedTitle] = useState("UI/UX Designer")

useEffect(()=>{
    const fetchJobs = async() =>{
    try {
        const response = await fetch("http://localhost:3000/jobs");
        const data = await response.json();
        setJobs(data);
    } catch (error) {
        throw new Error(error.mesage)
    }
}
 const fetchFilterData = async() =>{
        try {
            const response = await fetch('http://localhost:3000/filter');
            const data = await response.json();
            setTitleJobs(data);
            
        } catch (error) {
            throw new Error({error: error.mesage})
        }
    }
fetchJobs();
fetchFilterData();

}, [])

  return (
    <div className='container mx-auto'>
        <div className="heading my-6 mt-10 flex justify-between">
                
                <h1 className='text-[65px] font-[600]'>Explore By <span className='text-[#32a5f8]'>Category</span></h1>
                <button className='text-blue-500 text-2xl'>Show All Jobs <FaArrowRight className='inline'/></button>
            </div>
        {/* <h1 className='text-[45px] my-8 font-[700]'>Explore By <span className='text-[#32a5f8]'>Category</span> </h1> */}
        <div className="flex mb-8 mt-15 justify-between grid sm:grid-cols-1  gap-8 2xl:grid-cols-4">
            <Cart src={crossicon} title={"UI/UX Designer"} jobcount={`${jobs
            .filter((job)=> job.title ==="UI/UX Designer").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("UI/UX Designer")}/>

            <Cart src={graphicon} title={"Product Manager"} jobcount={`${jobs
            .filter((job)=> job.title ==="Product Manager").length }`}  desc={" jobs available"}  onClick={()=>setSelectedTitle("Product Manager")}/>

            <Cart src={mikeicon} title={"DevOps Engineer"} jobcount={`${jobs
            .filter((job)=> job.title ==="DevOps Engineer").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("DevOps Engineer")}/>

            <Cart src={mediaicon} title={"Front-End Developer"} jobcount={`${jobs
            .filter((job)=> job.title ==="Front-End Developer").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("Front-End Developer")}/>
        
            <Cart src={monitoricon} title={"Web Developer"} jobcount={`${jobs
            .filter((job)=> job.title ==="Web Developer").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("Web Developer")}/>
            
            <Cart src={codeicon} title={"Software Engineer"} jobcount={`${jobs
            .filter((job)=> job.title ==="Software Engineer").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("Software Engineer")}/>

            <Cart src={bagicon} title={"Software Architect"} jobcount={`${jobs
            .filter((job)=> job.title ==="Software Architect").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("Software Architect")}/>
            
            <Cart src={profileicon} title={"IT Consultant"} jobcount={`${jobs
            .filter((job)=> job.title ==="IT Consultant").length }`} desc={" jobs available"}  onClick={()=>setSelectedTitle("IT Consultant")}/>
            
            
        </div>
        <Dashboard />
            {/* <div className="heading my-15 flex justify-between text-xl ">
            
                        <h1>Featured <span className='text-[#32a5f8]'>Jobs</span></h1>
                        <button className='text-blue-500'>Show All Jobs <FaArrowRight className='inline'/></button>
            </div> */}
        <div className="grid grid-cols-4 gap-4">
        {
            (jobs )?(
            arr.map((list)=>(
            (list.name  === selectedTitle ) &&(
                titleJobs.filter((jobs)=> jobs.title === selectedTitle)
                .map(jobs=>{
                    return(
                        <>
                        <div className="feature-cart  w-78 h-60 border border-gray-200 overflow-hidden">
                            <div className="logo flex justify-between m-3">
                                <img src={list.logo} alt="logos" className='rounded-full'/>
                                <button className='border-2 border-blue-500 p-1 text-purple-500'>Full Time</button>
                            </div>
                            <div className="feature-h1 px-10 mt-5">
                                <h1 className='text-2xl'>{jobs.title}</h1>
                                <p>{jobs.location}</p>
                                <p>{jobs.salary}</p>
                            </div>
                            <div className="desc p-6 mb-5">
                                {jobs.description}
                            </div>
                    </div>
                </>
                    )}
                )  
                
            )
           ))
        ):(
           <h1 className='text-3xl'>Backend required to get data</h1>
        )     
}
        </div>
    </div>
  )
}

export default Category