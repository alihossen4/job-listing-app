import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
// import { JobInformation } from '../../src/index.js';
import bagicon from "../assets/icons/bag-icon.png"
import codeicon from "../assets/icons/code-icon.png"
import crossicon from "../assets/icons/cross-icon.png"
import graphicon from "../assets/icons/graph-icon.png"
import mediaicon from "../assets/icons/media-icon.png"
import mikeicon from "../assets/icons/mike-icon.png"
import monitoricon from "../assets/icons/monitor-icon.png"
import profileicon from "../assets/icons/profile-icon.png"
const Cart = ({src, title, desc, jobcount}) =>{
    return(
        <>
        <div className="cart  w-75 h-60 p-30">
            <img src={src} alt="icon" />

            <h1 className='text-[25px]'>{title}</h1>
            
            <p><span>{jobcount}</span>{desc}</p>
        </div>
        </>
    )
}
function Category() {
const[ jobs, setJobs] = useState([]);

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
fetchJobs();
}, [])
  return (
    <div className='container mx-auto'>
        <div className="heading my-6 mt-10 flex justify-between text-xl ">
                
                            <h1>Explore By <span className='text-[#32a5f8]'>Category</span></h1>
                            <button className='text-blue-500'>Show All Jobs <FaArrowRight className='inline'/></button>
            </div>
        {/* <h1 className='text-[45px] my-8 font-[700]'>Explore By <span className='text-[#32a5f8]'>Category</span> </h1> */}
        <div className="flex mb-8 mt-15 justify-between grid grid-cols-4 gap-8">
            <Cart src={crossicon} title={"Ui Design"} jobcount={`${jobs
            .filter((job)=> job.title ==="UI/UX Designer").length }`} desc={" jobs available"}/>
            <Cart src={graphicon} title={"Sales"}  desc={" 756 jobs available"}/>
            <Cart src={mikeicon} title={"Marketing"} desc={" 140 jobs available"}/>
            <Cart src={mediaicon} title={"Finance"} desc={" 325 jobs available"}/>
        
            <Cart src={monitoricon} title={"Tecknology"} desc={" 235 jobs available"}/>
            <Cart src={codeicon} title={"Engineering"} desc={" 756 jobs available"}/>
            <Cart src={bagicon} title={"Business"} desc={" 140 jobs available"}/>
            <Cart src={profileicon} title={"Human Resourse"} desc={" 325 jobs available"}/>
            <p>
                {jobs.map((job)=>{
                    return(
                        
                            <li key={job.id}>
                                {job.title}
                            </li>
                    )
                })}
            </p>
        </div>
    </div>
  )
}

export default Category