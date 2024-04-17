import { Link } from "react-router-dom";
import LogoSedona from "/images/logo_sedona.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import PropTypes from "prop-types";
import { AuthMenu } from "../dropdowns/authMenu";
import { useSupaAuth } from "../../hooks/useSupaAuth";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { DEFAULT_AVATAR_URLS } from "../../lib/config";

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const Header = ({ openChat, setOpenChat }) => {
  const { setUser, setRefresh, setIsLoading } = useSupaAuth();
  const { connected, publicKey } = useWallet();

  useEffect(() => {
    function generateRandomReferralID(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let referralID = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        referralID += characters.charAt(randomIndex);
      }

      return referralID;
    }

    const getuser = async () => {
      if (connected && publicKey) {
        console.log("Wallet connected:", publicKey.toBase58());
        setIsLoading(true);
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("wallet_address", publicKey.toBase58());

        if (!error && data && data.length > 0) {
          setUser(data[0]);
        } else {
          // create user

          const randomIndex = Math.floor(
            Math.random() * DEFAULT_AVATAR_URLS.length
          );
          const avatar = DEFAULT_AVATAR_URLS[randomIndex];
          const { data, error } = await supabase
            .from("users")
            .insert({
              wallet_address: publicKey.toBase58(),
              avatar,
              referral_id: generateRandomReferralID(8),
            })
            .select()
            .single();

          if (!error) {
            setUser(data);
          } else {
            console.log("failed to create new user");
            setUser(null);
          }
        }
        setIsLoading(false);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };

    if (connected) {
      getuser();
    }
    setRefresh((prev) => !prev);
  }, [connected, publicKey, setIsLoading, setRefresh, setUser]);


  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-[80px] flex md:justify-between items-center bg-black/[35] border-none">
      <div className="basis-1/3 mx-5">
        <Link to="/">
          <img src={LogoSedona} className="h-[64px]" />
        </Link>
      </div>



      <div className="w-full flex items-center justify-end gap-3 md:gap-5 mr-6 md:mr-8">
        {/* <button
          onClick={handleClickToOpen}
          className={`cursor-pointer rounded-[8px] ${
            // page === "Private" ? 

            // "bg-[#DFFE00] text-[#030303]"
            " text-[#DFFE00] bg-[#52545A40]"
            }`}
        >
          <p
            className="rounded-[4px] uppercase text-[12px] md:text-[16px] font-chakra
         font-[600] md:py-2 py-1 px-[18px] md:px-[30px] "
          >
            Sign In
          </p>
        </button>
        <Dialog open={open} onClose={handleToClose}>
          <DialogTitle>{"How are you?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              I am Good, Hope the same for you!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToClose}
              color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog> */}
        <div className="">
          {connected ? (
            <AuthMenu>
              <button className="bg-[#1E2023] rounded-[4px] p-2 flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="#DFFE00"
                  />
                  <path
                    d="M12.0003 11.9997C14.5317 11.9997 16.5837 9.94763 16.5837 7.41634C16.5837 4.88505 14.5317 2.83301 12.0003 2.83301C9.46898 2.83301 7.41699 4.88505 7.41699 7.41634C7.41699 9.94763 9.46898 11.9997 12.0003 11.9997Z"
                    fill="#DFFE00"
                  />
                  <path
                    d="M2.83301 17.4998C2.83301 16.2217 3.75728 13.0612 6.91885 11.3359C8.09243 12.8549 9.9318 13.8331 11.9997 13.8331C14.0676 13.8331 15.907 12.8549 17.0805 11.3359C20.2421 13.0612 21.1663 16.2217 21.1663 17.4998C21.1663 19.5248 17.0623 21.1665 11.9997 21.1665C6.93697 21.1665 2.83301 19.5248 2.83301 17.4998Z"
                    fill="#DFFE00"
                  />
                </svg>

                <div className="text-[#DFFE00] text-xs flex items-center gap-2">
                  Profile
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_713_2705)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.70711 2.29289C8.09763 2.68342 8.09763 3.31658 7.70711 3.70711L4.70711 6.70711C4.31658 7.09763 3.68342 7.09763 3.29289 6.70711L0.292893 3.70711C-0.097631 3.31658 -0.097631 2.68342 0.292893 2.29289C0.683417 1.90237 1.31658 1.90237 1.70711 2.29289L4 4.58579L6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289Z"
                        fill="#DFFE00"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_713_2705">
                        <rect width="8" height="8" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </AuthMenu>
          ) : (
            <WalletMultiButton > Sign In</WalletMultiButton>
          )}
        </div>



        {!openChat && (
          <div
            className={`hidden w-[46px] h-[40px] rounded-[4px] md:grid place-items-center bg-[#52545A]/25`}
            onClick={() => setOpenChat(true)}
          >

            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_633_868)">
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
                <clipPath id="clip0_633_868">
                  <rect width="18" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;

Header.propTypes = {
  openChat: PropTypes.bool.isRequired,
  setOpenChat: PropTypes.func.isRequired,
};
