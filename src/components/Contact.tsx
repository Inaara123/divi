import Image from 'next/image'
import React from 'react'


const Contact = () => {
    
  return (
    <div className="flex flex-col lg:flex-row items-center lg:pt-[200px] bg-light-pink p-10">
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="lg:text-[48px] font-bold mb-4 text-dark-pink underline">Contact Us</h2>
        <div className="space-y-4 mt-[50px]">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="material-icons mr-2">
                <Image
                src="/Loc.svg"
                alt=""
                width={50}
                height={50}/>
              </span>
              
            </div>
            <p className="ml-[70px] mt-[-40px] lg:mt-[-50px]  lg:text-[28px] " style={{color:"rgba(92, 33, 87, 1)"}}>8688023456</p>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex items-center mt-[50px]">
              <span className="material-icons mr-2">
                <Image
                src="/ins.svg"
                alt=""
                width={50}
                height={50}/>
              </span>
              
            </div>
            <p className="ml-[70px] mt-[-40px] lg:mt-[-50px]  lg:text-[28px] " style={{color:"rgba(92, 33, 87, 1)"}}>@divifertilitycenter</p>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex items-center mt-[50px]">
              <span className="material-icons mr-2">
                <Image
                src="/twi.svg"
                alt=""
                width={50}
                height={50}/>
              </span>
              
            </div>
            <p className="ml-[70px] mt-[-40px] lg:mt-[-50px]  lg:text-[28px] " style={{color:"rgba(92, 33, 87, 1)"}}>@divifertilitycenter</p>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex items-center mt-[50px]">
              <span className="material-icons mr-2">
                <Image
                src="/lo.svg"
                alt=""
                width={50}
                height={50}/>
              </span>
              
            </div>
            <p className="ml-[70px] mt-[-60px] lg:mt-[-70px]  lg:text-[28px] " style={{color:"rgba(92, 33, 87, 1)"}}>Above Ratnadeep, 1st floor ,Divi Speciality Clinic, main road, behind Gangaram, Chanda Nagar, Hyderabad, 500050,</p>
          </div>
          
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.887865821191!2d78.32778907587733!3d17.49462028383786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9253f441cc7b%3A0xcea0d9b3ea8a0a5!2sDivi%20Speciality%20Clinic!5e0!3m2!1sen!2sin!4v1629922870894!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact