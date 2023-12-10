import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
const Team = () => {
    return (
        <div className=''>
        <div className='lg:text-center lg:ml-0 ml-10 mt-[30px] lg:mt-[80px]'>
        <p className='text-[#FF3811] text-xl font-bold mt-5 '>Meet Our Team</p>
        <h3 className="lg:text-[45px] text-2xl text-[#151515] font-bold my-3">Meet Our Team</h3>
        <p className='text-[16px] text-[#737373] md-[50px]'>
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

        </div>
        
    );
};

export default Team;