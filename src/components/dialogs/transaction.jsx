/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import AppTable from "../Date/AppTable";

export function Transaction({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="border-none !bg-transparent p-0 m-0 capitalize w-full"
      >
        {children}
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-black rounded-[4px] text-[#FFFFFF] overflow-auto mb-8 h-full max-w-[500px] w-full font-saira "
      >
        <div className=" bg-[#CBD7FF03]/5 flex rounded-[4px] px-4  py-4 items-center  w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#FFFFFF] text-[16px] font-chakra uppercase font-[600] ">
              Transaction History
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.29289 1.29289C1.68342 0.90237 2.31658 0.90237 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.90237 14.3166 0.90237 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.90237 14.3166 0.90237 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.90237 2.31658 0.90237 1.68342 1.29289 1.29289Z"
                fill="white"
                fillOpacity="0.6"
              />
            </svg>
          </div>
        </div>
        <div className="mt-8 px-4 w-full">
          <div className="w-full bg-[#CBD7FF]/5 text-[14px] text-[#DFFE00] text-center py-3 font-[600] font-inter cursor-pointer ">
            History
          </div>
        </div>
        <div className="mt-8 z-10 px-4 w-full">
          {/* <input type="date" placeholder="Add a tag" className="bg-black !placeholder-shown:text-[#DFFE00] 
!text-white disabled:bg-blue-gray-50 w-full"/> */}
          <AppTable className="" />
        </div>

        <div className="mt-[31px] grid grid-cols-3 gap-2 px-[7px]">
          <button>
            <div className="bg-[#CBD7FF]/5 cursor-pointer font-[400] font-inter text-[14px] text-[#DFFE00] px-[20px] py-[17px]">
              Total Wins
            </div>
          </button>
          <div className="px-4 cursor-pointer py-4 gap-[12px] flex justify-center items-center ">
            <p className="font-inter font-[400] text-[14px] text-[#FFFFFFDE]/90">
              Deposits
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.774 1.87367L13.3209 4.60841C13.3288 4.64758 13.3327 4.68743 13.3327 4.72738C13.3327 5.06239 13.0611 5.33398 12.7261 5.33398H3.05709C2.84111 5.33398 2.66602 5.15889 2.66602 4.94291C2.66602 4.77763 2.76992 4.63021 2.92556 4.57462L11.8899 1.37309C11.9623 1.34721 12.0387 1.33398 12.1157 1.33398C12.4357 1.33398 12.7112 1.55986 12.774 1.87367Z"
                fill="#DFFE00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.66634 5.99935H13.333C14.0693 5.99935 14.6663 5.40243 14.6663 4.66602V11.9994C14.6663 12.7358 14.0694 13.3327 13.333 13.3327H2.66634C1.92996 13.3327 1.33301 12.7358 1.33301 11.9994V4.66602C1.33301 5.40243 1.93001 5.99935 2.66634 5.99935ZM10.6663 9.99935C10.6663 9.63116 10.9648 9.33269 11.333 9.33269H12.6663C13.0345 9.33269 13.333 9.63116 13.333 9.99935C13.333 10.3676 13.0345 10.666 12.6663 10.666H11.333C10.9648 10.666 10.6663 10.3676 10.6663 9.99935Z"
                fill="#DFFE00"
              />
            </svg>
          </div>
          <div className="px-4 py-4  cursor-pointer gap-3 flex justify-center items-center ">
            <p className="font-inter font-[400] text-[14px] text-[#FFFFFFDE]/90">
              Withdraw
            </p>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.77778 0C0.797222 0 0 0.747396 0 1.66667V8.33333C0 9.2526 0.797222 10 1.77778 10H14.2222C15.2028 10 16 9.2526 16 8.33333V1.66667C16 0.747396 15.2028 0 14.2222 0H1.77778ZM7.55556 3.33333H13.7778C14.0222 3.33333 14.2222 3.52083 14.2222 3.75C14.2222 3.97917 14.0222 4.16667 13.7778 4.16667H7.55556C7.31111 4.16667 7.11111 3.97917 7.11111 3.75C7.11111 3.52083 7.31111 3.33333 7.55556 3.33333ZM7.11111 6.25C7.11111 6.02083 7.31111 5.83333 7.55556 5.83333H13.7778C14.0222 5.83333 14.2222 6.02083 14.2222 6.25C14.2222 6.47917 14.0222 6.66667 13.7778 6.66667H7.55556C7.31111 6.66667 7.11111 6.47917 7.11111 6.25ZM4.55556 2.29167V2.65365C4.76389 2.6849 4.96111 2.72917 5.14167 2.77604C5.43889 2.84896 5.61389 3.13542 5.53611 3.41406C5.45833 3.69271 5.15278 3.85677 4.85556 3.78385C4.55 3.70833 4.25556 3.65365 3.98889 3.64844C3.76944 3.64583 3.54444 3.69531 3.39167 3.77865C3.25833 3.85156 3.21944 3.92448 3.21944 4.02083C3.21944 4.06771 3.22222 4.11198 3.36667 4.19531C3.54167 4.29427 3.79722 4.36979 4.15278 4.46875L4.17222 4.47396C4.48333 4.5625 4.88333 4.67448 5.20278 4.86458C5.56111 5.07552 5.87778 5.41927 5.88611 5.94792C5.89444 6.49219 5.59444 6.88802 5.19722 7.11979C4.99722 7.23698 4.775 7.3099 4.55278 7.35417V7.70833C4.55278 7.99479 4.30278 8.22917 3.99722 8.22917C3.69167 8.22917 3.44167 7.99479 3.44167 7.70833V7.32812C3.15556 7.27083 2.88611 7.1849 2.65833 7.10938C2.6 7.09115 2.54444 7.07292 2.48889 7.05469C2.19722 6.96354 2.04167 6.66927 2.13889 6.39583C2.23611 6.1224 2.55 5.97656 2.84167 6.06771C2.91111 6.08854 2.97778 6.11198 3.04167 6.13021C3.41944 6.25 3.70833 6.34115 4.01667 6.35156C4.25556 6.35937 4.475 6.3099 4.61111 6.22917C4.725 6.16406 4.77778 6.08594 4.775 5.95573C4.775 5.88021 4.75278 5.82552 4.61111 5.74219C4.43611 5.63802 4.18333 5.5625 3.83333 5.46354L3.78611 5.45052C3.48333 5.36458 3.10278 5.25781 2.79722 5.08594C2.44444 4.88542 2.11389 4.55208 2.11111 4.02604C2.10833 3.47656 2.43889 3.09635 2.82778 2.88281C3.01944 2.77604 3.23056 2.70573 3.44444 2.66146V2.29167C3.44444 2.00521 3.69444 1.77083 4 1.77083C4.30556 1.77083 4.55556 2.00521 4.55556 2.29167Z"
                fill="#DFFE00"
              />
            </svg>
          </div>
        </div>

        <div className="px-12 h-[490px] w-full flex items-center justify-center ">
          <p className="text-[#FFFFFFDE]/90 text-[14px] font-[400] font-saira">
            {" "}
            No result found
          </p>
        </div>

        {/* <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}
