"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
// icons import 
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaEye, FaShareAlt } from "react-icons/fa";

// json data import 
import allPost from "@/data/post.json";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DisscussFormCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <div className="hidden lg:block  mb-5">
        <span className="text-red-600 text-xl font-semibold bg-gray-300 p-2">
          DISSCUSSION FORM
        </span>
      </div>

      {allPost?.map((post) => (
        <div key={post.postId} className="w-full rounded-md shadow-black shadow p-3 my-5">
          <div className="flex justify-between items-center gap-5">
            <div className="flex gap-2 items-center justify-end ">
              <Image
                className="rounded-full h-12 w-12"
                height={500}
                width={500} 
                alt="image"
                placeholder="blur"
                blurDataURL={post.postImg}
                src={post.postImg}
              />
              <p className="font-semibold">{post.postUserName}</p>
              <span className="rounded-l-2xl px-2 rounded-r-2xl bg-blue-600 text-white text-sm">
                {post.category}
              </span>
            </div>
            <div>
              <p className="text-blue-700 text-sm">{post.timeAgo}</p>
            </div>
          </div>
          <div className="ml-14 mr-16">
            <p className="  rounded-lg">{post.post}</p>
            <div className="flex justify-between items-center pt-2">
              <div>
                <button>
                  <FavoriteBorderIcon className="hover:text-red-900" /> {post.reactions}k
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button>
                  {" "}
                  <FaEye className="text-xl hover:text-blue-900" />{" "}
                </button>{" "}
                <span> {post.views}k</span>
              </div>
              <div className="flex items-center gap-1">
                <button>
                  <CommentOutlinedIcon  className=" hover:text-blue-900"/> 
                </button>
                {post.comments}k <span className= "hidden md:block">Comments</span>
              </div>
              <div className="flex items-center gap-1">
                <button>
                  <FaShareAlt className=" hover:text-blue-900" />
                </button>{" "}
                <span className="hidden md:block"> Share </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
