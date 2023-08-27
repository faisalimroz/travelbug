import React from 'react';
import './PackageDetail.css'
import { Link } from 'react-router-dom';
const PackageDetail = ({pack}) => {
    const {img,title,description,_id}=pack
    return (
        <Link to={`/packages/${_id}`}> 
        <div>
             <div id='package-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5">
                <figure><img src={img} alt="Shoes"/></figure>
                <div className="card-body ">
                    <h2 className="card-title  package-title">{title}</h2>
                    <p id="my-paragraph">{description}<span>...</span></p>
              
                   
           
                </div>
            </div>
        </div>
        </Link>
    );
};

export default PackageDetail;