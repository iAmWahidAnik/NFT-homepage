import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer className="footer p-3 lg:p-10 text-base-content">
                {/* col 1 */}
                <div>
                    <h1 className='text-2xl Integral mb-4'>NFters</h1>
                    <p className='dms-medium'>The world’s first and largest digital marketplace for <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>
                    <div className='flex gap-4 mt-8'>
                        <BsFacebook className='text-4xl text-[#3B5998]'></BsFacebook>
                        <BsTwitter className='text-4xl text-[#55ACEE]'></BsTwitter>
                        <BsLinkedin className='text-4xl text-[#007AB9]'></BsLinkedin>
                    </div>
                </div>
                {/* col  2 */}
                <div>
                    <span className="dms-bold text-[18px] mb-5 text-black">Market Place</span>
                    <a className="link link-hover dms-medium">All NFTs</a>
                    <a className="link link-hover dms-medium">New</a>
                    <a className="link link-hover dms-medium">Art</a>
                    <a className="link link-hover dms-medium">Sports</a>
                    <a className="link link-hover dms-medium">Utility</a>
                    <a className="link link-hover dms-medium">Music</a>
                    <a className="link link-hover dms-medium">Domain Name</a>
                </div>
                {/* col 3 */}
                <div>
                    <span className="dms-bold text-[18px] mb-5 text-black">My Account</span>
                    <a className="link link-hover dms-medium">Profile</a>
                    <a className="link link-hover dms-medium">Favorite</a>
                    <a className="link link-hover dms-medium">My Collections</a>
                    <a className="link link-hover dms-medium">Settings</a>
                </div>
                {/* col 4 */}
                <div>
                    <span className="dms-bold text-[18px] mb-5 dms-medium text-black">Stay in the loop</span>
                    <p>Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p>
                    <div className='relative mt-5 flex items-center'>
                        <input className='w-[350px] ps-6 border border-[#F1F1F1] py-5 rounded-[45px] dms-regular focus:outline-none' type="text" name="" id="" placeholder='Enter your email address..' />
                        <button className='px-8 py-4 rounded-[45px] bg-[#2639ED] text-white dms-regular text-xs absolute right-2'>Subscribe Now</button>
                    </div>
                </div>
            </footer>
            {/* copy-right */}
            <hr />
            <p className='dms-medium text-[#A4A4A4] text-center py-5'>Copyright © 2023 Wahid Anik</p>
            </>
    );
};

export default Footer;