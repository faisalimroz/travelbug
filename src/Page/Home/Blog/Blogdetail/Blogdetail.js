import React from 'react';
import './Blogdetail.css'
import { Link } from 'react-router-dom';
const Blogdetail = ({ blog }) => {
    const { img, title, description, _id, date } = blog;
    return (
        <div>
            <Link to={`/blog/${_id}`}>

                <div>
                    <div id='blog-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title  blog-title">{title}</h2>
                            <p id="my-paragraph">{description}<span>...</span></p>
                            <h2>{date}</h2>


                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Blogdetail;