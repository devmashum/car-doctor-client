import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'

const Bannner = () => {
   
    const bannerStyle = {
        backgroundImage: `url(${img5})`,
      };
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                {/* <img src={img5} className="w-full " /> */}
{/*  */}
<div className="hero justify-start" style={bannerStyle}>
  <div className=" "></div>
  <div className="hero-content text-neutral-content bg-opacity-30 hero-overlay">
    <div className="mb-[99px] ">
      <h1 className=" text-4xl lg:ml-[100px] lg:text-5xl font-bold text-white leading-snug ">Affordable <br /> Price For Car Servicing</h1>
      <p className="lg:ml-[100px] text-[18px] text-white mt-[30px] lg:leading-none">There are many variations of passages of  available, but <span className='hidden lg:block'> <br /> </span> the majority have suffered alteration in some form</p>
    <div className='flex mt-[30px]'>
    <button className="btn lg:ml-[100px] bg-[#FF3811] text-white">Discover More</button>
      <button className="btn btn-outline text-white ml-[45px]">Latest Project</button>
    </div>
    </div>
  </div>
</div>

{/*  */}
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannner;