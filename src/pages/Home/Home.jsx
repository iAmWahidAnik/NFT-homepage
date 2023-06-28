import React from 'react';
import Banner from './Banner/Banner';
import InfoSection from './InfoSection/InfoSection';
import SignUpBanner from './SignUpBanner/SignUpBanner';
import CollectionSection from './CollectionSection/CollectionSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import DiscoverSection from './DiscoverSection/DiscoverSection';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <CollectionSection></CollectionSection>
            <FeaturedSection></FeaturedSection>
            <SignUpBanner></SignUpBanner>
            <DiscoverSection></DiscoverSection>
        </div>
    );
};

export default Home;