import React from 'react';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';
import DownloadAppCTA from './DownloadAppCTA';
import CustomerTestimonials from './CustomerTestimonials';

const Home = () => {
        return (
                <>
                        <Banner></Banner>
                        <WhyChooseUs></WhyChooseUs>
                        <CustomerTestimonials></CustomerTestimonials>
                        <DownloadAppCTA></DownloadAppCTA>
                </>
        );
};

export default Home;