import React, { useState } from "react";
const HookComp =() =>{
    const [name,setName]=useState("osama usestate");

    const myArr=useState("affan");
    
   let changeState = () =>{
myArr[1]("updated")
   }
    return(
<>
<h1>HookComp</h1>
<p>{name}</p>
<p>{myArr[0]}</p>



<button  onClick={changeState}>Click</button>
<button  onClick={()=>myArr[1]("updated two")}>Click</button>


<button type="button" onClick={()=>setName("kkkk")}>Click</button>


</>
    );
}


export default HookComp;