import React from 'react';

const Navbar = () => {

    // common navigation Links (for small and large device)
    const ul = <>
        <li className='dms-medium'><a>Marketplace</a></li>
        <li className='dms-medium'><a>Resource</a></li>
        <li className='dms-medium'><a>About</a></li>
    </>
    return (
        <div className="navbar flex-col lg:flex-row bg-base-100">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ul
                        }
                    </ul>
                </div>
                <a className="text-2xl Integral text-[#3D00B7]">NFTERS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        ul
                    }
                </ul>
            </div>
            <div className="navbar-center lg:navbar-end lg:ms-auto gap-3 flex-col lg:flex-row">
                <div className='relative'>
                    <input className='w-72 py-[10px] rounded-[100px] ps-5 border-2 border-[#EFEFEF] focus:outline-[#3D00B7] dms-regular' placeholder='Search' type="text" name="" id="" />
                    <svg className='absolute right-3 top-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#757575" />
                        <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#757575" />
                    </svg>
                </div>
                <button className='px-10 py-[10px] bg-[#3D00B7] text-white rounded-[60px] dms-medium
                hover:bg-white hover:text-[#3D00B7] border-2 border-[#3D00B7] transition-all duration-500'>Upload</button>
                <button className='px-5 py-[10px] border-2 border-[#3D00B7] rounded-[60px] dms-medium
                hover:text-white hover:bg-[#3D00B7] transition-all duration-500'>Connect Wallet</button>
            </div>
        </div>
    );
};

export default Navbar;