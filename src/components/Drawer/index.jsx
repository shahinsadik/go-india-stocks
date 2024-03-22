"use client";
import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Person2Icon from "@mui/icons-material/Person2";
import { Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineMessage } from "react-icons/md";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const SwipeableTemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const [showDiscussionSubMenu, setShowDiscussionSubMenu] = useState(false);
  const router = useRouter();
  const location = usePathname();

  const toggleDiscussionSubMenu = () => {
    setShowDiscussionSubMenu(!showDiscussionSubMenu);
  };

  return (
    <div className="flex  ">
      <div
        className={` ${
          open ? "lg:w-72 w-56 bg-[#1e375f]" : "w-0 "
        } bg-dark-purple   h-screen lg:sticky  fixed top-0 left-0 duration-300`}
      >
        <ArrowLeftIcon
          className={`absolute cursor-pointer -right-7  bottom-1/2 translate-y-1/2 w-7 
          bg-[#1e375f] text-white h-36 ${!open && "rotate-180 "}`}
          onClick={() => setOpen(!open)}
        >
          {" "}
          OPen{" "}
        </ArrowLeftIcon>
        <div className="">
          <div
            className={`text-white origin-left font-medium text-xl duration-700 ${
              !open && "scale-0"
            }`}
          >
            <ul className="">
              <div className="mb-2">
                <div className="flex py-5 justify-between">
                  <div className="flex gap-2">
                    <Person2Icon />
                    <Typography
                      level="title-md"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      Hello, User
                    </Typography>
                  </div>

                  <NotificationsNoneOutlinedIcon className="text-end text-white mr-3" />
                </div>
                <hr />
              </div>
              <li
                
                // className="bg-[#142341]"
                onClick={toggleDiscussionSubMenu}
              >
                <div 
                className={`${
                  location === "/" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2 flex justify-between`}
                // className="flex justify-between"
                ><span className="flex gap-1 items-center"><MdOutlineMessage /> Discussion Form</span> <ArrowDropDownIcon /></div>
                {/* Submenu */}
                {showDiscussionSubMenu && (
                  <ul className="pl-2">
                    <li
                      className={`${
                        location === "/market-stories-2"
                          ? "bg-[#142341] p-1"
                          : ""
                      } hover:bg-[#142341] mb-2`}
                    >
                      <Link href="/market-stories-2">
                      <MonetizationOnIcon/>  Market Stories 2
                      </Link>
                    </li>
                    <li
                      className={`${
                        location === "/market-stories-3"
                          ? "bg-[#142341] p-1"
                          : ""
                      } hover:bg-[#142341] mb-2`}
                    >
                      <Link href="/discussion-form/market-stories-3">
                      <MonetizationOnIcon/> Market Stories 3
                      </Link>
                    </li>
                    <li
                      className={`${
                        location === "/discussion-form/sentiment-2"
                          ? "bg-[#142341] p-1 "
                          : ""
                      } hover:bg-[#142341] mb-2 ml-3 `}
                    >
                      <Link href="/sentiment-2">
                        Sentiment 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`${
                  location === "/market-stories" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2`}
              >
                 <Link href="/market-stories"><MonetizationOnIcon/> Market Stories</Link>
              </li>
              <li
                className={`${
                  location === "/sentiment" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2 ml-3`}
              >
                <Link href="/sentiment">Sentiment</Link>
              </li>
              <li
                className={`${
                  location === "/market" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2 ml-3`}
              >
                <Link href="/market">Market</Link>
              </li>
              <li
                className={`${
                  location === "/sector" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2 ml-3`}
              >
                <Link href="/sector">Sector</Link>
              </li>
              <li
                className={`${
                  location === "/watch-list" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2 ml-3`}
              >
                <Link href="/watch-list">Watch List</Link>
              </li>
              <li
                className={`${
                  location === "/news-interview" ? "bg-[#142341] p-1" : ""
                } hover:bg-[#142341] mb-2 ml-3`}
              >
                <Link href="/news-interview">News/ Interview</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
