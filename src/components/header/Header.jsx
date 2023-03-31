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
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;