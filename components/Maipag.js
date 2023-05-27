import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

function Maipag() {
    const [currentTime, setCurrentTime] = useState();
    const [countryName, setCountryName] = useState("");
    const [countryCode, setCountryCode] = useState("");
  
    useEffect(() => {
        // Fetch the user's geolocation data
        fetch("https://geolocation-db.com/json/")
          .then((response) => response.json())
          .then((data) => {
            setCountryCode(data.country_code);
            setCountryName(data.country_name);
          })
          .catch((error) => console.log(error));
      }, []);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
      const [currentDate, setCurrentDate] = useState({
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(
            new Date().toLocaleTimeString([], {
              hour12: false,
              hour: "numeric",
              minute: "numeric",
              second: undefined,
            })
          );
          setCurrentDate(
            new Date().toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
  return (

    <>
       <div
        className="bg-cover   flex  flex-col justify-between hero h-screen  md:px-[30px] 
      px-[60px] sm:px-[25px]   bg-local bg-center bg-no-repeat"
      >
        <div
          className=" child-div grid grid-cols-3  sm:pt-[20px] items-center   justify-between  
       pt-[2%]"
        >
          <div className=" flex   ">
            <img
              className="  lg:w-[65.96px] w-[25px] mr-[39px] sm:mr-2 h-[20px] lg:h-[50px]  "
              src="/assistes/1.png"
              alt="asd"
            />
            <img
              className=" sm:hidden  lg:w-[184.9px] w-[25px] h-[20px] lg:h-[50px]  lg:mr-[39px] mr-3  "
              src="/assistes/3.png"
              alt="asd"
            />
            <p className=" text-white uppercase sm:mt-1   mt-[25px] text-xs tracking-[2px] ">
              about
            </p>
          </div>
          <div className=" flex justify-center ">
            <img
              className="  lg:w-[204.38px]  w-[100px] h-[auto]  "
              src="/assistes/2.png"
              alt="asd"
            />
          </div>
          <div className="flex mt-0  justify-end ">
            <div className="text-white sm:hidden mr-2 text-end ">
              <p className=" text-sm tracking-[2px] ">
                {currentTime}
                <span className=" text-sm sm:text-xs ml-2 tracking-[2px]  ">
                  {countryName}
                </span>
              </p>
              <p className="text-end  text-sm tracking-[2px] ">{`${currentDate} `}</p>
            </div>
            <div className="text-white sm:justify-between  flex  ">
              <ReactCountryFlag
                className="sm:ml-4 ml-3"
                countryCode={countryCode}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title={countryCode}
              />

              <img
                src="/assistes/6.png"
                className="w-[20.89px] h-[25px] mx-3 sm:mx-0 sm:ml-3 ml-[40px]"
                alt="sad"
              />

              <img
                src="/assistes/5.png"
                className="w-[20.89px] h-[25px] ml-3 sm:ml-3 ml-[40px]"
                alt="asdasd"
              />
            </div>
          </div>
          <div className=" mt-[30px]  text-white flex">
            <img
              src="/assistes/back.png"
              className=" w-[22px] mt-2 sm:mt-1 mr-2  h-[16px] "
              alt="asdas"
            />
            <p className=" uppercase sm:text-[17px] text-[22px] tracking-[4px] ">back</p>
          </div>
        </div>

        <div className=" child-div text-white">
          <p
            className=" uppercase sm:text-[20px]  md:text-[30px] text-[40px] 
           tracking-[4px]    "
          >
            discover
          </p>
          <p className=" uppercase   text-[60px] sm:text-[35px] tracking-[3px]">
            A NEW WORLD
          </p>
          <p className=" uppercase text-[20px] sm:text-[16px]    text-[#A9A6A6] tracking-[3px]  ">
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </div>

        <div className=" child-div grid   grid-cols-1  ">
          <p className=" text-[#A9A6A6] text-center text-[20px] sm:text-[16px] tracking-[3px] ">
            Bringing the world closer together
          </p>
          <a className="justify-self-center" href="#realState">
            <img
              src="/assistes/down.png"
              className="  w-[40px] mb-5 mt-[40px] "
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Maipag
