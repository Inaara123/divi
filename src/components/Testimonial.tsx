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
                src="/d2.jpg"
                width={300}
                height={500}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Anupama Eemani",
          description:
            "Extra ordinary treatment with keen attention to patient. Nice facility, even the attendants will feel comfortable. Good room maintenance, AC, Attached bathroom with geyser, Drinking water (hot and cold). Overall good personal care. Felt at home, thank you so much Theju mam...",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/d3.jpg"
                width={300}
                height={500}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Ganesh Gani",
          description:
            "Dr.Sri Theja Reddy took great care of my wife during her pregnancy. She listened patiently to our concerns and explained everything clearly. Thanks to her, we now have twins! We're so thankful to Dr.Sri Theja Reddy. The nurses, caregivers, medical staff, and receptionists were all incredibly caring and supportive. We're grateful to each and every one of them for their kindness and dedication.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/d4.jpg"
              width={300}
              height={500}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
          ),
        },
        {
          title: "Maheswar Reddy",
          description:
           "I m short of words to express my gratitude to Dr. Sri Theja mam and Hospital staff The way she handled my wife pregnancy n delivery it's remarkable. She is a perfect blend of good human being and a doctor. Most humble and polite and of course most capable in gynecologist which always keeps her patients at ease. She is gem she is like a goddess. Thank u soooo much dr. Sri Theja for such an easy normal delivery., for ur promptness for ur patience for ur friendliness for ur care this platform falls short of praising her rather 'thank u' seems so trivial.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/d1.jpg"
              width={300}
              height={500}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
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