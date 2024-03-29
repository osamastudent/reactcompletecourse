import React, { useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const HookWithArray =() =>{
const withArr=[10,11,12,13];
const [number,setNumber]=useState(withArr);

const changeData = ()=>{
setNumber([500,600,700,800]);
}


const changeDataS = () => {
    setNumber(previousState=>{
        return[
            ...previousState,
            // 8000,
            Math.floor(Math.random()*100),
        ]
    })
}
return(
<>
HookWithArray
<br></br>
{number.map((withArr,index)=>
<li key={index} className="bg-dark text-white">
    {withArr}
    
</li>
)}
<button onClick={changeData}>Change Numbers</button>
<button onClick={changeDataS}>Change Single Numbers</button>
</>
);
}

export default HookWithArray;