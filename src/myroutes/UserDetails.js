import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function UserDetails() {
//     const userId=useParams();
// const id=userId.id;
const {id}=useParams();

    const navigate=useNavigate();
  return (
    <div>
<h1>users detail available.. {id}</h1>

<button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}
