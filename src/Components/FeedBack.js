import React from 'react'
import { Testimonialsec, FeedBacksecSilk } from '../Data/DataStore';
import Slider from "react-slick";

const FeedBack = () => {
    return (
        <div className="container p-5 my-3">
            <h2 className="custom_heading">Testimonial</h2>
            <p className="custom_heading-text">
                There are many variations of passages of Lorem Ipsum available, but
                the majority have
            </p>
            <div>
                <Slider {...FeedBacksecSilk}>
                    {Testimonialsec.map((item) => {
                        return (
                            <div className="row" key={item.id}>
                                < div className="col-md-6 m-auto" >
                                    <div className="">
                                        <img src={item.img} className='card-img' alt="" />
                                        <div className="card-body text-center">
                                            <h3 className='card-title'>{item.title}</h3>
                                            <p className="custom_heading-text">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div >
        </div >
    )
}

export default FeedBack;