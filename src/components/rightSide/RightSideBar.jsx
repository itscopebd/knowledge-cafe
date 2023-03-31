import React from 'react';

const RightSideBar = (props) => {
    const{title,readTime,totalBookMark,}=props;
    console.log(title)
    return (
        <div className='w-4/12 ml-5'>
           <h1 className='text-primary p-3 border-2 border-slate-300 rounded-lg'>Spent time on read : {readTime} min</h1>
            <div className='p-5 bg-gray-200 my-5 rounded-md'>
                <h4 className='font-bold text-2xl my-5'>Bookmarked Blogs : {totalBookMark}</h4>
                 {
                    title.map((singleTitle,index)=>{
                  return(
                    <div className='' key={index+1}>
                    <h3 className='bg-white p-3 my-3 rounded-lg'>{singleTitle}</h3>
                    </div>
                  )
                    })
                 }
                
            </div>
        </div>
    );
};

export default RightSideBar;