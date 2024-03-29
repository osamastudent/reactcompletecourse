import React, { Component } from 'react'

import { UseSelector, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../index.css';
 const Navbar = ()=>{
    // applyCss = ({isActive}) =>{
    //     return{
    //         backgroundColor: isActive ? "green" : 'normal',
    //     }
    //         }
  
   const myyy=useSelector((state)=>state.inc_dec);
    return (
      <>
        <nav className='main-nav'>
        {/* <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        
        {/* <NavLink style={this.applyCss} to="/">home</NavLink>
        <NavLink style={this.applyCss} to="/about">About</NavLink>
        <NavLink style={this.applyCss} to="/contact">Contact</NavLink> */}

        <NavLink  to="/">home</NavLink>
        <NavLink  to="/products">Products</NavLink>
        <NavLink  to="/about">About</NavLink>
        <NavLink  to="/users">Users</NavLink>
        <NavLink  to="/contact">Contact</NavLink>
        <NavLink  to="/formik-form">Formik Form</NavLink>
        <NavLink  to="/Usereducers">useReducer</NavLink>
        <NavLink  to="/getaxios">Get Axios</NavLink>
        <NavLink  to="/create">Create</NavLink>
        </nav>
        <h6 >Cart: {myyy}</h6>
      </>
    )
  }

export default Navbar;