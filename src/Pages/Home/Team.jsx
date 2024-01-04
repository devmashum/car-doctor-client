import { SlCalender } from 'react-icons/sl';
import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
import { TbUsersGroup } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TbSettingsShare } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
const Team = () => {
    return (
        <div className=''>
        <div className='lg:text-center lg:ml-0 mx-10 mt-[30px] lg:mt-[80px]'>
        <p className='text-[#FF3811] text-xl font-bold mt-5 '>Our Team</p>
        <h3 className="lg:text-[45px] text-2xl text-[#151515] font-bold my-3">Meet Our Team</h3>
        <p className='text-[16px] text-justify mb-[50px]'>
        Our technicians are the backbone of our car service center. Trained in the latest automotive technologies and equipped with advanced diagnostic tools, they possess the skills needed to tackle a wide range of vehicle issues. From routine maintenance to complex repairs, our technicians approach every task with precision and a commitment to quality.
        </p>

        </div>

       <div className='lg:grid md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
       <div className="mt-5 ">
        <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={team1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Maxwell Gearheart</h2>
    <p>Automotive Software Engineer</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
        </div>
        <div className="mt-5">
        <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={team2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Elena Voltar</h2>
    <p>Mechanical Engineer</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
        </div>
        <div className="mt-5">
        <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={team3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Oliver CodeSmith</h2>
    <p>Electrical Engineer</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
        </div>
       </div>
       <div className='lg:text-center lg:ml-10 mt-[30px] lg:mt-[80px]'>
        <p className='text-[#FF3811] text-xl font-bold mt-5 ml-10'>Core Features</p>
        <h3 className="lg:text-[45px] text-2xl text-[#151515] font-bold my-3 ml-10">Why Choose Us</h3>
        <p className='text-[16px]  mb-[50px] mx-10 text-justify'>
        We understand the importance of clear and open communication. That's why we keep our clients informed every step of the way. From diagnostics to the final repair, you'll be in the loop, ensuring there are no surprises when you get back behind the wheel.
        </p>
        <div className=' w-11/12  mx-auto  lg:flex justify-center gap-16'>
   <div className='bg-[#FF3811] p-10 rounded-xl grid grid-cols-1 justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl  mx-auto text-white'><TbUsersGroup />
       </div>
       <div>
        <p className='text-[18px] text-white text-center'>Expert Team</p>
       </div>
      </div>
   <div className='bg-[#FF3811] p-10 rounded-xl grid grid-cols-1 justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl mx-auto text-white'><TbTruckDelivery />
       </div>
       <div>
        <p className='text-[18px] text-white text-center'>Timely Delivery</p>
       </div>
      </div>
   <div className='bg-[#FF3811] p-10 rounded-xl grid grid-cols-1 justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl mx-auto text-white'><MdSupportAgent />
       </div>
       <div>
        <p className='text-[18px] text-white text-center'>24/7 Support</p>
       </div>
      </div>
   <div className='bg-[#FF3811] p-10 rounded-xl grid grid-cols-1 justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl mx-auto text-white'><TbSettingsShare />
       </div>
       <div>
        <p className='text-[18px] text-white text-center'>Best Equipment</p>
       </div>
      </div>
   <div className='bg-[#FF3811] p-10 rounded-xl grid grid-cols-1 justify-center items-center gap-5 mb-10 lg:mb-0'>
       <div className='text-6xl mx-auto text-white'><SiAdguard />

       </div>
       <div>
        <p className='text-[18px] text-white text-center'>100% Guaranty</p>
       </div>
      </div>
  
   
   </div>
        </div>
        </div>
        
    );
};

export default Team;