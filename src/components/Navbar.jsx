import React, { useEffect, useState } from 'react'
import logo from "../assets/Logo.png"
import { FaBars } from 'react-icons/fa';
function Navbar() {
    const [isScroll, setScroll] = useState(false);
    const handleScroll= ()=>{
        const scroll = window.scrollY;
        setScroll(scroll>50);
    }
    useEffect(()=>{
        // handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
    <header className={`sticky top-0 z-50 ${isScroll? "w-full bg-[#f5f5e8] ":""}`}>
        <nav>
            <div className="container sticky ">
                <div className="flex">
                    <div className="menu flex my-5 gap-8 relative ">
                        <div className="logo cursor-pointer">

                        <img src={logo} alt="" />
                        </div>
                    <ul className='flex p-2 -mt-1 text-[20px] gap-4 cursor-pointer'>
                        <li>Find Jobs</li>
                        <li>Browse Copanies</li>
                    </ul>
                    </div>
                    <div className="sign-up my-5 float-right absolute right-50 cursor-pointer">
                        <button className='btn login-btn'>Login</button>
                        <button className='btn '>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar