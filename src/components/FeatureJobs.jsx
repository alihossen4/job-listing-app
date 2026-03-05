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
const Cart =({logo,title, heading}) =>{
    return(
        <>
        <div className="feature feature-cart w-78 h-60 border border-gray-200 p-2">
            <div className="logo flex justify-between m-3">
                <img src={logo} alt="logos" className='rounded-full'/>
                <button className='border-2 border-blue-500 p-1 text-purple-500'>Full Time</button>
            </div>
            <div className="feature-h1 p-4">
                <h1>{title}</h1>
                <p>{heading}</p>
            </div>
            <div className="desc">

            
            </div>
        </div>
        </>
    )
}
function FeatureJobs() {
  return (
    <div className='container'>

            <div className="heading flex justify-between my-10">

            <h1 className='text-[65px] font-[600]'>Featured <span className='text-[#32a5f8]'>Jobs</span></h1>
                <button className='text-blue-500 text-2xl'>Show All Jobs <FaArrowRight className='inline'/></button>
            </div>
        <div className=" grid grid-cols-4 gap-8 mt-6 mx-auto justify-between feature_cart_container">
            <Cart logo={r} title={"Email Marketing"} heading={"Revoult . Madrid, Spain"} />

            <Cart logo={dropbox}  title={"Brand Desinger"} heading={"Dropbox . Sanfransisco, USA"}/>

            <Cart logo={pitch} title={"Email Marketinger"} heading={"Pitch . Berlin, Germany"} />
        
            <Cart logo={camera} title={"Visual Designer"} heading={"Blinkist, Granada, Spain"} />
              
            <Cart logo={ring} title={"Product Designer"} heading={"Revoult . Madrid, Spain"} />
         
            <Cart logo={heart} title={"Lead Designer"} heading={"Dropbox . Sanfransisco, USA"}
            />
         
            <Cart logo={twitter} title={"Brand Strategist"} heading={"Pitch . Berlin, Germany"} />
        
            <Cart logo={canva} title={"Data Analyst"}heading={"Blinkist, Granada, Spain"} />
             
            
        </div>
    </div>
  )
}

export default FeatureJobs