import React, { useEffect, useState } from 'react';
import SingleBlog from './../singleBlog/SingleBlog';

const Blog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            {
                data.map(singleBlog=><SingleBlog singleBlog={singleBlog} key={singleBlog.id}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;