import Image from 'next/image'
import React from 'react'
// import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { AiOutlineGift } from 'react-icons/Ai'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "./styles.css";
// import required modules
import { Pagination,Navigation ,A11y} from "swiper";

function Header3() {
  const swiper = useSwiper();
  return (
    <div>
      <section className="container px-4 py-10 mx-auto">
      {/* <Hea title="What i do" /> */}
      <div className="text-[35px]  ml-10"> <span className="text-[35px] font-bold">CATEGORIES</span>
      <div className="flex justify-end mt-0 mySwiper ">
        
      <Image
                src="/rightarrow.jpeg"
                // onClick={()=> swiper.slidePrev()}
                alt="arrow-dark"
                width={50}
                height={50}
                className='mr-5 cursor-pointer sm:flex h-6 w-6  mySwiper'
                // className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
              />
       <Image
                src="/leftarrow.jpeg"
                // onClick={()=> swiper.slideNext()}
                alt="arrow-dark"
                width={50}
                height={50}

                className='ml-5 cursor-pointer sm:flex h-6 w-6  mySwiper'
                // className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
              />
        </div>
              
       </div>

      <Swiper
        // slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation,Pagination,A11y]}
        className="mySwiper"
        // onSlideChange={}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SwiperSlide>
            <div>
              <Image
                src="/b.jpg"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/a.jpg"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/b.jpg"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/a.jpg"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/e.jpg"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
    </div>
  )
}

export default Header3
