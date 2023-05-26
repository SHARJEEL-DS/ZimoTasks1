import Image from 'next/image'
import React from 'react'

function Header2() {
  return (
    <div>
 <div className="p-5 bg-white ">
      <div className="flex ">
        <p className="py-10 mx-auto  ">
          A REAL STATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD  
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-6/12 mx-1 ">
          <p className="font-bold text-[60px] leading-tight py-0 my-0">
            
            <span className="text-[32px]">A RESOLUTIONARY PLATFORM </span>
            <br /> <span className="text-[40px]">ENTRIES -SELLERS</span>
            <br /> WORLDWIDE
          </p>
        </div>
        <div className="w-6/12 ml-25 "><Image src="/Group.png"  layout="responsive" alt=""  width={300} height={300} />

        
        <p className='text-2xl ml-7'> connecting user form across the gloab<br/> to facilitate lifes most important
        <br/>
           personal transaction
        </p>
        </div>
        
      </div>
    <p className='text-[45px] mt-2'>the best of the best </p> <p>A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO<br/> AGENTS AND MODERATION TEAM SELECTS THE HIGHEST QUALITY<br/> LISTINGS ON THE MARKET FROM ACROSS THE WORLD.</p>
     
    </div>      
    </div>
  )
}

export default Header2
