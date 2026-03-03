import React from 'react'
import canva from "../assets/feature/canva.png"
import dropbox from "../assets/feature/dropbox.png"
import heart from "../assets/feature/heart.png"
import pitch from "../assets/feature/pitch.png"
import r from "../assets/feature/r.png"
import ring from "../assets/feature/ring.png"
import twitter from "../assets/feature/twitter.png"
import camera from "../assets/feature/camera.png"
const Cart =({logo,title,children, heading}) =>{
    return(
        <>
        <div className="feature-cart w-78 h-60 border border-gray-200">
            <div className="logo flex justify-between m-3">
                <img src={logo} alt="" />
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
        <div className=" grid grid-cols-4 gap-8 mt-6 mx-auto justify-between ml-8">
            <Cart logo={r}>
                
            </Cart>
            <Cart logo={dropbox}>

            </Cart>
            <Cart logo={pitch}>

            </Cart>
            <Cart logo={camera}>

            </Cart>
            <Cart logo={ring}>

            </Cart>
            <Cart logo={canva}>

            </Cart>
            <Cart logo={heart}
            >

            </Cart>
            <Cart logo={twitter}>

            </Cart>
            
        </div>
    </div>
  )
}

export default FeatureJobs