import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div>
         <div className='bg-[url("/a.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
          
       <div className='mb-auto text-[30px] ml-5 text-slate-50' >

        
       </div>
          
        <p className='mb-96 text-[30px] ml-5 text-slate-50'>Back</p>
            
        <div className='container px-4 mx-auto'>
            <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
                <div >
                    <h4 className='text-[30px]' >DISCOVER</h4>
                    <h1 className='text-[60px]'>
                    A NEW WORLD 
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
                    
                    <div className='pt-2 '>
                        <p className='text-slate-200' >
                          FOR THOSE WHO WISH FOR MORE 
                          </p>

                          {/* <Image src="/Group.png"  layout="fixed" alt="jklj"  width={200} height={200}/> */}
                          {/* <button className=' bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200 '> Learn more  </button> */}
                     </div>

                    
                </div>
            </div>

        </div>


      
    </div>
    <div className="flex flex-col items-center justify-center space-y-14 sm:absolute sm:bottom-0 sm:right-0 sm:left-0 ">
        <p className="uppercase 3xl:text-[14px] text-[20px] tracking-[2px]  ">
          Bringing the world closer together.
        </p>
         <a>
           <img
            src="/pngwing.com.png"
            alt="arrow-dark"
            className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
          />  
        </a>
      </div>

    </div>
  )
}

export default Header
