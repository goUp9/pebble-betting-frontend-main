/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { Button } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
// import { FaTimes } from "react-icons/fa";
import io from "socket.io-client";
// import { BASE_URL } from "../../lib/config";
import { useSupaAuth } from "../../hooks/useSupaAuth";
import { shortenAddress } from "../../lib/helper";
import { supabase } from "../../lib/supabaseClient";
// import { useWallet } from "@solana/wallet-adapter-react";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://sedona-chat-be.up.railway.app";

// const socket = io.connect(BASE_URL);
const socket = io(BASE_URL, {
  // path: '/socket.io'
});
// const username = "dev_cent";
const room = "main";

export default function LiveChat({ openChat, setOpenChat }) {
  const { user } = useSupaAuth();
  // const { connected } = useWallet();
  const [username, setUsername] = useState("");
  const [chatExpanded, setChatExpanded] = useState(false);
  const [screen, setScreen] = useState("chat");
  const [message, setMessage] = useState("");
  const [totalChatroomUsers, setTotalChatroomUsers] = useState(0);
  const [messagesRecieved, setMessagesReceived] = useState([
    {
      message: ``,
      username: "",
      avatar: "",
      __createdtime__: new Date(),
    },
  ]);
  const messagesColumnRef = useRef(null);

  // setUsername
  useEffect(() => {
    if (user) {
      const username = shortenAddress(user?.wallet_address);
      setUsername(username);
    }
  }, [user]);

  // setup: join chat room
  useEffect(() => {
    if (username) {
      console.log("joining chat");
      socket.emit("join_room", {
        username,
        user_id: user?.id,
        avatar: user?.avatar,
        room,
      });
    } else {
      console.log("joining chat anonymously");
      socket.emit("join_room", {
        username: "anonymous",
        user_id: null,
        avatar: "",
        room,
      });
    }
  }, [username, user]);

  // Runs whenever a socket event is recieved from the server
  // receive_message
  useEffect(() => {
    socket.on("receive_message", (data) => {
      // console.log("data");
      // console.log(data);
      setMessagesReceived((state) => [
        ...state,
        data,
        // {
        //   message: data.message,
        //   username: data.username,
        //   avatar: data.avatar,
        //   __createdtime__: data.__createdtime__,
        // },
      ]);
    });

    // Remove event listener on component unmount
    return () => socket.off("receive_message");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  // Runs whenever a socket event is recieved from the server
  // chatroom_users
  useEffect(() => {
    socket.on("chatroom_users", (chatroomUsers) => {
      const filteredChatroomUsers = chatroomUsers.filter(
        (chatUser) => chatUser.room === room
      );
      setTotalChatroomUsers(filteredChatroomUsers.length);
    });

    // Remove event listener on component unmount
    return () => socket.off("chatroom_users");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const [fetchingChats, setFetchingChats] = useState(false);
  // setMessagesReceived OldChats
  useEffect(() => {
    const fetch = async () => {
      setFetchingChats(true);
      const { data, error } = await supabase
        .from("chats")
        .select("*, users(*)")
        .eq("room", room)
        .order("id", { ascending: true })
        .limit(1000);
      setFetchingChats(false);

      if (!error && data) {
        setMessagesReceived((prev) => {
          const updatedMessages = [...prev];
          data.forEach((chat) => {
            const user = chat?.users;
            if (user) {
              const username = shortenAddress(user?.wallet_address);
              const combinedChat = { ...user, ...chat, username };

              // Check if the chat is already in the list
              const existingChatIndex = updatedMessages.findIndex((msg) => {
                return msg?.id === combinedChat?.id;
              });

              // If chat does not exist in the list, add it
              if (existingChatIndex === -1) {
                updatedMessages.push(combinedChat);
              }
            }
          });
          // console.log("updatedMessages");
          // console.log(updatedMessages);

          return updatedMessages;
        });
      }
    };
    fetch();
  }, []);

  // scrollIntoView
  useEffect(() => {
    messagesColumnRef.current.scrollTop =
      messagesColumnRef.current.scrollHeight;
  }, [messagesRecieved]);

  // function sortMessagesByDate(messages) {
  //   return messages.sort(
  //     (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
  //   );
  // }

  // function formatDateFromTimestamp(timestamp) {
  //   const date = new Date(timestamp);
  //   return date.toLocaleString();
  // }

  const handleSubmit = async () => {
    if (!user) return;

    if (message !== "") {
      const __createdtime__ = Date.now();
      socket.emit("send_message", {
        username,
        users: user,
        role: user?.role,
        user_id: user?.id,
        avatar: user?.avatar,
        room,
        message,
        __createdtime__,
      });
      setMessage("");
    }
  };
  if (screen === "chat") {
    return (
      <>
        <div
          className={`bg-[#0D1012] _bg-gradient-to-br from-[#52545A] via-[#373C48] to-[#272E3E] rounded-[12px] py-[calc(65px+20px)] px-4 h-full w-full relative min-h-[calc(100vh-140px)] 
        ${chatExpanded ? "_md:w-[400px]" : "w-full"}
        w-full
        `}
        >
          <div className="h-[65px] flex items-center justify-between absolute top-0 left-0 w-full z-10 px-4">
            <div className="w-[46px] h-[40px] rounded-[4px] bg-[#52545A]/25 grid place-items-center">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_179_11730)">
                  <path
                    d="M0.816406 1.99964C0.816406 1.54764 1.18241 1.18164 1.63441 1.18164H16.3624C16.8134 1.18164 17.1804 1.54764 17.1804 1.99964V13.4536C17.1805 13.5611 17.1595 13.6676 17.1184 13.767C17.0774 13.8663 17.0171 13.9566 16.9412 14.0327C16.8652 14.1088 16.775 14.1691 16.6757 14.2103C16.5764 14.2514 16.4699 14.2726 16.3624 14.2726H6.33141C5.74541 14.2726 5.17841 14.4826 4.73341 14.8626L2.16741 17.0626C2.04869 17.1643 1.90334 17.2298 1.74856 17.2514C1.59377 17.273 1.43604 17.2499 1.29401 17.1846C1.15199 17.1194 1.03162 17.0149 0.947159 16.8834C0.862695 16.7519 0.817668 16.5989 0.817406 16.4426L0.816406 1.99964Z"
                    stroke="#E6E7E7"
                    strokeOpacity="0.8"
                    strokeWidth="1.636"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.09375 6.09044C4.09375 5.63944 4.45975 5.27344 4.91175 5.27344H9.82175C10.0387 5.27344 10.2468 5.35962 10.4002 5.51302C10.5536 5.66643 10.6397 5.87449 10.6397 6.09144C10.6397 6.30838 10.5536 6.51645 10.4002 6.66985C10.2468 6.82326 10.0387 6.90944 9.82175 6.90944H4.91175C4.6948 6.90944 4.48674 6.82326 4.33334 6.66985C4.17993 6.51645 4.09375 6.30738 4.09375 6.09044ZM11.4567 6.09044C11.4567 5.63944 11.8227 5.27344 12.2747 5.27344H13.0927C13.2002 5.27344 13.3065 5.2946 13.4058 5.3357C13.505 5.37681 13.5952 5.43707 13.6712 5.51302C13.7471 5.58898 13.8074 5.67916 13.8485 5.7784C13.8896 5.87765 13.9108 5.98402 13.9108 6.09144C13.9108 6.19886 13.8896 6.30523 13.8485 6.40447C13.8074 6.50372 13.7471 6.59389 13.6712 6.66985C13.5952 6.74581 13.505 6.80606 13.4058 6.84717C13.3065 6.88828 13.2002 6.90944 13.0927 6.90944H12.2747C12.0578 6.90944 11.8497 6.82326 11.6963 6.66985C11.5429 6.51645 11.4567 6.30738 11.4567 6.09044ZM4.09375 9.36444C4.09375 8.91244 4.45975 8.54544 4.91175 8.54544H7.36675C7.58383 8.54544 7.79202 8.63167 7.94552 8.78517C8.09902 8.93867 8.18525 9.14686 8.18525 9.36394C8.18525 9.58102 8.09902 9.78921 7.94552 9.9427C7.79202 10.0962 7.58383 10.1824 7.36675 10.1824H4.91175C4.6948 10.1824 4.48674 10.0963 4.33334 9.94285C4.17993 9.78945 4.09375 9.58139 4.09375 9.36444Z"
                    fill="#B1B6C6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_179_11730">
                    <rect width="18" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="hidden md:flex items-center gap-2 select-none">
              <svg
                className={`hidden _lg:inline cursor-pointer transition-all duration-300 ${
                  chatExpanded && "rotate-180"
                }`}
                onClick={() => {
                  setChatExpanded(!chatExpanded);
                }}
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.26953 5.75C4.26953 5.26675 4.66129 4.875 5.14453 4.875H6.01953C6.50278 4.875 6.89453 5.26675 6.89453 5.75V16.25C6.89453 16.7333 6.50278 17.125 6.01953 17.125H5.14453C4.66129 17.125 4.26953 16.7333 4.26953 16.25V5.75Z"
                  fill="#E6E7E7"
                  fillOpacity="0.5"
                />
                <path
                  d="M11.2164 6.49718C11.492 6.22157 11.9633 6.41677 11.9633 6.80655V15.1941C11.9633 15.5838 11.492 15.7791 11.2164 15.5034L7.02267 11.3097C6.85182 11.1388 6.85182 10.8618 7.02267 10.6909L11.2164 6.49718Z"
                  fill="#E6E7E7"
                  fillOpacity="0.5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.9629 10.5625C18.9629 10.0792 18.5712 9.6875 18.0879 9.6875H12.8379C12.3546 9.6875 11.9629 10.0792 11.9629 10.5625V11.4375C11.9629 11.9208 12.3546 12.3125 12.8379 12.3125H18.0879C18.5712 12.3125 18.9629 11.9208 18.9629 11.4375V10.5625Z"
                  fill="#E6E7E7"
                  fillOpacity="0.5"
                />
              </svg>

              <svg
                className="cursor-pointer"
                onClick={() => {
                  setOpenChat(!openChat);
                }}
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5119 6.42895L10.9819 8.95695L8.45195 6.42695C8.08912 6.04908 7.5503 5.897 7.04345 6.02941C6.5366 6.16181 6.141 6.55799 6.00934 7.06503C5.87768 7.57208 6.03055 8.11067 6.40895 8.47295L8.93795 11.0029L6.41095 13.5299C5.86128 14.0979 5.86855 15.0016 6.42728 15.5606C6.986 16.1196 7.88976 16.1273 8.45795 15.5779L10.9819 13.0459L13.5099 15.5749C13.873 15.9521 14.4115 16.1037 14.918 15.9714C15.4245 15.8391 15.8201 15.4435 15.9524 14.937C16.0847 14.4305 15.9331 13.892 15.5559 13.5289L13.0319 11.0039L15.5589 8.47695C16.1086 7.90903 16.1013 7.00527 15.5426 6.44627C14.9839 5.88727 14.0801 5.87956 13.5119 6.42895Z"
                  fill="#E6E7E7"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </div>

          <div
            id="body"
            ref={messagesColumnRef}
            className="flex flex-col gap-3 h-[calc(100vh-290px)] lg:h-[calc(100vh-340px)] overflow-auto remove-scroll"
          >
            {fetchingChats ? (
              <div className="animate-pulse">loading chats...</div>
            ) : (
              messagesRecieved.map((message, i) => {
                // const colors = ["#00ff00", "#F2C94C", "#EB5757", "#BF2FED"];
                // const colorIndex = i % colors.length;

                if (message?.username) {
                  const avatar = message.avatar;

                  return (
                    <div
                      key={`message_${i}`}
                      className="relative p-2 bg-[#121619] rounded-[6px]"
                    >
                      <div
                        className="inline-flex items-center text-sm overflow-hidden whitespace-nowrap text-ellipsis align-middle mr-[5px] max-w-full"
                        size="14"
                      >
                        <div size="21" className="mr-2">
                          <img
                            src={avatar}
                            alt={"Platinum 5"}
                            scale="1"
                            className="css-1ago99h"
                          />
                        </div>

                        {message?.role && message?.role !== "user" && (
                          <div className="bg-[#19c5ff] text-black px-1 font-bold text-[0.6879rem] mr-1 uppercase">
                            {message?.role}
                          </div>
                        )}

                        <div
                          className={`${
                            message?.role &&
                            message?.role !== "user" &&
                            "text-[#19c5ff]"
                          } font-semibold`}
                        >
                          {message.username}:
                        </div>
                      </div>
                      <span className="css-1nmmrxo">{message.message}</span>
                    </div>
                  );
                }
              })
            )}
          </div>

          <form
            className="absolute bottom-0 left-0 w-full z-10 px-4 pb-[16px] pt-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex items-center gap-2 h-[46px] bg-[#0E1116] w-full rounded-[6px] py-[10px] px-[18px]">
              <input
                className="w-full bg-transparent outline-none pl-2"
                disabled={!user}
                placeholder={`${
                  !user ? "Connect your wallet to chat" : "Type something..."
                }`}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              {/* <button
                type="submit"
                className="w-[39.69px] h-[36px] rounded-[12px] bg-[#23183a] grid place-items-center cursor-pointer"
              >
                <img
                  src={"/icons/send_btn.svg"}
                  className="min-w-[15.67px] min-h-[15.67px]"
                />
              </button> */}
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                {/* setting */}
                {/* <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M7.24023 9.167C6.04323 9.167 5.07323 8.197 5.07323 7C5.07323 5.803 6.04323 4.834 7.24023 4.834C8.43723 4.834 9.40723 5.803 9.40723 7C9.40723 8.197 8.43723 9.167 7.24023 9.167ZM13.0902 5.91L12.0862 5.705C11.9902 5.686 11.9152 5.614 11.8862 5.521C11.8032 5.259 11.6972 5.005 11.5692 4.762C11.5232 4.675 11.5262 4.571 11.5802 4.489L12.1462 3.634C12.3592 3.312 12.3162 2.884 12.0432 2.611L11.6292 2.197C11.3562 1.924 10.9292 1.881 10.6072 2.094L9.75123 2.661C9.66923 2.714 9.56523 2.717 9.47823 2.671C9.23523 2.543 8.98223 2.438 8.71923 2.355C8.62623 2.325 8.55523 2.25 8.53623 2.154L8.33023 1.151C8.25323 0.772 7.92123 0.5 7.53423 0.5H6.94623C6.55923 0.5 6.22723 0.772 6.15023 1.151L5.94423 2.154C5.92523 2.25 5.85423 2.325 5.76123 2.355C5.49823 2.438 5.24523 2.543 5.00223 2.671C4.91523 2.717 4.81123 2.714 4.72923 2.661L3.87323 2.094C3.55123 1.881 3.12423 1.924 2.85123 2.197L2.43723 2.611C2.16423 2.884 2.12123 3.312 2.33423 3.634L2.90023 4.489C2.95423 4.571 2.95723 4.675 2.91123 4.762C2.78323 5.005 2.67723 5.259 2.59423 5.521C2.56523 5.614 2.49023 5.686 2.39423 5.705L1.39023 5.91C1.01223 5.987 0.740234 6.32 0.740234 6.706V7.294C0.740234 7.681 1.01223 8.014 1.39023 8.091L2.39423 8.296C2.49023 8.315 2.56523 8.386 2.59423 8.479C2.67723 8.742 2.78323 8.996 2.91123 9.238C2.95723 9.326 2.95423 9.429 2.90023 9.511L2.33423 10.367C2.12123 10.689 2.16423 11.116 2.43723 11.389L2.85123 11.803C3.12423 12.076 3.55123 12.119 3.87323 11.906L4.72923 11.34C4.81123 11.286 4.91523 11.284 5.00223 11.329C5.24523 11.458 5.49823 11.563 5.76123 11.646C5.85423 11.675 5.92523 11.75 5.94423 11.846L6.15023 12.85C6.22723 13.229 6.55923 13.5 6.94623 13.5H7.53423C7.92123 13.5 8.25323 13.229 8.33023 12.85L8.53623 11.846C8.55523 11.75 8.62623 11.675 8.71923 11.646C8.98223 11.563 9.23523 11.458 9.47823 11.329C9.56523 11.284 9.66923 11.286 9.75123 11.34L10.6072 11.906C10.9292 12.119 11.3562 12.076 11.6292 11.803L12.0432 11.389C12.3162 11.116 12.3592 10.689 12.1462 10.367L11.5802 9.511C11.5262 9.429 11.5232 9.326 11.5692 9.238C11.6972 8.996 11.8032 8.742 11.8862 8.479C11.9152 8.386 11.9902 8.315 12.0862 8.296L13.0902 8.091C13.4682 8.014 13.7402 7.681 13.7402 7.294V6.706C13.7402 6.32 13.4682 5.987 13.0902 5.91Z"
                    fill="#E6E7E7"
                    fillOpacity="0.5"
                  />
                </svg> */}
              </div>

              <div className="flex items-center gap-2">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8017 0C11.0777 0 10.3784 0.0235524 9.71609 0.0817604L9.03321 1.53259L8.83164 0.185391C8.7288 0.200868 8.62595 0.217018 8.52311 0.234851C8.14876 0.300124 7.90194 0.477777 7.68803 0.735171C7.47411 0.992564 7.32191 1.32398 7.19027 1.63016C6.82826 2.47468 6.5403 3.36631 6.30993 4.27476C6.55675 4.44635 6.80358 4.62131 7.04629 4.79291L8.3092 4.20073L9.69964 5.0789L11.8347 4.41607L14.344 5.2404L14.0643 5.80229L11.8264 5.06881L9.57622 5.76528L8.25161 4.92749L7.63866 5.21349C8.44495 5.79557 9.22656 6.37092 9.96291 6.93617L10.5388 6.72084L11.9334 7.26254L13.2169 6.82178L14.2124 7.60573L13.7023 8.04313L13.0523 7.53508L11.9169 7.92874L10.5594 7.39713C10.8433 7.62256 11.1189 7.84126 11.3863 8.05996L11.4562 8.12052L12.2584 10.6877L11.9375 10.4959L9.75723 10.5094L8.1899 9.9105L6.44568 10.4017L6.20709 9.82975L8.23104 9.25776L9.92178 9.90377L10.9379 9.89704L8.02947 8.15753C7.21906 8.3123 6.40866 8.25174 5.63939 8.03304C5.46662 9.52693 5.39669 10.9165 5.35143 12.0268C5.33498 12.3869 5.4625 12.8007 5.65996 13.1204C5.86154 13.44 6.14127 13.6385 6.27702 13.6621C6.49093 13.7024 7.05863 13.7697 7.82789 13.8337L8.33799 12.5215L9.12372 13.9245C9.81071 13.9649 10.5635 13.9918 11.3246 13.9985C12.4846 14.0086 13.6735 13.9682 14.6978 13.8404C15.3478 13.763 15.9155 13.6385 16.3721 13.4905C15.8867 13.3189 15.4835 13.1338 15.175 12.9319C14.7184 12.6325 14.4263 12.2826 14.4633 11.8923V11.899C14.6855 8.6555 14.9076 5.54658 15.7098 2.27617L15.7139 2.26271L15.718 2.24925C15.936 1.64698 16.4544 0.908112 17.2031 0.370782C16.6313 0.30147 16.0265 0.236197 15.4054 0.180344L14.488 1.03159L14.3975 0.0995928C13.6159 0.044413 12.8178 0.00841159 12.0362 0.00134588H11.8017V0ZM17.9106 0.687729C17.7173 0.811884 17.5322 0.957909 17.3635 1.11605C17.8613 1.39127 18.2438 1.90269 18.2603 2.36028C18.2726 2.62272 18.1821 2.86161 17.9435 3.08031C17.7049 3.29565 17.3018 3.49753 16.6436 3.61192L16.7999 4.2041C17.5651 4.06951 18.1286 3.81717 18.4948 3.48407C18.865 3.15097 19.0172 2.73712 19.0008 2.3401C18.9761 1.69072 18.5441 1.07533 17.9106 0.687729ZM0.0175853 0.806164C0.00771238 0.860335 0.00195312 0.921571 0.00195312 0.995256C0.00606684 1.254 0.0854616 1.60661 0.241783 2.01036C0.382061 2.37038 0.581988 2.7674 0.832102 3.18125C1.26939 3.00293 1.67912 2.81114 2.00081 2.57226C1.81898 2.99283 1.58327 3.40332 1.23566 3.80034C1.40597 4.0426 1.59067 4.28485 1.78895 4.52374C2.22665 4.34541 2.64132 4.08634 3.00332 3.64557C2.86757 4.18391 2.65489 4.67515 2.25175 5.05198C2.52037 5.33798 2.8071 5.61724 3.10534 5.87632C3.46324 5.56341 3.74708 5.16975 3.95688 4.70206C4.1132 5.32452 4.06384 5.88978 3.7224 6.36419C4.0515 6.60644 4.39294 6.82514 4.7426 7.00683C4.99354 6.53578 5.10873 5.97726 5.09227 5.33461C5.47073 6.13203 5.55712 6.77804 5.48719 7.33656C6.31816 7.64611 7.16558 7.74032 8.0089 7.54181L8.18167 7.49807L11.0325 9.20057L10.7898 8.43343C7.78676 5.98398 3.57431 3.16106 0.0175853 0.806164ZM11.8388 2.55543L13.2045 3.01975L14.4921 2.68665L14.7143 3.26537L13.1716 3.66576L11.7894 3.19471L10.6047 3.46725L10.4072 2.8818L11.8388 2.55543ZM16.2528 10.5027C16.224 10.5027 16.1993 10.506 16.1705 10.506C16.0265 10.5094 15.8743 10.5229 15.7139 10.5498L15.8538 11.142C16.3556 11.0646 16.6765 11.1285 16.8616 11.2261C17.0426 11.3236 17.1208 11.4549 17.1249 11.6466C17.129 11.9596 16.8369 12.4205 16.1664 12.7402C16.3885 12.8377 16.6559 12.9387 16.9604 13.0329C17.5527 12.6426 17.8695 12.1312 17.8654 11.6399C17.8613 11.2799 17.6515 10.9266 17.2648 10.718C16.9891 10.5733 16.6477 10.4993 16.2528 10.5027Z"
                    fill="#E6E7E7"
                    fillOpacity="0.5"
                  />
                </svg>

                <div className="min-w-[4px] w-[4px] h-[4px] rounded-full bg-green-500"></div>

                <span className="text-[11.81px] font-bold text-[#7B7C7D]">
                  {totalChatroomUsers}
                </span>
                <button
                  type="submit"
                  className="w-[29.48px] h-[24px] grid place-items-center rounded-[4px] border border-[#121D28]"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.44855 0.721037C0.854549 0.424037 0.196049 0.989037 0.399049 1.62154L1.82805 6.06304C1.85614 6.15035 1.90771 6.22825 1.97712 6.28822C2.04652 6.34819 2.13108 6.38791 2.22155 6.40304L8.15605 7.39254C8.43455 7.43904 8.43455 7.83904 8.15605 7.88554L2.22205 8.87454C2.13149 8.88958 2.04683 8.92926 1.97733 8.98924C1.90783 9.04921 1.85618 9.12716 1.82805 9.21454L0.399049 13.6575C0.195549 14.29 0.854049 14.855 1.44855 14.558L13.9455 8.31054C14.4985 8.03404 14.4985 7.24554 13.9455 6.96854L1.44855 0.721037Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-[#0D1012] _bg-gradient-to-br from-[#52545A] via-[#373C48] to-[#272E3E] rounded-[12px] py-[calc(65px+20px)] px-4 h-full w-full relative min-h-[calc(100vh-140px)]">
          <div className="h-[65px] flex items-center justify-between absolute top-0 left-0 w-full z-10 px-4">
            <h1 className="text-[20px] font-[500] select-none">Recent</h1>
            <div className="flex items-center gap-2 select-none">
              <div
                className="w-[52px] h-[45px] rounded-[12px] bg-primary-gradient grid place-items-center cursor-pointer"
                onClick={() => setScreen("ranking")}
              >
                <img
                  src={"/icons/ranking.svg"}
                  className="min-w-[28px] min-h-[24px]"
                />
              </div>
              <div
                className="w-[52px] h-[45px] rounded-[12px] grid place-items-center bg-[#29213c] cursor-pointer"
                onClick={() => setScreen("chat")}
              >
                <img
                  src={"/icons/fluent_chat-16-filled.svg"}
                  className="min-w-[27.75px] h-[22px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 h-[calc(100vh-340px)] overflow-auto remove-scroll">
            {Array.from({ length: 7 }, (_, index) => {
              const colors = ["#00ff00", "#F2C94C", "#EB5757", "#BF2FED"];
              const colorIndex = index % colors.length;
              return (
                <div
                  key={`recent_-${index}`}
                  className="bg-[#0c031f] rounded-[6px] py-2 px-2 flex items-center justify-between"
                >
                  <div
                    className="rounded-[6px] py-1 px-3"
                    style={{
                      backgroundColor: `${colors[colorIndex]}50`,
                      color: `${colors[colorIndex]}`,
                    }}
                  >
                    HWEO<sub className="text-lg">***</sub>
                  </div>
                  <div className="">23854</div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
