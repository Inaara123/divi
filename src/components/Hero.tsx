import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const styles = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };
  return (
    <div className="relative flex justify-center overflow-hidden h-auto bg-light-pink">
      <div
        className="absolute left-[-293px] w-[919px] h-[856px]  z-10"
        style={{
          background: 'linear-gradient(to right, rgba(248, 204, 255, 1), rgba(115, 115, 115, 0))'
        }}
      />
      <Image
        src='/baby.svg'
        className='min-w-full max-h-full  relative z-0'
        width={1280}
        height={800}
        alt="Baby"
      />
      <div className="absolute inset-0 flex flex-col justify-center ml-[30px] items-start p-4 md:p-8 lg:p-16 z-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-4 lg:mt-[20px] mt-[-10px] lg:mb-[50px] " style={{color:"#84027F"}}>Divi Fertility Center</h1>
        <p className="text-lg md:text-xl lg:text-[44px] mb-8 font-poppins font-semibold md:mb-4 drop-shadow-2xl" style={{color:"rgba(72, 15, 92, 1)",}}>
         Guiding You to Safe, Natural Births <br/>
        <span className='block mt-[20px]'>with Exceptional Care</span>
          </p>
        <p className="text-base md:text-lg lg:text-[24px] mt-[30px] font-sans font-normal" style={{color:"#6B004D"}} >At <span className='font-bold'>Divi,</span> We have the <span  className='font-bold'>highest Normal <br /> Delivery rate in Hyderabad</span> </p>
        <div className='mt-[50px] flex flex-row items-center'>
           <Image
            src="/h.svg"
            alt=""
            width={100}
            height={100}
            className='lg:w-[214px] lg:h-[214px]'
            />
          <div className='ml-4'>
            <p className='font-bold font-sans  text-[24px]'>Dr. Sri Theja Reddy</p>
            <p className='font-medium font-sans'>MBBS, MS - Obstetrics <br/> & Gynaecology</p>
        </div>
        </div>
        <div className="mt-[30px]">
              <p className="text-dark-pink font-bold font-sans lg:text-[32px]">Book a consultation</p>
              <div className="space-y-4">
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-[10px]"
                  />
                </div>
                <div>
              
                  <input
                    id="contact"
                    type="text"
                    placeholder="Enter your contact number"
                    className="w-full p-2 border border-gray-300 rounded-[10px]"
                  />
                </div>
                <button className="bg-dark-pink text-white font-sans py-2 px-4 rounded-[10px]">Book an Appointment</button>
              </div>
            </div>
      </div>

      
      
    </div>
  )
}

export default Hero