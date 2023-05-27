import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link';

function Header3() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  //for applying to 4 images on large and 1 on small
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div id='Header3'>
      <section className="container px-4 py-10 mx-auto mt-44">
      {/* <Hea title="What i do" /> */}
      <div className="text-[35px]  ml-10"> <span className="text-[35px] font-bold">CATEGORIES</span>
      <div className="flex justify-end mt-0 mySwiper ">
      <button onClick={handlePrevious} >
      <Image
                src="/rightarrow.jpeg"
                // onClick={()=> swiper.slidePrev()}
                alt="arrow-dark"
                width={50}
                height={50}
                className='mr-5 cursor-pointer sm:flex h-6 w-6  mySwiper'
                // className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
              />
              </button>
              <button onClick={handleNext}>
       <Image
                src="/leftarrow.jpeg"
                // onClick={()=> swiper.slideNext()}
                alt="arrow-dark"
                width={50}
                height={50}

                className='ml-5 cursor-pointer sm:flex h-6 w-6  mySwiper'
                // className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
              />
              </button>
        </div>
              
       </div>

        <div className="">
        <Slider {...settings} ref={sliderRef}>
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
            </Slider>  
        </div>
        
      <div className="grid grid-cols-1 child-div">
            
            <Link className="justify-self-center" href="#Header4" >
              
              <Image
                src="/pngwing.com.png"
                alt="arrow-dark"
                width={100}
                height={100}
                className="w-10 py-2 transition-all cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
              />
            </Link>
          </div>
    </section>
    </div>
  )
}

export default Header3
