import React, { useEffect, useRef } from 'react'

export default function Userefform() {
    const nameRef=useRef();
    const emailRef=useRef();

    useEffect(()=>{
        nameRef.current.focus();
    })

    const formSubmit = (e) =>{
    e.preventDefault();
    console.log("name=>",nameRef.current.value,"email",emailRef.current.value);

    }
  return (
    <div>
        <br></br>
        <form onSubmit={formSubmit}>
            <input type='text' ref={nameRef}></input><br></br>
            <input type='text' ref={emailRef}></input><br></br>
            <input type='submit'></input>
        </form>
    </div>
  )
}
