/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import LiveChat from "../LiveChat/LiveChat";

export function PopoverDefault({ children }) {
  return (
    <Popover>
      <PopoverHandler>{children}</PopoverHandler>
      <PopoverContent className="p-0 m-0 bg-transparent border-none relative z-[9999999] text-white min-w-[300px]">
        <LiveChat openChat={true} setOpenChat={null} />
      </PopoverContent>
    </Popover>
  );
}
