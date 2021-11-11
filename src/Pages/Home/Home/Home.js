import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';


const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Banner></Banner>
            <OurService></OurService>
            <Footer></Footer>
        </div>
    );
};

export default Home;