import React from 'react'
import amdlogo from "../assets/brand/amd-logo.png"
import talkit from "../assets/brand/talkit.png"
import tesla from "../assets/brand/tesla.png"
import vodafone from "../assets/brand/vodafone.png"
import intel from "../assets/brand/intel.png"
function brand() {
  return (
    <div className='container my-10 '>
        <div className="flex gap-44 brand mt-25 ml-20">
            <div className="img">
                <img src={vodafone} alt="" />
            </div>
            <div className="img">
                <img src={intel} alt="" />
            </div>
            <div className="img">
                <img src={tesla} alt="" />
            </div>
            <div className="img">
                <img src={amdlogo} alt="" />
            </div>
            <div className="img">
                <img src={talkit} alt="" />
            </div>
        </div>
    </div>
  )
}

export default brand