import React, { useEffect, useState } from 'react';
import './PackageDetails.css'
import { useParams } from 'react-router-dom';
const PackageDetails = () => {
    const {pid}=useParams();
    console.log(pid)
    const [packagePost,setPackagePost]=useState();
    useEffect(() => {
        fetch(`http://localhost:5000/package/${pid}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch blog details');
            }
            return response.json();
          })
          .then(data => {
            setPackagePost(data);
          })
          .catch(error => {
            console.log(error);
            // Handle the error, such as showing an error message
          });
      }, [pid]);
    return (
        <div>
               {packagePost && packagePost.title ? (
          <div id='' className="blog  mx-auto ">
            <div className="blog-div">
              <figure>
                <img className='blog-img' src={packagePost.img} alt="Shoes" />
              </figure>
              <h2 className="blog-title font-bold">{packagePost.title}</h2>
              <p className='blog-p'>{packagePost.description}</p>
            </div>
           
          </div>
        ) : (
          <div>Loading...</div>
        )}
        </div>
    );
};

export default PackageDetails;