import React from "react";
import { useEffect, useState } from "react";
import Clock from "react-clock";
 import {BiShoppingBag} from 'react-icons/bi'
 import {CgProfile} from 'react-icons/cg'
 import ReactCountryFlag from "react-country-flag"
 import Link from "next/link";
import Image from "next/image";
function Theader() {
  const [geolocationData, setGeolocationData] = useState("");
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const fetchGeolocationData = async () => {
      try {
        const response = await fetch("https://geolocation-db.com/json/");
        const data = await response.json();
        setGeolocationData(data);
      } catch (error) {
        console.log("Error fetching geolocation data:", error);
      }
    };

    fetchGeolocationData();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div className='bg-[url("/a.jpg")] h-screen bg-cover '>
        <div className="bg-cover   flex  flex-col justify-between hero h-screen  md:px-[30px]  px-[60px] sm:px-[25px]   bg-local bg-center bg-no-repeat">
          <div className=" child-div grid grid-cols-3  sm:pt-[20px]   justify-between   pt-[2%]">
            <div className=" flex  sm:mt-[11px] ">
               <Image
                className='  h-[20px] lg:h-[50px] sm:hidden    '
                src="/qq2.png"
                width={50}
                height={50}
                alt="asd"
              /> 
              <Image
                className=" sm:mr-2 h-[20px] lg:h-[50px]  "
                src="/qq1.png"
                alt="asd"
                width={100}
                height={100}
              />
              <Image
                className=" sm:hidden  lg:w-[184.9px] w-[25px] h-[20px] lg:h-[50px]  lg:mr-[39px] mr-3  "
                src="/arro.png"
                alt="asd"
                width={100}
                height={100}
              />
              <p className=" text-white uppercase sm:mt-1  mt-[25px] text-xs tracking-[2px] ">
                about
              </p>
            </div>
            <div className="flex justify-center ">
              <Image
                className=" lg:w-[204.38px]  w-[100px] h-[auto]  "
                src="/images-removebg-preview.png"
                alt="asd"
                width={100}
                height={100}
              />
            </div>
            <div className="flex justify-end mt-0  ">
              <div className="">
                <p className="text-white text-inherit">
                  <span className=" mr-2 " >11:42am</span>
                  <span className="text-white text-inherit">
                    {geolocationData.country_name}
                  </span>
                </p>
                <p className="text-[#BE9F56]  text-[11px]  md:text-[9px] tracking-[2px] uppercase">
                  Friday, May 26, 2023
                </p>
              </div>
              <div className="flex justify-end text-white ">
                {/* <img
                  className="w-8 h-8 mb-0 ml-5"
                  title="PK"
                  src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pk.svg"
                /> */}
                  <ReactCountryFlag countryCode={geolocationData.country_code}  svg className="mb-0 ml-5 text-[30px] h-32 w-32" 
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title=""/>
                <BiShoppingBag className="w-[20.89px] h-[25px] sm:ml-4 ml-[40px]"/>
                {/* <img
                  src="/pro.jpeg"
                  className="w-[20.89px] h-[25px] mx-3 sm:ml-4 ml-[40px]"
                  alt="sad"
                /> */}
                <CgProfile className="w-[20.89px] h-[25px] ml-3 sm:ml-4" />
                 {/* <img
                  src="/gg.png"
                  className="w-[20.89px] h-[25px] ml-3 sm:ml-4 ml-[40px]"
                  alt="asdasd"
                />  */}
              </div>
            </div>
            <div className=" mt-[30px]  text-white flex">
              <Image
                src="/backaroo.png"
                className=" w-[22px] mt-2 mr-2  h-[16px] "
                alt="asdas"
                width={100}
                height={100}
              />
              <p className=" uppercase text-[22px] tracking-[4px] ">back</p>
            </div>
          </div>
          <div className="text-white child-div">
            <p className=" uppercase sm:text-[20px]  md:text-[30px] text-[40px]  tracking-[4px]    ">
              discover
            </p>
            <p className=" uppercase   text-[60px] sm:text-[35px] tracking-[3px]">
              A NEW WORLD
            </p>
            <p className=" uppercase text-[20px] sm:text-[16px]    text-[#A9A6A6] tracking-[3px]  ">
              FOR THOSE WHO WISH FOR MORE...
            </p>
          </div>
          <div className="grid grid-cols-1 child-div">
            <p className=" text-[#A9A6A6] text-center text-[20px] sm:text-[16px] tracking-[3px] ">
              Bringing the world closer together
            </p>
            <Link className="justify-self-center" href="./Header2" >
              
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
      </div>
    </div>
  );
}

export default Theader;
