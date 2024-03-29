import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Useparams() {
  return (
    <div>
    <p>Useparams component</p>
    <h4>About Exam</h4>
<Link to="/useparams/1">semester 01</Link> &nbsp;
<Link to="/useparams/2">semester 02</Link> &nbsp;
<Link to="/useparams/3">semester 03</Link> &nbsp;
<Link to="/useparams/4">semester 04</Link> &nbsp;
<Link to="/useparams/5">semester 05</Link> &nbsp;
<Link to="/useparams/6">semester 06</Link> &nbsp;
<Outlet></Outlet>
    </div>
  )
}
