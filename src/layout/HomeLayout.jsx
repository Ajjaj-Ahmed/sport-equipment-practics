import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/imageSlider';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='py-5'>
            <Navbar></Navbar>
            </div>
           <div>
           <ImageSlider></ImageSlider>
           </div>
           <div className='mt-20'>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default HomeLayout;