import React, { useState } from "react";

const FormFMultiple = () =>{
const [data,setData]=useState({
    name:"khan",
    email:"khan@gmail.com"
});

const inputHandling = (e) =>{
// console.log(e.target.name);
// console.log(e.target.value);
const name=e.target.name;
const myValue=e.target.value;
console.log(name,myValue);
const identityOperator=(name==="name") ? myValue.toLowerCase().replace("#","@") : myValue
setData((prevState)=>{
return{
// ...prevState , [name]:myValue
...prevState , [name]:identityOperator
}
});
}


const handFormSubmit = (e) =>{
e.preventDefault();
    console.log(data);
}
return(
<>
<h1>Function Base Multiple input fields</h1>
<h6>{data.name}</h6>
<h6>{data.email}</h6>
<form onSubmit={handFormSubmit}>
<input name="name" value={data.name} onChange={inputHandling} placeholder="Enter Your Name"></input><br></br>
<input name="email" value={data.email} onChange={inputHandling} placeholder="Enter Your Email"></input><br></br>
<button type="submit">Submit</button>
</form>
</>
);
}
export default FormFMultiple;