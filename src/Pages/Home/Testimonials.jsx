import customer1 from '../../assets/images/Testimonials/member1.png'
import customer2 from '../../assets/images/Testimonials/member2.png'
import customer3 from '../../assets/images/Testimonials/member3.png'
import customer4 from '../../assets/images/Testimonials/member4.png'
const Testimonials = () => {
    return (
        <div>
              <div className='lg:text-center lg:ml-0 ml-10 mt-[30px] lg:mt-[80px]'>
        <p className='text-[#FF3811] text-xl font-bold mt-5 '>Testimonial</p>
        <h3 className="lg:text-[45px] text-2xl text-[#151515] font-bold my-3">What Customer Says</h3>
        <p className='text-[16px] text-[#737373] mb-[50px]'>
        Our clients consistently commend us for our transparency and fair pricing, emphasizing the professionalism of our team. They appreciate our commitment to top-notch service, highlighting the skills of our technicians and our clear and effective communication throughout the process. Others share their fantastic experiences, citing our staff's knowledge, genuine care, and quick response to emergencies. These testimonials collectively underscore our dedication to providing exceptional service and ensuring customer satisfaction.
        </p>
      

        </div>

        {/* Customer Reviews section */}
<div className="lg:grid grid-cols-2 gap-3 lg:p-0 p-10">
  <div className="border-2 p-3 border-base-300 rounded-xl">
  <div className="flex justify-center items-center gap-3">
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={customer2} />
  </div>
</div>
        </div>
        <div>
            <div className="text-[25px] font-bold">Sarah M.</div>
            <hr/>
            <div className="font-semibold text-xl">Doctor</div>
        </div>
     
    </div>
    <h3 className="text-[16px] text-[#737373]">
        I recently had my car serviced at Car Doctor, and I couldn't be happier with the experience. The team was incredibly professional and took the time to explain the issues with my vehicle in a way that I could understand. The repairs were completed promptly, and the cost was fair. I appreciate the transparency and honesty of this company. Highly recommend
        </h3>
        <div className="text-center">
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
</div>
        </div>
  </div>
  <div className="border-2 p-3 border-base-300 rounded-xl lg:mt-0 mt-5">
  <div className="flex justify-center items-center gap-3">
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={customer1} />
  </div>
</div>
        </div>
        <div>
            <div className="text-[25px] font-bold">Alex Mitchell</div>
            <hr/>
            <div className="font-semibold text-xl">Software Engineer</div>
        </div>
     
    </div>
    <h3 className="text-[16px] text-[#737373]">
    My go-to place for car repairs! Car Doctor consistently provides top-notch service. The technicians are skilled, and the communication throughout the process is excellent. They go above and beyond to ensure customer satisfaction. Fair pricing and a friendly atmosphere make this the best car repair shop in town.
        </h3>
        <div className="text-center">
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
        </div>
  </div>
  <div className="border-2 p-3 border-base-300 rounded-xl lg:mt-0 mt-5">
  <div className="flex justify-center items-center gap-3">
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={customer3} />
  </div>
</div>
        </div>
        <div>
            <div className="text-[25px] font-bold">Rachel Johnson</div>
            <hr/>
            <div className="font-semibold text-xl">Registered Nurse</div>
        </div>
     
    </div>
    <h3 className="text-[16px] text-[#737373]">
    I had a fantastic experience with Car Doctor. The staff is not only knowledgeable but also genuinely cares about their customers. They diagnosed and fixed the issue with my car efficiently, and the pricing was reasonable. What sets them apart is their commitment to customer service. I felt valued as a customer, and I will definitely be returning for any future car needs.
        </h3>
        <div className="text-center">
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
</div>
        </div>
  </div>
  <div className="border-2 p-3 border-base-300 rounded-xl lg:mt-0 mt-5">
  <div className="flex justify-center items-center gap-3">
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={customer4} />
  </div>
</div>
        </div>
        <div>
            <div className="text-[25px] font-bold">Regina Zimmer</div>
            <hr/>
            <div className="font-semibold text-xl">Financial Analyst</div>
        </div>
     
    </div>
    <h3 className="text-[16px] text-[#737373]">
    I had a bit of a car emergency, and Car Doctor came to the rescue. The team was quick to assess the problem, and they provided a clear explanation of the necessary repairs. The turnaround time was impressive, and they even offered some preventive maintenance tips. Great service, fair prices, and a friendly team – I'm grateful for their expertise and efficiency!
        </h3>
        <div className="text-center">
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
</div>
        </div>
  </div>
</div>

        </div>
    );
};

export default Testimonials;