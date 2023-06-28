import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='bg-[#D9E0EC33] overflow-x-hidden'>
            <h1 className='Integral text-[28px] py-12 lg:ps-12 text-black'>Collection Featured NFTs</h1>
            <div className='flex flex-col lg:flex-row gap-8 mb-20 pb-20 justify-center mx-auto'>
                {/* item 1 */}
                <div>
                    <div className='flex items-center gap-2'>
                        <div data-aos="fade-right" data-aos-duration='1000'>
                            <img className='w-[265px] h-[272px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" />
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1615749413727-825b59a857b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                    </div>
                    <div className='mt-7'>
                        <h1 className='dms-bold text-xl text-black'>Amazing Collection</h1>
                        <div className='flex mt-2 gap-2 items-center max-w-[370px]'>
                            <img className='w-[28px] h-[28px] object-cover rounded-full' src="https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=170667a&w=0&k=20&c=RwtVSPWKLy_Jvs_i_enWP41wzFBmG6_IPPqSaTrTFsQ=" alt="user photo" />
                            <p>by Arkhan</p>
                            <button className='py-1 px-3 border-[1px] border-[#2639ED] text-[#2639ED] rounded-[60px] ms-auto dms-bold text-[11px]'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
                {/* item 2 */}
                <div>
                    <div className='flex items-center gap-2'>
                        <div data-aos="zoom-out" data-aos-duration='1000'>
                            <img className='w-[265px] h-[272px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" />
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1611521178062-d4a7ca75ae8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                    </div>
                    <div className='mt-7'>
                        <h1 className='dms-bold text-xl text-black'>Amazing Collection</h1>
                        <div className='flex mt-2 gap-2 items-center max-w-[370px]'>
                            <img className='w-[28px] h-[28px] object-cover rounded-full' src="https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=170667a&w=0&k=20&c=RwtVSPWKLy_Jvs_i_enWP41wzFBmG6_IPPqSaTrTFsQ=" alt="user photo" />
                            <p>by Arkhan</p>
                            <button className='py-1 px-3 border-[1px] border-[#2639ED] text-[#2639ED] rounded-[60px] ms-auto dms-bold text-[11px]'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
                {/* item 3 */}
                <div>
                    <div className='flex items-center gap-2'>
                        <div data-aos="fade-down" data-aos-duration='1000'>
                            <img className='w-[265px] h-[272px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80" alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1559762745-c2c0d0d7c126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-[100px] h-[85px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1553949333-0510da388b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                    </div>
                    <div className='mt-7'>
                        <h1 className='dms-bold text-xl text-black'>Amazing Collection</h1>
                        <div className='flex mt-2 gap-2 items-center max-w-[370px]'>
                            <img className='w-[28px] h-[28px] object-cover rounded-full' src="https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=170667a&w=0&k=20&c=RwtVSPWKLy_Jvs_i_enWP41wzFBmG6_IPPqSaTrTFsQ=" alt="user photo" />
                            <p>by Arkhan</p>
                            <button className='py-1 px-3 border-[1px] border-[#2639ED] text-[#2639ED] rounded-[60px] ms-auto dms-bold text-[11px]'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default FeaturedSection;