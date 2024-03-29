import React, { useState } from "react";
const FormF = () =>{
let [name,setName]=useState("affan");
let [email,setEmail]=useState("affan@gmail.com");

const setNameFun = (e) =>{
setName(e.target.value.toLowerCase())
}

const setEmailFun = (e) =>{
setEmail(e.target.value.toLowerCase())
}

const formHandleSubmission = (e) =>{
e.preventDefault()
if (name.length > 5) {
    alert('More than 5 characters are not allowed'); // Show alert if name is more than 5 characters
  } else {
    // Agar name 5 ya 5 se kam characters ka hai, to yahan aap form submit karne ka logic likh sakte hain.
    console.log('Form submitted', { name, email });
    // Yahan aap form ko process karne ke liye further code likh sakte hain, jaise ke server pe bhejna etc.
  }
}

return(
    <>
    <br></br>
    
    <br></br>
    <br></br>
    <h3>{name}</h3>
    <h3>{email}</h3>
    <form onClick={formHandleSubmission}>
    <input type='text' value={name} onChange={setNameFun}></input>
    <input type='text' value={email} onChange={setEmailFun}></input>
    {/* <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input> */}
    <input type='submit' value="Submit" ></input>
</form>
    </>
);

}
export default FormF;