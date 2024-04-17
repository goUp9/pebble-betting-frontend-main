import React from 'react'
import Footer from '/images/logo_sedona.svg'
import Fill from '/images/Fill.svg'
const Last = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[154px] text-white text-center'>
        <img src={Footer} alt="" className='mb-[19px]'/>
        <div className="flex justify-center items-center gap-[16px]">
            <p className="text-[14px]  text-[#FFFFFF]">Responsible Gaming</p>
            <img src={Fill} alt="" />
        </div>
        <p className="mt-4 lg:mt-[40px] text-[13px] font-[400]">
        LLC and License: TBA
        </p>
        <p className="mt-4 lg:mt-[37px] text-[13px] font-[400] md:mb-[45px]">
        © 2023-2024 All Rights Reserved | Privacy Policy
        </p>
    </div>
  )
}

export default Last