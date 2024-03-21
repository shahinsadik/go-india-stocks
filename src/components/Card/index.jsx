import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import sky from "../../../public/image/sky-red.jpg";
import Image from "next/image";
import market from "../../data/market.json";
export default function MediaCard() {
  return (
    <div>
      <div className="hidden md:block sm:block mb-5">
        <span className="text-red-600 text-xl font-semibold bg-gray-300 p-2">
          MARKET STORIES
        </span>
      </div>
      {market.map((post) => (
        <Card key={post._id} className="lg:w-96 my-5">
          <Image
            className="h-36 bg-cover bg-center"
            height={500}
            width={500}
            alt="image"
            placeholder="blur"
            blurDataURL={post.img}
            src={post.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.des}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
