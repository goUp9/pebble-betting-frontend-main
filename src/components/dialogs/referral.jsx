/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSupaAuth } from "../../hooks/useSupaAuth";

export function Referral({ children }) {
  const { user } = useSupaAuth();
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
        className="bg-black rounded-[4px] mt-8 text-[#FFFFFF] overflow-auto mb-8 h-full max-w-[500px] w-full font-saira "
      >
        <div className=" bg-[#CBD7FF03]/5 flex px-4  py-4 items-center  w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#FFFFFF] text-[16px] font-chakra uppercase font-[600] ">
              Referral
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
            Referral
          </div>
        </div>

        <div className="px-[21px] my-[16px] ">
          <div className="bg-[#CBD7FF]/5 w-full rounded-[8px]">
            <p className="p-4 font-inter font-[500] text-[14px] text-[#FFFFFF]/40">
              Invite your friends
            </p>
          </div>
          <div className="bg-[#CBD7FF]/5 w-full mt-4 rounded-[8px]">
            <p className="p-4 font-inter font-[500] text-[14px] text-[#FFFFFF]/40">
              Place a bet
            </p>
          </div>

          <div className="bg-[#CBD7FF]/5 w-full mt-4 rounded-[8px]">
            <p className="p-4 font-inter font-[500] text-[14px] text-[#FFFFFF]/40">
              Earn points and increase your degen score
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <p className="font-inter font-[400] text-[18px]">Your Code</p>
          <div className="mt-2 font-inter font-[400] text-[10px]">
            Share this code with your friends and increase your degen score!
          </div>
          <div className="mt-2 border border-[#3C4450] p-[9px] font-inter font-[400] text-[#FFFFFFA3]/70 text-[36px] rounded-[12px]">
            {user?.referral_id}
          </div>
        </div>
        <div className="px-[12.5]">
          <Clipboard />
        </div>
        {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
        {/* <DialogBody>
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
            <span>Confir</span>
          </Button>
.        </DialogFooter> */}
      </Dialog>
    </>
  );
}

const Clipboard = () => {
  const { user } = useSupaAuth();
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.log("user");
    console.log(user);
    const link = `https://sedona.games/?r=${user?.referral_id}`;
    setValue(link);
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  return (
    <div>
      <div className=" flex justify-between w-full mt-8 bg-[#CBD7FF08]/5  px-6 rounded-[4px] py-2 items-center">
        <div className="text-[14px] font-[400] font-inter ">{value}</div>

        <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
          <div className="relative">
            {copied && (
              <div className="absolute -top-7 right-0 text-[#DFFE00]">
                copied!
              </div>
            )}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M8.5 0H12.3781C12.775 0 13.1562 0.159375 13.4375 0.440625L15.5594 2.5625C15.8406 2.84375 16 3.225 16 3.62188V10.5C16 11.3281 15.3281 12 14.5 12H8.5C7.67188 12 7 11.3281 7 10.5V1.5C7 0.671875 7.67188 0 8.5 0ZM1.5 4H6V6H2V14H8V13H10V14.5C10 15.3281 9.32812 16 8.5 16H1.5C0.671875 16 0 15.3281 0 14.5V5.5C0 4.67188 0.671875 4 1.5 4Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};
