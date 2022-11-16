import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeSlider, settings } from '../Data/DataStore';
import Slider from "react-slick";
import ServicesComp from '../Components/ServicesComp';
import FruitsComp from '../Components/FruitsComp';
import FeedBack from '../Components/FeedBack';
import ContactForm from '../Components/ContactForm';
const Home = () => {
  return (
    <>
      <Slider {...settings}>
        {HomeSlider.map((item) => {
          return (
            <div className='container-fluid' key={item.id} >
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-md-7'>
                    <div className='slider_item-detail'>
                      <div >
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <div className="d-flex">
                          <NavLink to='/' className="text-uppercase custom_orange-btn mr-3">
                            Shop Now
                          </NavLink>
                          <NavLink to='/' className="text-uppercase custom_dark-btn">
                            Contact Us
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="slider_img-bo">
                        <img src={item.img} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      <ServicesComp />
      <FruitsComp />
      <section className="tasty_section">
        <div className="container_fluid">
          <h2>
            Very tasty fruits
          </h2>
        </div>
      </section>
      <FeedBack />
      <ContactForm />

    </>
  )
}

export default Home
