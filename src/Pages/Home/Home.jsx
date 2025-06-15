import React from 'react';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';
import DownloadAppCTA from './DownloadAppCTA';
import CustomerTestimonials from './CustomerTestimonials';
import ExploreSection from './ExploreSection';

const Home = () => {
        return (
                <>
                        <Banner></Banner>
                        <WhyChooseUs></WhyChooseUs>
                        <ExploreSection></ExploreSection>
                        <CustomerTestimonials></CustomerTestimonials>
                        <DownloadAppCTA></DownloadAppCTA>
                </>
        );
};

export default Home;