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
                <p className=' text-orange-400 mt-5'>About Us</p>

                <h2 className="card-title lg:text-5xl ">We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>

                <div className="card-actions justify-start mt-5">
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;