import React from 'react';
import Common from './Common';
import web from '../src/Image/img1.jpg';

const Home = () => {
    return (
        <>
            <Common name="FOCUS" imgsrc={web} visit="/service" btname="Get Started" />
        </>
    );
};

export default Home;