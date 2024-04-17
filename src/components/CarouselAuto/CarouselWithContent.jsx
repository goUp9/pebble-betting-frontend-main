import { Carousel, Typography } from "@material-tailwind/react";
// import Baby from "/images/baby.svg";

export default function CarouselWithContent() {
  return (
    <Carousel
      autoplay="true"
      autoplayDelay={5000}
      loop="true"
      transition={{ duration: 1.5 }}
      navigation=""
      prevArrow=""
      nextArrow=""
      className="rounded-xl gap-4"
    >
      <div className="relative h-auto w-full">
        <img
          // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          src="/images/Carousel.svg"
          alt="image 1"
          className="h-auto w-full hidden md:flex object-cover"
        />
        <img
          // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          src="/images/Carousel3.svg"
          alt="image 2"
          className="h-auto w-full flex md:hidden object-cover"
        />

        <div className="absolute hidden inset-0 md:grid h-auto w-full place-items-center bg-black/40">
          <div
            className="w-full   h-auto text-[#DFFE00CC] text-[10px] md:text-[16px]
               uppercase flex flex-col md:items-start md:justify-center font-chakra 
                px-4 lg:pl-10"
          >
            <div className="bg-[#D9D9D926] w-[150px] max-w-[300px] md:w-full px-1 md:py-2">
              <Typography
                // variant=""
                // color="white"
                className="text-[12px] md:text-[16px] font-chakra font-[500]"
              >
                SIGN IN AND WATCH CK
              </Typography>
              <Typography
                // variant=""
                // color="white"
                className="text-[12px] md:text-[16px] font-chakra  font-[500]"
              >
                REEDEEM HIMSELF
              </Typography>
              <img
                src="/images/baby.svg"
                alt="Baby"
                className="mt-2 cursor-pointer w-[27px] h-[22px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute grid inset-0 md:hidden h-auto w-full place-items-center bg-black/40">
          <div
            className="w-full px-4 mt-2 h-full text-[#DFFE00CC] flex flex-col items-start justify-start font-chakra 
                "
          >
            <div className="bg-[#FFFFFF1A] h-[112px]  px-[4px] py-4 max-w-[250px]  w-auto ">
              <Typography
                // variant=""
                // color="white"
                className="text-[12px]  font-chakra font-[600] min-w-[150px] w-auto max-w-[00px]"
              >
                SIGN IN AND WATCH CK REEDEEM HIMSELF
              </Typography>
              <Typography
                // variant=""
                // color="white"
                className="text-[12px] max-w-[180px] text-[#FFFFFFE8]  uppercase font-chakra  font-[600]"
              >
                Your favorite HaMSTER awaits you
              </Typography>
              <img
                src='/images/baby.svg'
                alt="Baby"
                className="mt-2 cursor-pointer w-[27px] h-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative  h-auto w-full">
        <img
          // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          src="/images/Dale.svg"
          alt="image 3"
          className="h-auto w-full hidden md:flex object-cover"
        />
        <img
          // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          src="/images/Carousel4.svg"
          alt="image 4"
          className="h-auto w-full flex md:hidden object-cover"
        />
        <div className="absolute hidden inset-0 md:grid h-auto w-full place-items-center   bg-black/40">
          <div
            className="w-full   h-auto text-[#DFFE00CC] text-[10px] md:text-[16px]
               uppercase flex flex-col md:items-start md:justify-center font-chakra 
                px-4 lg:pl-10"
          >
            <div className="bg-[#D9D9D926] w-[150px] max-w-[400px] md:w-full px-1 md:py-2">
              <Typography
                // variant=""
                // color="white"
                className="text-[10px] md:text-[16px] font-chakra  md:font-[600]"
              >
                Enjoy world of Live stream betting
              </Typography>
              <Typography
                // variant=""
                // color="white"
                className="text-[8px] md:text-[12px] md:mt-2 text-[#FFFFFF] font-chakra font-[500] md:font-[600]"
              >
                Your favorite Marble awaits you
              </Typography>
              <img
                src="/images/baby.svg"
                alt="Baby"
                className="md:mt-2 cursor-pointer w-[27px] h-[22px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute grid inset-0 md:hidden h-auto w-full place-items-center bg-black/40">
          <div
            className="w-full px-4 mt-2 h-full text-[#DFFE00CC] flex flex-col items-start justify-start font-chakra 
                "
          >
            <div className="bg-[#FFFFFF1A] h-[112px]  px-[4px] py-4  w-full ">
              <Typography
                // variant=""
                // color="white"
                className="text-[12px] uppercase font-chakra font-[600] min-w-[150px] w-auto max-w-[00px]"
              >
                Enjoy world of Live stream betting
              </Typography>
              <Typography
                // variant=""
                // color="white"
                className="text-[12px] max-w-[180px] text-[#FFFFFFE8]  uppercase font-chakra  font-[600]"
              >
                Your favorite Marble awaits you
              </Typography>
              <img
                src="/images/baby.svg"
                alt="Baby"
                className="mt-2 cursor-pointer w-[27px] h-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
