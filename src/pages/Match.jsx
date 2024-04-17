/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { transferSol } from "../contract/bean";
import NotificationDialog from "../components/notificationModal";
import axios from "axios";
import { BASE_URL, GAMES } from "../lib/config";
import Layout from "../components/layout";
import Box from "/images/Box.svg";
import Margin from "/images/Star.svg";
import { useBet } from "../hooks/useBet";
import { supabase } from "../lib/supabaseClient";
import { useSupaAuth } from "../hooks/useSupaAuth";
import { shortenAddress } from "../lib/helper";

// import * as anchor from "@project-serum/anchor";
// import { useUserSOLBalanceStore } from '../wallet/useUserSOLBalanceStore';
// import { useRouter } from "../hooks/use-router";
// import LiveChat from "../components/LiveChat/LiveChat";
// import { Button } from "@material-tailwind/react";
// import { FaTimes } from "react-icons/fa";
// import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
// import Header from "../components/header";

const MARBLES = [
  {
    icon: "/icons/tokyo-circle.svg",
    name: "Tokyo",
    color: "#EB5757",
    winner: true,
    text:"Marble Make",
    weight: "0.8g"
  },
  {
    icon: "/icons/moscow-circle.svg",
    name: "Moscow",
    color: "#D7D7D7",
    winner: false,
    text:"Marble Make",
    weight: "0.8g"
    },
  {
    icon: "/icons/cairo-circle.svg",
    name: "Cairo",
    color: "#634CF2",
    winner: false,
    text:"Marble Make",
    weight: "0.8g"
  },
  {
    icon: "/icons/newyork-circle.svg",
    name: "NewYork",
    color: "#F2C94C",
    winner: false,
    text:"Marble Make",
    weight: "0.8g"
  },
  {
    icon: "/icons/capetown-circle.svg",
    name: "CapeTown",
    color: "#BF2FED",
    winner: false,
    text:"Marble Make",
    weight: "0.8g"
  },
  {
    icon: "/icons/riodejaneiro-circle.svg",
    name: "RiodeJaneiro",
    color: "#2F80ED",
    winner: false,
    text:"Marble Make",
    weight: "0.8g"
  },
  {
    icon: "/icons/paris-circle.svg",
    name: "Paris",
    color: "#27AE60",
    winner: false,
    text:"Marble Make",
    weight: "0.8g"
  },
  {
    icon: "/icons/sydney-circle.svg",
    name: "Sydney",
    color: "#AE6027",
    winner: false,
    text:"Marble Make",
    weight: "0.8g",
  },
];

const HEMSTARS = [
  {
    // icon: "/images/ckay.svg",
    icon: "/images/new.svg",
    name: "Ckay",
    color: "#CB031A",
    weight: "80g",
    winner: true,
    text:"Hamster Breed",
  },
  {
    icon: "/images/larry.svg",
    name: "Larry",
    color: "#04E6EA",
    weight: "60g",
    winner: false,
    text:"Hamster Breed",
  },
  {
    icon: "/images/sergeant.svg",
    name: "Sergeant",
    color: "#F4BF04",
    weight: "45g",
    winner: false,
    text:"Hamster Breed",
  },
  {
    // id: 4,
    icon: "/images/rookie.svg",
    name: "Rookie",
    color: "#0EE520",
    weight: "50g",
    winner: false,
    text:"Hamster Breed",
  },
];

// const channel = "bobbypoffgaming";
// const channel = "";

