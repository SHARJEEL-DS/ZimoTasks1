import Image from "next/image";
import Link from "next/link";
import React from "react";


function Header2() {
  return (
    <div id="Header2"  className=" h-screen flex sm:text-left flex-col justify-between md:px-[30px] sm:px-[20px]  lg:px-[60px]  md:pt-[30px] sm:pt-[20px]  pt-[60px]   uppercase tracking-[2px]  ">

       <div className="p-5 bg-white ">
        <div className="flex  ">
          <p className="py-10 mx-auto  sm:text-left text-center uppercase text-[14px] ">
            A REAL STATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
          </p>
        </div>
        <div className="flex w-full">
          <div className="w-6/12 mx-1  sm:flex items-center " >
            <p className="font-bold text-[60px] leading-tight py-0 my-0">
              <span className="text-[32px] ">A RESOLUTIONARY PLATFORM </span>
              <br /> <span className="text-[40px]">ENTRIES -SELLERS</span>
              <br /> <span className=" lg:text-[48px] sm:flex text-[30px]"> WORLDWIDE </span>
            </p>
          </div>
          <div className="w-6/12 ml-2 mt-96 ">
            <Image
              src="/Group.png"
              layout="responsive"
              alt=""
              width={300}
              height={300}
            />

            <p className="text-2xl ml-7">
              {" "}
              connecting user form across the gloab
              <br /> to facilitate lifes most important
              <br />
              personal transaction
            </p>
          </div>
        </div>
        <p className="text-[40px]  ">the best of the best </p>{" "}
        <p>
          A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO
          <br /> AGENTS AND MODERATION TEAM SELECTS THE HIGHEST QUALITY
          <br /> LISTINGS ON THE MARKET FROM ACROSS THE WORLD.
        </p>
      </div> 

      <div className="grid grid-cols-1 child-div">
            
            <Link className="justify-self-center" href="#Header3" >
              
              <Image
                src="/pngwing.com.png"
                alt="arrow-dark"
                width={100}
                height={100}
                className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
              />
            </Link>
          </div>
          
    </div>
  );
}

export default Header2;
