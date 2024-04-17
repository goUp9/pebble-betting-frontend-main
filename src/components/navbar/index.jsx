import { Button } from "@material-tailwind/react";
import { useRouter } from "../../hooks/use-router";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import NotificationDialog from "../notificationModal";
// import LiveMatche from "/images/livestream1.svg";
// import LiveMatche1 from "/images/Live Stream.svg";
import { FaAngleUp } from "react-icons/fa";
import PropTypes from "prop-types";
import { IS_BUY_TOKEN_ACTIVATED } from "../../lib/config";

const Navbar = ({ expand, setExpand }) => {
  const router = useRouter();
  const wallet = useWallet();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ title: "", body: "" });
  const [openLiveStreams, setOpenLiveStreams] = useState(true);

  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }

    window.open("https://phantom.app/", "_blank");
  };

  const connectWallet = async () => {
    const provider = getProvider();
    try {
      const resp = await provider.connect();
      console.log(resp.publicKey.toString());
      // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
    } catch (err) {
      console.log(err);
      // { code: 4001, message: 'User rejected the request.' }
    }
  };

  const toBetting = () => {
    if (wallet.connected) {
      router.push("/bet");
    } else {
      // alert("Wallet is not connected!\n Please Connect your wallet!");
      setMessage({
        title: "Wallet is not connected!",
        body: "Please Connect your wallet!",
      });
      setOpen(true);
      return;
    }
  };

  const toHamster = () => {
    if (wallet.connected) {
      router.push("/harybet");
    } else {
      // alert("Wallet is not connected!\n Please Connect your wallet!");
      setMessage({
        title: "Wallet is not connected!",
        body: "Please Connect your wallet!",
      });
      setOpen(true);
      return;
    }
  };

  return (
    <>
      <NotificationDialog
        open={open}
        setOpen={setOpen}
        title={message.title}
        body={message.body}
      />

      <div
        className={`${
          !expand ? "items-center " : ""
        } transition-all duration-500 flex flex-col  md:py-3 xl:py-[22px]  rounded px-2 lg:px-4 w-full md:gap-y-8 lg:gap-y-[48px] h-full`}
      >
        {expand && (
          <div className="transition-all duration-700 w-full h-auto px-3 pt-6 pb-4 border-b border-[#C88300] rounded flex flex-col gap-4 justify-between">
            <div className="rounded-[8px] bg-[#52545A]/25 px-5 py-2 flex justify-between gap-4 text-base font-semibold">
              <div className="flex items-center">
                <img src="/images/token-icon.svg" width={24} height={24}></img>
                <p className="text-white font-chakra text-center mx-4">LIVE</p>
              </div>
              <div className="font-chakra">0.3$</div>
            </div>

            <Button
              // disabled={!IS_BUY_TOKEN_ACTIVATED}
              title={!IS_BUY_TOKEN_ACTIVATED ? "Not Available" : ""}
              className={`bg-[#52545A]/25  rounded  capitalize text-base font-bold text-[#4EAF90] ${
                !IS_BUY_TOKEN_ACTIVATED && "cursor-not-allowed"
              }`}
              onClick={connectWallet}
            >
              Buy Token
            </Button>
          </div>
        )}

        <div className="">
          <div className="hidden pb-6 lg:mb-0 md:flex justify-between">
            {expand && (
              <div className="flex">
                <div className="mx-2 xl:mx-4">MAIN MENU</div>
              </div>
            )}

            <div className="">
              <div
                className={`rounded-[8px] grid place-items-center h-[24px] w-[24px] cursor-pointer ${
                  !expand && "rotate-180"
                }`}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6.75C4 6.26675 4.39175 5.875 4.875 5.875H5.75C6.23324 5.875 6.625 6.26675 6.625 6.75V17.25C6.625 17.7333 6.23324 18.125 5.75 18.125H4.875C4.39175 18.125 4 17.7333 4 17.25V6.75Z"
                    fill="#E6E7E7"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M10.9469 7.49718C11.2225 7.22157 11.6938 7.41677 11.6938 7.80655V16.1941C11.6938 16.5838 11.2225 16.7791 10.9469 16.5034L6.75314 12.3097C6.58229 12.1388 6.58229 11.8618 6.75314 11.6909L10.9469 7.49718Z"
                    fill="#E6E7E7"
                    fillOpacity="0.5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.6938 11.5625C18.6938 11.0792 18.3021 10.6875 17.8188 10.6875H12.5688C12.0856 10.6875 11.6938 11.0792 11.6938 11.5625V12.4375C11.6938 12.9208 12.0856 13.3125 12.5688 13.3125H17.8188C18.3021 13.3125 18.6938 12.9208 18.6938 12.4375V11.5625Z"
                    fill="#E6E7E7"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {expand && (
            <div
              className="mt-4 md:mt-0 mb-6 lg:mb-0 flex justify-between cursor-pointer"
              onClick={() => {
                setOpenLiveStreams(!openLiveStreams);
              }}
            >
              <div className="flex">
                {/* <img src={LiveMatche} className="mx-2 xl:mx-4 w-[16px]" /> */}
                <div className="mx-2 xl:mx-4 w-[16px]">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.24571 0.830685C9.1345 0.813176 9.02095 0.817869 8.91154 0.844494C8.80214 0.871119 8.69901 0.919156 8.60807 0.985861C8.51712 1.05257 8.44012 1.13664 8.38148 1.23327C8.32284 1.3299 8.28369 1.4372 8.26628 1.54904C8.24888 1.66089 8.25354 1.77509 8.28002 1.88512C8.30649 1.99515 8.35425 2.09886 8.42058 2.19033C8.48691 2.28179 8.5705 2.35922 8.66658 2.4182C8.76267 2.47718 8.86936 2.51655 8.98057 2.53405C10.5397 2.78655 11.9473 3.61983 12.9235 4.86825C13.8998 6.11667 14.3732 7.68882 14.2496 9.27219C14.1261 10.8556 13.4147 12.3342 12.2567 13.4142C11.0988 14.4942 9.57923 15.0965 8 15.1013C6.73966 15.1015 5.50833 14.7208 4.46576 14.0086C3.42318 13.2964 2.61747 12.2856 2.15314 11.1072C2.11414 10.9987 2.05388 10.8991 1.97591 10.8145C1.89795 10.7298 1.80387 10.6617 1.69926 10.6143C1.59465 10.5669 1.48164 10.5411 1.36693 10.5384C1.25222 10.5357 1.13813 10.5562 1.03145 10.5987C0.924765 10.6412 0.827648 10.7048 0.745857 10.7857C0.664066 10.8667 0.599267 10.9633 0.5553 11.0699C0.511333 11.1765 0.489094 11.2909 0.489901 11.4063C0.490709 11.5217 0.514546 11.6357 0.56 11.7417C1.24659 13.4812 2.51452 14.9256 4.14566 15.8265C5.77679 16.7274 7.66913 17.0284 9.4971 16.6778C11.3251 16.3271 12.9744 15.3467 14.1612 13.9052C15.3481 12.4637 15.9983 10.6513 16 8.77974C15.9999 6.8629 15.3195 5.00904 14.0813 3.55179C12.8431 2.09455 11.1284 1.12963 9.24571 0.830685ZM7.04457 1.49387C7.07274 1.60361 7.07912 1.71785 7.06334 1.83007C7.04756 1.94228 7.00993 2.05027 6.95261 2.14784C6.89529 2.24541 6.8194 2.33066 6.72928 2.39871C6.63916 2.46676 6.53659 2.51626 6.42743 2.5444C6.14111 2.61849 5.86041 2.71298 5.58743 2.82714C5.4835 2.87061 5.37207 2.89307 5.25951 2.89323C5.14695 2.89339 5.03545 2.87126 4.9314 2.82808C4.82735 2.78491 4.73276 2.72155 4.65306 2.64162C4.57335 2.56169 4.51008 2.46675 4.46686 2.36222C4.42363 2.2577 4.4013 2.14564 4.40114 2.03243C4.40098 1.91923 4.42299 1.8071 4.46592 1.70246C4.50885 1.59781 4.57185 1.50269 4.65133 1.42253C4.73081 1.34237 4.82521 1.27873 4.92914 1.23526C5.27429 1.09044 5.632 0.969759 6.00114 0.874361C6.11018 0.846203 6.22366 0.83992 6.33511 0.855873C6.44656 0.871826 6.55379 0.909701 6.65069 0.967336C6.74758 1.02497 6.83223 1.10124 6.89982 1.19178C6.9674 1.28232 7.01659 1.38421 7.04457 1.49387ZM3.64 2.91105C3.79811 3.0751 3.885 3.29558 3.88157 3.52402C3.87814 3.75247 3.78468 3.9702 3.62171 4.12938C3.19677 4.54592 2.83137 5.01977 2.536 5.53736C2.48167 5.63846 2.40779 5.72762 2.3187 5.79958C2.22961 5.87155 2.12711 5.92487 2.01724 5.95642C1.90736 5.98797 1.79231 5.9971 1.67887 5.98328C1.56543 5.96946 1.45589 5.93298 1.35667 5.87596C1.25746 5.81894 1.17059 5.74255 1.10116 5.65128C1.03173 5.56 0.981145 5.45569 0.952385 5.34447C0.923626 5.23325 0.917269 5.11736 0.933689 5.00364C0.95011 4.88991 0.988975 4.78063 1.048 4.68223C1.4223 4.02343 1.88706 3.42098 2.42857 2.89266C2.5917 2.73364 2.81092 2.64626 3.03807 2.64971C3.26522 2.65316 3.48172 2.74715 3.64 2.91105ZM1.04686 6.80282C1.27189 6.83473 1.47511 6.9552 1.61184 7.13776C1.74857 7.32032 1.80762 7.55001 1.776 7.77634C1.73478 8.07145 1.71416 8.3691 1.71429 8.6671C1.71429 8.89573 1.62398 9.11499 1.46323 9.27665C1.30249 9.43831 1.08447 9.52913 0.857143 9.52913C0.629814 9.52913 0.411797 9.43831 0.251051 9.27665C0.0903058 9.11499 0 8.89573 0 8.6671C0 8.28436 0.0262857 7.90622 0.0788571 7.53612C0.110584 7.30981 0.230377 7.10543 0.411899 6.96792C0.59342 6.83041 0.821811 6.77102 1.04686 6.80282ZM5.14286 10.9429V6.61662C5.14296 6.42078 5.19282 6.22821 5.28771 6.05719C5.38259 5.88617 5.51936 5.74237 5.68502 5.63943C5.85069 5.5365 6.03976 5.47784 6.23429 5.46903C6.42883 5.46022 6.62238 5.50154 6.79657 5.58908L11.0983 7.7522C11.2879 7.84776 11.4473 7.99448 11.5587 8.17595C11.6701 8.35741 11.7291 8.56647 11.7291 8.77974C11.7291 8.99301 11.6701 9.20207 11.5587 9.38353C11.4473 9.565 11.2879 9.71172 11.0983 9.80728L6.79657 11.9704C6.62238 12.0579 6.42883 12.0993 6.23429 12.0905C6.03976 12.0816 5.85069 12.023 5.68502 11.92C5.51936 11.8171 5.38259 11.6733 5.28771 11.5023C5.19282 11.3313 5.14296 11.1387 5.14286 10.9429Z"
                      fill="url(#paint0_linear_300_734)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_300_734"
                        x1="8"
                        y1="0.820313"
                        x2="8"
                        y2="16.8203"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4EAF90" />
                        <stop offset="1" stopColor="#B2D5B2" />
                        <stop offset="1" stopColor="#B2D5B2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#4EAF90] to-[#B2D5B2] text-sm font-semibold">
                  Sedona Live
                </span>
                {/* {expand && <img src={LiveMatche1} className="..." />} */}
              </div>

              <div className="">
                <div className="bg-black rounded-[8px] grid place-items-center h-[24px] w-[24px] cursor-pointer">
                  <FaAngleUp
                    size={12}
                    className={`${!openLiveStreams && "rotate-180"}`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* live streams */}
          <div
            className={`${
              expand ? "mr-10 mt-5 gap-2" : "gap-6 items-center"
            } w-full flex flex-col justify-center items-center
            ${!openLiveStreams && "pointer-events-none h-0 opacity-0"}
            `}
          >
            <Button
              onClick={toHamster}
              className={`${
                expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
              } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black`}
            >
              <img
                src="/icons/homepage/hemsters.svg"
                className={`${expand ? "mx-2 xl:mx-4" : ""}`}
              />
              {expand && <p className="mx-1 text-[#F4F4F4]/80">Hamster</p>}
            </Button>

            <Button
              onClick={toBetting}
              className={`${
                expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
              } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black`}
            >
              <img
                src="/icons/homepage/marble-run.svg"
                className={`${expand ? "mx-2 xl:mx-4" : "xl:pr-1"}`}
              />
              {expand && <p className="mx-1  text-[#F4F4F4]/80">Marble Racing</p>}
            </Button>

            <div className="flex w-full gap-1 justify-center items-center">
              <Button
                className={`${
                  expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
                } flex flex-row rounded-[6px] cursor-pointer items-center  capitalize bg-transparent hover:bg-black`}
              >
                <img
                  src="/icons/homepage/rat-roulette.svg"
                  className={`${expand ? "mx-2 xl:mx-4 " : ""}`}
                />
                {expand && (
                  <p className="mx-1  xl:mx-1 whitespace-nowrap text-[#F4F4F4]/60">Rat roulette</p>
                )}
              </Button>
              {expand && (
                <div className="text-[#DFFE0061]/40 drop-shadow-2xl text-[10px] lg:text-[9px] xl:text-[10px] mt-1 font-saira uppercase whitespace-nowrap">
                  Coming Soon
                </div>
              )}
            </div>
            <div className="flex w-full gap-1 justify-center items-center">
              <Button
                className={`${
                  expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
                } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black `}
              >
                <img
                  src="/icons/homepage/turtle-beam.svg"
                  className={`${expand ? "mx-2 xl:mx-4" : ""}`}
                />
                {expand && <p className="mx-1 text-[#F4F4F4]/60">Turtle</p>}
              </Button>
              {expand && (
                <div className="text-[#DFFE0061]/40 whitespace-nowrap drop-shadow-2xl text-[10px] mt-1 font-saira uppercase">
                  Coming Soon
                </div>
              )}
            </div>
          </div>

          <div
            className={`${
              expand ? "mr-10 mt-2 gap-2" : "mt-6 gap-6 items-center justify-center"
            } w-full flex flex-col gap-2 xl:justify-center  xl:pr-2`}
          >
            <Button
              className={`${
                expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
              } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black`}
            >
              <img
                src="/icons/homepage/favorites.svg"
                className={`${expand ? "mx-2 xl:mx-4" : ""}`}
              />
              {expand && <p className="mx-1 text-[#FFFFFF]/40">My Favorites</p>}
            </Button>

            <Button
              className={`${
                expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
              } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black`}
            >
              <img
                src="/icons/homepage/recent.svg"
                className={`${expand ? "mx-2 xl:mx-4" : ""}`}
              />
              {expand && <p className="mx-1 text-[#FFFFFF]/40">Recent Games</p>}
            </Button>
            <div className="flex justify-center items-center w-full">
              <Button
                className={`${
                  expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
                } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black`}
              >
                <img
                  src="/icons/homepage/rooms.svg"
                  className={`${expand ? "mx-2 xl:mx-4" : ""}`}
                />
                {expand && (
                  <p className="mx-1 whitespace-nowrap text-[#FFFFFF]/60 font-chakra">
                    Sedona Rooms
                  </p>
                )}
              </Button>
              {expand && (
                <div className="text-[#DFFE0061]/40 drop-shadow-2xl text-[10px] md:text-[8px] lg:text-[7px] xl:text-[10px] mt-1 font-saira uppercase whitespace-nowrap ">
                  Coming Soon
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <Button
                className={`${
                  expand ? "w-full h-[40px] p-0" : "p-0 w-fit"
                } flex flex-row rounded-[6px] cursor-pointer items-center justify-start capitalize bg-transparent hover:bg-black`}
              >
                <img
                  src="/icons/homepage/sports.svg"
                  className={`${expand ? "mx-2 xl:mx-4" : ""}`}
                />
                {expand && <p className="mx-1 text-[#FFFFFF]/60 ">Sports</p>}
              </Button>
              {expand && (
                <div className="text-[#DFFE0061]/40 whitespace-nowrap drop-shadow-2xl text-[10px]  mt-1  font-saira  uppercase">
                  Coming Soon
                </div>
              )}
            </div>
          </div>
          <div className=""></div>
        </div>

        {expand ? (
          <a
            href="http://onramper.com/try"
            target="_blank"
            rel="noreferrer"
            className="hidden xl:block"
          >
            <div className="basis-1/4 flex flex-col justify-between backdrop-blur-sm bg-[#403163]/5">
              <img src="/images/onramp.svg"></img>
            </div>
          </a>
        ) : (
          <Button
            className={`${
              expand ? "w-full h-[40px] p-0" : "p-0 flex justify-center w-full"
            } flex flex-row rounded-[6px] cursor-pointer items-center justify-center capitalize bg-transparent hover:bg-black xl:pr-3`}
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.89062 2.09082H10.1113V9.90808H5.89062V2.09082Z"
                fill="#FF5F00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.32459 5.99992C6.32353 4.47471 6.94096 3.03366 7.99899 2.09198C6.20157 0.490141 3.6204 0.723462 2.06946 2.62797C0.518515 4.53247 0.518515 7.46874 2.06946 9.37325C3.6204 11.2778 6.20157 11.5111 7.99899 9.90924C6.94063 8.96725 6.32315 7.5256 6.32459 5.99992Z"
                fill="#EB001B"
              />
              <path
                d="M14.6798 9.27895V8.95396H14.7468V8.88672H14.5874V8.95396H14.6504V9.27895H14.6798ZM14.9893 9.27895V8.88672H14.941L14.8848 9.16688L14.8285 8.88672H14.7803V9.27895H14.8151V8.98197L14.8674 9.23692H14.9035L14.9558 8.98197V9.27895H14.9893Z"
                fill="#F79E1B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0914 5.9989C15.0914 7.90225 14.133 9.63849 12.6233 10.4702C11.1135 11.302 9.31755 11.0832 7.99805 9.90685C9.05561 8.96436 9.6731 7.5235 9.6731 5.99821C9.6731 4.47293 9.05561 3.03207 7.99805 2.08958C9.31755 0.913212 11.1135 0.694444 12.6233 1.52619C14.133 2.35794 15.0914 4.09418 15.0914 5.99752V5.9989Z"
                fill="#F79E1B"
              />
            </svg>
          </Button>
        )}

        <div className="hidden w-full mt-10">
          <div className="flex flex-row w-full justify-between cursor-pointer">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/livestream1.svg"
                style={{ width: "22px", height: "22px" }}
              />
              <p className="ml-2 text-[#858585] text-md">Live Stream</p>
            </div>
            <img src="/icons/chevron-right.svg" width={5} height={8} />
          </div>
          <div className="flex flex-row w-full justify-between cursor-pointer mt-4">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/stats.svg"
                style={{ width: "21px", height: "21px" }}
              />
              <p className="ml-2 text-[#858585] text-md">Stats</p>
            </div>
            <img src="/icons/chevron-right.svg" width={5} height={8} />
          </div>
          <div className="flex flex-row w-full justify-between cursor-pointer mt-4">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/staking.svg"
                style={{ width: "21px", height: "21px" }}
              />
              <p className="ml-2 text-[#858585] text-md">Staking</p>
            </div>
            <img src="/icons/chevron-right.svg" width={5} height={8} />
          </div>
          <div className="flex flex-row w-full justify-between cursor-pointer mt-4">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/referral.svg"
                style={{ width: "21px", height: "21px" }}
              />
              <p className="ml-2 text-[#858585] text-md">Referral</p>
            </div>
            <img src="/icons/chevron-right.svg" width={5} height={8} />
          </div>
          <div className="flex flex-row w-full justify-between cursor-pointer mt-4">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/analytics.svg"
                style={{ width: "21px", height: "21px" }}
              />
              <p className="ml-2 text-[#858585] text-md">Analytics</p>
            </div>
            <img src="/icons/chevron-right.svg" width={5} height={8} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  expand: PropTypes.bool.isRequired,
  setExpand: PropTypes.func.isRequired,
};
