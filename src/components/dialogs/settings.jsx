/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import moment from "moment-timezone";
import { FaAngleDown } from "react-icons/fa";

const lngs = ["English"];

export function Settings({ children }) {
  const [open, setOpen] = useState(false);
  const [openLngModal, setOpenLngModal] = useState(false);
  const timezones = moment.tz.names();
  const [visibleInTokenGate, setVisibleInTokenGate] = useState(false);
  const [visibleInStatistics, setVisibleInStatistics] = useState(false);
  const [selectedLng, setselectedLng] = useState("English");
  const [locationEditMode, setLocationEditMode] = useState(false);

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
        className="bg-black rounded-[4px] text-[#FFFFFF] overflow-auto mb-8 h-full w-full font-saira py-4"
      >
        <div className=" bg-[#CBD7FF03]/5 flex px-4  py-4 items-center  w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#FFFFFF] text-[18px] font-chakra uppercase font-[600] ">
              User Settings
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
        
        <div className="flex mt-4 items-center px-4 w-full">
          <p className="px-[38px] font-inter font-[600] bg-[#CBD7FF08]/5 py-3 rounded-[8px]  text-[14px] text-[#DFFE00]">
            Account Settings
          </p>
        </div>

        <div className="my-4 md:px-4 w-full">
          <div className="flex flex-col px-4 py-4 items-center w-full">
            <div className="flex  px-4 justify-between items-center w-full">
              <p className="font-chakra text-[16px] uppercase font-[600] text-white">
                Location
              </p>

              <div className="flex justify-center items-center bg-[#FFFFFF]/10 rounded-[6px] px-2 py-[1.5px] gap-1 cursor-pointer" onClick={()=> setLocationEditMode(!locationEditMode)}>
                <p className="text-[#FFFFFF]/60 font-[700] cursor-pointer font-inter ">
                  {locationEditMode ? "Save":"Edit"}
                </p>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16574 1.17779L10.8215 2.83359C10.9354 2.94742 10.9993 3.10181 10.9993 3.26279C10.9993 3.42377 10.9354 3.57816 10.8215 3.69199L9.66854 4.84495C9.55469 4.95879 9.40034 5.02273 9.23939 5.02273C9.07836 5.02273 8.92401 4.95879 8.81016 4.84495L7.15435 3.18915C7.04052 3.07532 6.97656 2.92093 6.97656 2.75995C6.97656 2.59896 7.04052 2.44458 7.15435 2.33075L8.30729 1.17779C8.42114 1.06395 8.57556 1 8.73651 1C8.89746 1 9.05189 1.06395 9.16574 1.17779Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M1.79468 10.9866L3.68604 10.6083C3.86482 10.5726 4.02903 10.4847 4.15795 10.3557L8.308 6.20565C8.42185 6.09183 8.48582 5.93744 8.48582 5.77645C8.48582 5.61547 8.42185 5.46108 8.308 5.34725L6.65221 3.69145C6.53839 3.57762 6.38399 3.51367 6.22301 3.51367C6.06203 3.51367 5.90764 3.57762 5.79381 3.69145L1.64374 7.84151C1.51482 7.97043 1.42694 8.13461 1.39119 8.31341L1.01291 10.2048C0.969351 10.4226 1.03753 10.6478 1.19461 10.8048C1.35168 10.962 1.57686 11.0301 1.79468 10.9866Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`${
                !locationEditMode
                  ? "select-none pointer-events-none text-gray-500"
                  : "text-white"
              } w-full`}
            >
              <div
                className={`flex mt-4 flex-col px-4 w-full justify-center mb-4`}
              >
                <p className="text-[14px] font-inter font-[600]">Language</p>

                <div className="flex w-full justify-center items-center mt-2 relative">
                  <button
                    className="select-none rounded-lg text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full flex items-center justify-between p-0 m-0 bg-transparent "
                    onClick={() => {
                      setOpenLngModal(!openLngModal);
                    }}
                  >
                    {selectedLng}
                    <FaAngleDown />
                  </button>

                  {openLngModal && (
                    <ul
                      role="menu"
                      data-popover="menu"
                      data-popover-placement="bottom"
                      className="absolute top-full z-10 w-full mt-2 overflow-auto rounded-md border border-blue-gray-50 bg-black p-3 font-sans text-sm font-normal  blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                    >
                      {lngs.map((lng) => {
                        return (
                          <li
                            key={lng}
                            className="block !w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            onClick={() => {
                              setselectedLng(lng);
                              setOpenLngModal(false)
                            }}
                          >
                            {lng}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex mt-4 flex-col px-4 w-full justify-center">
                <p className="text-[14px] font-inter font-[600]">Time zone</p>

                <div className="flex justify-center items-center mt-2 w-full">
                  <select
                    name="cars"
                    id="cars"
                    className="w-full outline-none focus:bg-black bg-[#CBD7FF]/5 text-[#FFFFFF]/60 font-inter text-[14px] font-[500] placeholder-red-700"
                  >
                    {timezones &&
                      timezones?.map((tz) => {
                        return (
                          <option key={tz} value="english">
                            {tz}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden mt-4 mx-4">
            <div className="px-4 py-4 w-full">
              <p className="uppercase font-inter font-[600] text-[16px]">
                Privacy
              </p>
              <div className="flex flex-col justify-center">
                <div className="px-4 mt-4 flex items-center justify-between">
                  <p className="text-[14px] font-[600] font-inter">
                    Token gate
                  </p>
                  <div className="pl-[5px] pr-[18px] rounded-[16px]">
                    <div className="inline-flex items-center">
                      <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                        <input
                          id="switch-1"
                          type="checkbox"
                          className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-500 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          // defaultChecked
                          checked={visibleInTokenGate}
                          onChange={(e) => {
                            setVisibleInTokenGate(e.target.checked);
                          }}
                        />
                        <label
                          htmlFor="switch-1"
                          className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#DFFE00] shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                        >
                          <div
                            className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                            data-ripple-dark="true"
                          ></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4 mt-1 text-[#FFFFFF]/60 text-[14px] font-[400] font-inter">
                  User can only see your bets with token
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="px-4 mt-4 flex items-center justify-between">
                  <p className="text-[14px] font-[600] font-inter">
                    Hide All Statistics
                  </p>
                  <div className="pl-[5px] pr-[18px] bg-[#0D0F11] rounded-[16px]">
                    <div className="inline-flex items-center">
                      <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                        <input
                          id="switch-2"
                          type="checkbox"
                          className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-500 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          checked={visibleInStatistics}
                          onChange={(e) => {
                            setVisibleInStatistics(e.target.checked);
                          }}
                        />
                        <label
                          htmlFor="switch-2"
                          className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#DFFE00] shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                        >
                          <div
                            className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                            data-ripple-dark="true"
                          ></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4 mt-1 text-[#FFFFFF]/60 text-[14px] font-[400] font-inter">
                  Users cannot see your wins, losses and wagers
                </p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
