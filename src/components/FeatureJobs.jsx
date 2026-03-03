import React from 'react'
import canva from "../assets/feature/canva.png"
import dropbox from "../assets/feature/dropbox.png"
import heart from "../assets/feature/heart.png"
import pitch from "../assets/feature/pitch.png"
import r from "../assets/feature/r.png"
import ring from "../assets/feature/ring.png"
import twitter from "../assets/feature/twitter.png"
import camera from "../assets/feature/camera.png"
import { FaArrowRight } from 'react-icons/fa';
const Cart =({logo,title,children, heading}) =>{
    return(
        <>
        <div className="feature-cart w-78 h-60 border border-gray-200">
            <div className="logo flex justify-between m-3">
                <img src={logo} alt="" className='rounded-full'/>
                <button className='border-2 border-blue-500 p-1 text-purple-500'>Full Time</button>
            </div>
            <div className="feature-h1">
                <h1>{title}</h1>
                <p>{heading}</p>
            </div>
            <div className="desc">

            {children}
            </div>
        </div>
        </>
    )
}
function FeatureJobs() {
  return (
    <div className='container'>

            <div className="heading my-6 mt-10 flex justify-between text-xl ">

            <h1>Featured <span className='text-[#32a5f8]'>Jobs</span></h1>
                <button className='text-blue-500'>Show All Jobs <FaArrowRight className='inline'/></button>
            </div>
        <div className=" grid grid-cols-4 gap-8 mt-6 mx-auto justify-between ">
            <Cart logo={r} title={"Email Marketing"} heading={"Revoult . Madrid, Spain"}>
                
            </Cart>
            <Cart logo={dropbox}  title={"Brand Desinger"} heading={"Dropbox . Sanfransisco, USA"}>

            </Cart>
            <Cart logo={pitch} title={"Email Marketinger"} heading={"Pitch . Berlin, Germany"}>

            </Cart>
            <Cart logo={camera} title={"Visual Designer"} heading={"Blinkist, Granada, Spain"}>

            </Cart>
            <Cart logo={ring} title={"Product Designer"} heading={"Revoult . Madrid, Spain"}>

            </Cart>

            <Cart logo={heart} title={"Lead Designer"} heading={"Dropbox . Sanfransisco, USA"}
            >

            </Cart>
            <Cart logo={twitter} title={"Brand Strategist"} heading={"Pitch . Berlin, Germany"}>

            </Cart>
            <Cart logo={canva} title={"Data Analyst"}heading={"Blinkist, Granada, Spain"}>
            
            </Cart>
            
        </div>
    </div>
  )
}

export default FeatureJobs