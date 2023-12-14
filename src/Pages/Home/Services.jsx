import ServiceCard from './ServiceCard';
import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import banner from '../../assets/images/banner/3.jpg'

const Services = () => {

  const axiosPublic = useAxios();

  const {data: services = []} = useQuery({
queryKey: ['services'],
queryFn: async() => {
  const res = await axiosPublic.get('/services');
  return res.data;
}
  })

  return (
    <>
<h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                    Our Services
                </h3>
       <img className='w-full h-[300px] object-cover rounded-xl ' src={banner} alt="" />
    <div className='lg:ml-0  mt-[30px] lg:mt-[80px]'>
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

    </>
  );
};

export default Services;
