import React, { useEffect, useRef } from 'react'

export default function Useref() {
    const newRef=useRef();
    useEffect(()=>{
        console.log(newRef.current.innerHTML);
            });

    const handleRef = () =>{
    newRef.current.style.color="black";
    newRef.current.style.backgroundColor="yellow";
    }

  return (
    <div>
        <b ref={newRef}>this is useRef hook</b>
        <button onClick={handleRef}>color</button>
    </div>
  )
}
