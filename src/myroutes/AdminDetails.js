import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from './Users';

export default function AdminDetails() {


    const navigate = useNavigate();
    return (
        <div>
            <h1>AdminDetails</h1>
            <h1>admin details are available..</h1>

            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    )
}
