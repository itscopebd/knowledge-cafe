import React, { useEffect, useState } from 'react';
import SingleBlog from './../singleBlog/SingleBlog';

const Blog = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='w-12/12 md:w-8/12'>
            {
                data.map(singleBlog=><SingleBlog singleBlog={singleBlog} key={singleBlog.id} readTimeHandle={props.readTimeHandle} bookMark={props.bookMark}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;