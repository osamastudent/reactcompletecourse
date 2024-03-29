import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Users() {
  return (
    <div>
        
        <Link to="/users/1">user 1 </Link>
        <Link to="/users/2">users 2</Link>
        <Link to="/users/3">users 3</Link>
        <Link to="/users/admindetails">admin</Link>
        
        <Outlet></Outlet>
    </div>
  )
}
