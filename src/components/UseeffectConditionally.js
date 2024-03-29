import React, { useEffect, useState } from "react";

const UseeffectConditionally = (props) =>{
const [count,setCount]=useState(0);
const [name,setName]=useState("osama");

useEffect(()=>{
console.log("useEffect with props"+props.num);
},[props.num]);

useEffect (() =>{
    console.log("i,am  useEffect" + count);
},[]);
// useEffect (() =>{
//     console.log("i,am  useEffect" + count);
// },[count,name]);

// useEffect (() =>{
//     console.log("i,am  useEffect" + count);
// },[count]);
// useEffect (() =>{
//     console.log("i,am  useEffect" + name);
// },[name]);
return(
<>
<h6>useEffect {props.num}</h6>
UseeffectConditionally
<p>{count}</p>
<p>{name}</p>
<button onClick={()=>setCount(count+1)}>count</button>
<button onClick={()=>setName("update name")}>change name</button>
</>
);
}

export default UseeffectConditionally;