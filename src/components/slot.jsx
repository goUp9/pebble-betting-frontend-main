import { useState } from "react";

import fee from "/images/fee.svg";
import Lock from "/images/Lock.svg";
import Nft from "/images/Nft.svg";
// import Search from "/images/Search.png";
// import { CiSearch } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import "../Slots/styles.css";
// const swiper = new Swiper('.swiper',
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
// });

// import required modules
import { FreeMode } from "swiper/modules";
const Slot = () => {
  const [page, setPage] = useState("All");
  return (
    <div className="w-full  mx-auto flex flex-col">
      <div className="flex items-center h-full w-full gap-[10px] md:gap-6 mb-4">
        <button
          onClick={() => setPage("All")}
          className={`cursor-pointer rounded-[8px] ${
            page === "All"
              ? "bg-[#DFFE00] text-[#030303]"
              : " text-[#DFFE00] bg-[#52545A40]"
          }`}
        >
          <p
            className="rounded-[4px] uppercase text-[12px] md:text-[16px]  
        font-chakra font-[600] md:py-2 py-1 px-[18px] md:px-[30px] "
          >
            all
          </p>
        </button>
        <button
          onClick={() => setPage("Public")}
          className={`cursor-pointer rounded-[8px] ${
            page === "Public"
              ? "bg-[#DFFE00] text-[#030303]"
              : " text-[#DFFE00] bg-[#52545A40]"
          }`}
        >
          <p
            className="rounded-[4px] uppercase text-[12px] md:text-[16px]  
        font-chakra font-[600] md:py-2 py-1 px-[18px] md:px-[30px] "
          >
            PUBLIC
          </p>
        </button>

        <button
          onClick={() => setPage("Private")}
          className={`cursor-pointer rounded-[8px] ${
            page === "Private"
              ? "bg-[#DFFE00] text-[#030303]"
              : " text-[#DFFE00] bg-[#52545A40]"
          }`}
        >
          <p
            className="rounded-[4px] uppercase text-[12px] md:text-[16px] font-chakra
         font-[600] md:py-2 py-1 px-[18px] md:px-[30px] "
          >
            Private
          </p>
        </button>
      </div>

      <div className="flex items-center w-full mt-8 overflow-hidden space-x-4">
        <Swiper
          // slidesPerView={5}
          // spaceBetween={16}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            510: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            790: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {/* Small Screen */}
          <SwiperSlide className="md:hidden">
            <div className="flex flex-col items-start">
              <img
                src="/images/Cat1.svg"
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex flex-col justify-center items-start w-full">
                <p className="text-[#929EA6] ml-3 text-[7px]  mt-3 font-[600]">
                  Free
                </p>
                <div className=" mt-4 ml-2 bg-[#20222580]/50 ">
                  <p className="text-[#6B7280] font-[600] text-[10px] md:text-[12px] lg:text-[10px] text-center px-[4px] py-[1px]">
                    AnimalFi
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <div className="flex flex-col max-w-[300px] w-full items-start">
              <img
                src="/images/new1.svg"
                alt=""
                className="rounded-[4px] object-cover h-[166px] relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center flex-row w-full  mt-3">
                <div className="flex justify-center  items-center lg:gap-[2px] gap-2 ">
                  <p className="text-[#929EA6] text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="lg:mt-[1px]"
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src="/images/Lock.svg"
                  alt="Lock"
                  className=" pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>
              <p
                className="text-[#6B7280] text-[10px] mt-4 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                AR Gaming
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <div className="flex flex-col items-start">
              <img
                src="images/Game3.svg"
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3 pl-2 ">
                <div className="flex justify-center items-center lg:gap-[2px] gap-1">
                  <p className="text-[#929EA6]  text-[7px]  font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <div className="flex gap-1 ">
                  <img src="/images/Lock.svg" alt="Lock" className="" />
                  <img src="/images/Nft.svg" alt="nft" className="" />
                </div>
              </div>
              <p
                className="text-[#6B7280] text-[10px] mt-4 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Poker
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <div className="flex flex-col items-start">
              <img
                src="/images/Cat1.svg"
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex flex-col justify-center items-start w-full">
                <p className="text-[#929EA6] ml-3 text-[7px]  mt-3 font-[600]">
                  Free
                </p>
                <div className=" mt-4 ml-2 bg-[#20222580]/50 ">
                  <p className="text-[#6B7280] font-[600] text-[10px] md:text-[12px] lg:text-[10px] text-center px-[4px] py-[1px]">
                    AnimalFi
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <div className="flex flex-col max-w-[300px] w-full items-start">
              <img
                src="/images/new1.svg"
                alt=""
                className="rounded-[4px] object-cover h-[166px] relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center flex-row w-full  mt-3">
                <div className="flex justify-center  items-center lg:gap-[2px] gap-2 ">
                  <p className="text-[#929EA6] text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="lg:mt-[1px]"
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src="/images/Lock.svg"
                  alt="Lock"
                  className=" pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>
              <p
                className="text-[#6B7280] text-[10px] mt-4 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                AR Gaming
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <div className="flex flex-col items-start">
              <img
                src="images/Game3.svg"
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3 pl-2 ">
                <div className="flex justify-center items-center lg:gap-[2px] gap-1">
                  <p className="text-[#929EA6]  text-[7px]  font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <div className="flex gap-1 ">
                  <img src="/images/Lock.svg" alt="Lock" className="" />
                  <img src="/images/Nft.svg" alt="nft" className="" />
                </div>
              </div>
              <p
                className="text-[#6B7280] text-[10px] mt-4 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Poker
              </p>
            </div>
          </SwiperSlide>



          {/* Big Screen */}

          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col max-w-[300px] w-full items-start">
              <img
                src="/images/Game1.svg"
                alt=""
                className="rounded-[4px] md:h-[200px] xl:h-auto object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center flex-row w-full  mt-3">
                <div className="flex justify-center  items-center  gap-2 ">
                  <p className="text-[#929EA6] text-[7px] md:ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="lg:mt-[1px]"
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src="/images/Lock.svg"
                  alt="Lock"
                  className=" pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>

              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-inter font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Casino
                </p>
              </div>
              {/* <p
                className="text-[#6B7280] text-[12px] mt-[6px] ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Casino
              </p> */}
            </div>
          </SwiperSlide>

          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Game2.svg"
                alt=""
                className="rounded-[4px] md:h-[200px] xl:h-auto object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px]  left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center items-center gap-2 ">
                  <p className="text-[#929EA6]  text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="xl:mt-0 lg:mt-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src={Lock}
                  alt="Lock"
                  className="pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>
              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Gaming
                </p>
              </div>
              {/* <p
                className="text-[#6B7280] text-[12px] mt-[6px] ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Gaming
              </p> */}
            </div>
          </SwiperSlide>

          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Game3.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px]  left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center  items-center lg:gap-[2px] gap-2 xl:gap-2 ">
                  <p className="text-[#929EA6]  text-[7px]  md:ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <div className="flex gap-1 lg:gap-2 xl:gap-2">
                  <img src={Lock} alt="Lock" className="" />
                  <img src={Nft} alt="Lock" className="" />
                </div>
              </div>
              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Gaming
                </p>
              </div>
              {/* <p
                className="text-[#6B7280] text-[12px] mt-[6px] ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Gaming
              </p> */}
            </div>
          </SwiperSlide>

          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Roll.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px]  rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>

              <div className="flex items-center w-full mt-3 ">
                <p className="text-[#929EA6] text-[7px] ml-2   font-[600]">
                  Free
                </p>
              </div>
              {/* <p className="text-[#6B7280] whitespace-pre text-[10px] mt-2 ml-1 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">
                AnimalFi
              </p> */}
               <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                AnimalFi
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Game4.svg"
                alt=""
                className="md:h-[200px] xl:h-auto  rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px]  left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>

              <div className="flex items-center w-full justify-between mt-3 ">
                <p className="text-[#929EA6] text-[7px] ml-2   font-[600]">
                  Free
                </p>
                <img src={Nft} alt="" />
              </div>
              {/* <p className="text-[#6B7280] text-[12px] mt-[10px] ml-1 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">
                AR Gaming
              </p> */}
               <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                AR  Gaming
                </p>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col max-w-[300px] w-full items-start">
              <img
                src="/images/Game1.svg"
                alt=""
                className="rounded-[4px] md:h-[200px] xl:h-auto object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center flex-row w-full  mt-3">
                <div className="flex justify-center  items-center  gap-2 ">
                  <p className="text-[#929EA6] text-[7px] md:ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="lg:mt-[1px]"
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src="/images/Lock.svg"
                  alt="Lock"
                  className=" pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>

              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-inter font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Casino
                </p>
              </div>
              {/* <p
                className="text-[#6B7280] text-[12px] mt-[6px] ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Casino
              </p> */}
            </div>
          </SwiperSlide>




