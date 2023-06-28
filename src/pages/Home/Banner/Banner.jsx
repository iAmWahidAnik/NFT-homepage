import React, { useEffect } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import CountUp from 'react-countup';

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='flex flex-col lg:flex-row items-center my-20 overflow-x-hidden'>
            <div className='lg:w-1/2'>
                <h1 data-aos="fade-right" className='text-[40px] Integral leading-10 text-black'>Discover, and collect Digital Art  NFTs </h1>
                <p data-aos="fade-right" data-aos-delay='1000' className='mt-5 text-xl dms-regular'>Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                <button className='mt-10 py-3 px-5 bg-[#3D00B7] rounded-[60px] text-white dms-medium
                hover:translate-x-2 hover:-translate-y-2 transition-all duration-200'>Explore Now</button>
                <div className='flex flex-col lg:flex-row mt-8 gap-5'>
                    <div>
                        <h3 className='text-[40px] Integral text-black'><CountUp duration={5} start={0} end={98} />k+</h3>
                        <p className='dms-regular text-xl'>Artwork</p>
                    </div>
                    <div>
                        <h3 className='text-[40px] Integral text-black'><CountUp duration={5} start={0} end={12} />k+</h3>
                        <p className='dms-regular text-xl'>Auction</p>
                    </div>
                    <div>
                        <h3 className='text-[40px] Integral text-black'><CountUp duration={5} start={0} end={15} />k+</h3>
                        <p className='dms-regular text-xl'>Artist</p>
                    </div>
                </div>
            </div>
            {/* here is lsider  */}
            <div className='lg:w-1/2 overflow-hidden'>
                <div data-aos="zoom-in-up" data-aos-delay='1000' className='my-10'>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper max-w-[400px] h-[400px]"
                    >
                        <SwiperSlide className='relative rounded-3xl'><img className='w-full h-full object-cover rounded-3xl' src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                        </SwiperSlide>
                        <div className='absolute top-5 left-12 z-10'>
                            <h1 className='text-[28px] dms-medium text-white'>Abstr Gradient NFT</h1>
                            <div className='flex gap-3'>
                                <img className='h-8 w-8 object-cover rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                                <p className='text-xl dms-medium text-white'>Arkhan17</p>
                            </div>
                        </div>
                        <div className='absolute top-36 -left-12 z-10'>
                            <div className='relative'>
                                <div>
                                    <img className='h-[100px] w-[100px] object-cover' src="https://i.ibb.co/8MPcq5V/11.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='absolute flex w-9/12 left-12 p-5 bg-[#ffffff33] rounded-xl backdrop-blur-[25px] justify-between z-10 bottom-5 text-white'>
                            <div>
                                <p className='text-[12px]'>Current Bid</p>
                                <h3 className='dms-medium mt-2 flex items-center gap-1'><FaEthereum className='text-xl'></FaEthereum> 0.25 ETH</h3>
                            </div>
                            <div>
                                <p className='text-[12px]'>Ends in</p>
                                <h3 className='dms-medium mt-2'>12<span className='dms-regular'>h</span>  43<span className='dms-regular'>m</span>  42<span className='dms-regular'>s</span></h3>
                            </div>
                        </div>

                        <SwiperSlide className='rounded-3xl'><img className='w-full h-full object-cover rounded-3xl' src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide className='rounded-3xl'><img className='w-full h-full object-cover rounded-3xl' src="https://images.unsplash.com/photo-1551043061-38bceaace400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;