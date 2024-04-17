/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

export function SideBarPopover({ children, sideBar }) {
  return (
    <Popover className="">
      <PopoverHandler>{children}</PopoverHandler>
      <PopoverContent
        className="bg-blue-gray-900 border-none relative z-[9999999] text-white min-w-[300px]  
     h-[calc(100vh-27%)] overflow-y-auto !top-[unset] !bottom-[70px]"
      >
        <div className="py-4 ">{sideBar}</div>
      </PopoverContent>
    </Popover>
  );
}
