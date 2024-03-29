import React, { Component, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import FormValidation from './FormValidation';

 export default function Contact () {
  const [searchParams,setSearchParams]=useSearchParams();

  const formSubmit = (e) =>{
e.preventDefault();
alert(searchParams.get('qq'));
  }
    return (
      <div>
        <p>contact component</p>
        <h4>About Exam</h4>
<Link to="/useparams">useparams Exam</Link> &nbsp;

<form onSubmit={formSubmit}>
  <input type='search' onChange={(e)=>setSearchParams({qq:e.target.value})} placeholder='Search'></input><input type='submit'></input>
</form>

<br></br>
<FormValidation>

</FormValidation>
      </div>
    )
  }

  