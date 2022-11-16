import React from 'react';
import { NavLink } from 'react-router-dom';
import { FruitsSec } from '../Data/DataStore';

const FruitsComp = () => {
    return (
        <section className="fruit_section">
            <div className="container">
                <h2 className="custom_heading">Fresh Fruits</h2>
                <p className="custom_heading-text">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have
                </p>
                {FruitsSec.map((item) => {
                    return (
                        <div className='row layout_padding2' key={item.id}>
                            <div className='col-md-8'>
                                <div className='fruit_detail-box'>
                                    <h3>{item.title}</h3>
                                    <p className='mt-4 mb-5'>{item.text}</p>
                                    <div>
                                        <NavLink to='/' className='custom_dark-btn'>Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <div className="fruit_img-box d-flex justify-content-center align-items-center">
                                    <img src={item.img} alt="" style={{ width: `${item.width}` }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FruitsComp