{/* 
          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col max-w-[300px] w-full items-start">
              <img
                src="/images/Game1.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center flex-row w-full  mt-3">
                <div className="flex justify-center  items-center lg:gap-[2px] gap-2 ">
                  <p className="text-[#929EA6] text-[7px] md:ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/fee.svg"
                      alt="fee"
                      width={6}
                      height={5}
                      className="lg:mt-[1px]"
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src="/images/Lock.svg"
                  alt="Lock"
                  className=" pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>

              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Casino
                </p>
              </div>
            
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Game2.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center items-center gap-2 ">
                  <p className="text-[#929EA6]  text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="xl:mt-0 lg:mt-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img
                  src={Lock}
                  alt="Lock"
                  className="pr-[10px] lg:pr-0 xl:pr-[10px]"
                />
              </div>
              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Gaming
                </p>
              </div>
          
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Game3.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center  items-center lg:gap-[2px] gap-2 xl:gap-2 ">
                  <p className="text-[#929EA6]  text-[7px]  md:ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <div className="flex gap-1 lg:gap-2 xl:gap-2">
                  <img src={Lock} alt="Lock" className="" />
                  <img src={Nft} alt="Lock" className="" />
                </div>
              </div>
              <div className=" mt-2 ml-1 bg-[#20222580]/50 ">
                <p className="text-[#6B7280] whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                  Gaming
                </p>
              </div>
             
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Roll.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>

              <div className="flex items-center w-full mt-2 ">
                <p className="text-[#929EA6] text-[7px] ml-2   font-[600]">
                  Free
                </p>
              </div>
              <p className="text-[#6B7280] whitespace-pre text-[12px] mt-[10px] ml-1 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">
                AnimalFi
              </p>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Game4.svg"
                alt=""
                className="md:h-[200px] xl:h-auto rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>

              <div className="flex items-center w-full justify-between mt-2 ">
                <p className="text-[#929EA6] text-[7px] ml-2   font-[600]">
                  Free
                </p>
                <img src={Nft} alt="" />
              </div>
              <p className="text-[#6B7280] text-[12px] mt-[10px] ml-1 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">
                AR Gaming
              </p>
            </div>
          </SwiperSlide> */}

{/* 
          <SwiperSlide className="hidden md:flex">
            <div className="flex flex-col items-start">
              <img
                src="/images/Roll.svg"
                alt="Cat3"
                className="rounded-[4px] max-h-[200px] object-contain relative"
              />

              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex flex-col justify-center items-start w-full">
                <p className="text-[#929EA6] ml-3 text-[7px] mt-2 lg:mt-3 font-[600]">
                  Free
                </p>
                <div className=" mt-2 ml-2 bg-[#20222580]/50 ">
                  <p className="text-[#6B7280] md:whitespace-pre lg:whitespace-nowrap font-[600] text-[10px] md:text-[12px]  text-center px-[4px] py-[1px]">
                    Animal Stream
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide> */}

         
        </Swiper>
      </div>
    </div>
  );
};

export default Slot;
