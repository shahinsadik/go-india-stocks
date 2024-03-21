"use client";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Person2Icon from "@mui/icons-material/Person2";
import { Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const SwipeableTemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const location = usePathname();
  const pathname = usePathname();
  // const Menus = [
  //   {
  //     name: "Discussion Form",
  //     path: "/",
  //   },
  //   {
  //     name: "Market Stories",
  //     path: "/market-stories",
  //   },
  //   {
  //     name: "Sentiment",
  //     path: "/sentiment",
  //   },
  //   {
  //     name: "Market",
  //     path: "/about",
  //   },
  //   {
  //     name: "Sector",
  //     path: "/about",
  //   },
  //   {
  //     name: "Watch List",
  //     path: "/about",
  //   },
  //   {
  //     name: "News/Interview",
  //     path: "/about",
  //   },
  // ];
  const links = (
    <ul className="pl-2">
      <li
        className={`${
          location === "/" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/"> Discussion Form</Link>
      </li>
      <li
        className={`${
          location === "/market-stories" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/market-stories">Market Stories</Link>
      </li>
      <li
        className={`${
          location === "/sentiment" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/sentiment">Sentiment</Link>
      </li>
      <li
        className={`${
          location === "/market" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/market">Market</Link>
      </li>
      <li
        className={`${
          location === "/sector" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/sector">Sector</Link>
      </li>
      <li
        className={`${
          location === "/watch-list" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/watch-list">Watch List</Link>
      </li>
      <li
        className={`${
          location === "/news-interview" ? "bg-[#142341] p-1" : ""
        } hover:bg-[#142341] mb-2`}
      >
        <Link href="/news-interview">News/ Interview</Link>
      </li>
    </ul>
  );


  return (
    <div className="flex  ">
      <div
        className={` ${
          open ? "lg:w-72 w-56 bg-[#1e375f]" : "w-0 "
        } bg-dark-purple   h-screen lg:sticky  fixed top-0 left-0 duration-300`}
        // className="relative duration-300 "
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
              {/* {Menus.map((Menu, index) => (
                <Link href={Menu.path} key={index} className={`${
                  location === Menu.path ? "text-[#1f2937] font-bold" : ""
                } hover:font-bold hover:text-[#1f2937]`}> 
                  <span >
                    <li
                      className={`flex hover:bg-[#142341] rounded-md p-3 cursor-pointer hover:bg-light-white text-white text-sm items-center ${index === 0 && "bg-light-white"}`}
                    >
                      <span className={!open && "hidden"}>{Menu.name}</span>
                    </li>
                  </span>
                </Link>
              ))} */}
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwipeableTemporaryDrawer;
