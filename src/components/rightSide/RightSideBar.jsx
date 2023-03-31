import React from 'react';

const RightSideBar = () => {
    return (
        <div className='w-4/12 ml-5'>
           <h1 className='text-primary p-3 border-2 border-slate-300 rounded-lg'>Spent time on read : 177 min</h1>
            <div className='p-5 bg-gray-200 my-5 rounded-md'>
                <h4 className='font-bold text-2xl my-5'>Bookmarked Blogs : 8</h4>
            </div>
        </div>
    );
};

export default RightSideBar;