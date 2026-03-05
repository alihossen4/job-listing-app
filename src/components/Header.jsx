import React from 'react'
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5"; 
import header from "../assets/header.png"
function Header() {
  return (
        <div className="container ">
            <div className="flex">
                <div className="left">
                    <div className="heading w-[533px] h-[237px] my-15 leading-tight">
                        <h1 className='ml-5 text-[70px] font-[600]'>Discover<br/> more than <br/> <span className='text-[#32a5f8]'>5000+ Jobs</span> </h1>
                    </div>
                    <p className='w-135 text-[20px] my-7 mx-3 text-[#515B6F]'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    <div className="search-btn relative h-15 py-2 shadow-lg bg-[#fcfbf7] flex">
                        <input type="text" className='p-3 w-[30%] pt-4 ml-15 border-b border-gray-400 outline-none focus:border-blue-500' placeholder='Job title or Keyword'/>
                        <div className="search absolute top-5 my-auto ml-5 ">
                            <IoSearch  />
                        </div>
                       
                            <div className="loc location_container mt-4 text-[20px] ml-5 mr-2">
                                <FaMapMarkerAlt className="location-icon"/>
                                <select name="location" id="" className='w-[25%] border-b border-gray-400 mr-10'>
                                    <option value="italy">Florence, Italy</option>
                                    <option value="canada">Toronto, Canada</option>
                                </select>
                            </div>
                
                        <button className='btn float-right py-3 text-center px-2 w-full'>Search My Job</button>
                    </div>
                </div>
                <div className="right mt-2 ">
                    <div className="header-img ">
                        <img src={header} alt=""  />
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Header