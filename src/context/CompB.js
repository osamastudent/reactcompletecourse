import React from 'react'
import CompC from './CompC'
import { useContext } from 'react'
import { ChannelContext, NameContext } from '../App';

export default function CompB(props) {
    const myName3=useContext(NameContext);
    const myName4=useContext(ChannelContext);
  return (
    <div>
      <b>using props Drilling: {props.propsDrilling}</b>
        <p><CompC propsDrilling={props.propsDrilling}></CompC></p>
        <p>{myName3}</p>
        {myName4}
    </div>

  )
}
