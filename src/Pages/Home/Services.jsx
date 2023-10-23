import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div>
            <div className='lg:text-center ml-12'>
                <h3 className="text-2xl font-bold text-orange-600">Service</h3>
                <h3 className="text-4xl ">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    Services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;