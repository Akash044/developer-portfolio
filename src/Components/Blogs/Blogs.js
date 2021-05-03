import React from 'react';
import DiagonalShape from '../DiagonalShape/DiagonalShape';
import Navbar from '../Navbar/Navbar';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <DiagonalShape />
            {/* <div className="blogs-page">
            <h3>Blogs are coming soon...</h3>
            </div> */}
        </div>
    );
};

export default Blogs;