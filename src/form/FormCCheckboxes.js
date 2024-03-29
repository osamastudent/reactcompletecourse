import React from "react";
import { useState } from "react";
const FormCCheckboxes = () =>{
const [fruitsArray,setFruitsArray]=useState([]);
  
const handleCheckbox = (e) =>{
    const myChecked=e.target.checked
    const myValue=e.target.value
    const myName=e.target.name
console.log(myChecked,myValue)
    if(myChecked){
        setFruitsArray([
            ...fruitsArray,myValue
        ])
    }
    else{
        setFruitsArray(fruitsArray.filter((e)=>(e!==myValue)))
        // setFruitsArray(fruitsArray.filter((e)=>console.log("e==>"+e,"value==>"+myValue))
    }
    }

    const formSubmit = (e) =>{
    e.preventDefault();
console.log(fruitsArray);
    }
return(
<>



<h1>Mutiple checkboxes</h1>
<form onSubmit={formSubmit}>
    <input type="checkbox" value="banana" name="banana" onChange={handleCheckbox}></input> banana
    <input type="checkbox" value="mango"  name="mango" onChange={handleCheckbox}></input> mango
    <input type="checkbox" value="orange" name="orange" onChange={handleCheckbox}></input> orange
    <input type="submit"></input>
</form>
</>

);
}



export default FormCCheckboxes;
 
























// import React, { useState } from 'react'

// export default function FormCCheckboxes() {
// const [fruitsArray,setFruitsArray]=useState([]);
//     const handleCheckboxes = (e) =>{
//         const myValue=e.target.value
//         const myName=e.target.name
//         const myChecked=e.target.checked
    
//         console.log(myName,myChecked);
//         if(myChecked){
//         setFruitsArray([
//             ...fruitsArray, myValue
//         ])
//         }
//         else{
//             setFruitsArray(fruitsArray.filter((e)=> (e !== myValue)));
//         }
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
        
//     console.log(fruitsArray);
//     }

//     return (
//     <div>
//         <form onSubmit={handleSubmit}>
// <input type='checkbox' value="mango" name='mango'  onChange={handleCheckboxes}></input>mango &nbsp;
// <input type='checkbox' value="banana" name='banana'  onChange={handleCheckboxes}></input>banana
// <input type='checkbox' value="orange" name='orange'  onChange={handleCheckboxes}></input>orange
// <input type='submit'></input>
//         </form>
//     </div>
//   )
// }
