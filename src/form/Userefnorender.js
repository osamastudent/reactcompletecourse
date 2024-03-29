import React, { useEffect, useRef, useState } from 'react'
import Useref from './Useref';

export default function Userefnorender() {
    const [count,setCount]=useState("");
    const rcount=useRef(0);

    useEffect(()=>{
// setCount(count+1);
rcount.current=rcount.current + 1;
    },[count]);
  return (
    <div>
        <h1>Userefnorender</h1>
        <form>
            <input type='text' placeholder='Name' onChange={(e)=>setCount(e.target.value)}></input><br></br>
            {/* {count} */}
            {rcount.current} {count}
        </form>
    </div>
  )
}
