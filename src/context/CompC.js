import React, { useContext } from 'react'
import { ChannelContext, NameContext, emailContext } from '../App'

export default function CompC(props) {
    const myName=useContext(NameContext)
    const myName2=useContext(ChannelContext)
    const emailC=useContext(emailContext)
  return (
    <div>
        CompC<br></br>
        {/* <b>using props: {props.propsDrilling}</b> */}
    <h6>{myName}</h6>
    <h6>{myName2}</h6>
    <h6>{emailC}</h6>
    </div>
  )
}
