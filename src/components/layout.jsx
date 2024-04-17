/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import clsx from "clsx";
import LiveChat from "./LiveChat/LiveChat";
import Header from "./header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../lib/config";
import MobileMenu from "./MobileMenu";
// import Match from "../pages/";

const MARBLES = [
  {
    icon: "/icons/tokyo-circle.svg",
    name: "Tokyo",
    color: "#EB5757",
    winner: true,
  },
  {
    icon: "/icons/moscow-circle.svg",
    name: "Moscow",
    color: "#D7D7D7",
    winner: false,
  },
  {
    icon: "/icons/cairo-circle.svg",
    name: "Cairo",
    color: "#634CF2",
    winner: false,
  },
  {
    icon: "/icons/newyork-circle.svg",
    name: "NewYork",
    color: "#F2C94C",
    winner: false,
  },
  {
    icon: "/icons/capetown-circle.svg",
    name: "CapeTown",
    color: "#BF2FED",
    winner: false,
  },
  {
    icon: "/icons/riodejaneiro-circle.svg",
    name: "RiodeJaneiro",
    color: "#2F80ED",
    winner: false,
  },
  {
    icon: "/icons/paris-circle.svg",
    name: "Paris",
    color: "#27AE60",
    winner: false,
  },
  {
    icon: "/icons/sydney-circle.svg",
    name: "Sydney",
    color: "#AE6027",
    winner: false,
  },
];

const HEMSTARS = [
  {
    icon: "/images/ckay.svg",
    name: "Ckay",
    color: "#CB031A",
    winner: true,
  },
  {
    icon: "/images/larry.svg",
    name: "Larry",
    color: "#04E6EA",
    winner: false,
  },
  {
    icon: "/images/sergeant.svg",
    name: "Sergeant",
    color: "#F4BF04",
    winner: false,
  },
  {
    // id: 4,
    icon: "/images/rookie.svg",
    name: "Rookie",
    color: "#0EE520",
    winner: false,
  },
];

