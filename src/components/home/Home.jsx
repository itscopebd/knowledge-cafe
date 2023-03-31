import React, { useState } from 'react';
import Blog from '../blog/Blog';
import Header from '../header/Header';
import RightSideBar from '../rightSide/RightSideBar';
import QuestionAnswer from '../questionAnswer/QuestionAnswer';

const Home = () => {

    const [readTime, setReadTime] = useState(0);

    const [totalBookMark, setTotalBookMark] = useState(0);

    const readTimeHandle = (time) => {
        const totalReadTime = parseInt(time) + readTime;
        setReadTime(totalReadTime)
    }

    const [title, setTile] = useState([]);
    const bookMark = (blogTitle) => {

      const newtitle=[...title,blogTitle]
        setTile(newtitle);
        setTotalBookMark(totalBookMark + 1);

    }

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='flex'>
                    <Blog readTimeHandle={readTimeHandle} bookMark={bookMark}></Blog>
                    <RightSideBar readTime={readTime} title={title} totalBookMark={totalBookMark}></RightSideBar>
                </div>
                <QuestionAnswer></QuestionAnswer>

            </main>
        </>
    );
};

export default Home;