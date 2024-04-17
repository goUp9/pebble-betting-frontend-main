/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";

export function ProfileModal({ children }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progress = 30;
    setProgress(progress);
    const progressBar = document.querySelector("#progressBar");
    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
  }, [open]);

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
        className="bg-black rounded-[4px] text-[#FFFFFF] overflow-y-auto mb-8 h-full w-full font-saira py-4"
      >
        <div className=" bg-[#CBD7FF03] /10 flex px-4  py-4 items-center  w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#FFFFFF] text-[16px] uppercase font-[600] ">
              My Profile
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

        <div className="mt-[32px] flex items-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <svg
              width="90"
              height="92"
              viewBox="0 0 90 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_742_4957)">
                <g clipPath="url(#clip1_742_4957)">
                  <g clipPath="url(#clip2_742_4957)">
                    <path
                      d="M78.2198 75.8578C78.2198 75.8501 78.2198 75.8501 78.2198 75.8422C78.212 75.5225 78.1496 75.2104 78.0482 74.9219C75.3338 61.3967 65.5916 50.4142 52.7918 45.9526C59.1722 41.7796 63.3842 34.5724 63.3842 26.3824C63.3842 13.4656 52.9166 2.99805 39.9998 2.99805C27.083 2.99805 16.6154 13.4656 16.6154 26.3824C16.6154 34.5724 20.8274 41.7796 27.2078 45.9526C14.408 50.4142 4.6658 61.3967 1.9592 74.9219C1.8578 75.2104 1.7954 75.5225 1.7876 75.8422C1.7876 75.8501 1.7876 75.8501 1.7876 75.8578C1.7876 75.8891 1.7876 75.9125 1.7876 75.9436C1.7876 77.6284 3.1526 79.0013 4.8452 79.0013C6.5378 79.0013 7.9028 77.6362 7.9028 75.9436C7.9028 75.9125 7.9028 75.8812 7.9028 75.8578H7.9652C11.0618 61.0067 24.2282 49.8526 39.9998 49.8526C55.7714 49.8526 68.9378 61.0067 72.0422 75.8578H72.1046C72.1046 75.8891 72.1046 75.9125 72.1046 75.9436C72.1046 77.6284 73.4696 79.0013 75.1622 79.0013C76.847 79.0013 78.2198 77.6362 78.2198 75.9436C78.2198 75.9202 78.2198 75.8891 78.2198 75.8578ZM22.5902 26.3746C22.5902 16.7572 30.3824 8.96505 39.9998 8.96505C49.6172 8.96505 57.4094 16.7572 57.4094 26.3746C57.4094 35.9921 49.6172 43.792 39.9998 43.792C30.3824 43.792 22.5902 35.9921 22.5902 26.3746Z"
                      fill="#0D0F11"
                    />
                  </g>
                </g>
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="79"
                height="79"
                rx="39.5"
                stroke="#DFFE00"
              />
              <g filter="url(#filter0_d_742_4957)">
                <rect
                  x="56"
                  y="54"
                  width="26"
                  height="26"
                  rx="13"
                  fill="#DFFE00"
                  shapeRendering="crispEdges"
                />
                <rect
                  x="56.5"
                  y="54.5"
                  width="25"
                  height="25"
                  rx="12.5"
                  stroke="#DFFE00"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M68.4962 60.8659C68.7212 60.4796 69.2793 60.4796 69.5043 60.8659L71.1338 63.6637C71.2163 63.8052 71.3544 63.9055 71.5145 63.9402L74.6788 64.6254C75.1157 64.72 75.2882 65.2508 74.9903 65.5842L72.8331 67.9985C72.724 68.1206 72.6712 68.283 72.6877 68.4459L73.0138 71.6672C73.0589 72.112 72.6074 72.44 72.1983 72.2597L69.2355 70.9541C69.0856 70.8881 68.9149 70.8881 68.765 70.9541L65.8022 72.2597C65.3931 72.44 64.9416 72.112 64.9866 71.6672L65.3128 68.4459C65.3293 68.283 65.2765 68.1206 65.1674 67.9985L63.0101 65.5842C62.7123 65.2508 62.8847 64.72 63.3217 64.6254L66.486 63.9402C66.6461 63.9055 66.7842 63.8052 66.8666 63.6637L68.4962 60.8659Z"
                  fill="#CBD7FF"
                  fillOpacity="0.03"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_742_4957"
                  x="48"
                  y="50"
                  width="42"
                  height="42"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.498039 0 0 0 0 0.972549 0 0 0 0 0 0 0 0 0.38 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_742_4957"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_742_4957"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_742_4957">
                  <rect width="80" height="80" rx="40" fill="white" />
                </clipPath>
                <clipPath id="clip1_742_4957">
                  <rect
                    width="78"
                    height="80"
                    fill="white"
                    transform="translate(1 1)"
                  />
                </clipPath>
                <clipPath id="clip2_742_4957">
                  <rect
                    width="78"
                    height="78"
                    fill="white"
                    transform="translate(1 2)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="flex items-center flex-col justify-center w-full">
              <p className="text-[#DFFE00] text-[14px] font-[500] uppercase font-inter">
                6bun...baJs
              </p>
              <p className="text-[#FFFFFF99] text-[14px] font-[400] font-inter">
                Member since Mar 05, 2024
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex px-4 items-center flex-col  w-full">
          <div className="flex justify-between items-center w-full">
            <p className="font-[600] text-[14px] capitalize ">Degen Score</p>
            <p className="font-[600] text-[14px]">{progress}%</p>
          </div>
          <div className="h-[8px] w-full border mt-3 border-[#DFFE00] rounded-[4px] overflow-hidden">
            <div
              className="w-[0%] bg-[#DFFE00] h-full transition-all duration-700"
              id="progressBar"
            ></div>
          </div>
          <div className="flex mt-3 justify-center gap-1 items-center">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_742_4983)">
                <g clipPath="url(#clip1_742_4983)">
                  <g clipPath="url(#clip2_742_4983)">
                    <path
                      d="M8.01798 1.55359C8.21042 1.1462 8.79002 1.1462 8.98246 1.55359L10.6654 5.11653C10.7432 5.28112 10.8995 5.3947 11.0801 5.41778L14.9886 5.91738C15.4356 5.9745 15.6147 6.52574 15.2868 6.83465L12.4182 9.53627C12.2857 9.66107 12.226 9.84483 12.2599 10.0237L12.9926 13.8954C13.0763 14.3381 12.6074 14.6788 12.2123 14.4623L8.75646 12.569C8.59683 12.4816 8.40361 12.4816 8.24397 12.569L4.78816 14.4623C4.39303 14.6788 3.9241 14.3381 4.00788 13.8954L4.74057 10.0237C4.77442 9.84483 4.71471 9.66107 4.5822 9.53627L1.71371 6.83465C1.38572 6.52574 1.56483 5.9745 2.01175 5.91738L5.92038 5.41778C6.10093 5.3947 6.25725 5.28113 6.335 5.11653L8.01798 1.55359Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_742_4983">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_742_4983">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
                <clipPath id="clip2_742_4983">
                  <rect
                    width="16"
                    height="13.8667"
                    fill="white"
                    transform="translate(0.5 1.06641)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="font-[400] text-[14px]">Unranked</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full px-4">
          <div className="flex justify-normal gap-2 items-center w-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33398C8.21968 1.33398 8.43746 1.37796 8.64022 1.46333L14.3591 3.87129C14.5453 3.94967 14.6663 4.13199 14.6663 4.33398C14.6663 4.53597 14.5453 4.71828 14.3591 4.79666L8.64022 7.20463C8.43746 7.29 8.21968 7.33398 7.99967 7.33398C7.77967 7.33398 7.56189 7.29 7.35913 7.20463L1.64022 4.79666C1.45406 4.71828 1.33301 4.53597 1.33301 4.33398C1.33301 4.13199 1.45406 3.94967 1.64022 3.87129L7.35913 1.46333C7.56189 1.37796 7.77967 1.33398 7.99967 1.33398Z"
                fill="#DFFE00"
              />
              <path
                d="M12.8218 10.5566L14.359 11.2039C14.5452 11.2822 14.6663 11.4646 14.6663 11.6665C14.6663 11.8685 14.5452 12.0508 14.359 12.1292L8.6403 14.5372C8.4375 14.6226 8.21973 14.6665 7.99967 14.6665C7.77962 14.6665 7.56185 14.6226 7.35905 14.5372L1.6403 12.1292C1.4541 12.0508 1.33301 11.8685 1.33301 11.6665C1.33301 11.4646 1.4541 11.2822 1.6403 11.2039L3.17757 10.5566L6.8418 12.0994C7.20833 12.2537 7.60189 12.3332 7.99967 12.3332C8.39746 12.3332 8.79102 12.2537 9.15755 12.0994L12.8218 10.5566Z"
                fill="#DFFE00"
              />
              <path
                d="M14.3591 7.53792L12.8218 6.89062L9.15763 8.43343C8.79108 8.58776 8.39739 8.66727 7.99967 8.66727C7.60196 8.66727 7.20826 8.58776 6.84172 8.43343L3.17755 6.89062L1.64022 7.53792C1.45406 7.61631 1.33301 7.79862 1.33301 8.00061C1.33301 8.2026 1.45406 8.38491 1.64022 8.4633L7.35913 10.8712C7.56189 10.9566 7.77967 11.0006 7.99967 11.0006C8.21968 11.0006 8.43746 10.9566 8.64022 10.8712L14.3591 8.4633C14.5453 8.38491 14.6663 8.2026 14.6663 8.00061C14.6663 7.79862 14.5453 7.61631 14.3591 7.53792Z"
                fill="#DFFE00"
              />
            </svg>
            <p className="text-[16px] font-[700] uppercase">StatS</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2 w-full">
            <div className="bg-[#CBD7FF08]/10 rounded-[8px] bg-whit flex flex-col justify-center items-center  w-full h-auto ">
              <div className="mt-4 text-[14px] font-[400]">Wins</div>
              <div className="flex mb-4 gap-2 mt-[6px] justify-center items-center">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.45411 3.14536C4.35381 2.39307 4.93906 1.72461 5.698 1.72461H11.6156C12.3746 1.72461 12.9598 2.39307 12.8596 3.14536L12.798 3.60696H14.3039C14.6505 3.60696 14.9313 3.88788 14.9313 4.23441V5.48932C14.9313 7.33749 13.5995 8.87462 11.8433 9.19337C11.5024 9.85523 10.9634 10.3926 10.3091 10.7332C10.0769 10.8539 9.91174 11.0835 9.91174 11.3452V11.7638C9.91174 12.4569 10.4736 13.0187 11.1666 13.0187H11.7941C12.1406 13.0187 12.4216 13.2997 12.4216 13.6462C12.4216 13.9927 12.1406 14.2736 11.7941 14.2736H5.51958C5.17304 14.2736 4.89213 13.9927 4.89213 13.6462C4.89213 13.2997 5.17304 13.0187 5.51958 13.0187H6.14703C6.84009 13.0187 7.40193 12.4569 7.40193 11.7638V11.3452C7.40193 11.0835 7.23678 10.8539 7.0046 10.7332C6.35023 10.3926 5.81122 9.85523 5.47037 9.19337C3.71412 8.87462 2.38232 7.33749 2.38232 5.48932V4.86186C2.38232 4.1688 2.94416 3.60696 3.63722 3.60696H4.51566L4.45411 3.14536ZM3.63722 4.86186H4.68297L5.06892 7.75641C4.22232 7.35309 3.63722 6.48953 3.63722 5.48932V4.86186ZM12.6307 4.86186L12.2447 7.75641C13.0913 7.35309 13.6764 6.48953 13.6764 5.48932V4.86186H12.6307ZM8.93816 4.177C8.82309 3.94382 8.49059 3.94382 8.3755 4.177L7.99222 4.95363C7.94652 5.04622 7.85818 5.1104 7.756 5.12524L6.89894 5.24979C6.64162 5.28718 6.53887 5.6034 6.72507 5.7849L7.34524 6.38942C7.41918 6.46149 7.45292 6.56534 7.43547 6.66711L7.28906 7.52071C7.24511 7.777 7.51411 7.97243 7.74426 7.85143L8.51084 7.44842C8.60224 7.40036 8.71143 7.40036 8.80282 7.44842L9.5694 7.85143C9.79956 7.97243 10.0685 7.777 10.0246 7.52071L9.8782 6.66711C9.86074 6.56534 9.89448 6.46149 9.9684 6.38943L10.5886 5.7849C10.7748 5.6034 10.672 5.28718 10.4147 5.24979L9.55767 5.12525C9.45548 5.1104 9.36715 5.04622 9.32145 4.95363L8.93816 4.177Z"
                    fill="#DFFE00"
                  />
                </svg>
                <p className="text-[16px]  font-[600]">0</p>
              </div>
            </div>

            <div className="bg-[#CBD7FF08]/10 rounded-[8px] bg-whit flex flex-col justify-center items-center  w-full h-auto ">
              <div className="mt-4 text-[14px] font-[400]">Wins</div>
              <div className="flex mb-4 gap-2 mt-[6px] justify-center items-center">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.45411 3.14536C4.35381 2.39307 4.93906 1.72461 5.698 1.72461H11.6156C12.3746 1.72461 12.9598 2.39307 12.8596 3.14536L12.798 3.60696H14.3039C14.6505 3.60696 14.9313 3.88788 14.9313 4.23441V5.48932C14.9313 7.33749 13.5995 8.87462 11.8433 9.19337C11.5024 9.85523 10.9634 10.3926 10.3091 10.7332C10.0769 10.8539 9.91174 11.0835 9.91174 11.3452V11.7638C9.91174 12.4569 10.4736 13.0187 11.1666 13.0187H11.7941C12.1406 13.0187 12.4216 13.2997 12.4216 13.6462C12.4216 13.9927 12.1406 14.2736 11.7941 14.2736H5.51958C5.17304 14.2736 4.89213 13.9927 4.89213 13.6462C4.89213 13.2997 5.17304 13.0187 5.51958 13.0187H6.14703C6.84009 13.0187 7.40193 12.4569 7.40193 11.7638V11.3452C7.40193 11.0835 7.23678 10.8539 7.0046 10.7332C6.35023 10.3926 5.81122 9.85523 5.47037 9.19337C3.71412 8.87462 2.38232 7.33749 2.38232 5.48932V4.86186C2.38232 4.1688 2.94416 3.60696 3.63722 3.60696H4.51566L4.45411 3.14536ZM3.63722 4.86186H4.68297L5.06892 7.75641C4.22232 7.35309 3.63722 6.48953 3.63722 5.48932V4.86186ZM12.6307 4.86186L12.2447 7.75641C13.0913 7.35309 13.6764 6.48953 13.6764 5.48932V4.86186H12.6307ZM8.93816 4.177C8.82309 3.94382 8.49059 3.94382 8.3755 4.177L7.99222 4.95363C7.94652 5.04622 7.85818 5.1104 7.756 5.12524L6.89894 5.24979C6.64162 5.28718 6.53887 5.6034 6.72507 5.7849L7.34524 6.38942C7.41918 6.46149 7.45292 6.56534 7.43547 6.66711L7.28906 7.52071C7.24511 7.777 7.51411 7.97243 7.74426 7.85143L8.51084 7.44842C8.60224 7.40036 8.71143 7.40036 8.80282 7.44842L9.5694 7.85143C9.79956 7.97243 10.0685 7.777 10.0246 7.52071L9.8782 6.66711C9.86074 6.56534 9.89448 6.46149 9.9684 6.38943L10.5886 5.7849C10.7748 5.6034 10.672 5.28718 10.4147 5.24979L9.55767 5.12525C9.45548 5.1104 9.36715 5.04622 9.32145 4.95363L8.93816 4.177Z"
                    fill="#DFFE00"
                  />
                </svg>
                <p className="text-[16px]  font-[600]">0</p>
              </div>
            </div>

            <div className="bg-[#CBD7FF08]/10 rounded-[8px] bg-whit flex flex-col justify-center items-center  w-full h-auto ">
              <div className="mt-4 text-[14px] font-[400]">Wins</div>
              <div className="flex mb-4 gap-2 mt-[6px] justify-center items-center">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.45411 3.14536C4.35381 2.39307 4.93906 1.72461 5.698 1.72461H11.6156C12.3746 1.72461 12.9598 2.39307 12.8596 3.14536L12.798 3.60696H14.3039C14.6505 3.60696 14.9313 3.88788 14.9313 4.23441V5.48932C14.9313 7.33749 13.5995 8.87462 11.8433 9.19337C11.5024 9.85523 10.9634 10.3926 10.3091 10.7332C10.0769 10.8539 9.91174 11.0835 9.91174 11.3452V11.7638C9.91174 12.4569 10.4736 13.0187 11.1666 13.0187H11.7941C12.1406 13.0187 12.4216 13.2997 12.4216 13.6462C12.4216 13.9927 12.1406 14.2736 11.7941 14.2736H5.51958C5.17304 14.2736 4.89213 13.9927 4.89213 13.6462C4.89213 13.2997 5.17304 13.0187 5.51958 13.0187H6.14703C6.84009 13.0187 7.40193 12.4569 7.40193 11.7638V11.3452C7.40193 11.0835 7.23678 10.8539 7.0046 10.7332C6.35023 10.3926 5.81122 9.85523 5.47037 9.19337C3.71412 8.87462 2.38232 7.33749 2.38232 5.48932V4.86186C2.38232 4.1688 2.94416 3.60696 3.63722 3.60696H4.51566L4.45411 3.14536ZM3.63722 4.86186H4.68297L5.06892 7.75641C4.22232 7.35309 3.63722 6.48953 3.63722 5.48932V4.86186ZM12.6307 4.86186L12.2447 7.75641C13.0913 7.35309 13.6764 6.48953 13.6764 5.48932V4.86186H12.6307ZM8.93816 4.177C8.82309 3.94382 8.49059 3.94382 8.3755 4.177L7.99222 4.95363C7.94652 5.04622 7.85818 5.1104 7.756 5.12524L6.89894 5.24979C6.64162 5.28718 6.53887 5.6034 6.72507 5.7849L7.34524 6.38942C7.41918 6.46149 7.45292 6.56534 7.43547 6.66711L7.28906 7.52071C7.24511 7.777 7.51411 7.97243 7.74426 7.85143L8.51084 7.44842C8.60224 7.40036 8.71143 7.40036 8.80282 7.44842L9.5694 7.85143C9.79956 7.97243 10.0685 7.777 10.0246 7.52071L9.8782 6.66711C9.86074 6.56534 9.89448 6.46149 9.9684 6.38943L10.5886 5.7849C10.7748 5.6034 10.672 5.28718 10.4147 5.24979L9.55767 5.12525C9.45548 5.1104 9.36715 5.04622 9.32145 4.95363L8.93816 4.177Z"
                    fill="#DFFE00"
                  />
                </svg>
                <p className="text-[16px]  font-[600]">0</p>
              </div>
            </div>

            <div className="bg-[#CBD7FF08]/10 rounded-[8px] bg-whit flex flex-col justify-center items-center  w-full h-auto ">
              <div className="mt-4 text-[14px] font-[400]">Wins</div>
              <div className="flex mb-4 gap-2 mt-[6px] justify-center items-center">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.45411 3.14536C4.35381 2.39307 4.93906 1.72461 5.698 1.72461H11.6156C12.3746 1.72461 12.9598 2.39307 12.8596 3.14536L12.798 3.60696H14.3039C14.6505 3.60696 14.9313 3.88788 14.9313 4.23441V5.48932C14.9313 7.33749 13.5995 8.87462 11.8433 9.19337C11.5024 9.85523 10.9634 10.3926 10.3091 10.7332C10.0769 10.8539 9.91174 11.0835 9.91174 11.3452V11.7638C9.91174 12.4569 10.4736 13.0187 11.1666 13.0187H11.7941C12.1406 13.0187 12.4216 13.2997 12.4216 13.6462C12.4216 13.9927 12.1406 14.2736 11.7941 14.2736H5.51958C5.17304 14.2736 4.89213 13.9927 4.89213 13.6462C4.89213 13.2997 5.17304 13.0187 5.51958 13.0187H6.14703C6.84009 13.0187 7.40193 12.4569 7.40193 11.7638V11.3452C7.40193 11.0835 7.23678 10.8539 7.0046 10.7332C6.35023 10.3926 5.81122 9.85523 5.47037 9.19337C3.71412 8.87462 2.38232 7.33749 2.38232 5.48932V4.86186C2.38232 4.1688 2.94416 3.60696 3.63722 3.60696H4.51566L4.45411 3.14536ZM3.63722 4.86186H4.68297L5.06892 7.75641C4.22232 7.35309 3.63722 6.48953 3.63722 5.48932V4.86186ZM12.6307 4.86186L12.2447 7.75641C13.0913 7.35309 13.6764 6.48953 13.6764 5.48932V4.86186H12.6307ZM8.93816 4.177C8.82309 3.94382 8.49059 3.94382 8.3755 4.177L7.99222 4.95363C7.94652 5.04622 7.85818 5.1104 7.756 5.12524L6.89894 5.24979C6.64162 5.28718 6.53887 5.6034 6.72507 5.7849L7.34524 6.38942C7.41918 6.46149 7.45292 6.56534 7.43547 6.66711L7.28906 7.52071C7.24511 7.777 7.51411 7.97243 7.74426 7.85143L8.51084 7.44842C8.60224 7.40036 8.71143 7.40036 8.80282 7.44842L9.5694 7.85143C9.79956 7.97243 10.0685 7.777 10.0246 7.52071L9.8782 6.66711C9.86074 6.56534 9.89448 6.46149 9.9684 6.38943L10.5886 5.7849C10.7748 5.6034 10.672 5.28718 10.4147 5.24979L9.55767 5.12525C9.45548 5.1104 9.36715 5.04622 9.32145 4.95363L8.93816 4.177Z"
                    fill="#DFFE00"
                  />
                </svg>
                <p className="text-[16px]  font-[600]">0</p>
              </div>
            </div>
          </div>
        </div>

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
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}