const Layout = ({ children, isAdmin, leftSide, expand, setExpand }) => {
  // console.log(isAdmin);
  const { matchId } = useParams();
  const [, setOpen] = useState(false);
  const [, setMessage] = useState({ title: "", body: "" });
  const [openChat, setOpenChat] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  // const [expand, setExpand] = useState(true);
  const [winner, setWinner] = useState(1);

  const [showRightSideBar] = useState(true);
  const [onBetting, setOnBetting] = useState(false);
  const [isMoscow, onMoscowOrder] = useState();
  const [isNewYork, onNewYorkOrder] = useState();
  const [isParis, onParisOrder] = useState();
  const [isCapeTown, onCapeTownOrder] = useState();
  const [isRiodeJaneiro, onRiodeJaneiroOrder] = useState();
  const [isSydney, onSydneyOrder] = useState();
  const [isCairo, onCairoOrder] = useState();
  const [isTokyo, onTokyoOrder] = useState();

  const [, setSelectedStat] = useState(HEMSTARS[0]);
  // const [statDetails, setStatDetails] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);
  const PEBBLE_RACE = 8;
  const HAMSTER_RACE = 4;
  
  useEffect(() => {
    if (matchId === "bet") {
      setItemsList(MARBLES);
      setSelectedStat(MARBLES[0]);
    } else {
      setItemsList(HEMSTARS);
      setSelectedStat(HEMSTARS[0]);
    }
  }, [matchId]);

  useEffect(() => {
    if (hasFiltered) return;
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
          console.log("bettingFlag: ", bettingFlag);
          const last_sequence = data_t.msg.last_betting_result;
          const history = data_t.msg.values;
          console.log("history: ", history);
          const sortedArray = last_sequence
            .map((name, index) => ({ name, index }))
            .filter((item) => item?.name !== "") // Remove empty strings
            .sort(
              (a, b) =>
                last_sequence.indexOf(a.name) - last_sequence.indexOf(b.name)
            )
            ?.map((item) => itemsList.find((obj) => obj.name === item?.name));
          if (sortedArray?.[0]?.icon) {
            setItemsList(sortedArray);
            setSelectedStat(sortedArray[0]);
            setHasFiltered(true);
            onMoscowOrder(last_sequence[0]);
            onNewYorkOrder(last_sequence[1]);
            onParisOrder(last_sequence[2]);
            onCapeTownOrder(last_sequence[3]);
            onRiodeJaneiroOrder(last_sequence[4]);
            onSydneyOrder(last_sequence[5]);
            onCairoOrder(last_sequence[6]);
            onTokyoOrder(last_sequence[7]);
            setOnBetting(bettingFlag);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    initSetting();
  }, [hasFiltered, itemsList, matchId]);

  // handleResize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpand(true);
      } else {
        // setExpand(false);
        setOpenChat(false);
      }

      if (window.innerWidth < 768) {
        setIsMobile(true);
        setOpenChat(true);
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
  }, [setExpand]);

  const onMoscowOrderSet = (e) => {
    e.preventDefault();
    onMoscowOrder(e.target.value);
  };

  const onNewYorkOrderSet = (e) => {
    e.preventDefault();
    onNewYorkOrder(e.target.value);
  };

  const onParisOrderSet = (e) => {
    e.preventDefault();
    onParisOrder(e.target.value);
  };

  const onCapeTownOrderSet = (e) => {
    e.preventDefault();
    onCapeTownOrder(e.target.value);
  };

  const onRiodeJaneiroOrderSet = (e) => {
    e.preventDefault();
    onRiodeJaneiroOrder(e.target.value);
  };

  const onSydneyOrderSet = (e) => {
    e.preventDefault();
    onSydneyOrder(e.target.value);
  };

  const onCairoOrderSet = (e) => {
    e.preventDefault();
    onCairoOrder(e.target.value);
  };

  const onTokyoOrderSet = (e) => {
    e.preventDefault();
    onTokyoOrder(e.target.value);
  };

  const bettingEnd = () => {
    setOnBetting(false);
    axios
      .get(`${BASE_URL}/api/bettingEnd?bet_id=${matchId}`)
      .then((data) => {
        console.log("bettingEnd data");
        console.log(data);
        setMessage({
          title: "Betting",
          body: "Transactions Finished",
        });
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const bettingStart = () => {
    setOnBetting(true);

    axios
      .get(`${BASE_URL}/api/bettingStart?bet_id=${matchId}`)
      .then((data) => {
        console.log("bets data");
        console.log(data);
        setMessage({
          title: "Betting",
          body: "Betting Start!!!",
        });
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const decideWinner = () => {
    console.log("matchId: ", matchId);
    if (matchId === "bet") {
      const sequence = [
        isMoscow,
        isNewYork,
        isParis,
        isCapeTown,
        isRiodeJaneiro,
        isSydney,
        isCairo,
        isTokyo,
      ];
      for (let i = 0; i < PEBBLE_RACE - 1; i++) {
        for (let j = i + 1; j < PEBBLE_RACE; j++) {
          if (sequence[i] == sequence[j]) {
            setMessage({
              title: "Something went wrong",
              body: "Invalid Sequence!!!",
            });
            setOpen(true);
            return;
          }
        }
      }

      for (let i = 0; i < HAMSTER_RACE - 1; i++) {
        if (sequence[i] == 1) setWinner(i + 1);
      }

      axios
        .get(
          `${BASE_URL}/api/decidewinner?bet_id=${matchId}&query=${winner}&seq=${JSON.stringify(
            sequence
          )}`
        )
        .then((data) => {
          console.log("bets data");
          console.log(data);
          setMessage({
            title: "Betting",
            body: "Set Winner/Sequence of marbles Success!!!",
          });
          setOpen(true);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("matchId: ", matchId);
      const sequence = [
        isMoscow, ///Luna
        isNewYork, ///Oliver
        isParis, ///Peanut
        isCapeTown, ///Daisy
      ];
      for (let i = 0; i < HAMSTER_RACE - 1; i++) {
        for (let j = i + 1; j < HAMSTER_RACE; j++) {
          if (sequence[i] == sequence[j]) {
            setMessage({
              title: "Something went wrong",
              body: "Invalid Sequence!!!",
            });
            setOpen(true);
            return;
          }
        }
      }
      for (let i = 0; i < HAMSTER_RACE - 1; i++) {
        if (sequence[i] == 1) setWinner(i + 1);
      }

      axios
        .get(
          `${BASE_URL}/api/decidewinner?bet_id=${matchId}&query=${winner}&seq=${JSON.stringify(
            sequence
          )}`
        )
        .then((data) => {
          console.log("bets data");
          console.log(data);
          setMessage({
            title: "Betting",
            body: "Set Winner/Sequence of hamster Success!!!",
          });
          setOpen(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="bg-[#0D0F11] h-[100vh] overflow-auto  md:overflow-hidden">
      <div className="w-full flex flex-col _max-w-[1440px] mx-auto">
        <Header openChat={openChat} setOpenChat={setOpenChat} />

        <div className="flex flex-col md:flex-row w-full">
          <div
            className={`
            ${expand ? "w-fit md:w-[35%] lg:w-[25%] _xl:w-[18%] 2xl:min-w-[400px] max-w-[400px]" : "w-[5%] 2xl:w-[3%]"} 
            transition-all duration-300 bg-[#16202B05] border-[#68758C25] border hidden md:block h-[calc(100vh-80px)] remove-scroll overflow-auto relative`}
          >
            {leftSide}
          </div>

          <div
            className={`${
              expand
                ? "md:min-w-[65%] lg:min-w-[75%] _xl:min-w-[82%] w-full"
                : "w-[95%] 2xl:w-[97%]"
            } relative flex flex-col md:flex-row`}
          >
            <div className="flex-col gap-5 py-5 mx-4 lg:px-8 flex-1 h-[calc(100vh-80px)] overflow-y-hidden md:overflow-y-auto md:min-w-[55%] lg:min-w-[70%] 2xl:min-w-[700px] max-w-[1000px] lg:mx-auto">
              {children}
            </div>

            {openChat && (
              <div className="hidden md:block md:min-w-[45%] lg:min-w-[30%] h-[calc(100vh-80px)] overflow-y-auto remove-scroll flex-row gap-5 pb-5 px-2 border border-[#68758C25] 2xl:min-w-[400px] max-w-[400px] overflow-auto">
                {!isMobile && !isAdmin && (
                  <LiveChat openChat={openChat} setOpenChat={setOpenChat} />
                )}
                {!isMobile && isAdmin && (
                  <div className="min-w-[329px] h-full flex-row gap-5 py-5 px-2">
                    {showRightSideBar && (
                      <aside className="w-full h-full">
                        {isAdmin && (
                          <div className="flex flex-col ml-5">
                            <button
                              disabled={!onBetting ? false : true}
                              onClick={bettingStart}
                              className={clsx(
                                "mr-2 mb-2 font-bold rounded-[12px] px-2 py-1 text-white bg-gradient-to-b from-[#4EAF90]",
                                !onBetting ? "to-[#B2D5B2]" : "bg-black"
                              )}
                            >
                              Start
                            </button>
                            <button
                              disabled={!onBetting}
                              onClick={bettingEnd}
                              className={clsx(
                                "mr-2 mb-2 font-bold rounded-[12px] px-2 py-1 text-white bg-gradient-to-b from-[#4EAF90]",
                                onBetting ? "to-[#B2D5B2]" : "bg-black"
                              )}
                            >
                              End
                            </button>

                            <button
                              disabled={!onBetting}
                              onClick={decideWinner}
                              className={clsx(
                                "mr-2 mb-2 font-bold rounded-[12px] px-2 py-1 text-white bg-gradient-to-b from-[#4EAF90] ",
                                onBetting ? "to-[#B2D5B2]" : "bg-black"
                              )}
                            >
                              Decide Game Result
                            </button>
                            <p className="text-white">
                              {matchId === "bet" ? "Moscow" : "Ckay"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isMoscow}
                              onChange={onMoscowOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet" ? "New York" : "Larry"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isNewYork}
                              onChange={onNewYorkOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet" ? "Paris" : "Sergeant"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isParis}
                              onChange={onParisOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet" ? "Cape Town" : "Rookie"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isCapeTown}
                              onChange={onCapeTownOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet"
                                ? "Rio de Janeiro"
                                : "Hamster5"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isRiodeJaneiro}
                              onChange={onRiodeJaneiroOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet" ? "Sydney" : "Hamster6"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isSydney}
                              onChange={onSydneyOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet" ? "Cario" : "Hamster7"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isCairo}
                              onChange={onCairoOrderSet}
                            ></input>
                            <p className="text-white">
                              {matchId === "bet" ? "Tokyo" : "Hamster8"}
                            </p>
                            <input
                              type="number"
                              className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center"
                              value={isTokyo}
                              onChange={onTokyoOrderSet}
                            ></input>
                          </div>
                        )}
                      </aside>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="min-h-[80px]"></div>
        <div className="fixed z-[9999]  bottom-0 w-full md:hidden h-[70px] py-3 flex flex-col justify-center px-2 bg-black">
        <MobileMenu sideBar={leftSide} />
          {/* <div className="flex justify-between items-center px-2 gap-2 text-xs">
            <div className="flex flex-col items-center">
              <img className="h-8" src="/images/livewins.svg" alt="no image" />
              <p>Live</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-8" src="/images/livewins.svg" alt="no image" />
              <p>Dashboard</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-8" src="/images/livewins.svg" alt="no image" />
              <p>Bets</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-8" src="/images/livewins.svg" alt="no image" />
              <p>Chat</p>
            </div>
            <div className="py-[7px] px-[9px] border border-[#C7F284] rounded-md text-xs text-[#C7F284] font-normal">
              On ramp
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
