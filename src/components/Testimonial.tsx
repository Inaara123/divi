"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


const Testimonial = () => {
    const words = [
        {
          text: "Heartwarming",
          className: "text-dark-pink dark:text-dark-pink underline",
          
        },
        {
          text: "Words",
          className: "text-dark-pink dark:text-dark-pink underline ",
        },
        {
          text: "from",
          className: "text-dark-pink dark:text-dark-pink underline",
        },
        {
          text: "The",
          className: "text-dark-pink dark:text-dark-pink underline",
        },
        {
          text: "Families",
          className: "text-dark-pink dark:text-dark-pink underline",
          
        },
        {
            text: "We’ve",
            className: "text-dark-pink dark:text-dark-pink underline",
            
          },
          {
            text: "Helped",
            className: "text-dark-pink dark:text-dark-pink underline",
            
          },
      ];

      const content = [
        {
          title: "Neha Patel",
          description:
            "I cannot thank Dr. Sri Theja and her team enough for their exceptional care and support throughout my pregnancy. From the very beginning, I felt reassured and confident in their expertise. Thanks to their dedication, I had a smooth and natural delivery. I highly recommend this clinic to any expectant mother.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/ts1.svg"
                width={281}
                height={334}
                className="h-full w-full  object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Priya Sharma",
          description:
           "Dr. Sri Theja and her team made our dream of becoming parents come true. After struggling with infertility for years, we were overjoyed to find success at this clinic. The personalized care and attention we received were unparalleled. We are forever grateful to Dr. Sri Theja for helping us welcome our beautiful baby into the world.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/linear.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Version control",
          description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Version control
            </div>
          ),
        },
        {
          title: "Running out of content",
          description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Running out of content
            </div>
          ),
        },
      ];
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-light-pink pt-[50px]  ">
      <TypewriterEffectSmooth words={words}   />
      <div className="p-10">
      <StickyScroll content={content} />
    </div>
      </div>
  )
}

export default Testimonial