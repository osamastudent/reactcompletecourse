import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


export default class Products extends Component {
  render() {
    return (
      <div >
        <h1>Nested Routes In React Router / Outlet </h1>
<nav className='nav bg-info p-2 text-center'>
<NavLink  to="shirts">Shirts</NavLink>
<NavLink  to="clothes">Clothes</NavLink>
</nav>
<Outlet></Outlet>

      </div>
    )
  }
}
