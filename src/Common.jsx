import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="cotainer-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center f-column ">
                                    <h1>{props.name} <strong className="brand-name">GK</strong></h1>
                                    <h2 className="my-3">We are the genius in making websites</h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="clg-lg-6 order-1 order-2 header-img">
                                    <img src={props.imgsrc} className='image-fluid animated' alt="home img" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;