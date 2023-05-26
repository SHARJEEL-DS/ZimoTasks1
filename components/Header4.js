import Image from "next/image";
import React from "react";

function Header4() {
  return (
    <div>
  
      <div>

        <p class=" text-center text-[34px] sm:text-[20px]  ">
          one platform for all premium listing
        </p>
        <p class=" text-center sm:text-[20px] text-[25px] sm:mt-[10px] mt-[25px] ">
          UNLIMITED POTENTIAL
        </p>
      </div>
      <div className="p-12 bg-white">
        <div className="flex w-full">
          <div>
            <h1 className="text-[80px]">ZIMO</h1>
            <h1 className="text-[30px]">
              ONE SOURCE
              {/* <Typewriter
                    options={{
                        strings: [
                            "React developer"
                        ],
                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true ,
                        loop: true,

                    }}/> */}
            </h1>

            <div className="pt-2 ">
              <p className="text-[40px]">ENTRY TICKETS</p>
              {/* <button className=' bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200 '> Learn more  </button> */}
            </div>
          </div>
          {/* <div className='w-6/12 mt-28 '>
                    <p className='text-[80px]'> ZIMO <span className='text-[14px] leading-tight mt-8 mr-10'> one source</span> </p>
            </div> */}
          <div className="w-6/12 ml-60 ">
            <Image
              src="/e.jpg"
              layout="responsive"
              alt=""
              width={200}
              height={200}
              className="w-40 h-40"
            />
            
<p class="text-center text-[30px]">LET YOUR DREAMS FIND YOU</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header4;
