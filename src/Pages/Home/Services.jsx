import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  // State for sorting services
  const [asc, setAsc] = useState(true);

  // State to store services data
  const [services, setServices] = useState([]);

  // Fetch services data on component mount or when sorting order changes
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`http://localhost:3000/services?sort=${asc ? 'asc' : 'desc'}`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [asc]);

  return (
    <div className='ml-12'>
      <div className='lg:text-center'>
        <p className='text-[#FF3811] text-xl font-bold mt-5'>Service</p>
        <h3 className="text-[45px] text-[#151515] font-bold">Our Service Area</h3>
        <p className='text-[16px] text-[#737373] md-[50px]'>
          Keep your vehicle in peak condition with our routine maintenance services. From oil changes and fluid checks to tire rotations and brake inspections, our skilled technicians perform thorough assessments to prevent potential issues and extend the life of your vehicle.
        </p>

        <div className='hidden'>
          <button onClick={() => setAsc(!asc)} className='btn btn-secondary'>
            {asc ? 'Price High Low' : 'Price: Low to High'}
          </button>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-col-3 gap-5'>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
