import  Axios from 'axios';
import React, { useState } from 'react'

const baseURL = "https://jsonplaceholder.typicode.com/posts";
export default function PostAxios() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");

    const handleForm = (e) =>{
e.preventDefault();
Axios.post(baseURL,{
    userId:age,
        title:name,
    body:email,

})
.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})
    }
  return (
    <div className='container'>
        <h1>How to Make a POST Request In AXIOS | Axios React | HTTP Post Request Axios React (Hindi/Urdu)</h1>
<form onSubmit={handleForm}>
    <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control mt-3' placeholder='Name'></input>
    <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control mt-3' placeholder='Email'></input>
    <input type='text' name='age'  value={age} onChange={(e)=>setAge(e.target.value)} className='form-control mt-3' placeholder='Age'></input>

    <input type='submit'></input>
</form>
<li>{name}</li>
<li>{email}</li>
<li>{age}</li>
    </div>
  )
}
