"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";



const Doctor = () => {
  const word1 = `Dr.Sri Theja has pursued her MBBS & MS Obg from prestigious Gandhi medical college & been awarded with Gold medal & many awards for tremendous work in the field of Gynecology & Obstetrics.`;
  const word2 = `She also Completed Dnb in Gynecology & obstetrics.`;
  const word3=`Later she got her fellowship in reproductive medicine & got her expertise in Infertility, Pcod & IVF treatments from Oasis Fertility Hyderabad.
With  all the skills and expertise she showed her passion & hardworking  nature in treating & helping patients past 10yrs & even during  covid times.`




    const words = [
        {
          text: "Human Touch",
          className: "text-dark-pink dark:text-dark-pink underline",
          
        },
        {
          text: "-",
          className: "text-dark-pink dark:text-dark-pink ",
        },
        {
          text: "That’s",
          className: "text-dark-pink dark:text-dark-pink underline",
        },
        {
          text: "what",
          className: "text-dark-pink dark:text-dark-pink underline",
        },
        {
          text: "makes",
          className: "text-dark-pink dark:text-dark-pink underline",
          
        },
        {
            text: "us",
            className: "text-dark-pink dark:text-dark-pink underline",
            
          },
          {
            text: "different!",
            className: "text-dark-pink dark:text-dark-pink underline",
            
          },
      ];
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-light-pink pt-[50px]   ">
      <TypewriterEffectSmooth words={words}   />

      {/* doctor component */}
      <div className="flex flex-col lg:ml-[100px]  mt-[40px] bg-light-pink p-8">
  {/* Doctor Image */}
  <div className="mb-8 ">
    <Image
      src="/Doct.svg"
      alt="Doctor"
      width={354}
      height={385}
      className="rounded-full md:rounded-lg"
    />
  </div>

  {/* Container for Education Card and Left Side Content */}
  <div className="flex flex-col lg:flex-row w-full">
    {/* Education Card */}
    <div className="w-[300px] mb-8 lg:mb-0 lg:mr-4 lg:ml-[30px] ">
      <div className=" p-6 shadow-md text-white rounded-[30px] bg-dark-pink">
        
        {/* Add education details here */}
        <p className="font-baloo font-bold">Dr. Sri Theja and Dr. Mallik Arjun</p>
        <p className=" font-baloo font-normal" style={{color:"#C9C9C9"}}>Founders of Divi Fertility Center</p>
        
      </div>
    </div>

    {/* Left Side Content */}
    <div className="w-auto lg:w-[500px] lg:h-[485px] lg:ml-[200px] lg:mt-[-410px]">
      <div className="bg-dark-pink rounded-[30px] p-6 shadow-md">
        {/* Add left side content here */}
        <p className="text-white font-kalam font-normal lg:text-2xl text-justify ">Pregnancy is the most beautiful moment in a couple’s life. We deeply understand that alongside  this happiness, there are also many doubts, a lot of confusion and anxiety. You can ask us anything and we will patiently answer them all till you are at absolute ease. For us, it is equally important to provide you with strong emotional support in this  journey because we know exactly the roller coaster that you are going through. Your “Trust” means everything to us and we promise no matter what we will never break it.</p>
      </div>
    </div>
  </div>
</div>
<div className="mb-[200px] mt-[150px]">
  <p className="font-bold lg:text-[48px] font-sans lg:ml-[-400px]" style={{color:"#A5009E"}}>About Dr. Sri Theja Reddy</p>
</div>
<div className="flex flex-col lg:ml-[10px]  mt-[40px] bg-light-pink p-8">
  {/* Doctor Image */}
  <div className=" lg:ml-[-500px] mt-[-180px] ">
    <Image
      src="/s.svg"
      alt="Doctor"
      width={370}
      height={503}
      className="rounded-[80px] md:rounded-lg"
    />
    
  </div>
  
</div>
<div className="lg:mt-[-500px] xl:ml-[700px] xl:mr-[100px] lg:ml-[500px] lg:mr-[70px] ml-[30px] mr-[30px]  justify-between">
<TextGenerateEffect words={[word1, word2,word3]} lineSpacing="mt-6" />

</div>

     
    </div>
  )
}

export default Doctor