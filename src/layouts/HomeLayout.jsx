import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layoutComponents/LeftNavbar';
import RightNav from '../components/layoutComponents/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='md:container mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid md:grid-cols-12 pt-5 gap-8'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;