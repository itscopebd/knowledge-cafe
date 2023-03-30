import React from 'react';

const SingleBlog = (props) => {
    const {authorImage,authorName,blogCoverImage,blogTitle,publishDate,readTime,tag}=props.singleBlog;
    // console.log(a)
    return (
        <div>
            <img src={blogCoverImage} alt="" />
            <div>
                <img src={authorImage} alt="" />
                <div>
                    <h4>{authorName}</h4>
                    <p>{publishDate}</p>
                </div>
                <p>{readTime} min read </p>
            </div>
            <h2>{blogTitle}</h2>
            <button>Mark as read</button>
        </div>
    );
};

export default SingleBlog;