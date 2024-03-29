import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const createApi="https://65e4aa2f3070132b3b251612.mockapi.io/crud";
export default function Update() {
  const navigate=useNavigate();
  const [id,setId]=useState();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("");

  // const handleInput = () =>{

  // }

const handleForm = (e) =>{
e.preventDefault();
axios.put(`https://65e4aa2f3070132b3b251612.mockapi.io/crud/${id}`,{
emp_name:name,
emp_desc:email,
emp_age:age,
}).then(()=>{
  navigate('/read');
})
}

  useEffect (()=>{
setId(localStorage.getItem("id"));
setName(localStorage.getItem("emp_name"));
setEmail(localStorage.getItem("emp_desc"));
setAge(localStorage.getItem("emp_age"));
  },[]);
  return (
    <div className='container'>
    <h1>Update Data</h1>
<form onSubmit={handleForm}>
<input type='text' name='name' value={name}  onChange={(e)=>setName(e.target.value)} className='form-control mt-3' placeholder='Name'></input>
<input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control mt-3' placeholder='Email'></input>
<input type='text' name='age'  value={age}  onChange={(e)=>setAge(e.target.value)}className='form-control mt-3' placeholder='Age'></input>

<Button type='submit' variant='primary' className='mt-3'>Update</Button>
</form>

</div>

  )
}
