import { Link } from "react-router-dom";
import LogoSedona from "/images/logo_sedona.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row bg-[#0B021D] w-full py-12 px-16 justify-between items-center">
      <div className="basis-1/3 mx-5">
        <Link to="/">
          {/* <img src={LogoSedona} className="h-[64px]" /> */}
        </Link>
      </div>
      {/* <img src="/images/logo2.png" className="basis-1/3 w-[138px] h-[42px]" /> */}
      <div className="flex flex-row justify-center items-center h-full">
        {/* <p className="text-[#808181] text-base font-normal mr-16">Support</p> */}
        <img src="/images/support.svg" className="mr-16 h-[16px]" />
        <img src="/images/docs.svg" className="mr-16 h-[16px]" />
        {/* <p className="text-[#808181] text-base font-normal mr-16">Docs</p> */}
        {/* <p className="text-[#808181] text-base font-normal">FAQs</p> */}
      </div>
    </div>
  )
}

export default Footer;