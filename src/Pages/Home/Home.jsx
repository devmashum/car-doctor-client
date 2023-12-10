import React from 'react';

import About from '../About/About';
import Services from './Services';
import Banner from './Banner';
import Team from './Team';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;