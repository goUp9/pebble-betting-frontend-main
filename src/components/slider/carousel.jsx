import React, { useRef, useState } from "react";
import carousel1 from "/images/Carousel.svg";
import carousel2 from "/images/Dale.svg";
import Baby from "/images/baby.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
// import { Loop } from "@mui/icons-material";

export default function CarouselComp() {
  return (
    <section className="z-10 flex h-auto w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={Autoplay}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex-1 min-h-[300px] max-w-full relative flex">
            <div className="md:w-full !w-auto  relative  h-auto">
              <img
                src={carousel1}
                alt="Carousel"
                className=" w-full h-full mx-0  md:my-[32px] "
              />
            </div>

            <div className="absolute top-0 left-0 w-full min-h-full bg-black/50 z-[99]">
              <div className="w-full h-full text-[#DFFE00CC] text-[10px] md:text-[18px]
               uppercase flex flex-col items-start justify-start md:items-start md:justify-center 
               min-h-[300px] px-4 md:px-32">
                <p className="pt-4 md:pt-0">SIGN IN AND WATCH CK</p>
                <p className="mt-2">REEDEEM HIMSELF</p>
                <img
                  src={Baby}
                  alt="Baby"
                  className="md:mt-3 !w-5  md:!w-10 md:h-auto"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full relative  h-auto">
            <img
              src={carousel1}
              alt="Carousel"
              className=" w-full h-full mx-0 object-contain md:my-[32px] "
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex-1 min-h-[300px] max-w-full relative flex">
            <div className="lg:w-full !w-auto  relative  h-auto">
              <img
                src={carousel2}
                alt="Carousel"
                className=" w-full h-full mx-0  my-[32px] "
              />
            </div>

            <div className="absolute top-0 left-0 w-full min-h-full bg-black/50 z-[99]">
              <div className="w-full h-full text-[#DFFE00CC] text-[10px] lg:text-[18px] uppercase flex flex-col items-start justify-center min-h-[300px] px-32">
                <p className="">SIGN IN AND WATCH CK REEDEEM HIMSELF</p>
                <p className="mt-2">REEDEEM HIMSELF</p>
                <img src={Baby} alt="Baby" className="mt-3 !w-10 h-auto" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
