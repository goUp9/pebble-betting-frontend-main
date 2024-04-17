// import React from 'react'
// import { DateRange } from 'react-date-range';
// import {useState} from 'react'
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css';
// const AppTable = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: 'selection'
//     }
//   ]);
//   return (
//     <DateRange
//       editableDateInputs={true}
//       onChange={item => setState([item.selection])}
//       moveRangeOnFirstSelection={false}
//       ranges={state}
//       className='bg-black'
//     />
//   );
// }

// export default AppTable

import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const AppTable = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div className="flex flex-col space-y-2 relative">
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="bg-black !placeholder-shown:text-[#DFFE00]!text-white disabled:bg-blue-gray-50 w-full flex justify-between items-center px-4 mb-2 cursor-pointer"
      >
        <p className="font-saira text-[14px] font-[500] text-[#FFFFFF]/30">
          Select a date range
        </p>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_742_4682)">
            <path
              d="M5.86673 8.32617V10.4595H3.7334V8.32617H5.86673Z"
              fill="#DFFE00"
            />
            <path
              d="M5.86673 13.6587V11.5254H3.7334V13.6587H5.86673Z"
              fill="#DFFE00"
            />
            <path
              d="M9.06693 8.32617V10.4595H6.93359V8.32617H9.06693Z"
              fill="#DFFE00"
            />
            <path
              d="M9.06693 13.6587V11.5254H6.93359V13.6587H9.06693Z"
              fill="#DFFE00"
            />
            <path
              d="M12.2671 8.32617V10.4595H10.1338V8.32617H12.2671Z"
              fill="#DFFE00"
            />
            <path
              d="M12.2671 13.6587V11.5254H10.1338V13.6587H12.2671Z"
              fill="#DFFE00"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.79987 0.859375C4.21077 0.859375 3.7332 1.33694 3.7332 1.92604H2.66654C1.48833 1.92604 0.533203 2.88117 0.533203 4.05938V14.726C0.533203 15.9043 1.48833 16.8594 2.66654 16.8594H13.3332C14.5114 16.8594 15.4665 15.9043 15.4665 14.726V4.05938C15.4665 2.88117 14.5114 1.92604 13.3332 1.92604H12.2665C12.2665 1.33694 11.789 0.859375 11.1999 0.859375C10.6108 0.859375 10.1332 1.33694 10.1332 1.92604H5.86654C5.86654 1.33694 5.38897 0.859375 4.79987 0.859375ZM2.66654 4.05938H13.3332V5.12604H2.66654V4.05938ZM2.66654 7.25938V14.726H13.3332V7.25938H2.66654Z"
              fill="#DFFE00"
            />
          </g>
          <defs>
            <clipPath id="clip0_742_4682">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.859375)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {open && (
        <div className="w-full overflow-auto">
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            className="text-black "
            size="xs"
          />
        </div>
      )}
    </div>
  );
};

export default AppTable;
