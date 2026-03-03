import React from 'react'
const Cart = ({title, desc}) =>{
    return(
        <>
        <div className="cart  w-75 h-60 p-30">
            <img src="" alt="icon" />

            <h1 className='text-[25px]'>{title}</h1>
            
            <p>{desc}</p>
        </div>
        </>
    )
}
function Category() {
  return (
    <div className='container mx-auto'>
        <h1 className='text-[45px] my-8 font-[700]'>Explore By <span className='text-[#32a5f8]'>Category</span> </h1>
        <div className="flex mb-8 mt-15 justify-between grid grid-cols-4 gap-8">
            <Cart title={"Design"} desc={" 235 jobs available"}/>
            <Cart title={"Sales"} desc={" 756 jobs available"}/>
            <Cart title={"Marketing"} desc={" 140 jobs available"}/>
            <Cart title={"Finance"} desc={" 325 jobs available"}/>
        
            <Cart title={"Tecknology"} desc={" 235 jobs available"}/>
            <Cart title={"Engineering"} desc={" 756 jobs available"}/>
            <Cart title={"Business"} desc={" 140 jobs available"}/>
            <Cart title={"Human Resourse"} desc={" 325 jobs available"}/>
        </div>
    </div>
  )
}

export default Category