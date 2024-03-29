import { Button } from 'bootstrap';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Pagenotfound() {
  let navigate=useNavigate();
  return (
    <div>
        <h1>404 - Page Not Found </h1>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}
