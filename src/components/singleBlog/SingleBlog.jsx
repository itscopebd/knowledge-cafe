import React from 'react';

const SingleBlog = (props) => {
    // console.log(props)
    const { id,authorImage, authorName, blogCoverImage, blogTitle, publishDate, readTime } = props.singleBlog;

    return (
        <div className='text-left'>
            <img className='w-full rounded-xl' src={blogCoverImage} alt="" />
            <div className='flex my-5'>
                <div className='w-1/12'>
                    <img className='w-full md:h-full rounded-full' src={authorImage} alt="" />
                </div>
                <div className='flex justify-between w-11/12 items-center'>
                    <div className='ms-5'>
                        <h4 className='text-2xl font-bold mb-2'>{authorName}</h4>
                        <p>{publishDate}</p>
                    </div>
                    <div>
                        <p>{readTime} min read <button onClick={()=>props.bookMark(blogTitle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block cursor-pointer hover:text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
                        </svg>
                        </button>
                        </p>
                    </div>
                </div>

            </div>
            <h2 className='text-4xl font-bold'>{blogTitle}</h2>
            <button className='border-b-2 border-b-purple-700 my-5 text-blue-700 hover:text-blue-900' onClick={()=>props.readTimeHandle(readTime)}>Mark as read </button>
        </div>
    );
};

export default SingleBlog;