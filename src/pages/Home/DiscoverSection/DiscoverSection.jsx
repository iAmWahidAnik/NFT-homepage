import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DiscoverSection = () => {
    // state usage 
    const [category, setCategory] = useState('All Categories');
    useEffect(() => {
        AOS.init();
    }, [])

    // Js usage 
    const handleCategory = (name) => {
        setCategory(name);
    }
    return (
        <div className='bg-[#D9E0EC33] pb-20 mb-20 overflow-hidden'>
            <h1 data-aos="fade-right" data-aos-duration='1000' className='pl-5 text-[34px] Integral text-black py-10'>Discover more NFTs</h1>
            <div data-aos="fade-left" data-aos-duration='1000' className='pl-5 flex flex-wrap gap-3 dms-medium'>
                {/* ES6/ternary usage  */}
                <button onClick={() => handleCategory('All Categories')} className={`py-[10px] px-5 rounded-[100px] ${category === 'All Categories' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'}`}>All Categories</button>
                <button onClick={() => handleCategory('Art')} className={`py-[10px] px-5 rounded-[100px] ${category === 'Art' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'}`}>Art</button>
                <button onClick={() => handleCategory('Celebrities')} className={`py-[10px] px-5 rounded-[100px] ${category === 'Celebrities' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'}`}>Celebrities</button>
                <button onClick={() => handleCategory('Gaming')} className={`py-[10px] px-5 rounded-[100px] ${category === 'Gaming' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'} `}>Gaming</button>
                <button onClick={() => handleCategory('Sport')} className={`py-[10px] px-5 rounded-[100px] ${category === 'Sport' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'} `}>Sport</button>
                <button onClick={() => handleCategory('Music')} className={`py-[10px] px-5 rounded-[100px] ${category === 'Music' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'} `}>Music</button>
                <button onClick={() => handleCategory('Crypto')} className={`py-[10px] px-5 rounded-[100px] ${category === 'Crypto' ? 'bg-[#3D00B7] text-white' : 'bg-[#DCDCDC33]'} `}>Crypto</button>
            </div>
            {/* cards area  */}
            <div data-aos="zoom-out-left" data-aos-duration='1000' className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 mx-5'>
                {/* row 1 */}
                {/* card 1 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1564089947415-54e35027aeac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1659136487839-66d8c8b9323f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1551043061-38bceaace400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>

                {/* row 2 */}
                {/* card 1 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1564934304050-e9bb87a29c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>

                {/* row 2 */}
                {/* card 1 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1554668108-87d6864fdca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1553949285-bdcb31ec5cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1507919981044-3b672b208db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>

                {/* row 2 */}
                {/* card 1 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1513624954087-ca7109c0f710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className='p-2 bg-white rounded-xl max-w-[265px]'>
                    <div className='relative'>
                        <img className='w-[245px] h-[220px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1564951425185-4e3cde190d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='flex absolute left-2 -bottom-3'>
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white' src="https://media.istockphoto.com/id/923675144/photo/studio-portrait-of-elegant-handsome-man-dark-background.jpg?s=170667a&w=0&k=20&c=9iD9s_cQm1dwKZxCbcKD3TBlUGR_lSeYI4WGm9Y2gbU=" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_L10gh_dQGcQp9_5qp_0lDNsG8xm2BkLeNChHuUu59O5b6eVtrJzKXN9aFJCCcWsTp0&usqp=CAU" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-5' src="https://img.freepik.com/premium-zdjecie/piekna-mloda-kobieta-biznesu-w-okularach-trzyma-gazete-w-dloniach-i-uwaznie-czyta-studium-wydania-wiadomosci-kaukaska-kobieta-czyta-prase-na-ciemnym-tle-portret-studyjny-widok-z-dolu-bohatera_230115-3612.jpg?w=360" alt="" />
                            <img className='h-[36px] w-[36px] object-cover rounded-full border-2 border-white -translate-x-7' src="https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-ubrana-w-zolty-sweter_273609-23413.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 max-w-[220px]'>
                        <h3 className='text-xl dms-bold text-black'>ArtCrypto</h3>
                        <div className='flex items-center justify-between mt-3 mb-5'>
                            <p className='text-[10px] text-[#00AC4F] dms-medium'>0.25 ETH</p>
                            <p className='text-[#838383] text-[14px]'>1 of 321</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-3'>
                            <button className='py-1 px-3 text-[10px] bg-[#F5F5F5] text-[#5539A8] rounded-[100px] dms-bold'>3<span className='dms-medium'>h</span> 50<span className='dms-medium'>m</span> 2<span className='dms-medium'>s</span> left</button>
                            <p className='text-[#4F33A3] dms-medium'>Place a bid</p>
                        </div>
                    </div>
                </div>

            </div>
                {/* button */}
                <div className='text-center mt-14'>
                    <button className='px-10 py-5 border-2 border-[#3D00B7] text-[#3D00B7] rounded-[50px] dms-medium text-xl
                    hover:bg-[#3D00B7] hover:text-white transition-all duration-300'>More NFTs</button>
                </div>
        </div>
    );
};

export default DiscoverSection;