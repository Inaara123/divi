import Image from 'next/image';
import React from 'react'

const Service = () => {
  const services = [
    {
      title: "Maternity",
      description: "Maternal health is usually regarded as  health during pregnancy, childbirth, and the period ...",
      imageSrc: "/mat.svg",
    },
    {
      title: "Infertility",
      description: "Couples at a certain point in time have the desire to conceive. Many studies have found that almost ...",
      imageSrc: "/la.svg",
    },
    {
      title: "In Vitro Fertilization(IVF)",
      description: "For some couples, amore personalized solution  is required. IVF can be recommended in specific cases. Fertilization ...",
      imageSrc: "/ga.svg",
    },
  ];
  return (
    <div className='bg-light-pink '>
      <p className='text-dark-pink pt-[150px] text-center font-bold lg:text-[48px] underline'>
      Our Services
      </p>
      <div className="flex flex-col items-center space-y-10 mt-10 ">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-[30px] overflow-hidden w-full max-w-4xl"
          style={{backgroundColor:"rgba(255, 206, 249, 1)"}}>
            <div className="w-full lg:w-1/3">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full lg:w-2/3 p-6">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button  className="text-white rounded-[30px] w-[124px] h-[30px] lg:ml-[400px]"
              style={{backgroundColor:"rgba(117, 0, 119, 1)"}}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className='font-bold lg:text-[48px] ml-[30px] md:ml-[70px] lg:ml-[100px] xl:ml-[100px] text-dark-pink pt-[100px]'>
        The Clinic where Experience Meets
         Exceptional Care
        </p>
        <div className='lg:ml-[100px] xl:ml-[250px] mt-[200px] pb-[100px]'>
        <Image
        src="/cli.svg"
        alt=""
        width={930}
        height={233}/>
        </div>
      </div>

    </div>
  )
}

export default Service