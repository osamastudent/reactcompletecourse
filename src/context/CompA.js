import React, { useContext } from "react";
import CompB from "./CompB";
import { ChannelContext } from "../App";
import Arrowfun from "../components/Arrowfun";

const CompA = ({propsDrilling}) =>{
    const myName5=useContext(ChannelContext);
return(
    <>
    <b>this is using  props Drilling: {propsDrilling}</b>
    <p><CompB propsDrilling={propsDrilling}></CompB></p>
    {/* <p><Arrowfun></Arrowfun></p> */}
    <h5>{myName5}</h5>
    </>
);
}

export default CompA;