"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


const Doctor = () => {
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
        <p>Dr. Sri Theja and Dr. Mallik Arjun</p>
        <p style={{color:"#C9C9C9"}}>Founders of Divi Fertility Center</p>
        
      </div>
    </div>

    {/* Left Side Content */}
    <div className="w-auto lg:w-[500px] lg:h-[485px] lg:ml-[200px] lg:mt-[-350px]">
      <div className="bg-dark-pink rounded-[30px] p-6 shadow-md">
        {/* Add left side content here */}
        <p className="text-white ">Pregnancy is the most beautiful moment in a couple’s life. We deeply understand that alongside  this happiness, there are also many doubts, a lot of confusion and anxiety. You can ask us anything and we will patiently answer them all till you are at absolute ease. For us, it is equally important to provide you with strong emotional support in this  journey because we know exactly the roller coaster that you are going through. Your “Trust” means everything to us and we promise no matter what we will never break it.</p>
      </div>
    </div>
  </div>
</div>
<div className="mb-[200px] mt-[150px]">
  <p className="font-bold lg:text-[48px] lg:ml-[-400px]" style={{color:"#A5009E"}}>About Dr. Sri Theja Reddy</p>
</div>
<div className="flex flex-col lg:flex-row mt-[-100px] lg:ml-[100px] items-center lg:items-start">
        <div className="w-full lg:w-full xl:w-1/2 md:w-1/2  p-4">
          <Image
            src="/Doct1.svg"
            alt="Duct Image"
            width={384}
            height={503}
            className="lg:mt-[20px] "
          />
        </div>
        <div className="lg:ml-[150px] lg:mr-[250px] p-4">
          <p className="text-base lg:text-lg">
            {/* Add your content here */}
            Dr.Sri Theja has pursued her MBBS & MS Obg from prestigious Gandhi medical college & been awarded with Gold medal & many awards for tremendous work in the field of Gynecology & Obstetrics.
          </p>
          <br/>
          <p className="text-base lg:text-lg">She also Completed Dnb in Gynecology & obstetrics.</p>
          <br/>
          <p className="text-base lg:text-lg">Later she got her fellowship in reproductive medicine & got her expertise in Infertility, Pcod & IVF treatments from Oasis Fertility Hyderabad.
          With  all the skills and expertise she showed her passion & hardworking  nature in treating & helping patients past 10yrs & even during  covid times.</p>

        </div>
      </div>

     
    </div>
  )
}

export default Doctor