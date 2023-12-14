import Services from "../Home/Services";
import img from '../../assets/images/banner/3.jpg'

const ServicesPage = () => {
    return (
        <div>
                 <h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                  Our Services
                </h3>
           <img className='w-full h-[300px] object-cover rounded-xl lg:mb-10' src={img} alt="" />
           <Services></Services>
        </div>
    );
};

export default ServicesPage;