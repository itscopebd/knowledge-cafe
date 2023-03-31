import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-200 rounded-lg mb-10">
                <div className="flex-1">
                    <a className="font-bold text-black text-4xl"> <span className='text-green-600'>Knowledge </span> Cafe</a>
                </div>
                <div className="flex-none gap-2">
                   
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="header-pic.png" />
                            </div>
                        </label>
                        {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;