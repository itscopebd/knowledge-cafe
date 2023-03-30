import React from 'react';
import Blog from '../blog/Blog';
import Header from '../header/Header';
import RightSideBar from '../rightSide/RightSideBar';

const Home = () => {
    return (
        <>
           <header>
            <Header></Header>
            </header> 
            <main>
                <Blog></Blog>
                <RightSideBar></RightSideBar>
            </main>
        </>
    );
};

export default Home;