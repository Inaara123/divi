"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Movingcard = () => {
  return (
    <div className="h-[40rem] mt-[-200px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="fast"
      />
    </div>
  );
};

const images = [
  {
    image: "m1.svg",
    alt: "Description of Image 1",
  },
  {
    image: "m2.svg",
    alt: "Description of Image 2",
  },
  {
    image:"m3.svg",
    alt: "Description of Image 3",
  },
  {
    image: "m4.svg",
    alt: "Description of Image 4",
  },
  {
    image: "m5.svg",
    alt: "Description of Image 5",
  },
];

export default Movingcard;
