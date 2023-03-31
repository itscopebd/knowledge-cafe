import React, { useState } from 'react';
import Blog from '../blog/Blog';
import Header from '../header/Header';
import RightSideBar from '../rightSide/RightSideBar';
import QuestionAnswer from '../questionAnswer/QuestionAnswer';
import { toast } from 'react-toastify';
const Home = () => {

    const [readTime, setReadTime] = useState(0);

    const [totalBookMark, setTotalBookMark] = useState(0);

    const readTimeHandle = (time) => {
        const totalReadTime = parseInt(time) + readTime;
        setReadTime(totalReadTime)
    }

    const [title, setTile] = useState([]);
    const bookMark = (blogTitle) => {

      const newtitle=[...title,blogTitle];
         title.find((value) => {
        if(value===blogTitle){
            toast("You have read this blog before!")
        }
      });
        setTile(newtitle);
        setTotalBookMark(totalBookMark + 1);
    }


    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className='w-12/12 md:w-10/12 mx-auto'>
                <div className='w-full md:flex'>
                    <Blog readTimeHandle={readTimeHandle} bookMark={bookMark}></Blog>
                    <RightSideBar readTime={readTime} title={title} totalBookMark={totalBookMark}></RightSideBar>
                </div>
                <QuestionAnswer></QuestionAnswer>

            </main>
        </>
    );
};

export default Home;