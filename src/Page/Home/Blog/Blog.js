import React, { useEffect, useState } from 'react';
import './Blog.css';
import Blogdetail from './Blogdetail/Blogdetail';
import { useLoaderData } from 'react-router-dom';
const Blog = () => {
    const [blogs, setBlog] = useState([]);
    const [currentPage,setCurrentpage]=useState(1);
    const [itemsPerPage,setItemsperpage]=useState(6);
    const { totalBlogs } = useLoaderData();
    console.log(totalBlogs);
    
    const totalPage = Math.ceil(totalBlogs / itemsPerPage);
    console.log(totalPage)
    const pageNumber=[]
    for(let i =1;i<=totalPage; i++){
        pageNumber.push(i);
    }

    // const pageNumbers = [...Array(totalPage).keys()]
    // setArrr(arrr.sort(0, 6))
    //option 
    const options=[6,12,18];
    const handleSelectChange = (event)=>{
        setItemsperpage(parseInt(event.target.value))
        setCurrentpage(1)
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/blog`)
    //         .then(res => res.json())
    //         .then(data => setBlog(data))
    // }, [])
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`http://localhost:5000/blog?page=${currentPage}&limit=${itemsPerPage}`)
            const data= await response.json()
            setBlog(data)
           
        }
        fetchData()
    },[currentPage,itemsPerPage])
    return (
        <>
            <div className='mt-8  flex flex-wrap justify-evenly'>

                {
                    blogs.map(blog => <Blogdetail key={blog._id} blog={blog}></Blogdetail>)
                }
            </div>
            <div className='pagination'>
                <p>Current Page: {currentPage} and items per page {itemsPerPage}</p>
                   {
                    pageNumber.map(number=><button id='page-button' className= {currentPage === number?
                    'selected': ''} key={number} onClick={()=> setCurrentpage(number)}>{number}</button>)
                   }
                   <select value={itemsPerPage} onChange={handleSelectChange}>
                       {
                        options.map(option=>(
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                       }
                   </select>
            </div>
        </>
    );
};

export default Blog;