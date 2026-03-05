import React from 'react'
import N from "../assets/latest/N.png"
import packer from "../assets/latest/packer.png"
import xmlid from "../assets/latest/XMLID.png"

import dropbox from "../assets/feature/dropbox.png"
import { FaArrowRight } from 'react-icons/fa';
const LatestCart = ({logo,heading, title, location}) =>{
    return(
        <>
            <div className="Latest ">
                <div className="cart-container bg-[#f0f0f0] h-35 p-3 pt-3 px-8 pb-5">

                <div className="flex gap-4 my-2">
                    <div className="feature-cart-img">
                        <img src={logo} alt="" className='mt-1'/>
                    </div>
                    <div className="right-feature ">
                        <h1 className='text-[25px] font-[500]'>{heading}</h1>
                        <div className='flex gap-6 location-title'>
                            <p>{title}</p>
                            <li className='list-circle'>{location}</li>
                            
                        </div>
                    </div>
                </div>
                <div className="btn-tag ml-20">
                    <div className="flex">
                        <button className='bg-green-100 text-green-500 border-none rounded-full py-1 px-2'>Full Time</button>
                        <button className='bg-amber-50 text-amber-400 border rounded-full border-amber-400 py-1 px-2'>Marketing</button>
                        <button className='border rounded-full border-indigo-400 text-indigo-600 py-1 px-2'>Design</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
function LatestJobs() {
  return (
    <div className='container'>
        <div className="heading my-6 mt-10 flex justify-between  ">
        
                    <h1 className='text-[65px] font-[600] '>Latest <span className='text-[#32a5f8]'>Jobs</span></h1>
                    <button className='text-blue-500 text-2xl'>Show All Jobs <FaArrowRight className='inline'/></button>
            </div>
        <div className="grid grid-cols-2 gap-5 mt-10 latest_container">
            <LatestCart logo={N} heading={"Social Media Assistan"} title={"Nomad"} location="Paris, France"/>
            <LatestCart logo={dropbox} heading={"Brand Designer"} title={"Dropbox"} location={"San Fransisco, USA"}/>
            <LatestCart logo={dropbox} heading={"Interactive Developer"} title={"Terraform"} location={"Humberg, Germany"}/>
            <LatestCart logo={dropbox} heading={"HR Manager"} title={"Packer"} location={"Lucern, Switherland"} />
            <LatestCart logo={xmlid} heading={"Social Media Assistan"} title={"Netlify"} location={"Paris, France"}/>
            <LatestCart logo={N} heading={"Brand Designe"} title={"Maze"} location={"San Fransisco, USA"}/>
            <LatestCart logo={packer} heading={"Interactive Developer"} title={"Udacity"} location={"Humberg, Germany"}/>
            <LatestCart logo={N} heading={"HR Manager"} title={"Webflow"} location={"Lucern, Switherland"}/>
        </div>
    </div>
  )
}

export default LatestJobs