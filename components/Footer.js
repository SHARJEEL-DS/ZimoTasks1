import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div>
      <div className='bg-[url("/h.jpg")] h-screen bg-cover flex bg-center p-12 '>
        <div className="flex items-center w-6/12 text-white ">
        <Image
                className=" lg:w-[200px] h-[100px]  "
                src="/Group.png"
                alt="asd"
                width={100}
                height={100}
                
              />
        </div>
        {/* <div className="flex w-6/12 ">

        <p className="ml-52 mt-44 text-white text-[42px] " >PERSONALISED FOR YOU  <br/>
        <span className='text-[18px]'>Delivering thousands of personalised alerts everyday, our USERS can be first in line when that opportunity of a lifetime is here. </span></p>   
      </div> */}
        <div className="   sm:px-[20px]  ">
          <div className="sm:flex bg-opacity-1">
            <div className="    sm:pt-3 sm:px-2 ">
              <p className=" text-[14px] lg:text-[30px]  text-[white]   sm:pt-0 pt-12">
                Personalised for You
              </p>
              <p className=" text-gray-300 font-medium pr-[80px] sm:pr-2 mt-3 text-[10px] lg:text-[12px]">
                Delivering thousands of personalised alerts everyday, our USERS
                can be first in line when that opportunity of a lifetime is
                here.
              </p>
            </div>
            <p className="flex  sm:py-3  sm:px-2 sm:justify-start lg:text-[21px]  text-[14px]  lg:mt-[220px] justify-center   ">
              CREATE USER ID
              {/* <img class="w-[44.87px] ml-3 " src="../assistes/f2.png" alt=""/> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
