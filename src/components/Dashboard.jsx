import React from 'react'
import dashboard from "../assets/dashboard.png"
function Dashboard() {
  return (
    <div className='container '>
        <div className="dashboard bg-[#4640de] mt-10 flex justify-between">
            <div className="left w-100 mt-[10%] ml-[8%]">
                <h1 className='text-[70px] text-[#fff] tracking-tighter font-[600]'>Start Posting jobs today</h1>
                <p className='text-[#fff]'>Start posting jobs for only 10$</p>
                <button className='btn bg-[#f0f0f0] text-[#4640de] p-6'>Sign Up for Free</button>
            </div>
            <div className="right mr-18 mt-15">
                <img src ={dashboard} alt="dashboard" />
            </div>
        </div>
    </div>
  )
}

export default Dashboard