import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sedona from "../../components/sedona/sedona";
import Sport from "../../components/Sport/Sport";
import Layout from "../../components/layout";
// import round from "/images/round.svg";

// do not delete this for now!!!!!!!!!!
// eslint-disable-next-line no-unused-vars
import CarouselComp from "../../components/slider/carousel";
// do not delete this for now!!!!!!!!!!

import CarouselWithContent from "../../components/CarouselAuto/CarouselWithContent";
import Last from "../../components/Last/Last";
import TransactionsTable from "../../components/Table/TableComp";
import Slot from "../../components/slot";
const HomePage = () => {
  // const [openChat, setOpenChat] = useState(true);
  const [expand, setExpand] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);
  const [betHistoryCatg, setBetHistoryCatg] = useState("live");

  // // handleResize
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1024) {
  //       setExpand(true);
  //     } else {
  //       setExpand(false);
  //       // setOpenChat(false);
  //     }

  //     if (window.innerWidth < 768) {
  //       setOpenChat(true);
  //     } else {
  //       setOpenChat(true);
  //     }
  //   };

  //   // Add event listener for resize
  //   window.addEventListener("resize", handleResize);

  //   // Call handleResize immediately to set initial state
  //   handleResize();

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // handleResize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpand(true);
      } else {
        // setExpand(false);
        // setOpenChat(false);
      }

      if (window.innerWidth < 768) {
        // setIsMobile(true);
        // setOpenChat(true);
        return;
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call handleResize immediately to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout
      expand={expand}
      setExpand={setExpand}
      leftSide={<Navbar expand={expand} setExpand={setExpand} />}
    >
      <div className="flex flex-col">
        {/* <CarouselComp /> */}
        <div className="max-w-[100vw] max-h-[300px] overflow-hidden">
          <CarouselWithContent />
        </div>

        <div className="max-w-[100vw] max-h-[300px] overflow-hidden">
          <Sedona />
        </div>

        <div className=" mt-[42px] flex items-center w-full gap-2 mb-6">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_179_12107)">
              <path
                d="M3.30957 8.18066C3.30957 7.07606 4.20965 6.18066 5.31996 6.18066H10.681C11.7913 6.18066 12.6914 7.07606 12.6914 8.18066C12.6914 9.28526 11.7913 10.1807 10.681 10.1807H5.31996C4.20965 10.1807 3.30957 9.28526 3.30957 8.18066Z"
                fill="white"
              />
              <path
                d="M11.0851 4.87173C10.9524 4.85584 10.8173 4.84766 10.6803 4.84766H8.66992V2.84766H10.6803C11.5039 2.84766 12.2841 3.03242 12.9815 3.36256L11.0851 4.87173Z"
                fill="white"
              />
              <path
                d="M12.5498 5.41391C13.2665 5.89396 13.7867 6.64232 13.9645 7.51429H16.0004C15.8311 6.1637 15.1541 4.96995 14.1655 4.12793L12.5498 5.41391Z"
                fill="white"
              />
              <path
                d="M4.91491 4.87173C5.04759 4.85584 5.18273 4.84766 5.31967 4.84766H7.33005V2.84766H5.31967C4.49607 2.84766 3.71584 3.03242 3.01855 3.36256L4.91491 4.87173Z"
                fill="white"
              />
              <path
                d="M1.83467 4.12793L3.45045 5.41389C2.73369 5.89394 2.21375 6.64228 2.03591 7.51423H0C0.169332 6.16368 0.846167 4.96994 1.83467 4.12793Z"
                fill="white"
              />
              <path
                d="M3.45045 10.948L1.83467 12.234C0.846167 11.3919 0.169332 10.1982 0 8.84766H2.03591C2.21375 9.71959 2.73369 10.4679 3.45045 10.948Z"
                fill="white"
              />
              <path
                d="M3.01855 12.9994L4.91491 11.4902C5.04759 11.5061 5.18273 11.5143 5.31967 11.5143H7.33005V13.5143H5.31967C4.49607 13.5143 3.71584 13.3296 3.01855 12.9994Z"
                fill="white"
              />
              <path
                d="M11.0851 11.4902L12.9815 12.9994C12.2841 13.3296 11.5039 13.5143 10.6803 13.5143H8.66992V11.5143H10.6803C10.8173 11.5143 10.9524 11.5061 11.0851 11.4902Z"
                fill="white"
              />
              <path
                d="M14.1655 12.234L12.5498 10.9481C13.2665 10.468 13.7867 9.71959 13.9645 8.84766H16.0004C15.8311 10.1983 15.1541 11.392 14.1655 12.234Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_179_12107">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.180664)"
                />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-[#FFFFFF] text-[16px]  font-[700] uppercase font-chakra">
            SEDONA ROOMS
          </h1>
          <p className="text-[10px] text-[#DFFE0061]/40 font-[600] font-inter ml-4 ">
            COMING SOON
          </p>
        </div>

        <div className="max-w-[100vw]  _max-h-[400px] _overflow-hidden">
          <Slot />
        </div>
        {/* <div className="max-w-[100vw] md:hidden">
          <Ramp/>
        </div> */}
        <div className="max-w-[100vw]  _max-h-full _overflow-hidden">
          <Sport />
        </div>

        {/* <div className="rounded-xl border border-[#00FFA320] px-[17px] pt-[25px] pb-[35px] mt-5 w-[calc(82vw-378px)] overflow-auto">
          <div className="h-5 flex flex-row items-center">
            <img
              className="h-3 mx-2"
              src="/images/livewins.svg"
              alt="no image"
            />
            <p>Live Wins</p>
          </div>
          <div className="h-[120px] border-white my-2 flex justify-center shadow-transparent">
            <PointerScroll />
           
          </div>
        </div> */}

        <div className="w-full relative items-center h-auto mx-auto flex flex-col mt-[40px]">
          <div className="flex items-center justify-between w-full flex-col md:flex-row">
            <div className="flex items-center w-full md:w-auto justify-start gap-2 ">
              <svg
                stroke=""
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.44634 9.3584H2.66634C1.93301 9.3584 1.33301 9.9584 1.33301 10.6917V14.0251C1.33301 14.3917 1.63301 14.6917 1.99967 14.6917H4.44634C4.81301 14.6917 5.11301 14.3917 5.11301 14.0251V10.0251C5.11301 9.6584 4.81301 9.3584 4.44634 9.3584Z"
                  fill="white"
                />
                <path
                  d="M8.88677 6.69238H7.10677C6.37344 6.69238 5.77344 7.29238 5.77344 8.02572V14.0257C5.77344 14.3924 6.07344 14.6924 6.4401 14.6924H9.55344C9.9201 14.6924 10.2201 14.3924 10.2201 14.0257V8.02572C10.2201 7.29238 9.62677 6.69238 8.88677 6.69238Z"
                  fill="white"
                />
                <path
                  d="M13.3334 11.3584H11.5534C11.1867 11.3584 10.8867 11.6584 10.8867 12.0251V14.0251C10.8867 14.3917 11.1867 14.6917 11.5534 14.6917H14.0001C14.3667 14.6917 14.6667 14.3917 14.6667 14.0251V12.6917C14.6667 11.9584 14.0667 11.3584 13.3334 11.3584Z"
                  fill="white"
                />
                <path
                  d="M10.0063 3.25936C10.213 3.0527 10.293 2.80603 10.2263 2.5927C10.1596 2.37936 9.95297 2.22603 9.65963 2.17936L9.01963 2.0727C8.99297 2.0727 8.93297 2.02603 8.91963 1.99936L8.5663 1.2927C8.29963 0.752695 7.69297 0.752695 7.4263 1.2927L7.07297 1.99936C7.0663 2.02603 7.0063 2.0727 6.97963 2.0727L6.33963 2.17936C6.0463 2.22603 5.8463 2.37936 5.77297 2.5927C5.7063 2.80603 5.7863 3.0527 5.99297 3.25936L6.4863 3.75936C6.51297 3.77936 6.53297 3.85936 6.5263 3.88603L6.3863 4.49936C6.27963 4.95936 6.45297 5.16603 6.5663 5.24603C6.67963 5.32603 6.9263 5.4327 7.33297 5.1927L7.93297 4.83936C7.95963 4.81936 8.0463 4.81936 8.07297 4.83936L8.6663 5.1927C8.85297 5.30603 9.0063 5.33936 9.1263 5.33936C9.2663 5.33936 9.3663 5.28603 9.4263 5.24603C9.53963 5.16603 9.71297 4.95936 9.6063 4.49936L9.4663 3.88603C9.45963 3.8527 9.47963 3.77936 9.5063 3.75936L10.0063 3.25936Z"
                  fill="white"
                />
              </svg>
              <p className="text-[16px] font-[700] font-inter mt-1">BETS</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0 w-full md:w-auto justify-start space-x-[6px] md:px-6 lg:px-0">
              {/* <button
                onClick={() => setPage("casino")}
                className={`cursor-pointer rounded-[8px] ${
                  page === "casino"
                    ? "bg-[#DFFE00] text-[#DFFE00]"
                    : " text-[#ffffff] bg-[#52545A40]"
                }`}
              >
                <p className="bg-[#2C2C2C] rounded-[4px] py-[5px] px-[12px] text-[12px] font-chakra font-[600] cursor-pointer  ">
                  Casino Bets
                </p>
              </button> */}

              <button
                onClick={() => setBetHistoryCatg("live")}
                className={`cursor-pointer rounded-[8px] ${
                  betHistoryCatg === "live"
                    ? "bg-[#DFFE00] text-[#DFFE00]"
                    : " text-[#ffffff] bg-[#52545A40]"
                } transition-all duration-200`}
              >
                <p className="bg-[#2C2C2C] md:uppercase rounded-[4px] py-[5px] px-[12px] text-[12px]  font-chakra font-[600] cursor-pointer  ">
                  Live Bets
                </p>
              </button>

              <button
                onClick={() => setBetHistoryCatg("degen")}
                className={`cursor-pointer rounded-[8px] ${
                  betHistoryCatg === "degen"
                    ? "bg-[#DFFE00] text-[#DFFE00] "
                    : " text-white bg-[#52545A40]"
                } transition-all duration-200`}
              >
                <p className="bg-[#2C2C2C] md:uppercase rounded-[4px] py-[5px] px-[12px] text-[12px] font-chakra font-[600] cursor-pointer   ">
                  Degen
                </p>
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className=" w-full relative max-w-[100vw] bg-[#0F1113]  overflow-auto">
              <TransactionsTable category={betHistoryCatg} />
            </div>

            <div className="w-full _h-[80px] lg:h-[150px] absolute z-[10]  bottom-0 left-0 bg-gradient-to-b from-transparent  via-[#000000]/10  to-[#222222]"></div>
          </div>
        </div>

        <Last />
      </div>
    </Layout>
  );
};

export default HomePage;
