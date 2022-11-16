import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { Example } from '../Menu.js/Example';

const Navbar = () => {
    return (
        <div>
            <header className="header_section bg-light">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                        <NavLink className="navbar-brand" to='/'>
                            <img src={Logo} alt="" /><span>
                                Tropiko
                            </span>
                        </NavLink>
                        <button className="navbar-toggler" type="button">
                            <Example/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/fruits'> Fruits</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/services'> Services </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/contact'>Contact us</NavLink>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                </form>
                            </div>
                            <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                                <NavLink to='/'>
                                    Get A quote
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
