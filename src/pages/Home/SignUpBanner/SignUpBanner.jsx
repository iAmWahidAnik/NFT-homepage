import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUpBanner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='flex items-center flex-col lg:flex-row gap-10 pb-20 mb-20 overflow-x-hidden'>
            <div className='lg:w-1/2'>
                <div className='flex flex-col gap-10 mb-80 lg:mb-0 lg:flex-row lg:relative h-[600px]'>
                    <div data-aos="flip-left" data-aos-duration='600'>
                        <div className='relative z-10'>
                            <img className='w-[300px] h-[300px] rounded-xl object-cover' src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />

                            <img className='absolute -bottom-7 -right-7 border-4 border-white h-[80px] w-[80px] object-cover rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration='1000' className='lg:absolute lg:right-0 lg:top-32'>
                        <div className='relative'>
                            <img className='w-[240px] h-[265px] rounded-xl object-cover' src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />

                            <img className='absolute right-7 -bottom-7 lg:-bottom-7 lg:-right-7 border-4 border-white h-[80px] w-[80px] object-cover rounded-full' src="https://st4.depositphotos.com/13768208/40924/i/450/depositphotos_409241302-stock-photo-positive-girl-with-hairbun-looking.jpg" alt="" />
                        </div>
                    </div>
                    <div data-aos="flip-up" data-aos-duration='1000' className='lg:absolute lg:left-24 lg:top-96'>
                        <div className='relative'>
                            <img className='w-[195px] h-[214px] rounded-xl' src="https://images.unsplash.com/photo-1551043061-38bceaace400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <img className='absolute right-14 -bottom-7 lg:-bottom-7 lg:-right-7 border-4 border-white h-[80px] w-[80px] object-cover rounded-full' src="https://media.istockphoto.com/id/1348560813/photo/excited-woman-in-glasses-pointing-up.jpg?s=612x612&w=0&k=20&c=4xUUHrAPcULtvaRCUJrD51C-7C5YTO9Oe8MhQpZO4ok=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration='1000' className='lg:w-1/2'>
                <h1 className='text-[32px] Integral text-black leading-9'>Create and <br /> sell your NFTs</h1>
                <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                <button className='mt-8 py-5 px-10 bg-[#3D00B7] text-white rounded-[50px] text-xl dms-medium 
                hover:translate-x-2 hover:-translate-y-2 transition-all duration-200'>Sign Up Now</button>
            </div>
        </div>
    );
};

export default SignUpBanner;