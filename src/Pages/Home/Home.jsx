import React from 'react';
import Bannner from './Bannner';
import About from '../About/About';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;