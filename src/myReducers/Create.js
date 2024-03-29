import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const createApi="https://65e4aa2f3070132b3b251612.mockapi.io/crud";
export default function Create() {
    const [name,setName]=useState("");
    const [text,setText]=useState("");
    const [age,setAge]=useState("");
    const navigate=useNavigate();
    
const handleSubmitForm = (e) =>{
e.preventDefault();
axios.post(createApi,{
    emp_name:name,
    emp_desc:text,
    emp_age:age,
})
.then((response)=>{
    navigate("/read");
})
}
  return (
    <div className='container'>
    <h1>| CRUD Application In React | React CRUD Using AXIOS API - React Router & Bootstrap (Hindi/Urdu)</h1>
    <Button variant='danger'>Create Data</Button>
    <Link to="/read" >
    <Button  variant='success ml-2'>Read Data</Button>
    </Link>
    <li>{name} &nbsp;{text} &nbsp; {age}</li>
<form onSubmit={handleSubmitForm}>
<input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control mt-3' placeholder='Name'></input>
<input type='text' name='email' value={text} onChange={(e)=>setText(e.target.value)} className='form-control mt-3' placeholder='Email'></input>
<input type='text' name='age'  value={age} onChange={(e)=>setAge(e.target.value)} className='form-control mt-3' placeholder='Age'></input>

<Button type='submit' variant='primary' className='mt-3'>Add</Button>
</form>

</div>

  )
}