const Match = () => {
  // const router = useRouter();
  const { matchId } = useParams();
  const game = GAMES.find(game => game.id === matchId);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ title: "", body: "" });
  const [walletBalance, setWalletBalance] = useState(0);
  const [isAdmin, setAdmin] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  const [updateBalance, setUpdateBalace] = useState(false);
  // const [openChat, setOpenChat] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(true);
  const [expand, setExpand] = useState(true);

  console.log("game");
  console.log(game);

  // handleResize
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpand(true);
      } else {
        // setExpand(false);
        // setOpenChat(false);
      }

      if (window.innerWidth > 767 && window.innerWidth < 1024) {
        // alert("yse");
        setIsTablet(true);
      } else {
        // setIsTablet(false);
      }

      // if (window.innerWidth < 768) {
      //   // setIsMobile(true);
      //   // setOpenChat(true);
      //   return;
      // }
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

  useEffect(() => {
    if (matchId === "bet") {
      setItemsList(MARBLES);
    } else {
      setItemsList(HEMSTARS);
    }
  }, [matchId]);

  const SOLANA_HOST = clusterApiUrl("devnet");
  const connection = useMemo(() => new Connection(SOLANA_HOST), [SOLANA_HOST]);
  const wallet = useWallet();
  const admin_wallet = "3dQpUZtmujzzCZdRXyveTdBS2w6ykncdXG5JjtDbHU7f";

  useEffect(() => {
    if (wallet.publicKey == admin_wallet) {
      setAdmin(true);
    }
  }, [wallet]);

  const fetchBalance = useCallback(async () => {
    try {
      const balance1 = await connection.getBalance(wallet.publicKey);
      console.log("balance wallet>>>>>>", balance1 / LAMPORTS_PER_SOL);
      setWalletBalance(balance1 / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error("Error fetching balance:", error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, wallet, updateBalance]);

  useEffect(() => {
    fetchBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, updateBalance]);

  const [, setOnBetting] = useState(false);
  useEffect(() => {
    const initSetting = async () => {
      const url = `${BASE_URL}/api/init?query=${matchId}`;
      await axios
        .get(url)
        .then((data) => {
          const data_t = data.data;
          const bettingFlagKey = `betting_${
            matchId === "harybet" ? "hamster" : "marble"
          }_Flag`;
          const bettingFlag = data_t.msg[bettingFlagKey];
          console.log("bettingFlag1: ", bettingFlag);
          const last_sequence = data_t.msg.last_betting_result;
          const sortedArray = last_sequence
            .map((name, index) => ({ name, index }))
            .filter((item) => item?.name !== "") // Remove empty strings
            .sort(
              (a, b) =>
                last_sequence.indexOf(a.name) - last_sequence.indexOf(b.name)
            )
            ?.map((item) => itemsList.find((obj) => obj.name === item?.name));
          if (sortedArray?.[0]?.icon) {
            setOnBetting(bettingFlag);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    initSetting();
  }, [matchId, itemsList]);

  return (
    <>
      <NotificationDialog
        open={open}
        setOpen={setOpen}
        title={message.title}
        body={message.body}
      />

      <Layout
        // onBetting = {onBetting}
        isAdmin={isAdmin}
        expand={expand}
        setExpand={setExpand}
        leftSide={
          <>
            <SideBar itemsList={itemsList} matchId={matchId} />
          </>
        }
      >
        <div className="flex">
          <div className="w-full pt-[300px] md:pt-0 h-[calc(100vh-80px-80px-30px)] md:h-full overflow-auto">
            <div className="absolute md:static top-0 left-0 w-full h-[40%] md:h-full">
              <ReactTwitchEmbedVideo
                width={"100%"}
                height={isTablet ? 300 : 400}
                layout="video"
                theme="dark"
                channel={game.channel}
              />
            </div>

            {/* <div className="hidden lg:block">
              <ReactTwitchEmbedVideo
                width={"100%"}
                height={400}
                layout="video"
                theme="dark"
                channel={channel}
              />
            </div> */}

            {/* <div className="rounded-[12px] bg-gradient-to-br from-[#52545A] via-[#373C48] to-[#272E3E] mt-5 md:px-6 px-3 py-3 flex flex-col justify-between w-full border-[#00FFA320] border">
              <div className="flex flex-col md:flex-row">
                <div className="basis-[60%]">
                  <p className="text-white mt-2">
                    {matchId === "bet"
                      ? "Choose your winner"
                      : "Pick your winner"}
                  </p>
                  <img
                    src="/images/borderline.svg"
                    alt="no image"
                    className="my-2 w-full"
                  />
                  <br />
                  <div className="w-full grid grid-cols-2 gap-2">
                    {itemsList.map((item, i) => {
                      return matchId === "bet" ? (
                        <div
                          key={`choose_hemstar-${i + 1}`}
                          id={item?.name}
                          onClick={() => {
                            setPebble(i + 1);
                          }}
                          className={clsx(
                            "text-white border border-1  h-[48px] flex flex-row items-center gap-x-2 p-1 rounded m-3",
                            pebbleNumber === i + 1
                              ? "bg-black"
                              : " to-[#B2D5B2]"
                          )}
                        >
                          <img
                            src={MARBLES[i].icon}
                            className="relative left-0 "
                          />
                          <div>{item?.name}</div>
                        </div>
                      ) : (
                        <div
                          key={`choose_hemstar-${i + 1}`}
                          id={item?.name}
                          onClick={() => {
                            setPebble(i + 1);
                          }}
                          className={clsx(
                            "text-white border border-1 h-[96px] flex flex-col items-center gap-y-2 p-1 rounded m-5",
                            pebbleNumber === i + 1 ? "bg-black" : "to-[#B2D5B2]"
                          )}
                        >
                          <img
                            src={HEMSTARS[i].icon}
                            className="relative left-0"
                          />
                          <div>{item?.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[2px] bg-[#A2A1E5] ml-2 mr-4"></div>
                <div className="flex flex-col md:w-[40%]">
                  <p className="text-white mt-2">Enter your bet</p>
                  <img
                    src="/images/borderline.svg"
                    alt="no image"
                    className="my-2 w-full"
                  />
                  <div className="flex justify-between flex-col my-2 gap-y-2">
                    <div className="flex justify-end">
                      <div className="flex flex-row ">
                        <img
                          src="/images/wallet.svg"
                          alt=""
                          style={{ width: "12px", height: "12px" }}
                        />
                        <p className="font-bold text-white text-xs text-[#FFFFFF40] mx-2">
                          {walletBalance}SOL
                        </p>
                      </div>
                    </div>
                    <div className="bg-black rounded-[16px] flex flex-row p-3 gap-1 items-center ">
                      <div className="flex flex-row bg-[#805BEB26] basis-1/2 px-2 items-center rounded">
                        <img
                          src="/images/Solana.svg"
                          style={{ width: "36px", height: "20px" }}
                        ></img>
                        <p className="px-5 font-bold">SOL</p>
                        <img
                          src="/images/array.svg"
                          alt=""
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                      <input
                        className="py-1 px-2 text-[#FFFFFF40] basis-1/2 font-bold text-1xl bg-black active:bg-transparent md:w-16 w-14 text-center"
                        value={solValue}
                        onChange={onInputSol}
                      ></input>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex flex-row ">
                        <p
                          onClick={onMax}
                          className="font-bold text-white text-xs text-[#FFFFFF40] mx-2 bg-[#D9D9D90D]"
                        >
                          MAX
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center my-7">
                    <div
                      onClick={onPlaceBet}
                      className="flex flex-row bg-[#000000] rounded-[12px] justify-center w-full items-center py-3 px-7 cursor-pointer border border-[#B2D5B2]"
                    >
                      <p className="text-[#fafafa] ml-3 font-bold">Place Bet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="_h-[60%] overflow-auto md:h-full md:overflow-visible">
              <div className="mt-[36px] w-full md:h-auto border-[0.5px] border-[#4EAF90] border-solid">
                <div className="flex justify-between items-center mt-4 w-full px-6">
                  <p className="font-inter font-normal text-[#FFFFFF] text-[12px]">
                    Pick your winner
                  </p>
                  <div className="flex justify-center items-center gap-[6px]">
                    <img src={Box} alt="" className="" />
                    <p className="text-[#FFFFFF40] font-inter font-normal text-[12px] ">
                      {walletBalance} SOL
                    </p>
                  </div>
                </div>

                <div className="flex w-full h-auto items-center  ">
                  <div className="overflow-x-auto max-w-[100vw] md:px-10 lg:px-0 h-auto items-center flex gap-[5px] mb-10 ml-2 w-full">
                    {itemsList &&
                      itemsList.map((game, index) => {
                        return (
                          <div
                            key={`bet-game-${game?.name || index}`}
                            className="max-w-[300px] min-w-[145px] lg:w-full w-fit flex-col flex items-center justify-center"
                          >
                            <BetComp
                              matchId={matchId}
                              admin_wallet={admin_wallet}
                              index={index}
                              game={game}
                              setMessage={setMessage}
                              walletBalance={walletBalance}
                              setUpdateBalace={setUpdateBalace}
                              updateBalance={updateBalance}
                              open={open}
                              setOpen={setOpen}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>

            <br className="hidden md:block" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Match;

const SideBar = ({ itemsList, matchId }) => {
  const [match, setMatch] = useState(null);
  const [statDetails, setStatDetails] = useState(null);
  const [selectedStat, setSelectedStat] = useState(HEMSTARS[0]);

  useEffect(() => {
    const match = GAMES.find((game) => game.id === matchId);
    setMatch(match);
  }, [matchId]);

  useEffect(() => {
    if (!selectedStat) return;

    const fetch = async () => {
      const pebble_number_detail =
        itemsList.findIndex((marble) => marble.name === selectedStat.name) + 1;

      const url = `${BASE_URL}/onViewStat?query=${matchId}&number=${pebble_number_detail}`;
      try {
        const res = await axios.get(url);
        if (res) {
          setStatDetails(res?.data?.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStat]);

  useEffect(() => {
    if (matchId === "bet") {
      setSelectedStat(MARBLES[0]);
    } else {
      setSelectedStat(HEMSTARS[0]);
    }
  }, [matchId]);

  useEffect(() => {
    if (selectedStat) {
      const detailsSection = document.querySelector("#detailsSection");
      if (detailsSection) {
        // detailsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedStat]);

  function onViewState(pebble_number_detail) {
    axios
      .get(
        `${BASE_URL}/api/onViewStat?query=${matchId}&number=${pebble_number_detail}`
      )
      .then((data) => {
        var data_t = data.data;
        console.log("data_t");
        console.log(data_t);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex flex-col bg-gradient-to-br p-2 w-full h-full gap-y-[35px] bg-[#0D0F11] rounded">
      <div className="p-2 m-8 md:m-2 border-2 border-[#C88300]">
        <div className="flex items-center justify-between w-full">
          <p className="text-white text-[42.65px] font-semibold">
            {itemsList.length}
          </p>
          <div className="flex items-center gap-[6px] font-chakra font-semibold text-sm">
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3088 5.47874C10.1625 4.36909 9.67409 3.34092 8.91889 2.55261C8.16368 1.7643 7.18354 1.25959 6.12943 1.11622C5.07532 0.972852 4.00573 1.19878 3.08542 1.7592C2.16512 2.31962 1.44514 3.18345 1.03641 4.21761M0.737305 1.69536L0.737305 4.21761H3.13017M0.737305 6.73987C0.883604 7.84952 1.37197 8.87769 2.12718 9.666C2.88238 10.4543 3.86253 10.959 4.91664 11.1024C5.97075 11.2458 7.04033 11.0198 7.96064 10.4594C8.88095 9.89898 9.60092 9.03516 10.0097 8.00099M10.3088 10.5232V8.00099H7.9159"
                stroke="white"
                strokeWidth="1.13115"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-white">23:20:19</p>
          </div>
        </div>

        <p className="text-[#F2F2F2] text-[20px] font-bold p-0">
          {match?.name}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="h-[1px] bg-white w-16"></div>
        <p className="text-white whitespace-nowrap mx-2">
          Last {match?.name} Stat
        </p>
        <div className="h-[1px] bg-white w-16"></div>
      </div>
      <div className="flex flex-col px-0 gap-y-[5px] pr-2">
        {itemsList.map((item, i) => {
          return (
            <div
              key={`hemstars_${i + 1}`}
              className={`${
                selectedStat.name === item?.name
                  ? "bg-gradient-to-b from-[#4EAF90] to-[#B2D5B2]"
                  : "bg-[#3d3d3d]"
              } p-[1px] rounded-[5px] transition-all duration-300 cursor-pointer`}
              onClick={() => {
                onViewState(i + 1);
                setSelectedStat(item);
              }}
            >
              <div className="flex flex-row items-center rounded-[5px] p-[7px] bg-[#0F1113]">
                <p className="font-black text-[15px] text-white mr-[10px]">
                  {i + 1}
                </p>

                <img
                  src={item?.icon}
                  className={`w-[19px] h-[19px] mr-[10px] ${
                    match?.id === "harybet" &&
                    "w-[40px] h-auto lg:w-[56px] lg:h-[47px]"
                  }`}
                ></img>

                <div
                  className={`flex ${
                    match?.id === "harybet"
                      ? "flex-col-reverse items-center"
                      : "items-center"
                  }`}
                >
                  <p
                    className={`py-[5px] px-2 !bg-opacity-20 font-bold mr-1 cursor-pointer`}
                    style={{
                      backgroundColor: `${item?.color}50`,
                      color: item?.color,
                    }}
                    onClick={() => {
                      onViewState(i + 1);
                      setSelectedStat(item);
                    }}
                  >
                    {item?.name}
                  </p>

                  {i === 0 && (
                    <img
                      src="/images/cup.svg"
                      style={{ width: "14px", height: "14px" }}
                    ></img>
                  )}
                </div>
                <div className="flex-1" />

                {/* <p
                  className={`hidden lg:block ${
                    selectedStat.name === item?.name
                      ? "text-white"
                      : "text-[#515151]"
                  } text-[8.9px] font-semibold underline ml-3 cursor-pointer select-none whitespace-nowrap mr-[25px]`}
                >
                  View stats
                </p> */}
              </div>
            </div>
          );
        })}
      </div>

      {selectedStat && (
        <div className="pb-10" id={`detailsSection`}>
          <div className="mt-10 flex flex-row items-center justify-center gap-x-3">
            <div className="h-[1px] bg-white w-16"></div>
            <p className="text-white">Detailed Stat</p>
            <div className="h-[1px] bg-white w-16"></div>
          </div>

          <div className="flex items-center justify-center gap-x-[8.87px] mt-6">
            <img src={selectedStat?.icon} alt="" className="w-[60px] h-auto" />

            <div
              className="h-[42px] min-w-[75px] px-4 shadow-[0px_0px_9.9px_0px_rgba(0,_0,_0,_0.30)] grid place-items-center text-[21.02px] font-bold"
              style={{
                backgroundColor: `${selectedStat?.color}20`,
                color: `${selectedStat?.color}`,
              }}
            >
              {selectedStat.name}
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mt-4">
            <div className="rounded-[1px] bg-[#131518] min-w-[105.88px] h-[51.46px] grid place-items-center font-bold text-sm">
              <div className="font-chakra">WON</div>
              <div className="">0</div>
            </div>
            <div className="rounded-[1px] bg-[#131518] min-w-[105.88px] h-[51.46px] grid place-items-center font-bold text-sm">
              <div className="font-chakra">LOST</div>
              <div className="">0</div>
            </div>
            <div className="rounded-[1px] bg-[#131518] min-w-[105.88px] h-[51.46px] grid place-items-center font-bold text-sm">
              <div className="font-chakra">Highest Bet ($)</div>
              <div className="">0</div>
            </div>
            <div className="rounded-[1px] bg-[#131518] min-w-[105.88px] h-[51.46px] grid  font-bold text-sm">
              <div className="font-chakra">{selectedStat.text}</div>
              {/* <div className="">Glass</div> */}
            </div>
            <div className="rounded-[1px] bg-[#131518] min-w-[105.88px] h-[51.46px] grid place-items-center font-bold text-sm">
              <div className="font-chakra">Weight class:</div>
              <div className="">{selectedStat.weight}</div>
            </div>
            <div className="rounded-[1px] bg-[#131518] min-w-[105.88px] h-[51.46px] grid place-items-center font-bold text-sm">
              <div className="font-chakra">Best time:</div>
              <div className="">00: 56</div>
            </div>
          </div>

          <div className="hidden _flex flex-col mt-4">
            <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center">
              <div className="">
                <div className="text-[10px]">Total Wins</div>
                <div className="font-bold text-xs">
                  ${statDetails?.[3]?.toLocaleString()}
                </div>
              </div>
              <img src="/images/graph.png" alt="" />
            </div>

            <div className="flex justify-between gap-2">
              <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                <div className="">
                  <div className="text-[10px]">Highest bet</div>
                  <div className="font-bold text-xs">${statDetails?.[4]}</div>
                </div>
              </div>

              <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                <div className="">
                  <div className="text-[10px]">Total Bets</div>
                  <div className="font-bold text-xs">{statDetails?.[5]}</div>
                </div>
              </div>

              <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                <div className="">
                  <div className="text-[10px]">Win Ratio</div>
                  <div className="font-bold text-xs">0.8</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                <div className="">
                  <div className="text-[10px]">Category</div>
                  <div className="font-bold text-xs">$500</div>
                </div>
              </div>

              <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                <div className="">
                  <div className="text-[10px]">Category</div>
                  <div className="font-bold text-xs">325</div>
                </div>
              </div>

              <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                <div className="">
                  <div className="text-[10px]">Category</div>
                  <div className="font-bold text-xs">0.8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BetComp = ({
  matchId,
  admin_wallet,
  index,
  game,
  // onBetting,
  setMessage,
  walletBalance,
  setUpdateBalace,
  updateBalance,
  setOpen,
}) => {
  const { user } = useSupaAuth();
  const { bets } = useBet();
  const wallet = useWallet();
  const [solValue, setSolValue] = useState(0.1);
  const [onBetting, setOnBetting] = useState(false);
  // const [pebbleNumber, setPebble] = useState(1);
  const pebbleNumber = index + 1;

  const onMax = () => {
    setSolValue(walletBalance);
  };

  const onInputSol = (e) => {
    e.preventDefault();
    setSolValue(e.target.value);
  };

  useEffect(() => {
    const initSetting = async () => {
      const url = `${BASE_URL}/api/init?query=${matchId}`;
      await axios
        .get(url)
        .then((data) => {
          const data_t = data.data;
          const bettingFlagKey = `betting_${
            matchId === "harybet" ? "hamster" : "marble"
          }_Flag`;
          const bettingFlag = data_t.msg[bettingFlagKey];
          console.log("bettingFlag8: ", bettingFlag);
          setOnBetting(bettingFlag);
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    initSetting();
  }, [matchId]);

  const onPlaceBet = async () => {
    let ref = admin_wallet;

    let depositSol = parseFloat(solValue);
    let pebbleNum = parseInt(pebbleNumber);

    if (depositSol === null || depositSol < 0.1 || walletBalance < depositSol) {
      setMessage({
        title: "Something went wrong",
        body: "Invalid Deposit Value!!!\nMinimum Deposit Value is 0.1 SOL.",
      });
      setOpen(true);
      return;
    }

    console.log("onBettingStart: ", onBetting);
    if (!onBetting) {
      setMessage({
        title: "Something went wrong",
        body: "Invalid Betting Time!!!\n",
      });
      setOpen(true);
      return;
    }

    let tx = await transferSol(wallet, ref, depositSol);
    if (tx === null) {
      return;
    } else {
      console.log("tx: ", tx);
      const match = GAMES.find((game) => game.id === matchId);
      const { error } = await supabase.from("bets").insert({
        game_id: match?.id,
        match: game?.name || "",
        user_id: user?.id,
        bet_amount: depositSol,
        multiplier: "",
        payout: "",
      });
      error && console.log("failed to insert transaction", error.message);
    }

    try {
      axios
        .get(
          `${BASE_URL}/api/deposit?query=${depositSol}&pebble=${pebbleNum}&bettor=${wallet.publicKey}&bet_id=${matchId}`
        )
        .then(async (data) => {
          var data_t = data.data;
          if (data_t.status == "success") {
            console.log(data_t);

            setOpen(true);
            setMessage({
              title: "Betting",
              body: "Betting Success!!!",
            });
            // sleep(10000);
            setUpdateBalace(!updateBalance);
          } else {
            setMessage({
              title: "Something went wrong",
              body: "Invalid Betting Time!!!",
            });
            setOpen(true);
          }
        })
        .catch((error) => {
          console.error("error", error);
        });
    } catch (err) {
      console.error(err);
      return;
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center mb-6 mt-8  border-[1px] border-[#000000] rounded-[4px] border-solid px-[22px] py-[20px] cursor-pointer"
        title={game?.name}
      >
        <img src={game?.icon} alt="" className="w-[36px] h-auto" />
      </div>

      <div className=" w-full h-auto flex justify-center  items-center ">
        <div className="bg-[#52545A80] border border-solid border-[#000000] rounded-l-[4px] flex items-center justify-center h-[34px] w-[92px]">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_654_898)">
              <path
                d="M2.2735 9.15096C2.3591 9.05742 2.47515 9.00488 2.59616 9.00488H13.7609C13.9643 9.00488 14.0661 9.27381 13.9222 9.431L11.7161 11.8413C11.6305 11.9348 11.5145 11.9873 11.3934 11.9873H0.228701C0.0253142 11.9873 -0.0765006 11.7184 0.0673726 11.5612L2.2735 9.15096Z"
                fill="url(#paint0_linear_654_898)"
              />
              <path
                d="M2.2735 0.14605C2.3591 0.0525319 2.47515 0 2.59616 0H13.7609C13.9643 0 14.0661 0.268913 13.9222 0.4261L11.7161 2.83638C11.6305 2.92989 11.5145 2.98243 11.3934 2.98243H0.228701C0.0253142 2.98243 -0.0765006 2.71351 0.0673726 2.55633L2.2735 0.14605Z"
                fill="url(#paint1_linear_654_898)"
              />
              <path
                d="M11.7161 4.61967C11.6305 4.52613 11.5145 4.47363 11.3934 4.47363H0.228701C0.0253142 4.47363 -0.0765006 4.74252 0.0673726 4.89971L2.2735 7.30998C2.3591 7.40352 2.47515 7.45606 2.59616 7.45606H13.7609C13.9643 7.45606 14.0661 7.18713 13.9222 7.02994L11.7161 4.61967Z"
                fill="url(#paint2_linear_654_898)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_654_898"
                x1="9.45779"
                y1="-3.28785"
                x2="0.591277"
                y2="12.2443"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#DC1FFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_654_898"
                x1="9.45779"
                y1="-3.28812"
                x2="0.591281"
                y2="12.244"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#DC1FFF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_654_898"
                x1="9.45779"
                y1="-3.28814"
                x2="0.591278"
                y2="12.244"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#DC1FFF" />
              </linearGradient>
              <clipPath id="clip0_654_898">
                <rect width="14" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input
            type="number"
            value={solValue?.toLocaleString() || 0}
            onChange={onInputSol}
            placeholder="0.00"
            className="placeholder-[#FFFFFF40]  font-chakra py-2 text-[14px] outline-none w-[50px] text-[#FFFFFF40] mx-2 bg-[#52545A10] appearance-none text-end"
          />
        </div>

        <div className="bg-[#121D28] border border-solid border-[#000000]  rounded-r-[4px]">
          <button
            className="text-[#B1B6C6] cursor-pointer font-inter px-[6px] font-[800] text-[9px] h-[30px] w-[55px]"
            onClick={onPlaceBet}
          >
            Place Bet
          </button>
        </div>
      </div>

      <div className="w-[147px] flex mt-[5px] justify-end">
        <p
          className="px-1 text-white/40 text-[14px] font-[400] font-Inter bg-[#D9D9D90D] rounded-[2px] cursor-pointer"
          onClick={onMax}
        >
          Max
        </p>
      </div>

      <div className="flex w-full flex-col mt-[6px] items-center justify-center">
        <div className="flex w-full px-[13px] py-[13px] justify-between items-center ">
          <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
            USER
          </p>
          <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
            WAGER
          </p>
        </div>

        <div className="w-full  space-y-[1px]">
          {/* <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
            <div className="flex items-center pl-[10px] gap-[6px]">
              <img src={Margin} className="w-[12px] h-[12px] object-contain" />
              <p className="font-[700] lg:text-[10px] text-[9px] font-inter capitalize text-[#68758C]">
                3dQp..HU7f_test
              </p>
            </div>
            <div className="pr-[12px]">
              <p className="text-[#B1B6C6] lg:text-[13.23px] text-[9px] font-chakra font-[500]">
                $0.00
              </p>
            </div>
          </div> */}

          {bets
            .filter((bet) => bet.match === game?.name)
            .map((bet, index) => {
              return (
                <div
                  key={`bet-history-${index + 1}`}
                  className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center"
                >
                  <div className="flex items-center pl-[10px] gap-[6px]">
                    <img
                      src={Margin}
                      className="w-[12px] h-[12px] object-contain"
                    />
                    <p className="font-[700] text-[7px] font-inter capitalize text-[#68758C]">
                      {shortenAddress(bet?.wallet_address)}
                    </p>
                  </div>
                  <div className="pr-[12px]">
                    <p className="text-[#B1B6C6] text-[13.23px] font-chakra font-[500]">
                      ${bet.bet_amount}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
