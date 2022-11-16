import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const MenuItem = ({toggle}) => {
  return (
    <>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="nav-item border-bottom"
      >
        <NavLink to='/' onClick={toggle} className='nav-link text-dark'>Home</NavLink>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="nav-item border-bottom"

      >
        <NavLink to='/fruits' onClick={toggle} className='nav-link text-dark'>Fruits</NavLink>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="nav-item border-bottom"

      >
        <NavLink to='/services' onClick={toggle} className='nav-link text-dark'>Services</NavLink>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="nav-item border-bottom"
      >
        <NavLink to='/contact'  onClick={toggle}className='nav-link text-dark'>Contact</NavLink>
      </motion.li>
    </>
  );
};
