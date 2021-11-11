import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LatestToys from '../LatestToys/LatestToys';
import OurService from '../OurService/OurService';


const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <LatestToys></LatestToys>
            <About></About>
            <OurService></OurService>

        </div>
    );
};

export default Home;