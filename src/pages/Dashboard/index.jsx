import React, { useState } from "react";
import { useRouter } from "../../hooks/use-router";
import Header from "../../components/header";
import abox from "/images/abox.svg";
import Boxx from "/images/Boxx.svg";
import Team from "/images/Team.svg";
import Copy from "/images/Copy.svg";

const Dashboard = () => {
  const router = useRouter();
  const [page, setPage] = useState("dashboard");
  // flex md:min-w-[250px] justify-start  md:ml-[24px] items-start w-full md:w-auto
  return (
    <div className="bg-black w-full h-screen">
      <Header />
      <div className="mt-6 relative flex justify-center flex-wrap md:flex-nowrap  items-center  w-full">
        <div className="md:flex   hidden absolute left-0 md:top-[1/2px] ">
          <p className=" bg-[#52545A40] text-[#DFFE00] px-[35.5px] py-4 font-sans uppercase font-[400] text-[18px] rounded-full w-auto">
            Start Betting
          </p>
        </div>

        <div className="flex py-[26px] px-[16px] gap-[8px] justify-center items-center w-full">
          <button
            onClick={() => setPage("dashboard")}
            className={`cursor-pointer rounded-[8px] ${
              page === "dashboard"
                ? "bg-[#DFFE00] text-[#000000]"
                : " text-[#DFFE00] bg-[#52545A40]"
            }`}
          >
            <div className="flex justify-center items-center gap-[5px] my-[26px] mx-[16px]">
              <svg
                stroke="currentColor"
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.44141 0.857031C7.94414 0.582813 8.55234 0.582813 9.05859 0.857031L15.2215 4.22148C15.4008 4.31992 15.5133 4.50977 15.5133 4.71367C15.5133 4.91758 15.4008 5.10742 15.2215 5.20586L8.5207 8.86211C8.35195 8.95352 8.15156 8.95352 7.98281 8.86211L1.27852 5.20586C1.09922 5.10742 0.986719 4.91758 0.986719 4.71367C0.986719 4.50977 1.09922 4.31992 1.27852 4.22148L7.44141 0.857031ZM1.2082 6.47148L7.3957 9.84648C7.575 9.94492 7.6875 10.1348 7.6875 10.3387V17.9324C7.6875 18.1293 7.58203 18.3156 7.41328 18.4176C7.24453 18.5195 7.03008 18.523 6.85781 18.4281L1.25391 15.3695C0.7125 15.0742 0.375 14.5082 0.375 13.8895V6.96367C0.375 6.7668 0.480469 6.58047 0.649219 6.47852C0.817969 6.37656 1.03242 6.37305 1.20469 6.46797L1.2082 6.47148ZM15.2953 6.47148C15.4711 6.37656 15.682 6.38008 15.8508 6.48203C16.0195 6.58398 16.125 6.7668 16.125 6.96719V13.8895C16.125 14.5082 15.7875 15.0742 15.2461 15.3695L9.6457 18.4246C9.46992 18.5195 9.25898 18.516 9.09023 18.4141C8.92148 18.3121 8.81602 18.1293 8.81602 17.9289V10.3387C8.81602 10.1312 8.92852 9.94492 9.10781 9.84648L15.2953 6.47148Z"
                  fill="#DFFE00"
                />
              </svg>
              <p className="text-[18px] font-inter font-[800] ">DASHBOARD</p>
            </div>
          </button>
          <button
            onClick={() => setPage("referral")}
            className={`cursor-pointer rounded-[8px] ${
              page === "referral"
                ? "bg-[#DFFE00] text-[#000000]"
                : " text-[#DFFE00] bg-[#52545A40]"
            }`}
          >
            <div className="flex justify-center items-center gap-[5px] my-[26px] mx-[16px]">
              <svg
                stroke="currentColor"
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7812 3.02637C12.7812 2.65341 12.6331 2.29572 12.3694 2.032C12.1056 1.76828 11.748 1.62012 11.375 1.62012C11.002 1.62012 10.6444 1.76828 10.3806 2.032C10.1169 2.29572 9.96875 2.65341 9.96875 3.02637C9.96875 3.39933 10.1169 3.75701 10.3806 4.02074C10.6444 4.28446 11.002 4.43262 11.375 4.43262C11.748 4.43262 12.1056 4.28446 12.3694 4.02074C12.6331 3.75701 12.7812 3.39933 12.7812 3.02637ZM5.1875 7.80762C5.56046 7.80762 5.91815 7.65946 6.18187 7.39574C6.44559 7.13201 6.59375 6.77433 6.59375 6.40137C6.59375 6.02841 6.44559 5.67072 6.18187 5.407C5.91815 5.14328 5.56046 4.99512 5.1875 4.99512C4.81454 4.99512 4.45685 5.14328 4.19313 5.407C3.92941 5.67072 3.78125 6.02841 3.78125 6.40137C3.78125 6.77433 3.92941 7.13201 4.19313 7.39574C4.45685 7.65946 4.81454 7.80762 5.1875 7.80762ZM1.25 15.1201C0.627734 15.1201 0.125 15.6229 0.125 16.2451C0.125 16.8674 0.627734 17.3701 1.25 17.3701H21.5C22.1223 17.3701 22.625 16.8674 22.625 16.2451C22.625 15.6229 22.1223 15.1201 21.5 15.1201H1.25ZM17.5625 7.80762C17.9355 7.80762 18.2931 7.65946 18.5569 7.39574C18.8206 7.13201 18.9688 6.77433 18.9688 6.40137C18.9688 6.02841 18.8206 5.67072 18.5569 5.407C18.2931 5.14328 17.9355 4.99512 17.5625 4.99512C17.1895 4.99512 16.8319 5.14328 16.5681 5.407C16.3044 5.67072 16.1562 6.02841 16.1562 6.40137C16.1562 6.77433 16.3044 7.13201 16.5681 7.39574C16.8319 7.65946 17.1895 7.80762 17.5625 7.80762ZM7.15625 11.5166L8.10195 13.2709C8.32344 13.6822 8.8332 13.8334 9.24453 13.6154C9.65586 13.3975 9.80703 12.8842 9.58906 12.4729L8.31289 10.0998C8.37266 10.04 8.42539 9.97324 8.46406 9.8959L9.40625 8.1416V10.0576C9.40625 10.6799 9.90898 11.1826 10.5312 11.1826H12.2188C12.841 11.1826 13.3438 10.6799 13.3438 10.0576V8.1416L14.2895 9.8959C14.3316 9.97324 14.3809 10.04 14.4406 10.0998L13.1645 12.4729C12.943 12.8842 13.0977 13.3939 13.509 13.6154C13.9203 13.8369 14.4301 13.6822 14.6516 13.2709L15.5938 11.5166V12.8701C15.5938 13.4924 16.0965 13.9951 16.7188 13.9951H18.4062C19.0285 13.9951 19.5312 13.4924 19.5312 12.8701V11.5166L20.477 13.2709C20.6984 13.6822 21.2082 13.8334 21.6195 13.6154C22.0309 13.3975 22.182 12.8842 21.9641 12.4729L20.6316 10.0014C20.0938 8.99941 19.0461 8.37363 17.907 8.37363H17.218C16.6449 8.37363 16.0965 8.53184 15.6219 8.8166L14.4406 6.62637C13.9027 5.62441 12.8551 4.99863 11.716 4.99863H11.0305C9.89141 4.99863 8.84727 5.62441 8.30586 6.62637L7.12461 8.8166C6.65 8.53184 6.10156 8.37363 5.52852 8.37363H4.84297C3.70391 8.37363 2.65977 8.99941 2.11836 10.0014L0.789453 12.4693C0.567969 12.8807 0.722656 13.3904 1.13398 13.6119C1.54531 13.8334 2.05508 13.6787 2.27656 13.2674L3.21875 11.5166V12.8701C3.21875 13.4924 3.72148 13.9951 4.34375 13.9951H6.03125C6.65352 13.9951 7.15625 13.4924 7.15625 12.8701V11.5166Z"
                  fill="black"
                />
              </svg>

              <p className="text-[16px] md:text-[18px] font-inter font-[800] ">
                REFERRALS
              </p>
            </div>
          </button>
        </div>
      </div>

      {page === "dashboard" ? (
        <div
          className={`bg-[#0D0F11]  mt-[2px] pb-[48px]  w-full h-full max-h-[600px]`}
        >
          <div className="mx-[17px] mb-[48px]  border-[#00FFA333] border-[0.5px] border-solid rounded-[6px] h-full">
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center mt-[9xpx] gap-3">
                <img src={Boxx} alt="" className="" />
                <p className="font-poppins uppercase font-[400] text-[36px] text-[#B1B6C6]">Bet History</p>
              </div>
              <div className="bg-[#16202B66] flex max-w-[500px] mt-6 w-full flex-col items-center">
                <div className="flex justify-start font-poppins font-[400] text-[17px] text-[#B1B6C6] w-full items-center pl-16">
                  Bet History
                </div>
                <div className="flex overflow-auto h-full items-center  mt-2 mpl-8 gap-3 w-full">
<p className="bg-[#14202D] text-[14px] font-[400] font-poppins text-[#B1B6C6] px-8 py-[1] rounded-[2px]">Race #</p>
                
<p className="bg-[#14202D] text-[14px] font-[400] font-poppins text-[#B1B6C6] px-8 py-[1] rounded-[2px]">Date</p>
                
                
<p className="bg-[#14202D] text-[14px] font-[400] font-poppins text-[#B1B6C6] px-8 py-[1] rounded-[2px]">$</p>
                
                
<p className="bg-[#14202D] text-[14px] font-[400] font-poppins text-[#B1B6C6] px-8 py-[1] rounded-[2px]">Status</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`bg-[#0D0F11]  mt-[2px] pb-[48px]  w-full h-full max-h-[600px]`}
        >
          <div className=" mx-[17px] mb-[48px]  border-[#00FFA333] border-[0.5px] border-solid rounded-[6px] h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 justify-center">
                <img src={Team} alt="" className="" />
                <p className="text-[36px] font-[800] text-[#B1B6C6] font-inter">
                  Referrals
                </p>
              </div>
              <p className="text-[#B1B6C6] text-[24px] font-normal font-sans">
                Refferals.
              </p>
              <div className="flex justify-center  md:max-w-[687px] w-auto px-10 md:px-20 items-center bg-[#16202B66]">
                <div className="flex justify-center flex-col items-center py-2">
                  <h1 className="text-[18px] text-[#B1B6C6] font-normal font-sans">
                    Your Code
                  </h1>
                  <p className="mt-2 text-[14px] text-[rgb(177,182,198)] text-center font-normal font-sans  ">
                    Share this code with your friends to earn 1% of their
                    profits!
                  </p>
                  <div className="text-[#B1B6C6] mt-2 p-[9px] bg-[#14202D] border border-[#3C4450] rounded-[12px] text-[18px] md:text-[36px] font-400 fomt-sans">
                    98mpw974
                  </div>
                  <div className=" mt-2 flex items-center justify-center gap-2">
                    <div className="bg-[#14202D] p-2 text-[14px] md:text-[18px] font-normal font-sans text-[#B1B6C6] ">
                      https://sedona.games/?r=98mpw974
                    </div>
                    <button
                      className="bg-[#14202D] border border-[#3C4450] flex justify-center flex-col items-center 
                py-2 text-[#B1B6C6] text-[12px] font-[400] font-sans px-[6.5px] rounded-[6px]"
                    >
                      COPY
                      <img src={Copy} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center   flex-col w-full mt-2 bg-[#16202B33] justify-cente">
              <div className="flex justify-start max-w-[650px] w-full">
                <p className="font-poppins text-[#B1B6C6]   font-[400] text-[18px]">
                  Referral History
                </p>
              </div>
              <div className="flex items-center  overflow-auto w-full justify-center space-x-2">
                <div className="bg-[#14202D] ml-16 md:ml-0 px-6 md:px-8 py-[1] rounded-[2px]">
                  <p className="text-[14px] font-[400]  font-poppins text-[#B1B6C6]">
                    Date
                  </p>
                </div>
                <div className="bg-[#14202D] px-6 md:px-8 py-[1] rounded-[2px]">
                  <p className="text-[14px] font-[400]  font-poppins text-[#B1B6C6]">
                    Amount Received
                  </p>
                </div>
                <div className="bg-[#14202D] px-6 md:px-8 py-[1] rounded-[2px]">
                  <p className="text-[14px] font-[400]  font-poppins text-[#B1B6C6]">
                    Race ID
                  </p>
                </div>
                <div className="bg-[#14202D] px-6 md:px-8 py-[1] rounded-[2px]">
                  <p className="text-[14px] font-[400]  font-poppins text-[#B1B6C6]">
                    User ID
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
