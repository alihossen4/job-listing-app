import React from 'react'
import dashboard from "../assets/dashboard.png"
function Dashboard() {
  return (
    <div className='container '>
        <div className="dashboard bg-[#4640de] mt-10 flex justify-between ">
            <div className="left w-100 mt-[6%] ml-[8%] my-10">
                <h1 className='text-[70px] text-[#fff] tracking-tighter font-[600] leading-tight mb-4'>Start Posting jobs today</h1>
                <p className='text-[#fff] my-2 text-xl'>Start posting jobs for only 10$</p>
                <button className='btn dashboard-btn bg-[#f0f0f0] text-[#4640de] p-6'>Sign Up for Free</button>
            </div>
            <div className="right mr-18 mt-15 mb-5">
                <img src ={dashboard} alt="dashboard"/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard