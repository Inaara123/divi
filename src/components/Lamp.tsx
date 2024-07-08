"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Lamp:React.FC = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 sm:mt-[2px] py-4 bg-clip-text text-center text-[16px] font-medium tracking-tight text-transparent md:text-[32px] lg:text-[42px]"
        style={{color:"rgba(159, 35, 110, 1)"}}
      >
        We dont care what day it is , what time it <br/>is, what festival it is, when you need us,<br/>  we will be there right beside you
      </motion.h1>
    </LampContainer>
  )
}

export default Lamp