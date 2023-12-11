import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const Services = () => {
  // State for sorting services
  const [asc, setAsc] = useState(true);

  // State to store services data
  const [services, setServices] = useState([]);

  // Fetch services data on component mount or when sorting order changes
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`https://car-doctor-server-chi-seven.vercel.app/services?sort=${asc ? 'asc' : 'desc'}`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [asc]);

  return (
    <div className='lg:ml-0 ml-10 mt-[30px] lg:mt-[80px]'>
      <div className='lg:text-center'>
        <p className='text-[#FF3811] text-xl font-bold mt-5 '>Service</p>
        <h3 className="lg:text-[45px] text-2xl text-[#151515] font-bold my-3">Our Service Area</h3>
        <p className='text-[16px] text-[#737373] mb-[50px]'>
          Keep your vehicle in peak condition with our routine maintenance services. From oil changes and fluid checks to tire rotations and brake inspections, our skilled technicians perform thorough assessments to prevent potential issues and extend the life of your vehicle.
        </p>

        <div className='hidden'>
          <button onClick={() => setAsc(!asc)} className='btn btn-secondary'>
            {asc ? 'Price High Low' : 'Price: Low to High'}
          </button>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
        {services?.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

   <div className='bg-[#151515] w-11/12 lg:py-20 py-10 mx-auto rounded-xl mt-20 lg:flex justify-center gap-16'>
   <div className='flex justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl text-[#FF3811]'><SlCalender />
       </div>
       <div>
        <p className='text-base text-white'>We are open monday-friday</p>
        <h3 className='text-2xl font-bold text-white'>7:00 am - 9:00 pm</h3>
       </div>
      </div>
   <div className='flex justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl text-[#FF3811]'><FaPhoneVolume />
       </div>
       <div>
        <p className='text-base text-white'>Have a question?</p>
        <h3 className='text-2xl font-bold text-white'>+2546 251 2658</h3>
       </div>
      </div>
   <div className='flex justify-center items-center gap-5'>
       <div className='text-6xl text-[#FF3811]'><IoLocationOutline />
       </div>
       <div>
        <p className='text-base text-white'>Need a repair? our address</p>
        <h3 className='text-2xl font-bold text-white'>Liza Street, New York</h3>
       </div>
      </div>
   </div>

    </div>
  );
};

export default Services;
