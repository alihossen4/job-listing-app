import React, { useEffect, useState, useRef} from 'react'
import logo from "../assets/Logo.png"
import { FaBars, FaTimes} from 'react-icons/fa';
import { FaAlignJustify } from "react-icons/fa";
function Navbar() {
    const navRef = useRef();
    const onClickHandle = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
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
    <header className={`sticky top-0 z-50  ${isScroll? "w-full bg-[#f5f5e8] ":"" }`} >
        <div className="container sticky flex">
        <div className="logo cursor-pointer m-8">

            <img src={logo} alt="" />
         </div>
        <nav useRef={navRef} className='nav-menu'>
                <div className="flex justify-between">
                    
                    <ul className='flex p-2 mt-6 text-[20px] gap-4 cursor-pointer'>
                        <li>Find Jobs</li>
                        <li>Browse Copanies</li>
                    </ul>
                    
                    <div className="sign-up my-5 float-right absolute right-50 cursor-pointer">
                        <button className='btn login-btn'>Login</button>
                        <button className='btn '>Sign Up</button>
                    </div>
                    <button className='nav-btn nav-close-btn' onClick={onClickHandle}>
                        <FaTimes />
                    </button>
                </div>
                </nav>
                <button className='nav-btn cursor-pointer mr-[calc(28px)]' onClick={onClickHandle}>
                    <FaBars className=' text-3xl rounded-lg '/>
                </button>
            </div>
    </header>
  )
}

export default Navbar