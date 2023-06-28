import React, { useEffect } from 'react';
import { FaEthereum } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CollectionSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='flex justify-center flex-col lg:flex-row gap-12 mb-20 overflow-x-hidden'>
            <div data-aos="fade-right" data-aos-duration='600'>
                <img className='w-[400px] h-[424px] object-cover rounded-3xl' src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Product Photo" />
                <div className='flex gap-[10px] mt-8 max-w-[400px]'>
                    <img className='h-[48px] w-[48px] rounded-full object-cover' src="https://img.freepik.com/free-photo/positive-bearded-man-hipster-smiles-broadly-has-pleased-expression-laughs-something-funny-closes-eyes_273609-16781.jpg?w=2000" alt="user photo" />
                    <div>
                        <h4 className='text-xl dms-bold'>The Futr Abstr</h4>
                        <p className='text-[14px] dms-regular'>10 in the stock</p>
                    </div>
                    <div className='ms-auto'>
                        <p className='text-xs dms-regular'>Highest Bid</p>
                        <h4 className='flex items-center gap-1 dms-bold mt-2'><FaEthereum className='text-xl'></FaEthereum> 0.25 ETH</h4>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration='1000' className='flex flex-col gap-10'>
                {/* item 1  */}
                <div className='flex gap-5 items-center'>
                    <img className='w-[147px] h-[147px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="product image" />
                    <div>
                        <h4 className='text-xl dms-bold text-black'>The Futr Abstr</h4>
                        <div className='flex gap-2 items-center mt-2'>
                            <img className='w-[34px] h-[34px] object-cover rounded-full' src="https://images.unsplash.com/photo-1650630729397-810915b32ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtcGxveWVyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user photo" />
                            <div className='p-2 border-2 border-[#00AC4F] rounded-lg'>
                                <p className='flex items-center gap-1 text-[#00AC4F] text-xs dms-medium'><FaEthereum></FaEthereum> 0.25 ETH</p>
                            </div>
                            <p className='text-[14px] text-[#757575]'>1 of 8</p>
                        </div>
                        <button className='py-3 px-5 border-2 border-[#3D00B7] bg-white rounded-[50px] text-[#3D00B7] mt-4 dms-regular
                        hover:bg-[#3D00B7] hover:text-white transition-all duration-300'>Place a bid</button>
                    </div>
                </div>
                {/* item 2  */}
                <div className='flex gap-5 items-center'>
                    <img className='w-[147px] h-[147px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="product image" />
                    <div>
                        <h4 className='text-xl dms-bold text-black'>The Futr Abstr</h4>
                        <div className='flex gap-2 items-center mt-2'>
                            <img className='w-[34px] h-[34px] object-cover rounded-full' src="https://images.unsplash.com/photo-1650630729397-810915b32ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtcGxveWVyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user photo" />
                            <div className='p-2 border-2 border-[#00AC4F] rounded-lg'>
                                <p className='flex items-center gap-1 text-[#00AC4F] text-xs dms-medium'><FaEthereum></FaEthereum> 0.25 ETH</p>
                            </div>
                            <p className='text-[14px] text-[#757575]'>1 of 8</p>
                        </div>
                        <button className='py-3 px-5 border-2 border-[#3D00B7] bg-white rounded-[50px] text-[#3D00B7] mt-4 dms-regular
                        hover:bg-[#3D00B7] hover:text-white transition-all duration-300'>Place a bid</button>
                    </div>
                </div>
                {/* item 3  */}
                <div className='flex gap-5 items-center'>
                    <img className='w-[147px] h-[147px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="product image" />
                    <div>
                        <h4 className='text-xl dms-bold text-black'>The Futr Abstr</h4>
                        <div className='flex gap-2 items-center mt-2'>
                            <img className='w-[34px] h-[34px] object-cover rounded-full' src="https://images.unsplash.com/photo-1650630729397-810915b32ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtcGxveWVyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user photo" />
                            <div className='p-2 border-2 border-[#00AC4F] rounded-lg'>
                                <p className='flex items-center gap-1 text-[#00AC4F] text-xs dms-medium'><FaEthereum></FaEthereum> 0.25 ETH</p>
                            </div>
                            <p className='text-[14px] text-[#757575]'>1 of 8</p>
                        </div>
                        <button className='py-3 px-5 border-2 border-[#3D00B7] bg-white rounded-[50px] text-[#3D00B7] mt-4 dms-regular
                        hover:bg-[#3D00B7] hover:text-white transition-all duration-300'>Place a bid</button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration='600'>
                <h1 className='Integral text-xl text-black'>Top Collections over </h1>
                <p className='dms-bold text-[18px] text-[#3D00B7]'>Last 7 days</p>
                <div className='flex flex-col divide-y-2 mt-8'>
                    {/* item 1 */}
                    <div className='flex gap-5 items-center py-4'>
                        <h3 className='dms-bold text-black text-2xl'>1</h3>
                        <div className='relative'>
                            <img className='w-[60px] h-[60px] object-cover rounded-full' src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80" alt="product image" />
                            <svg className='absolute -top-2 -right-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="10" width="16" height="11" fill="white" />
                                <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF" />
                            </svg>
                        </div>
                        <div>
                            <h4 className='dms-bold text-black'>CryptoFunks</h4>
                            <p className='flex gap-1 items-center dms-medium font-[14px]'><FaEthereum className='text-2xl text-blak'></FaEthereum> 19,769.39</p>
                        </div>
                        <h3 className='text-xl dms-bold text-[#14C8B0]'>+26.52%</h3>
                    </div>
                    {/* item 2 */}
                    <div className='flex gap-5 items-center py-4'>
                        <h3 className='dms-bold text-black text-2xl'>2</h3>
                        <div className=''>
                            <img className='w-[60px] h-[60px] object-cover rounded-full' src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="product image" />

                        </div>
                        <div>
                            <h4 className='dms-bold text-black'>Cryptix</h4>
                            <p className='flex gap-1 items-center dms-medium font-[14px]'><FaEthereum className='text-2xl text-blak'></FaEthereum> 2,769.39</p>
                        </div>
                        <h3 className='text-xl dms-bold text-[#FF002E]'>+10.52%</h3>
                    </div>
                    {/* item 3 */}
                    <div className='flex gap-5 items-center py-4'>
                        <h3 className='dms-bold text-black text-2xl'>3</h3>
                        <div className=''>
                            <img className='w-[60px] h-[60px] object-cover rounded-full' src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80" alt="product image" />

                        </div>
                        <div>
                            <h4 className='dms-bold text-black'>Frensware</h4>
                            <p className='flex gap-1 items-center dms-medium font-[14px]'><FaEthereum className='text-2xl text-blak'></FaEthereum> 9,232.39</p>
                        </div>
                        <h3 className='text-xl dms-bold text-[#14C8B0]'>+2.52%</h3>
                    </div>
                    {/* item 4 */}
                    <div className='flex gap-5 items-center py-4'>
                        <h3 className='dms-bold text-black text-2xl'>4</h3>
                        <div className='relative'>
                            <img className='w-[60px] h-[60px] object-cover rounded-full' src="https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=895&q=80" alt="product image" />
                            <svg className='absolute -top-2 -right-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="10" width="16" height="11" fill="white" />
                                <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF" />
                            </svg>
                        </div>
                        <div>
                            <h4 className='dms-bold text-black'>PunkArt</h4>
                            <p className='flex gap-1 items-center dms-medium font-[14px]'><FaEthereum className='text-2xl text-blak'></FaEthereum> 3,769.39</p>
                        </div>
                        <h3 className='text-xl dms-bold text-[#14C8B0]'>+1.52%</h3>
                    </div>
                    {/* item 5 */}
                    <div className='flex gap-5 items-center py-4'>
                        <h3 className='dms-bold text-black text-2xl'>5</h3>
                        <div className=''>
                            <img className='w-[60px] h-[60px] object-cover rounded-full' src="https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=652&q=80" alt="product image" />

                        </div>
                        <div>
                            <h4 className='dms-bold text-black'>Art Crypto</h4>
                            <p className='flex gap-1 items-center dms-medium font-[14px]'><FaEthereum className='text-2xl text-blak'></FaEthereum> 10,769.39</p>
                        </div>
                        <h3 className='text-xl dms-bold text-[#FF002E]'>+2.52%</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionSection;