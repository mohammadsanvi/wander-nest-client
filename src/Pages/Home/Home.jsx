import React from 'react';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';
import DownloadAppCTA from './DownloadAppCTA';
import CustomerTestimonials from './CustomerTestimonials';
import ExploreSection from './ExploreSection';
import FeaturedPackages from './FeaturedPackages';
import { Helmet } from 'react-helmet-async';
import FAQ from './Faq';

const Home = () => {
        return (
                <div className='max-w-7xl mx-auto'>
                <Helmet><title>Home - WanderNest</title></Helmet>
                        <Banner></Banner>
                        <FeaturedPackages></FeaturedPackages>
                        <WhyChooseUs></WhyChooseUs>
                        <ExploreSection></ExploreSection>
                        <FAQ></FAQ>
                        <CustomerTestimonials></CustomerTestimonials>
                        <DownloadAppCTA></DownloadAppCTA>
                </div>
        );
};

export default Home;