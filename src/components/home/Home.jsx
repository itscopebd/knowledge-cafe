import React,{useState} from 'react';
import Blog from '../blog/Blog';
import Header from '../header/Header';
import RightSideBar from '../rightSide/RightSideBar';

const Home = () => {

    const[readTime,setReadTime]=useState(0)
    const readTimeHandle=(time)=>{
        
        const totalReadTime= parseInt(time)+ readTime;
        setReadTime(totalReadTime)
    }
const [totalBookMark,setTotalBookMark]=useState(0)
const bookMark=(id,blogTitle)=>{
    setTotalBookMark(totalBookMark+1)
}
console.log(totalBookMark)

    return (
        <>
           <header>
            <Header></Header>
            </header> 
            <main className='flex'>
                <Blog readTimeHandle={readTimeHandle} bookMark={bookMark}></Blog>
                <RightSideBar readTime={readTime} totalBookMark={totalBookMark}></RightSideBar>
            </main>
        </>
    );
};

export default Home;