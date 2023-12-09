import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="lg:flex justify-center items-center bg-base-100 p-5">
            <div className='lg:w-1/2 relative'>
                <figure><img className='w-3/4 rounded-xl' src={person} /></figure>
                <figure><img className='w-1/2 absolute -bottom-10 right-5 border-8 border-white rounded-xl ' src={parts} /></figure>
            </div>
            <div className="card-body lg:w-1/2">
                <p className=' text-[#FF3811] text-xl font-bold mt-5'>About Us</p>

                <h2 className="card-title text-[#151515] lg:text-[45px] leading-tight ">We are qualified & of experience in this field</h2>
                <p className=' text-justify'>With a team of highly skilled and certified technicians, we specialize in a wide range of car repair services to address all your vehicle's needs. Whether it's routine maintenance, engine diagnostics, brake repairs, or electrical system troubleshooting, our experts are equipped with the latest tools and technology to ensure precise and efficient solutions.
                <br />
                <br /> Our customer-centric approach sets us apart in the automotive industry. We understand the importance of your vehicle in your daily life, and our goal is to provide reliable and timely services to get you back behind the wheel with confidence. From minor repairs to major overhauls, we handle each task with meticulous attention to detail, ensuring the longevity and optimal performance of your vehicle.</p>
                
                   
              

                <div className="card-actions justify-start mt-5">
                <button className="btn bg-[#FF3811] text-white">GET MORE INFO</button>
                </div>
            </div>
        </div>
    );
};

export default About;