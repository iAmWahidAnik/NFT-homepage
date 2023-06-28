import React from 'react';
import Navbar from '../common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;