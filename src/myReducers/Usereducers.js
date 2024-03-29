import React, { useReducer } from 'react'
import FetchData from './FetchData';
import PrcticeR from './PrcticeR';

export default function Usereducers() {
const initialState=0;
const reducer = (state,action)=>{
if(action==="increment"){
return state+1;
}
if(action==="decrement"){
return state - 1;
}
if(action==="reset"){
return initialState;
}
return state;

}

    const [count,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
<PrcticeR></PrcticeR>

        <h1> useReducer Hook In React</h1>
<h1>{count}</h1>
<button onClick={()=>dispatch("increment")}>increment</button>
<button onClick={()=>dispatch("decrement")}>decrement</button>
<button onClick={()=>dispatch("reset")}>reset</button>

<FetchData></FetchData>
<br></br>
    </div>
  )
}
