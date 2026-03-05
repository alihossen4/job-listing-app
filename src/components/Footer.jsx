import React from 'react'
import logo from "../assets/Logo.png"
function Footer() {
  return (
    <footer className='bg-[#202430] text-[#D6DDEB] mt-8'>
        <div className='container'>
        <div className="upper py-10">
            <div className="flex">
                <div className="first w-[35%]">
                    <div className="footer-img text-white">
                        
                        <img src={logo} alt="logo" className='text-white footer-icon'/>
                    </div>
                <p>
                    Great platform for the job seeker that passionate about startups. Find your dream job easier.
                </p>

                </div>
                <div className="second w-[15%]">
                    <ul className='flex flex-col gap-1'>
                        <h1 className='text-white'>About</h1>
                        <li>Companies</li>
                        <li>Pricing</li>
                        <li>Terms</li>
                        <li>Advice</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="third w-[15%]">

                    <ul className='flex flex-col gap-1'>
                        <h1>Resources</h1>
                        <li>Help Docs</li>
                        <li>Guide</li>
                        <li>Updates</li>
                        <li>Contact Us</li>

                    </ul>

                </div>
                <div className="fourth w-[25%]">
                    <h1>Get Job Notification</h1>
                    <p>The latest job news, articles, sent to your inbox weekly.</p>
                    <div className="footer-button flex">
                        <div className="footer_input">
                            <input type="text" />
                        </div>
                        <button className='btn'>Subcribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower">

        </div>
        </div>
    </footer>
  )
}

export default Footer