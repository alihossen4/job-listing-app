import React from 'react'
import logo from "../assets/Logo.png"
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <footer className='bg-[#202430] text-[#D6DDEB] mt-8'>
        <div className='container'>
        
            <div className="flex upper justify-between py-5 pt-8">
                <div className="first w-[35%]">
                    <div className="footer-img text-whit my-4">

                        <img src={logo} alt="logo" className='text-white footer-icon'/>
                    </div>
                    <p className="footer-p">
                        Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </p>

                </div>
                <div className='second-div w-[30%] flex justify-around'>
                    <div className="second w-[15%]">
                        <ul className='flex flex-col gap-1'>
                            <h1 className='text-white font-medium'>About</h1>
                            <li>Companies</li>
                            <li>Pricing</li>
                            <li>Terms</li>
                            <li>Advice</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="third w-[15%]">
                        <ul className='flex flex-col gap-1'>
                            <h1 className='text-white font-medium'>Resources</h1>
                            <li>Help Docs</li>
                            <li>Guide</li>
                            <li>Updates</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                
                </div>
                <div className="fourth w-[25%]">
                    <h1 className='text-white font-medium text-xl'>Get Job Notification</h1>
                    <p className="w-[70%] my-3">The latest job news, articles, sent to your inbox weekly.</p>
                    <div className="footer-button flex">
                        <div className="footer_input ">
                            <input type="text" className="bg-[#f0f0f0] w-50 px-3 p-3 focus:outline-none text-black" placeholder='Email Address'/>
                        </div>
                        <button className='btn'>Subcribe</button>
                    </div>
                </div>
           
        </div>
        <hr className='w-full my-4 text-gray-500'/>
            <div className="lower pb-5 px-3 flex justify-between">
                <div className="lowr-left">
                    <p className='text-gray-500'>2021 @ QuickHire. All rights reserved.</p>
                </div>
                <div className="lower-right">
                    <div className='footer_icon flex gap-5'>
                        <BsFacebook />
                        <FaInstagramSquare />
                        <FaBasketballBall />
                        <TbBrandTwitter />
                        < BsLinkedin/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer