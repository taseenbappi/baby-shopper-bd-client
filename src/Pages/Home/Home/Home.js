import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LatestToys from '../LatestToys/LatestToys';
import OurService from '../OurService/OurService';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Banner></Banner>
            <LatestToys></LatestToys>
            <About></About>
            <Reviews></Reviews>
            <OurService></OurService>

        </div>
    );
};

export default Home;