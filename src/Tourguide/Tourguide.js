import React from 'react';
import './Tourguide.css'
import { Link } from 'react-router-dom';
const Tourguide = () => {
    return (
        <>
            <div className='text-center'>
                <h1 className='guide'>Tour Guide</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime ea ipsum quos ab vero cupiditate debitis fugit natus voluptatum?</p>
            </div>
            <div className='flex flex-wrap justify-evenly mt-5 mb-5'>
                <div className="card w-96 guide-border">
                    <figure className='figure'>
                        <img src="https://i.ibb.co/cLy8Q38/image.png" alt="car!" />
                        <div className="image-button flex-container">
                            <div className="social-link">
                                <a target='_blank' href='https://www.facebook.com'>fb</a>
                            </div>
                            <div className="social-link">
                                <a target='_blank' href='https://www.twitter.com'>tt</a>
                            </div>
                        </div>
                    </figure>

                    <div className="card-body bg-slate-100">
                        <h2 className="text-center">Life hack</h2>


                    </div>
                </div>
                <div className="card w-96 guide-border">
                    <figure><img src="https://i.ibb.co/cLy8Q38/image.png" alt="car!" /></figure>
                    <div className="card-body bg-slate-100">
                        <h2 className="text-center">Life hack</h2>


                    </div>
                </div>
                <div className="card w-96 guide-border ">
                    <figure><img src="https://i.ibb.co/cLy8Q38/image.png" alt="car!" /></figure>
                    <div className="card-body bg-slate-100">
                        <h2 className="text-center">Life hack</h2>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Tourguide;