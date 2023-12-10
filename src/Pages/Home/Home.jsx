import React from 'react';

import About from '../About/About';
import Services from './Services';
import Banner from './Banner';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;