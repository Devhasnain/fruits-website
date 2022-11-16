import React from 'react';
import { NavLink } from 'react-router-dom';
import { ServicesCardData } from '../Data/DataStore';

const ServicesComp = () => {
    return (
        <section className="service_section layout_padding ">
            <div className="container">
                <h2 className="custom_heading">Our Services</h2>
                <p className="custom_heading-text">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have
                </p>
                <div className=" layout_padding2">
                    <div className="card-deck" >
                        {ServicesCardData.map((item) => {
                            return (
                                <div className="card" key={item.id}>
                                    <img className="card-img-top" src={item.img} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <NavLink to='/' className="custom_dark-btn">
                        Read More
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default ServicesComp
