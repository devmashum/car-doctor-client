import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowToRight } from "react-icons/bi";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
      <>
          <Link to={`/book/${_id}`}> 
        <div className="card lg:w-96 mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[350px] h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[25px] font-bold text-[#444]">{title}</h2>
             <div className='flex justify-evenly'>
             <p className='text-[#FF3811] text-xl font-semibold'>Price: $ {price}</p>
             <p className='text-[#FF3811] text-2xl font-semibold'><BiArrowToRight /></p>
             </div>
                <div className="card-actions">
                  
                </div>
            </div>
        </div>
        </Link>
      </>
    );
};

export default ServiceCard;