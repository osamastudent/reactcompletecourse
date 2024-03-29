import React, { useReducer } from 'react'

export default function PrcticeR() {
    const initialState=0;
    const reducer = (state,action) =>{
        if(action==="increment"){
            return state +1;
        }
        if(action==="decrement"){
            return state - 1;
        }
        
        if(action==="reset"){
            return initialState;
        }

        return state
    }
    const [count,dispatch] = useReducer(reducer,initialState);


  return (
    <div>
        <h1>this is practice reducer</h1>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}
