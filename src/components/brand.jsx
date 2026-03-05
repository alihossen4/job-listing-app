import React from 'react'
import amdlogo from "../assets/brand/amd-logo.png"
import talkit from "../assets/brand/talkit.png"
import tesla from "../assets/brand/tesla.png"
import vodafone from "../assets/brand/vodafone.png"
import intel from "../assets/brand/intel.png"
function brand() {
  return (
    <div className='container my-15 brand_container'>
        <div className="flex gap-44 justify-between brand my-30">
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